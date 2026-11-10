import { ArrowRight, Clock, FileText, Phone, Wrench } from "lucide-react";
import {
	Btn,
	Container,
	Eyebrow,
	GridBackdrop,
	Reveal,
	Section,
	SectionHeading,
	StatCard,
	TickCard,
} from "../components/primitives";
import { serviceIcons } from "../lib/service-icons";
import { offer, services, site } from "../lib/site";

/* The six gaps a small business loses on — from the business brief. Framed as
   the honest comparison rather than as a list of AI features.
   Copy rule for this page: one idea per line, no sentence that needs a comma
   to survive. Short beats complete. */
const gaps = [
	{
		name: "Speed",
		them: "Answers in two minutes. Someone is paid to sit there.",
		you: "Answers in four hours. You were with a customer.",
	},
	{
		name: "Persistence",
		them: "A system forces the fifth follow-up.",
		you: "You follow up twice and start to feel pushy.",
	},
	{
		name: "Consistency",
		them: "Sounds the same on every channel. There's a script.",
		you: "Sounds like whoever answered.",
	},
	{
		name: "Presence",
		them: "The newsletter goes out whether anyone feels like it.",
		you: "Marketing goes out when it's slow.",
	},
	{
		name: "Memory",
		them: "A database knows every past customer and when to call.",
		you: "Three notebooks and your own head.",
	},
	{
		name: "Visibility",
		them: "Knows its numbers every Monday.",
		you: "Finds out at tax time.",
	},
];

/* The differentiation argument, three beats. Deliberately the shortest copy on
   the page — this is the part people actually read. */
const contrast = [
	{
		tag: "Most AI agencies",
		title: ["Sell you a tool.", "Invoice you. Leave."],
		body: "You rent a platform, run it yourself, and pay for it forever. Nothing about the business changed.",
	},
	{
		tag: "What I do",
		title: ["Find the leak first.", "Then build."],
		body: "First I map how inquiries and follow-up work today. Then we decide what gets built, inside the tools you already own.",
	},
	{
		tag: "What you get",
		title: ["Systems you keep.", "Not a subscription."],
		body: "Built in your accounts, handed over, your team trained. Walk away whenever you like and it all still runs.",
	},
];

const steps = [
	{
		icon: Phone,
		label: "A short call",
		time: `Free · ${offer.introMinutes} minutes`,
		body: "High level only. What you do, how the work flows, where it's stuck. No deck, no pitch.",
	},
	{
		icon: FileText,
		label: "Find the biggest gaps",
		time: "Free · yours to keep",
		body: "I find where the business is losing work and put a cost against each one. The three biggest, in writing. Yours either way.",
	},
	{
		icon: Wrench,
		label: "The build",
		time: `One-time · ${offer.buildDays} days`,
		body: "The systems that close those gaps, built in the tools you already own and handed over with your team trained.",
	},
	{
		icon: Clock,
		label: "Ongoing management",
		time: "Monthly · no contract",
		body: "Monitoring, tuning, and the weekly numbers arriving without anyone building a spreadsheet.",
	},
];

export default function Index() {
	return (
		<>
			{/* --------------------------------- HERO -------------------------------- */}
			<Section className="overflow-hidden pt-[72px]">
				<GridBackdrop />
				<div
					aria-hidden
					className="pointer-events-none absolute -right-32 -top-24 h-[560px] w-[560px] rounded-full bg-amber/[0.07] blur-[140px]"
				/>
				<Container className="relative pb-24 pt-20 md:pb-32 md:pt-28">
					<div className="max-w-4xl">
						<Reveal>
							<Eyebrow className="mb-8">Websites · Social media · AI training · Lead generation</Eyebrow>
						</Reveal>
						<Reveal delay={0.06}>
							<h1 className="text-[clamp(2.75rem,6vw,5.25rem)] text-balance">
								Run like a company
								<br />
								<span className="text-amber">ten times your size.</span>
							</h1>
						</Reveal>
						<Reveal delay={0.1}>
							<p className="mt-6 font-display text-[clamp(1.125rem,2vw,1.4375rem)] font-semibold leading-snug text-amber text-balance">
								{site.tagline}
							</p>
						</Reveal>
						<Reveal delay={0.16}>
							<p className="mt-7 max-w-2xl text-[1.1875rem] leading-relaxed text-steel text-pretty md:text-[1.25rem]">
								Bigger companies aren't smarter. They just answer in seconds instead of hours, and
								move on sales, marketing, and operations without ever slowing down. Small businesses
								can have that same speed now. Most just don't know it's affordable.
							</p>
						</Reveal>
						<Reveal delay={0.18}>
							<div className="mt-11 flex flex-col gap-3 sm:flex-row">
								<Btn to="/contact" size="lg">
									Book a conversation
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
								</Btn>
								<Btn to="/services" variant="outline" size="lg">
									See the services
								</Btn>
							</div>
						</Reveal>
						<Reveal delay={0.24}>
							<div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.9375rem] text-steel/80">
								<span>
									Built by <span className="text-paper">{site.owner}</span> — 15 years in sales
								</span>
								<span className="hidden h-4 w-px bg-white/15 sm:block" />
								<span>One person, start to finish</span>
							</div>
							<div className="mt-3 text-[0.9375rem] text-steel/80">
								<span className="text-paper">{site.inPerson}</span> · {site.remote}
							</div>
						</Reveal>
					</div>
				</Container>
			</Section>

			{/* ------------------------------ THE NUMBERS ---------------------------- */}
			<Section tone="paper">
				<Container className="py-24 md:py-28">
					<Reveal>
						<SectionHeading
							tone="paper"
							eyebrow="01 / Where the market is"
							title="Almost everyone uses AI. Almost nobody has built it in."
							lede="The distance between dabbling and operating is the whole opportunity."
						/>
					</Reveal>
					<div className="mt-14 grid gap-5 md:grid-cols-3">
						{[
							{
								value: "76%",
								label: "of small businesses now use AI in some form.",
								source: "Goldman Sachs 10,000 Small Businesses survey",
								tone: "paper" as const,
							},
							{
								value: "14%",
								label: "have it actually built into how the business runs.",
								source: "Goldman Sachs 10,000 Small Businesses survey",
								tone: "amber" as const,
							},
							{
								value: "75%",
								label: "of SMB leaders say they're falling behind on technology.",
								source: "Salesforce SMB Trends report",
								tone: "paper" as const,
							},
						].map((s, i) => (
							<Reveal key={s.value} delay={i * 0.06} className="h-full">
								<StatCard value={s.value} label={s.label} source={s.source} tone={s.tone} />
							</Reveal>
						))}
					</div>
					<Reveal delay={0.2}>
						<p className="mt-10 max-w-2xl border-l-2 border-amber pl-5 text-[1.0625rem] leading-relaxed text-slate text-pretty">
							Through mid-2026, AI use kept climbing at firms with 20 or more employees and{" "}
							<span className="font-semibold text-ink">didn't move at all under 20</span>. The gap is
							opening.
							<span className="eyebrow mt-3 block text-slate/60">
								U.S. Census Bureau, Business Trends &amp; Outlook Survey
							</span>
						</p>
					</Reveal>
				</Container>
			</Section>

			{/* ------------------------------- THE GAPS ------------------------------ */}
			<Section className="overflow-hidden">
				<GridBackdrop />
				<Container className="relative py-24 md:py-32">
					<Reveal>
						<SectionHeading
							eyebrow="02 / The problem"
							title={
								<>
									You're not losing on talent.
									<br />
									You're losing on six boring things.
								</>
							}
							lede="None of them are hard to fix. They're just never anybody's job."
						/>
					</Reveal>

					<div className="mt-16">
						<div className="hidden grid-cols-[180px_1fr_1fr] gap-8 border-b border-white/10 pb-4 md:grid">
							<div className="eyebrow text-steel/50">The gap</div>
							<div className="eyebrow text-steel/50">The bigger competitor</div>
							<div className="eyebrow text-amber">Most businesses your size</div>
						</div>
						{gaps.map((g, i) => (
							<Reveal key={g.name} delay={i * 0.04}>
								<div className="grid gap-3 border-b border-white/[0.07] py-7 md:grid-cols-[180px_1fr_1fr] md:gap-8">
									<div className="font-display text-[1.25rem] font-semibold text-paper">
										<span className="eyebrow mr-3 text-amber/70 md:hidden">
											{String(i + 1).padStart(2, "0")}
										</span>
										{g.name}
									</div>
									<div className="text-[1rem] leading-relaxed text-steel text-pretty">{g.them}</div>
									<div className="text-[1rem] leading-relaxed text-paper/90 text-pretty">{g.you}</div>
								</div>
							</Reveal>
						))}
					</div>

					<Reveal delay={0.1}>
						<div className="mt-14 flex flex-col gap-6 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.02] p-8 md:flex-row md:items-center md:justify-between md:p-10">
							<p className="max-w-xl text-[1.0625rem] leading-relaxed text-paper text-pretty">
								None of this was fixable without headcount you can't justify. That changed in the last
								two years.
							</p>
							<Btn to="/how-it-works" variant="outline" className="shrink-0">
								How the fix works
								<ArrowRight className="h-4 w-4" />
							</Btn>
						</div>
					</Reveal>
				</Container>
			</Section>

			{/* ----------------------------- DIFFERENCE ------------------------------ */}
			<Section tone="raise">
				<Container className="py-24 md:py-28">
					<Reveal>
						<SectionHeading
							eyebrow="03 / The difference"
							title={
								<>
									I'm not another AI agency.
									<br />
									Here's the difference.
								</>
							}
						/>
					</Reveal>
					<div className="mt-14 grid gap-5 md:grid-cols-3">
						{contrast.map((c, i) => (
							<Reveal key={c.tag} delay={i * 0.07} className="h-full">
								<div
									className={
										i === 0
											? "h-full border border-white/[0.07] bg-white/[0.01] p-8"
											: "h-full border border-white/10 bg-white/[0.03] p-8"
									}
								>
									<div className={i === 0 ? "eyebrow text-steel/60" : "eyebrow text-amber"}>
										{c.tag}
									</div>
									<h3
										className={
											i === 0
												? "mt-6 text-[1.4375rem] leading-tight text-steel"
												: "mt-6 text-[1.4375rem] leading-tight"
										}
									>
										{c.title[0]}
										<br />
										{c.title[1]}
									</h3>
									<p className="mt-4 text-[1rem] leading-relaxed text-steel text-pretty">{c.body}</p>
								</div>
							</Reveal>
						))}
					</div>
					<Reveal delay={0.24}>
						<p className="mt-12 max-w-3xl font-display text-[clamp(1.25rem,2.2vw,1.625rem)] font-semibold leading-snug text-paper text-balance">
							"The software is the easy part. Knowing which gap costs you the most, and fixing
							that one first, is the work."
						</p>
					</Reveal>
				</Container>
			</Section>

			{/* ------------------------------- SERVICES ------------------------------ */}
			<Section tone="paper" id="services">
				<Container className="py-24 md:py-32">
					<Reveal>
						<SectionHeading
							tone="paper"
							eyebrow="04 / What I do"
							title="Four services. All about helping you compete."
							lede="Get found, look active, work smarter, and keep the calendar full."
						/>
					</Reveal>

					<div className="mt-14 grid gap-6 md:grid-cols-2">
						{services.map((svc, i) => {
							const Icon = serviceIcons[svc.id];
							return (
								<Reveal key={svc.id} delay={i * 0.06} className="h-full">
									<a
										href={`/services#${svc.id}`}
										className="group flex h-full flex-col rounded-[var(--radius-card)] border border-paper-line bg-paper-raise p-8 transition-colors hover:border-amber/60 md:p-10"
									>
										<div className="flex items-center gap-4">
											<div className="grid h-12 w-12 shrink-0 place-items-center rounded-[var(--radius-ctl)] border border-amber/40 bg-amber/10">
												<Icon className="h-5 w-5 text-amber" />
											</div>
											<div className="eyebrow text-slate/70">{String(i + 1).padStart(2, "0")}</div>
										</div>
										<h3 className="mt-6 text-[1.75rem] leading-tight">{svc.name}</h3>
										<p className="mt-2 font-display text-[1.0625rem] font-semibold text-amber">
											{svc.short}
										</p>
										<p className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-slate text-pretty">
											{svc.body}
										</p>
										<span className="mt-6 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-ink">
											What's included
											<ArrowRight className="h-4 w-4 text-amber transition-transform group-hover:translate-x-0.5" />
										</span>
									</a>
								</Reveal>
							);
						})}
					</div>

					<Reveal delay={0.16}>
						<div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
							<p className="max-w-xl text-[1rem] leading-relaxed text-slate text-pretty">
								Everything gets built in the accounts you already own, then handed over. No platform to
								rent from me.
							</p>
							<Btn to="/services" variant="outline-dark" size="lg">
								All services in detail
								<ArrowRight className="h-4 w-4" />
							</Btn>
						</div>
					</Reveal>
				</Container>
			</Section>

			{/* ------------------------------ HOW IT WORKS --------------------------- */}
			<Section>
				<Container className="py-24 md:py-32">
					<Reveal>
						<SectionHeading
							eyebrow="05 / How it works"
							title="Four steps. The first two cost you nothing."
							lede="You find out whether I'm useful before any money changes hands."
						/>
					</Reveal>

					<div className="mt-16 grid gap-5 md:grid-cols-2">
						{steps.map((s, i) => (
							<Reveal key={s.label} delay={i * 0.06} className="h-full">
								<TickCard className="h-full">
									<div className="flex items-start justify-between gap-4">
										<div className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-ctl)] border border-amber/40 bg-amber/10">
											<s.icon className="h-[1.15rem] w-[1.15rem] text-amber" />
										</div>
										<div className="eyebrow pt-1 text-steel/50">{String(i + 1).padStart(2, "0")}</div>
									</div>
									<h3 className="mt-6 text-[1.375rem] leading-tight">{s.label}</h3>
									<div className="eyebrow mt-2.5 text-amber">{s.time}</div>
									<p className="mt-4 text-[1rem] leading-relaxed text-steel text-pretty">{s.body}</p>
								</TickCard>
							</Reveal>
						))}
					</div>

					<Reveal delay={0.1}>
						<div className="mt-10">
							<Btn to="/how-it-works" variant="outline" size="lg">
								See the full 30-day build
								<ArrowRight className="h-4 w-4" />
							</Btn>
						</div>
					</Reveal>
				</Container>
			</Section>
		</>
	);
}
