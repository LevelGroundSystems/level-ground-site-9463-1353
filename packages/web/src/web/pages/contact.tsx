import { CalendarClock, Check, Clock, Mail, MapPin, Phone, TriangleAlert } from "lucide-react";
import { DiagnosticForm } from "../components/diagnostic-form";
import {
	Btn,
	Container,
	Eyebrow,
	GridBackdrop,
	Reveal,
	Section,
} from "../components/primitives";
import { offer, site } from "../lib/site";

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
		b: "There's no chatbot behind this form. It's me, usually within a business day.",
	},
];

export default function Contact() {
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
								Tell me a bit about your business and I'll come back within a business day. The first
								call is {offer.introMinutes} minutes, high level. If there's something worth building,
								the diagnostic that follows is free too, and the write-up is yours to keep.
							</p>
						</Reveal>
						<Reveal delay={0.18}>
							<div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.9375rem] text-steel">
								<span className="flex items-center gap-2">
									<Clock className="h-4 w-4 text-amber" />
									Form takes about 2 minutes
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

			{/* -------------------------------- FORM ------------------------------- */}
			<Section tone="paper">
				<Container className="py-20 md:py-28">
					<div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
						{/* Form */}
						<Reveal>
							<DiagnosticForm source="contact-page" tone="paper" />
						</Reveal>

						{/* Sidebar */}
						<div className="space-y-6">
							<Reveal delay={0.08}>
								<div className="border border-paper-line bg-paper-raise p-8">
									<div className="eyebrow text-slate/70">What the diagnostic gives you</div>
									<ul className="mt-6 space-y-4">
										{whatYouGet.map((w) => (
											<li key={w} className="flex gap-3.5 text-[0.9375rem] leading-relaxed">
												<Check className="mt-1 h-4 w-4 flex-none text-amber" />
												<span className="text-ink/85 text-pretty">{w}</span>
											</li>
										))}
									</ul>
								</div>
							</Reveal>

							<Reveal delay={0.14}>
								<div className="border border-paper-line bg-paper-raise p-8">
									<div className="eyebrow text-slate/70">Rather skip the form?</div>
									<p className="mt-4 text-[0.9375rem] leading-relaxed text-slate text-pretty">
										Call or text me directly. I answer my own phone — if I don't pick up, I'm on a
										call and you'll hear back the same day.
									</p>
									<div className="mt-6 space-y-3">
										<a
											href={site.phoneHref}
											className="flex items-center gap-3 border border-paper-line px-4 py-3.5 transition-colors hover:border-amber"
										>
											<Phone className="h-4 w-4 flex-none text-amber" />
											<span className="font-display text-[1.0625rem] font-semibold text-ink">
												{site.phone}
											</span>
										</a>
										<a
											href={`mailto:${site.email}?subject=AI%20diagnostic`}
											className="flex items-center gap-3 border border-paper-line px-4 py-3.5 transition-colors hover:border-amber"
										>
											<Mail className="h-4 w-4 flex-none text-amber" />
											<span className="break-all text-[0.9375rem] font-medium text-ink">
												{site.email}
											</span>
										</a>
									</div>
									<div className="mt-6 flex items-center gap-2.5 border-t border-paper-line pt-5 text-[0.875rem] text-slate">
										<MapPin className="h-3.5 w-3.5 flex-none text-slate/60" />
										{site.location}
									</div>
								</div>
							</Reveal>

							{/* Booking — placeholder until Nate pastes his real link */}
							<Reveal delay={0.2}>
								<div className="border border-paper-line bg-paper-raise p-8">
									<div className="flex items-center gap-2.5">
										<CalendarClock className="h-4 w-4 text-amber" />
										<span className="eyebrow text-slate/70">Pick a time yourself</span>
									</div>
									<p className="mt-4 text-[0.9375rem] leading-relaxed text-slate text-pretty">
										If you'd rather just grab a slot, book straight onto my calendar. Same
										conversation, one less step.
									</p>

									{site.bookingIsPlaceholder ? (
										<div className="mt-6 border border-dashed border-amber/50 bg-amber/[0.04] p-5">
											<div className="flex items-start gap-3">
												<TriangleAlert className="mt-0.5 h-4 w-4 flex-none text-amber-deep" />
												<div>
													<div className="eyebrow text-amber-deep">
														Booking link not connected yet
													</div>
													<p className="mt-2 text-[0.875rem] leading-relaxed text-slate text-pretty">
														Nate — paste your Google Calendar appointment link into{" "}
														<code className="font-mono text-[0.8125rem] text-ink">
															bookingUrl
														</code>{" "}
														in{" "}
														<code className="font-mono text-[0.8125rem] text-ink">
															lib/site.ts
														</code>{" "}
														and set{" "}
														<code className="font-mono text-[0.8125rem] text-ink">
															bookingIsPlaceholder
														</code>{" "}
														to false. Until then, visitors are pointed at the phone number
														above.
													</p>
												</div>
											</div>
										</div>
									) : (
										<Btn
											href={site.bookingUrl}
											variant="outline-dark"
											size="lg"
											className="mt-6 w-full"
										>
											<CalendarClock className="h-4 w-4" />
											Pick a time
										</Btn>
									)}
								</div>
							</Reveal>
						</div>
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
