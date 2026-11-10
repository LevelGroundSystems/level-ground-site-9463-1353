import { ArrowUpRight, CalendarClock, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import {
	Btn,
	Container,
	Eyebrow,
	GridBackdrop,
	Reveal,
	Section,
} from "../components/primitives";
import { offer, site } from "../lib/site";
import { usePageMeta } from "../lib/seo";

const whatYouGet = [
	`A ${offer.introMinutes}-minute call: what you do, how the work flows, where it's stuck`,
	"A straight answer on whether this is worth paying anyone to fix, including me",
	"If it's a fit: a written summary of the three biggest gaps, in the order I'd fix them",
	"A rough estimate of what each one is costing you every month",
];

const promises = [
	{
		t: "No pressure, genuinely",
		b: "If the diagnostic shows you're already running tight, I'll say so and we're done. Fine outcome for both of us.",
	},
	{
		t: "Your numbers stay yours",
		b: "Nothing you share gets sold or added to a list. No newsletter, no drip campaign.",
	},
	{
		t: "You'll hear from a person",
		b: "There's no chatbot or sales team behind the calendar. The person on the call is me.",
	},
];

export default function Contact() {
	usePageMeta({
		title: "Contact | Level Ground Systems",
		description: "Book a free 15-minute conversation or call (413) 266-5616. Level Ground Systems, Wilbraham, MA.",
		path: "/contact",
	});
	return (
		<>
			{/* ------------------------------- HEADER ------------------------------ */}
			<Section className="overflow-hidden pt-[72px]">
				<GridBackdrop />
				<Container className="relative pb-20 pt-20 md:pb-24 md:pt-24">
					<div className="max-w-3xl">
						<Reveal>
							<Eyebrow className="mb-7">05 / Book a conversation</Eyebrow>
						</Reveal>
						<Reveal delay={0.06}>
							<h1 className="text-[clamp(2.4rem,5.2vw,4.2rem)] text-balance">
								Start with a conversation,
								<span className="mt-2 block text-amber">not a contract.</span>
							</h1>
						</Reveal>
						<Reveal delay={0.12}>
							<p className="mt-8 text-[1.125rem] leading-relaxed text-steel text-pretty">
								Pick a time that works for you. The first call is {offer.introMinutes} minutes, high
								level. If there's something worth building, the diagnostic that follows is free too,
								and the write-up is yours to keep.
							</p>
						</Reveal>
						<Reveal delay={0.18}>
							<div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.9375rem] text-steel">
								<span className="flex items-center gap-2">
									<Clock className="h-4 w-4 text-amber" />
									{offer.introMinutes} minutes, on your schedule
								</span>
								<span className="flex items-center gap-2">
									<Check className="h-4 w-4 text-amber" />
									First call is free
								</span>
								<span className="flex items-center gap-2">
									<MapPin className="h-4 w-4 text-amber" />
									{site.coverage} · {site.remote.toLowerCase()}
								</span>
							</div>
						</Reveal>
					</div>
				</Container>
			</Section>

			{/* ------------------------------ BOOKING ------------------------------ */}
			<Section tone="paper">
				<Container className="py-20 md:py-28">
					<div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
						{/* Booking */}
						<Reveal>
							<div className="flex h-full flex-col border-2 border-amber/60 bg-paper-raise p-8 md:p-12">
								<div className="flex items-center gap-2.5">
									<CalendarClock className="h-4 w-4 text-amber" />
									<span className="eyebrow text-amber-deep">Pick a time yourself</span>
								</div>
								<h2 className="mt-6 text-[clamp(1.9rem,3.4vw,2.6rem)] leading-tight text-ink text-balance">
									Grab any open slot on my calendar.
								</h2>
								<p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-slate text-pretty">
									No form to fill out first. Bring a rough idea of how work moves through your
									business today, and we'll spend the call on where it gets stuck.
								</p>
								<div className="mt-9">
									<Btn href={site.bookingUrl} size="lg">
										<CalendarClock className="h-4 w-4" />
										Book a {offer.introMinutes}-minute call
										<ArrowUpRight className="h-4 w-4" />
									</Btn>
									<p className="mt-3.5 text-[0.875rem] text-slate/80">
										Opens Google Calendar in a new tab.
									</p>
								</div>

								<div className="mt-auto border-t border-paper-line pt-8 lg:mt-12">
									<div className="eyebrow text-slate/70">Rather call or email?</div>
									<p className="mt-3 text-[0.9375rem] leading-relaxed text-slate text-pretty">
										I answer my own phone. If you get voicemail I'm on another call, and you'll hear
										back the same day.
									</p>
									<div className="mt-5 grid gap-3">
										<a
											href={site.phoneHref}
											className="flex items-center gap-3 border border-paper-line bg-white px-4 py-3.5 transition-colors hover:border-amber"
										>
											<Phone className="h-4 w-4 flex-none text-amber" />
											<span className="font-display text-[1.0625rem] font-semibold text-ink">
												{site.phone}
											</span>
										</a>
										<a
											href={`mailto:${site.email}?subject=Intro%20call`}
											className="flex items-center gap-3 border border-paper-line bg-white px-4 py-3.5 transition-colors hover:border-amber"
										>
											<Mail className="h-4 w-4 flex-none text-amber" />
											<span className="text-[0.9375rem] font-medium text-ink">
												{site.email}
											</span>
										</a>
									</div>
								</div>
							</div>
						</Reveal>

						{/* Sidebar */}
						<Reveal delay={0.08}>
							<div className="border border-paper-line bg-paper-raise p-8 lg:sticky lg:top-28">
								<div className="eyebrow text-slate/70">What the call gives you</div>
								<ul className="mt-6 space-y-4">
									{whatYouGet.map((w) => (
										<li key={w} className="flex gap-3.5 text-[0.9375rem] leading-relaxed">
											<Check className="mt-1 h-4 w-4 flex-none text-amber" />
											<span className="text-ink/85 text-pretty">{w}</span>
										</li>
									))}
								</ul>
								<div className="mt-8 flex items-center gap-2.5 border-t border-paper-line pt-5 text-[0.875rem] text-slate">
									<MapPin className="h-3.5 w-3.5 flex-none text-slate/60" />
									{site.location}
								</div>
							</div>
						</Reveal>
					</div>
				</Container>
			</Section>

			{/* ------------------------------- PROMISE ----------------------------- */}
			<Section className="overflow-hidden">
				<GridBackdrop />
				<Container className="relative py-20 md:py-24">
					<Reveal>
						<div className="grid gap-10 md:grid-cols-3">
							{promises.map((item) => (
								<div key={item.t} className="border-t border-white/12 pt-6">
									<h3 className="text-[1.1875rem] leading-snug">{item.t}</h3>
									<p className="mt-3 text-[0.9375rem] leading-relaxed text-steel text-pretty">
										{item.b}
									</p>
								</div>
							))}
						</div>
					</Reveal>
				</Container>
			</Section>
		</>
	);
}
