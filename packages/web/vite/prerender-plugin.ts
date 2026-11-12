import fs from "node:fs/promises";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { createServer, type Plugin, type ResolvedConfig } from "vite";

/**
 * After `vite build`, renders every page to static HTML in dist/ so crawlers
 * (Bing, ChatGPT, Perplexity, link previews) see real content and the right
 * title/description without running JavaScript. The browser still loads the
 * normal app on top.
 *
 * Fail-safe: if anything goes wrong, it logs a warning and leaves dist/
 * exactly as Vite produced it, so the site deploys the way it did before.
 */

type Meta = { title: string; description: string; path: string; noindex?: boolean };
type Entry = {
	ORIGIN: string;
	pages: { meta: Meta; file: string }[];
	render: (path: string) => string;
};

const esc = (s: string) =>
	s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function applyHead(template: string, meta: Meta, origin: string): string {
	const url = origin + (meta.path === "/404" ? "/" : meta.path);
	const t = esc(meta.title);
	const d = esc(meta.description);
	let html = template
		.replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
		.replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${d}" />`)
		.replace(/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${t}" />`)
		.replace(
			/<meta\s+property="og:description"[\s\S]*?\/>/,
			`<meta property="og:description" content="${d}" />`,
		)
		.replace(/<meta\s+property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${url}" />`);
	const extra = meta.noindex
		? `<meta name="robots" content="noindex" />`
		: `<link rel="canonical" href="${url}" />`;
	html = html.replace("</head>", `\t${extra}\n\t</head>`);
	return html;
}

export default function prerenderPlugin(): Plugin {
	let config: ResolvedConfig;
	return {
		name: "level-ground-prerender",
		apply: "build",
		enforce: "post",
		configResolved(c) {
			config = c;
		},
		async closeBundle() {
			if (config.build.ssr) return;
			const outDir = path.resolve(config.root, config.build.outDir);
			let server: Awaited<ReturnType<typeof createServer>> | undefined;
			try {
				const template = await fs.readFile(path.join(outDir, "index.html"), "utf8");
				if (!template.includes('<div id="root"></div>')) {
					throw new Error('index.html has no empty <div id="root"></div> to fill');
				}

				server = await createServer({
					configFile: false,
					root: config.root,
					envDir: config.envDir,
					logLevel: "error",
					appType: "custom",
					plugins: [react()],
					resolve: { alias: config.resolve.alias },
					server: { middlewareMode: true, hmr: false, ws: false },
				});
				const entry = (await server.ssrLoadModule("/src/web/entry-prerender.tsx")) as Entry;

				// Render everything first; only write once all pages succeed.
				const out: { file: string; html: string; chars: number }[] = [];
				for (const { meta, file } of entry.pages) {
					const body = entry.render(meta.path);
					const text = body.replace(/<[^>]+>/g, "").trim();
					if (text.length < 200) throw new Error(`${meta.path} rendered almost no text`);
					const html = applyHead(template, meta, entry.ORIGIN).replace(
						'<div id="root"></div>',
						`<div id="root">${body}</div>`,
					);
					out.push({ file, html, chars: text.length });
				}

				for (const { file, html } of out) {
					const dest = path.join(outDir, file);
					await fs.mkdir(path.dirname(dest), { recursive: true });
					await fs.writeFile(dest, html);
				}

				// Every real page is now a real file, so drop the catch-all
				// rewrite: unknown URLs get 404.html with a true 404 status.
				const redirects = path.join(outDir, "_redirects");
				const current = await fs.readFile(redirects, "utf8").catch(() => "");
				const kept = current
					.split("\n")
					.filter((l) => !/^\/\*\s+\/index\.html\s+200\s*$/.test(l.trim()))
					.join("\n");
				if (kept.trim()) await fs.writeFile(redirects, kept);
				else await fs.rm(redirects, { force: true });

				console.log(
					`[prerender] wrote ${out.length} pages: ` +
						out.map((o) => `${o.file} (${o.chars} chars)`).join(", "),
				);
			} catch (err) {
				console.warn(
					"[prerender] skipped — site will deploy without prerendered pages:",
					err instanceof Error ? err.message : err,
				);
			} finally {
				await server?.close();
			}
		},
	};
}
