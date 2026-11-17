import { ArrowRight, Phone } from "lucide-react";
import { Btn, Container, Eyebrow, GridBackdrop, Reveal, Section, SectionHeading } from "../components/primitives";
import { serviceIcons } from "../lib/service-icons";
import { offer, services, site } from "../lib/site";
import { pageMeta, usePageMeta } from "../lib/seo";

/* Simplified home page (Nov 2026). Three sections only: what I do, what I
   help with, how we start. Keep every line short. */

const steps = [
	{
		label: "A short call",
		time: `Free · ${offer.introMinutes} minutes`,
		body: "Tell me how the business runs today and where your week goes.",
	},
	{
		label: "A written plan",
		time: "Free · yours to keep",
		body: "The few changes that would save you the most time and money, in plain English.",
	},
	{
		label: "I build it",
		time: "You own it",
		body: "Set up in the tools you already use. Your team gets trained. Nothing to rent from me.",
	},
];

export default function Index() {
	usePageMeta(pageMeta.home);
	return (
		<>
			{/* --------------------------------- HERO -------------------------------- */}
			<Section className="overflow-hidden pt-[72px]">
				<GridBackdrop />
				<div
					aria-hidden
					className="pointer-events-none absolute -right-32 -top-24 h-[560px] w-[560px] rounded-full bg-amber/[0.07] blur-[140px]"
				/>
				<Container className="relative pb-24 pt-20 md:pb-28 md:pt-28">
					<div className="max-w-3xl">
						<Reveal>
							<Eyebrow className="mb-8">Sales &amp; marketing consultant for small businesses</Eyebrow>
						</Reveal>
						<Reveal delay={0.06}>
							<h1 className="text-[clamp(2.6rem,5.6vw,4.75rem)] text-balance">
								Keep more of what you earn.
								<br />
								<span className="text-amber">Get your week back.</span>
							</h1>
						</Reveal>
						<Reveal delay={0.12}>
							<p className="mt-7 max-w-2xl text-[1.1875rem] leading-relaxed text-steel text-pretty md:text-[1.25rem]">
								I'm {site.owner}. I help small business owners use AI to cut the busywork and stop
								losing jobs, so you grow your profit margin without working more hours.
							</p>
						</Reveal>
						<Reveal delay={0.18}>
							<div className="mt-10 flex flex-col gap-3 sm:flex-row">
								<Btn href={site.bookingUrl} size="lg">
									Book a free {offer.introMinutes}-minute call
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
								</Btn>
								<Btn href={site.phoneHref} variant="outline" size="lg">
									<Phone className="h-4 w-4" />
									{site.phone}
								</Btn>
							</div>
						</Reveal>
						<Reveal delay={0.24}>
							<p className="mt-10 text-[0.9375rem] text-steel/80">
								Based in Wilbraham, MA · 15 years in sales and marketing ·{" "}
								<span className="text-paper">You work with me directly</span>
							</p>
						</Reveal>
					</div>
				</Container>
			</Section>

			{/* ------------------------------- SERVICES ------------------------------ */}
			<Section tone="paper" id="services">
				<Container className="py-20 md:py-28">
					<Reveal>
						<SectionHeading tone="paper" eyebrow="What I help with" title="Five ways I help." />
					</Reveal>
					<div className="mt-12 grid gap-5 sm:grid-cols-2">
						{services.map((svc, i) => {
							const Icon = serviceIcons[svc.id];
							return (
								<Reveal
									key={svc.id}
									delay={i * 0.05}
									className={
										i === services.length - 1 && services.length % 2 === 1 ? "h-full sm:col-span-2" : "h-full"
									}
								>
									<div className="flex h-full gap-5 rounded-[var(--radius-card)] border border-paper-line bg-paper-raise p-7">
										<div className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-ctl)] border border-amber/40 bg-amber/10">
											<Icon className="h-5 w-5 text-amber" />
										</div>
										<div>
											<h3 className="text-[1.3125rem] leading-tight">{svc.name}</h3>
											<p className="mt-2 text-[1rem] leading-relaxed text-slate text-pretty">
												{svc.short}
											</p>
										</div>
									</div>
								</Reveal>
							);
						})}
					</div>
				</Container>
			</Section>

			{/* ------------------------------ HOW IT WORKS --------------------------- */}
			<Section>
				<Container className="py-20 md:py-28">
					<Reveal>
						<SectionHeading
							eyebrow="How it works"
							title="Three steps. The first two are free."
						/>
					</Reveal>
					<div className="mt-12 grid gap-5 md:grid-cols-3">
						{steps.map((s, i) => (
							<Reveal key={s.label} delay={i * 0.06} className="h-full">
								<div className="h-full border border-white/10 bg-white/[0.02] p-7">
									<div className="eyebrow text-steel/50">{String(i + 1).padStart(2, "0")}</div>
									<h3 className="mt-4 text-[1.375rem] leading-tight">{s.label}</h3>
									<div className="eyebrow mt-2 text-amber">{s.time}</div>
									<p className="mt-4 text-[1rem] leading-relaxed text-steel text-pretty">{s.body}</p>
								</div>
							</Reveal>
						))}
					</div>
				</Container>
			</Section>
		</>
	);
}
