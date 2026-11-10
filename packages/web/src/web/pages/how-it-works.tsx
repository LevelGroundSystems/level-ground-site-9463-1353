import { ArrowRight, Clock, FileText, Gauge, Phone, Wrench } from "lucide-react";
import {
	Btn,
	Container,
	Eyebrow,
	GridBackdrop,
	Reveal,
	Section,
	SectionHeading,
	TickCard,
} from "../components/primitives";
import { offer, site } from "../lib/site";
import { usePageMeta } from "../lib/seo";

const steps = [
	{
		icon: Phone,
		label: "A short call",
		time: `${offer.introMinutes} minutes · free`,
		body: "Fifteen minutes, high level. What you do, where it's stuck, what you've already tried. I'm working out whether systems can fix it. You're working out whether I know what I'm talking about.",
		you: "Fifteen minutes and an honest answer about what's broken.",
		get: "A straight yes or no on whether I'm the right person.",
	},
	{
		icon: FileText,
		label: "Find the biggest gaps",
		time: "Free · yours to keep",
		body: "I find where the business is losing work and put a cost against each one. You get the three biggest, ranked, so we start with the expensive problem instead of the obvious one.",
		you: "A look at how the work runs today, and honesty about what isn't happening.",
		get: "Your three biggest gaps in writing, with what each one is costing. Yours to keep either way.",
	},
	{
		icon: Wrench,
		label: "The build",
		time: `${offer.buildDays} days · one-time`,
		body: "The systems that close those gaps, built in the tools you already own. Tested against real cases before a customer ever sees it, then handed over with your team trained.",
		you: "Logins to the tools, and about two hours of your team's time across the month.",
		get: "Working systems, a written handover doc, and a trained team. Nothing behind my login.",
	},
	{
		icon: Clock,
		label: "Ongoing management",
		time: "Monthly · no contract",
		body: "I watch what's running, fix what underperforms, and add to it as the business changes. Month to month, so if it stops being worth it you stop.",
		you: "A fifteen-minute check-in and whatever's changed in the business.",
		get: "Weekly reporting without anyone building a spreadsheet, and a system that keeps up.",
	},
];

const weeks = [
	{
		week: "Week 1",
		title: "Map and access",
		body: "Logins, a map of the path an inquiry takes today, and agreement on which gaps this build closes. Scope gets written down so nothing drifts.",
	},
	{
		week: "Week 2",
		title: "Build the core",
		body: "The most expensive gap first, usually response time and follow-up. Messages get written in your voice, and you approve every word before anything sends.",
	},
	{
		week: "Week 3",
		title: "Build the rest, test everything",
		body: "The rest goes in, then the whole thing runs against real past cases to see where it breaks. Better now than in front of a customer.",
	},
	{
		week: "Week 4",
		title: "Train, hand over, go live",
		body: "Your team gets walked through the parts they touch, you get the handover doc, and it goes live with me watching closely for two weeks.",
	},
];

/* The numbers the engagement gets judged on. Baselines come out of the
   diagnostic, so "it's working" is never just a feeling. */
const measured = [
	{
		name: "Response time",
		body: "Minutes from an inquiry landing to a real reply going out.",
	},
	{
		name: "Follow-up completion",
		body: "How many open quotes actually got followed up more than twice. Usually the biggest mover.",
	},
	{
		name: "Quote close rate",
		body: "Of the quotes you were already writing, how many turn into work.",
	},
	{
		name: "Hours returned",
		body: "Time back per week for you and the team, against a baseline taken in the diagnostic.",
	},
	{
		name: "Repeat and reactivated revenue",
		body: "Work from past customers who wouldn't have been contacted otherwise.",
	},
	{
		name: "Reporting cadence",
		body: "Whether those numbers arrive every week without anyone building them by hand.",
	},
];

const required = [
	"Logins to the tools you already use — CRM, email, phone system, calendar.",
	"One person on your side who can answer questions and approve wording.",
	"Honesty about what isn't happening. That's what makes the build right.",
	"About two hours of team time across the build month, plus a half-hour training session.",
];

const owned = [
	"Every system lives in accounts registered to your business, not mine.",
	"A written handover document covering what runs, when, and how to change it.",
	"Your data stays in your tools. I don't hold it hostage and I don't resell it.",
	"The day you stop working with me, everything keeps running. That's the point of building it this way.",
];

export default function HowItWorks() {
	usePageMeta({
		title: "How It Works | Level Ground Systems",
		description: "A free short call, a free written look at your biggest gaps, then the build. You know whether it's worth it before any money changes hands.",
		path: "/how-it-works",
	});
	return (
		<>
			{/* -------------------------------- HEADER ------------------------------- */}
			<Section className="overflow-hidden pt-[72px]">
				<GridBackdrop />
				<Container className="relative pb-20 pt-20 md:pb-24 md:pt-24">
					<div className="max-w-3xl">
						<Reveal>
							<Eyebrow className="mb-7">02 / How it works</Eyebrow>
						</Reveal>
						<Reveal delay={0.06}>
							<h1 className="text-[clamp(2.4rem,5vw,4rem)] text-balance">
								Four steps.
								<span className="mt-2 block text-amber">The first two are free.</span>
							</h1>
						</Reveal>
						<Reveal delay={0.12}>
							<p className="mt-8 text-[1.125rem] leading-relaxed text-steel text-pretty">
								No discovery phase billed by the hour. No platform to rent. You find out whether I'm
								useful before any money changes hands.
							</p>
						</Reveal>
						<Reveal delay={0.18}>
							<div className="mt-10 flex flex-col gap-3 sm:flex-row">
								<Btn to="/contact" size="lg">
									Start at step one
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
								</Btn>
								<Btn href={site.phoneHref} variant="outline" size="lg">
									<Phone className="h-4 w-4" />
									{site.phone}
								</Btn>
							</div>
						</Reveal>
					</div>
				</Container>
			</Section>

			{/* --------------------------------- STEPS ------------------------------- */}
			<Section tone="paper">
				<Container className="py-24 md:py-32">
					<Reveal>
						<SectionHeading
							tone="paper"
							eyebrow="The path"
							title="What actually happens, step by step"
							lede="Including what I need from you at each stage, so none of it is a surprise."
						/>
					</Reveal>

					<div className="mt-16 space-y-6">
						{steps.map((s, i) => (
							<Reveal key={s.label} delay={i * 0.05}>
								<div className="grid gap-8 rounded-[var(--radius-card)] border border-paper-line bg-paper-raise p-8 md:grid-cols-[1fr_1.3fr] md:p-10">
									<div>
										<div className="flex items-center gap-4">
											<div className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-ctl)] border border-amber/40 bg-amber/10">
												<s.icon className="h-[1.15rem] w-[1.15rem] text-amber" />
											</div>
											<div className="eyebrow text-slate/50">
												Step {String(i + 1).padStart(2, "0")}
											</div>
										</div>
										<h3 className="mt-6 text-[1.625rem] leading-tight">{s.label}</h3>
										<div className="eyebrow mt-2.5 text-amber">{s.time}</div>
										<p className="mt-4 text-[1.0625rem] leading-relaxed text-slate text-pretty">
											{s.body}
										</p>
									</div>
									<div className="grid content-start gap-6 border-t border-paper-line pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-0">
										<div>
											<div className="eyebrow mb-2.5 text-slate/60">What I need from you</div>
											<p className="text-[1rem] leading-relaxed text-ink/85 text-pretty">{s.you}</p>
										</div>
										<div className="border-t border-paper-line pt-6">
											<div className="eyebrow mb-2.5 text-amber">What you walk away with</div>
											<p className="text-[1rem] leading-relaxed text-ink text-pretty">{s.get}</p>
										</div>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</Container>
			</Section>

			{/* ------------------------------- TIMELINE ------------------------------ */}
			<Section className="overflow-hidden">
				<GridBackdrop />
				<Container className="relative py-24 md:py-32">
					<Reveal>
						<SectionHeading
							eyebrow="The build"
							title={`Thirty days, week by week`}
							lede="One month, fixed. Long enough to build it properly, short enough to see the return in the same quarter you paid for it."
						/>
					</Reveal>

					<div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
						{weeks.map((w, i) => (
							<Reveal key={w.week} delay={i * 0.06} className="h-full">
								<div className="flex h-full flex-col border-t-2 border-amber/70 bg-white/[0.02] p-7">
									<div className="eyebrow text-amber">{w.week}</div>
									<h3 className="mt-4 text-[1.1875rem] leading-snug">{w.title}</h3>
									<p className="mt-3 text-[0.9375rem] leading-relaxed text-steel text-pretty">
										{w.body}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</Container>
			</Section>

			{/* --------------------------- REQUIRED / OWNED -------------------------- */}
			<Section tone="paper">
				<Container className="py-24 md:py-32">
					<div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
						<Reveal>
							<Eyebrow tone="slate" className="mb-6">
								Your side
							</Eyebrow>
							<h2 className="text-[clamp(1.75rem,3vw,2.5rem)] text-balance">
								What I need from you
							</h2>
							<ul className="mt-8 space-y-4">
								{required.map((r) => (
									<li
										key={r}
										className="flex gap-3.5 border-b border-paper-line pb-4 text-[1.0625rem] leading-relaxed text-slate text-pretty"
									>
										<span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
										{r}
									</li>
								))}
							</ul>
						</Reveal>
						<Reveal delay={0.08}>
							<Eyebrow tone="slate" className="mb-6">
								Ownership
							</Eyebrow>
							<h2 className="text-[clamp(1.75rem,3vw,2.5rem)] text-balance">
								What you own at the end
							</h2>
							<ul className="mt-8 space-y-4">
								{owned.map((o) => (
									<li
										key={o}
										className="flex gap-3.5 border-b border-paper-line pb-4 text-[1.0625rem] leading-relaxed text-slate text-pretty"
									>
										<span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
										{o}
									</li>
								))}
							</ul>
						</Reveal>
					</div>
				</Container>
			</Section>

			{/* ----------------------------- MEASUREMENT ---------------------------- */}
			<Section className="overflow-hidden">
				<GridBackdrop />
				<Container className="relative py-24 md:py-32">
					<Reveal>
						<SectionHeading
							eyebrow="Measurement"
							title="The six numbers I get judged on"
							lede={`Baselines get taken in the diagnostic, before anything is built. Otherwise "it's working" is just a feeling.`}
						/>
					</Reveal>
					<div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{measured.map((m, i) => (
							<Reveal key={m.name} delay={i * 0.04} className="h-full">
								<div className="h-full border border-white/10 bg-white/[0.02] p-7">
									<Gauge className="h-4 w-4 text-amber" />
									<h3 className="mt-4 text-[1.125rem] leading-snug">{m.name}</h3>
									<p className="mt-2.5 text-[0.9375rem] leading-relaxed text-steel text-pretty">
										{m.body}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</Container>
			</Section>

			{/* ------------------------------ COMMON ASKS ---------------------------- */}
			<Section tone="raise">
				<Container className="py-24 md:py-28">
					<Reveal>
						<SectionHeading
							eyebrow="Asked every time"
							title="The three questions that always come up"
						/>
					</Reveal>
					<div className="mt-14 grid gap-5 md:grid-cols-3">
						{[
							{
								q: "Is this going to replace my people?",
								a: "It replaces the parts of their day they hate: the retyping, the chasing, the reminders. Your team's judgment is the part you're paying them for.",
							},
							{
								q: "We're too small for this.",
								a: "Three people is enough. Once the same job happens every week, there's process to fix — and at your size, fixing it shows up immediately instead of disappearing into a department.",
							},
							{
								q: "I don't have time for a project right now.",
								a: "That's the reason, not the objection. The first call is fifteen minutes, and you keep the write-up either way. Worst case you learn where the leaks are and fix them yourself.",
							},
						].map((item, i) => (
							<Reveal key={item.q} delay={i * 0.06} className="h-full">
								<TickCard className="h-full">
									<h3 className="text-[1.1875rem] leading-snug">"{item.q}"</h3>
									<p className="mt-4 text-[1rem] leading-relaxed text-steel text-pretty">{item.a}</p>
								</TickCard>
							</Reveal>
						))}
					</div>
				</Container>
			</Section>
		</>
	);
}
