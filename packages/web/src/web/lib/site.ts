/** Single place to swap the real details. */
export const site = {
	name: "Level Ground Systems",
	/** Short form — only where horizontal space is tight, e.g. the nav wordmark. */
	nameShort: "Level Ground",
	owner: "Nate Villar",
	tagline: "AI that puts small businesses on even footing.",
	longTagline: "AI systems that let a small business run like a big one.",
	phone: "(413) 266-5616",
	phoneHref: "tel:+14132665616",
	email: "nate@levelgroundsystems.com",
	location: "Massachusetts",
	coverage: "Serving Massachusetts and the surrounding New England area",
	/** Homepage trust strip — how the coverage actually works, in two clauses. */
	inPerson: "In person across Massachusetts and New England",
	remote: "Remote for the rest of the country",
	audience: "small and medium businesses",
	bookingUrl: "https://calendar.app.google/4FDPAxKPJRv4Gy9w5",
};

/**
 * The three stages. Deliberately no pricing on the site: scope varies too much
 * between a five-person shop and a forty-person company, and a public number
 * either scares off the bigger job or underprices the smaller one.
 */
export const offer = {
	/** The first call is a short, high-level intro — not a deep audit. */
	introMinutes: 15,
	buildDays: 30,
	stages: ["The diagnostic", "The build", "Ongoing management"],
};

/**
 * The four services. This is the single source of truth — the homepage,
 * the services page, and the share image all list exactly these four.
 */
export const services = [
	{
		id: "websites",
		cta: "a website",
		name: "Websites",
		short: "Get found when people search for you.",
		body: "A clean, fast website built for your business — looks right on a phone, shows up on Google, and makes it easy to call you or ask for a quote. You see it before you pay for it.",
		includes: [
			"Custom design around your business, not a template",
			"Mobile-friendly and set up for Google search",
			"Click-to-call, quote request form, and your reviews",
			"Optional monthly care: updates, hosting, and fixes",
		],
		outcome: "Customers who search for you actually find you",
	},
	{
		id: "social-media",
		cta: "social media",
		name: "Social Media",
		short: "Look active without living on your phone.",
		body: "Your profiles set up properly and posted to on a steady schedule. The work you already do every day becomes the content, so nobody has to sit down and write it.",
		includes: [
			"Facebook, Instagram, and Google Business Profile set up or cleaned up",
			"Regular posts built from your real jobs and photos",
			"Review requests and responses",
			"A clear number of posts each month, agreed up front",
		],
		outcome: "You stop looking closed",
	},
	{
		id: "ai-training",
		cta: "training",
		name: "Responsible AI Enablement Training",
		short: "Your team using AI well — and safely.",
		body: "Hands-on training for owners and sales and marketing teams. What AI is good for in your business, what it should never be trusted with, and how to use it without putting customer information at risk.",
		includes: [
			"Practical, hands-on sessions on the tools your team already has",
			"Ready-to-use workflows for quotes, emails, follow-up, and content",
			"What never to paste into an AI tool, and why",
			"A simple, written AI use policy for your business",
		],
		outcome: "Faster work, with guardrails your team understands",
	},
	{
		id: "lead-generation",
		cta: "lead generation",
		name: "Lead Generation",
		short: "More of the right conversations on your calendar.",
		body: "Systems that find the customers you want, reach out steadily, and make sure every inquiry gets a fast reply and real follow-up — so work stops slipping to whoever answered first.",
		includes: [
			"Targeted outreach to the customers and accounts you want",
			"Instant reply to calls, forms, and messages — missed calls get a text back",
			"Follow-up on every open quote until there's a yes or a no",
			"Booking straight onto your calendar",
		],
		outcome: "A pipeline that survives a slow week",
	},
] as const;

export const nav = [
	{ label: "Services", href: "/services" },
	{ label: "How It Works", href: "/how-it-works" },
	{ label: "About", href: "/about" },
];
