import { ArrowRight, Ban, Repeat, Wrench } from "lucide-react";
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

type Row = { name: string; does: string; outcome: string };

const salesMarketing: Row[] = [
	{
		name: "Inquiry response & follow-through",
		does: "Every call, form, and message gets an immediate, personal reply. Missed calls get a text back inside a minute.",
		outcome: "You stop losing work to whoever answered first",
	},
	{
		name: "Quote & proposal follow-up",
		does: "Polite, persistent follow-up on every open quote until there's a yes or a no. The fifth touch nobody has time to make.",
		outcome: "The quotes you already wrote start closing",
	},
	{
		name: "Outbound & appointment setting",
		does: "Steady outreach to the accounts you want, booking qualified conversations straight onto your calendar.",
		outcome: "A pipeline that survives a slow week",
	},
	{
		name: "Email marketing & newsletters",
		does: "Your list finally gets used: a monthly send, post-job follow-up, review requests, service reminders.",
		outcome: "Past customers turn into repeat work",
	},
	{
		name: "Social content & posting",
		does: "The work you already do every day becomes scheduled content, without anyone sitting down to write it.",
		outcome: "You stop looking inactive",
	},
];

const operations: Row[] = [
	{
		name: "Admin & data entry",
		does: "Information stops being typed twice. Intake, records, and invoicing flow between the tools you already use.",
		outcome: "Hours back, fewer mistakes",
	},
	{
		name: "Communication",
		does: "Drafting, summarizing, and routing, so messages get answered properly and fast.",
		outcome: "Nothing sits in an inbox for three days",
	},
	{
		name: "Scheduling & reminders",
		does: "Booking, confirmations, reminders, and service-due nudges, all running without anyone chasing.",
		outcome: "Fuller calendar, fewer gaps, less phone tag",
	},
	{
		name: "Reporting",
		does: "The numbers that matter arrive weekly — leads, response times, quotes out, quotes closed — without anyone building a spreadsheet.",
		outcome: "You run on facts, not feel",
	},
	{
		name: "Repetitive task automation",
		does: "The specific recurring jobs eating your team's day, found in the diagnostic and removed one at a time.",
		outcome: "Your people do the work that actually grows the business",
	},
];

const notFor = [
	{
		title: "Under three people",
		body: "At one or two people the work still fits in your head, so there isn't enough repeating process to systematize yet. Come back when you've hired.",
	},
	{
		title: "Large companies",
		body: "Once you have IT, procurement, and vendors on retainer, I'd be competing on the one axis where I lose.",
	},
	{
		title: "Businesses with no demand at all",
		body: "If nobody is calling and there's no customer list, systems have nothing to work with. That's a marketing problem first, and I'll say so.",
	},
	{
		title: "Anyone who just wants a chatbot",
		body: "That's a feature request, not a business problem. It ends with you paying for something nobody uses.",
	},
];

function PillarTable({ rows, tone }: { rows: Row[]; tone: "ink" | "paper" }) {
	const line = tone === "paper" ? "border-paper-line" : "border-white/[0.07]";
	return (
		<div className={`mt-12 border-t ${tone === "paper" ? "border-paper-line" : "border-white/12"}`}>
			{rows.map((r, i) => (
				<Reveal key={r.name} delay={i * 0.04}>
					<div className={`grid gap-4 border-b ${line} py-8 md:grid-cols-[1fr_1.35fr] md:gap-10`}>
						<div>
							<div className="eyebrow mb-3 text-amber">{String(i + 1).padStart(2, "0")}</div>
							<h3 className="text-[1.3125rem] leading-tight">{r.name}</h3>
						</div>
						<div>
							<p
								className={`text-[1.0625rem] leading-relaxed text-pretty ${
									tone === "paper" ? "text-ink/85" : "text-steel"
								}`}
							>
								{r.does}
							</p>
							<div
								className={`mt-4 inline-flex items-start gap-2.5 border-l-2 border-amber pl-3.5 text-[0.9375rem] font-semibold ${
									tone === "paper" ? "text-ink" : "text-paper"
								}`}
							>
								{r.outcome}
							</div>
						</div>
					</div>
				</Reveal>
			))}
		</div>
	);
}

export default function Services() {
	return (
		<>
			{/* -------------------------------- HEADER ------------------------------- */}
			<Section className="overflow-hidden pt-[72px]">
				<GridBackdrop />
				<Container className="relative pb-20 pt-20 md:pb-24 md:pt-24">
					<div className="max-w-3xl">
						<Reveal>
							<Eyebrow className="mb-7">01 / Services</Eyebrow>
						</Reveal>
						<Reveal delay={0.06}>
							<h1 className="text-[clamp(2.4rem,5vw,4rem)] text-balance">
								The systems big companies pay teams to run.
								<span className="mt-2 block text-amber">Built for a business your size.</span>
							</h1>
						</Reveal>
						<Reveal delay={0.12}>
							<p className="mt-8 text-[1.125rem] leading-relaxed text-steel text-pretty">
								Two pillars. Sales and marketing is the specialty — it attaches to revenue.
								Operations gives you your evenings back. Most jobs touch both.
							</p>
						</Reveal>
					</div>
				</Container>
			</Section>

			{/* ------------------------------- PILLAR 1 ------------------------------ */}
			<Section tone="paper">
				<Container className="py-24 md:py-32">
					<Reveal>
						<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
							<SectionHeading
								tone="paper"
								eyebrow="Pillar 01 — the specialty"
								title="Sales & marketing"
								lede="Response time, follow-up, and what a good message says. Wiring the tool is the easy part. Knowing what to send, and when, is the job."
							/>
						</div>
					</Reveal>
					<PillarTable rows={salesMarketing} tone="paper" />
				</Container>
			</Section>

			{/* ------------------------------- PILLAR 2 ------------------------------ */}
			<Section className="overflow-hidden">
				<GridBackdrop />
				<Container className="relative py-24 md:py-32">
					<Reveal>
						<SectionHeading
							eyebrow="Pillar 02"
							title="Operations & efficiency"
							lede="The work that fills a day without moving the business. You feel this one fastest, so it's usually where we start."
						/>
					</Reveal>
					<PillarTable rows={operations} tone="ink" />
				</Container>
			</Section>

			{/* ---------------------------- BUILD VS MONTHLY ------------------------- */}
			<Section tone="paper">
				<Container className="py-24 md:py-28">
					<Reveal>
						<SectionHeading
							tone="paper"
							eyebrow="Straight answer"
							title="What's built once, and what's ongoing"
							lede="Worth being clear about before you sign anything, because plenty of agencies aren't."
						/>
					</Reveal>
					<div className="mt-14 grid gap-6 md:grid-cols-2">
						<Reveal className="h-full">
							<div className="flex h-full flex-col rounded-[var(--radius-card)] border border-paper-line bg-paper-raise p-8 md:p-10">
								<div className="grid h-11 w-11 place-items-center rounded-[var(--radius-ctl)] border border-ink/12 bg-paper">
									<Wrench className="h-[1.15rem] w-[1.15rem] text-amber" />
								</div>
								<div className="eyebrow mt-6 text-slate/70">Install once</div>
								<h3 className="mt-3 text-[1.5rem] leading-tight">It's built, then it runs</h3>
								<p className="mt-4 text-[1.0625rem] leading-relaxed text-slate text-pretty">
									Inquiry response, missed-call text-back, quote follow-up, scheduling, admin flows,
									task automation. Built in the {offer.buildDays}-day build, handed over, and they keep
									working whether or not you keep me on.
								</p>
							</div>
						</Reveal>
						<Reveal delay={0.08} className="h-full">
							<div className="flex h-full flex-col rounded-[var(--radius-card)] border-2 border-amber/60 bg-paper-raise p-8 md:p-10">
								<div className="grid h-11 w-11 place-items-center rounded-[var(--radius-ctl)] border border-amber/40 bg-amber/10">
									<Repeat className="h-[1.15rem] w-[1.15rem] text-amber" />
								</div>
								<div className="eyebrow mt-6 text-amber">Recurring production</div>
								<h3 className="mt-3 text-[1.5rem] leading-tight">Somebody makes new work every month</h3>
								<p className="mt-4 text-[1.0625rem] leading-relaxed text-slate text-pretty">
									Email marketing, social content, and reporting need new material every month,
									forever. So the proposal states exactly how much is included — how many sends, how
									many posts — and anything past that gets quoted and approved before it runs. You'll
									never find out what the limit was by reading an invoice.
								</p>
							</div>
						</Reveal>
					</div>
				</Container>
			</Section>

			{/* ------------------------------ WHO IT'S NOT --------------------------- */}
			<Section>
				<Container className="py-24 md:py-32">
					<div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
						<Reveal>
							<Eyebrow className="mb-6">Fit</Eyebrow>
							<h2 className="text-[clamp(1.9rem,3.4vw,2.85rem)] text-balance">
								Who this isn't for
							</h2>
							<p className="mt-6 text-[1.0625rem] leading-relaxed text-steel text-pretty">
								Saying no is what makes the yes worth anything. If you're one of these, I'll tell you
								on the first call rather than take the money.
							</p>
							<Btn to="/contact" size="lg" className="mt-9">
								Everyone else — book a conversation
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
							</Btn>
						</Reveal>
						<div className="grid gap-5 sm:grid-cols-2">
							{notFor.map((n, i) => (
								<Reveal key={n.title} delay={i * 0.05} className="h-full">
									<div className="h-full rounded-[var(--radius-card)] border border-white/10 bg-white/[0.02] p-7">
										<Ban className="h-4 w-4 text-steel/50" />
										<h3 className="mt-4 text-[1.125rem] leading-snug">{n.title}</h3>
										<p className="mt-2.5 text-[0.9375rem] leading-relaxed text-steel text-pretty">
											{n.body}
										</p>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</Container>
			</Section>

			{/* ------------------------------- PRICING ------------------------------- */}
			<Section tone="raise">
				<Container className="py-20 md:py-24">
					<Reveal>
						<TickCard className="mx-auto max-w-3xl text-center">
							<div className="eyebrow text-amber">On price</div>
							<h2 className="mx-auto mt-5 max-w-2xl text-[clamp(1.6rem,2.8vw,2.25rem)] text-balance">
								There's no pricing page, and that's deliberate.
							</h2>
							<p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-steel text-pretty">
								A five-person shop that wants quote follow-up and a forty-person company rebuilding
								operations aren't the same job. I price it once I know what the work is — that's what
								the free diagnostic is for. You'll have a number before anyone commits to anything.
							</p>
							<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
								<Btn to="/contact" size="lg">
									Get the diagnostic
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
								</Btn>
								<Btn href={site.phoneHref} variant="ghost" size="lg">
									Or call {site.phone}
								</Btn>
							</div>
						</TickCard>
					</Reveal>
				</Container>
			</Section>
		</>
	);
}
