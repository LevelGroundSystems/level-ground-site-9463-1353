import { useEffect } from "react";

const ORIGIN = "https://www.levelgroundsystems.com";

function setMeta(attr: "name" | "property", key: string, content: string) {
	let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}

/**
 * Per-page title, description, and canonical URL, so each page shows up in
 * Google as its own result instead of five copies of the homepage.
 * Pass noindex for pages that shouldn't be in search (the 404 page).
 */
export function usePageMeta({
	title,
	description,
	path,
	noindex = false,
}: {
	title: string;
	description: string;
	path: string;
	noindex?: boolean;
}) {
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
