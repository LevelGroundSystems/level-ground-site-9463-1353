import { useEffect } from "react";

export const ORIGIN = "https://www.levelgroundsystems.com";

export type PageMeta = {
	title: string;
	description: string;
	path: string;
	noindex?: boolean;
};

/**
 * Title, description, and canonical URL for every page. Used twice:
 * by usePageMeta in the browser, and by the build-time prerender
 * (vite/prerender-plugin.ts) so crawlers get the right tags without
 * running JavaScript.
 */
export const pageMeta = {
	home: {
		title: "Level Ground Systems — Websites, Social Media, AI Training & Lead Generation",
		description:
			"Level Ground Systems helps small businesses compete with the big ones: websites, social media, responsible AI enablement training, and lead generation. Based in Wilbraham, MA.",
		path: "/",
	},
	services: {
		title: "Services — Websites, Social Media, AI Training & Lead Generation | Level Ground Systems",
		description:
			"Four services for small businesses: websites, social media, responsible AI enablement training, and lead generation. See what's included in each.",
		path: "/services",
	},
	howItWorks: {
		title: "How It Works | Level Ground Systems",
		description:
			"A free short call, a free written look at your biggest gaps, then the build. You know whether it's worth it before any money changes hands.",
		path: "/how-it-works",
	},
	about: {
		title: "About Nate Villar | Level Ground Systems",
		description:
			"Level Ground Systems is Nate Villar, a Wilbraham, MA marketer with 15 years in sales, helping small businesses compete with bigger ones.",
		path: "/about",
	},
	contact: {
		title: "Contact | Level Ground Systems",
		description:
			"Book a free 15-minute conversation or call (413) 266-5616. Level Ground Systems, Wilbraham, MA.",
		path: "/contact",
	},
	notFound: {
		title: "Page not found | Level Ground Systems",
		description: "This page doesn't exist.",
		path: "/404",
		noindex: true,
	},
} satisfies Record<string, PageMeta>;

function setMeta(attr: "name" | "property", key: string, content: string) {
	let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}

/** Keeps the tab title and meta tags right as visitors click between pages. */
export function usePageMeta({ title, description, path, noindex = false }: PageMeta) {
	useEffect(() => {
		document.title = title;
		setMeta("name", "description", description);
		setMeta("property", "og:title", title);
		setMeta("property", "og:description", description);
		setMeta("property", "og:url", ORIGIN + path);
		setMeta("name", "robots", noindex ? "noindex" : "index, follow");

		let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
		if (!link) {
			link = document.createElement("link");
			link.rel = "canonical";
			document.head.appendChild(link);
		}
		link.href = ORIGIN + path;
	}, [title, description, path, noindex]);
}
