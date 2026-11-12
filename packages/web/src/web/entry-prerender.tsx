// Build-time only: renders each page to plain HTML so search engines and AI
// tools can read the site without running JavaScript.
// Used by vite/prerender-plugin.ts — never shipped to the browser.
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./app";
import { pageMeta, type PageMeta } from "./lib/seo";

export { ORIGIN } from "./lib/seo";

/** Every page to prerender. `file` is where it goes inside dist/. */
export const pages: { meta: PageMeta; file: string }[] = [
	{ meta: pageMeta.home, file: "index.html" },
	{ meta: pageMeta.services, file: "services/index.html" },
	{ meta: pageMeta.howItWorks, file: "how-it-works/index.html" },
	{ meta: pageMeta.about, file: "about/index.html" },
	{ meta: pageMeta.contact, file: "contact/index.html" },
	{ meta: pageMeta.notFound, file: "404.html" },
];

export function render(path: string): string {
	return renderToString(
		<Router ssrPath={path}>
			<App />
		</Router>,
	);
}
