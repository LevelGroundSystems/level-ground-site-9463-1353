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
	bookingIsPlaceholder: false,
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

export const nav = [
	{ label: "Services", href: "/services" },
	{ label: "How It Works", href: "/how-it-works" },
	{ label: "About", href: "/about" },
];

export const teamSizes = [
	"Just me / 2 people",
	"3–10 people",
	"11–25 people",
	"26–50 people",
	"More than 50 people",
];

export const focusAreas = [
	"Sales & marketing",
	"Operations & day-to-day efficiency",
	"Both",
	"Not sure yet — that's why I'm asking",
];

/** The six gaps from the brief, written the way an owner would say them. */
export const drags = [
	"We're slow to answer inquiries and we lose work to whoever replied first",
	"Quotes go out and nobody chases them",
	"Follow-up depends on whoever remembers",
	"Marketing only goes out when we're slow",
	"Past customers never hear from us again",
	"I find out how we did months later, not weekly",
	"I'm doing four jobs and I'm the bottleneck",
	"All of the above, honestly",
];
