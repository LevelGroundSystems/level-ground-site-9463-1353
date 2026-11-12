import { ArrowRight, GraduationCap, Languages, MapPin, Phone } from "lucide-react";
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
import { site } from "../lib/site";
import { pageMeta, usePageMeta } from "../lib/seo";

const why = [
	{
		title: "A sales guy built this, not a technologist",
		body: "Fifteen years carrying a number. Most AI shops are technical people who learned sales from a course. I know which gaps cost you money and which ones just look untidy.",
	},
	{
		title: "Systems, not another subscription",
		body: "I build inside the tools you already own, hand it over, and train your team. Nothing new to rent from me.",
	},
	{
		title: "I'll say it in plain English",
		body: "No agentic workflows, no LLM talk. That vocabulary makes owners feel stupid. Hours back and quotes closed is how I'd rather talk.",
	},
	{
		title: "Free work before any money",
		body: "A short call, then a real audit of where the business leaks — written up and yours either way.",
	},
	{
		title: "You get me",
		body: "No account manager, no handoff to a junior. The person who diagnoses it builds it, and you have his cell number.",
	},
	{
		title: "I'd rather tell you no",
		body: "If it's a capacity or product problem instead of a systems problem, I'll say so on the first call.",
	},
];

export default function About() {
	usePageMeta(pageMeta.about);
	return (
		<>
			{/* ------------------------------- HEADER ------------------------------ */}
			<Section className="overflow-hidden pt-[72px]">
				<GridBackdrop />
				<div
					aria-hidden
					className="pointer-events-none absolute -right-40 top-0 h-[460px] w-[460px] rounded-full bg-amber/[0.06] blur-[130px]"
				/>
				<Container className="relative pb-20 pt-20 md:pb-24 md:pt-24">
					<div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-20">
						<div>
							<Reveal>
								<Eyebrow className="mb-7">04 / About</Eyebrow>
							</Reveal>
							<Reveal delay={0.06}>
								<h1 className="text-[clamp(2.4rem,5vw,4rem)] text-balance">
									Hi, I'm Nate. Fifteen years in sales rooms —
									<span className="mt-2 block text-amber">
										and honestly, I've been like this my whole life.
									</span>
								</h1>
							</Reveal>
							<Reveal delay={0.12}>
								<div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-steel text-pretty">
									<p>
										If something takes five steps and two would do, it nags at me until it's fixed.
										Efficiency and effectiveness were habits long before either one was a job — and
										every job since has been some version of the same work.
									</p>
									<p>
										Two things kept pulling at me. The first is the waste — the retyping, the
										double entry, the four steps that should be one. Nobody ever chose to work that
										way. It just built up over the years and became how things are done.
									</p>
									<p>
										The second one costs more, which is why it became my specialty. Building
										products, flooring, B2B software, a stretch selling AI analysis software to
										government buyers — every one of them lost work the same boring way. Not on
										price, not on quality. Someone answered slower than a competitor, or a quote
										went out and nobody chased it.
									</p>
									<p>
										A smaller company would tell me it needed more leads while an inquiry it had
										already paid for sat in an inbox for two days, because the owner was doing four
										jobs at once. That's not a talent problem. That's a process problem wearing a
										sales problem's clothes, and process is the thing I can't leave alone.
									</p>
									<p>
										At the flooring contractor I finally got to fix both from the inside, and it
										worked. {site.name} is that same work, in the same order: take the waste out of
										the week, then make sure the business is faster than whoever it's bidding
										against.
									</p>
									<p className="text-paper">
										That's where the name comes from. A three-person shop and a three-hundred-person
										competitor can now answer a customer just as fast, follow up just as long, and
										run just as tight. Same footing. That wasn't true five years ago.
									</p>
								</div>
							</Reveal>
							<Reveal delay={0.18}>
								<div className="mt-10 flex flex-col gap-3 sm:flex-row">
									<Btn to="/contact" size="lg">
										Book a conversation
										<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
									</Btn>
									<Btn href={site.phoneHref} variant="outline" size="lg">
										<Phone className="h-4 w-4" />
										{site.phone}
									</Btn>
								</div>
							</Reveal>
						</div>

						<Reveal delay={0.14}>
							<TickCard className="lg:mt-12">
								<div className="eyebrow text-amber">A few facts</div>
								<dl className="mt-7 space-y-5">
									{[
										{ k: "Name", v: site.owner },
										{ k: "Based in", v: site.location },
										{ k: "Years in sales", v: "15" },
										{ k: "Working with", v: "Owner-operated SMBs, 3–50 people" },
										{
											k: "Languages",
											v: "English · Spanish",
											sub: [
												"Can defend myself in Portuguese & Galician",
												"French in progress",
												"Farsi next",
											],
										},
									].map((row) => (
										<div key={row.k} className="border-b border-white/[0.07] pb-4">
											<dt className="eyebrow text-steel/60">{row.k}</dt>
											<dd className="mt-1.5 font-display text-[1.0625rem] font-semibold leading-snug text-paper text-pretty">
												{row.v}
											</dd>
											{row.sub?.map((line) => (
												<dd
													key={line}
													className="mt-1 text-[0.875rem] leading-snug text-steel text-pretty"
												>
													{line}
												</dd>
											))}
										</div>
									))}
								</dl>
								<p className="mt-6 text-[0.9375rem] leading-relaxed text-steel text-pretty">
									I answer my own phone. If you get voicemail I'm on another call, and you'll hear
									back the same day.
								</p>
								<div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem] text-steel">
									<span className="flex items-center gap-2">
										<GraduationCap className="h-3.5 w-3.5 text-amber" />
										B.S. Business Management, George Mason University
									</span>
									<span className="flex items-center gap-2">
										<Languages className="h-3.5 w-3.5 text-amber" />
										Five languages
									</span>
									<span className="flex items-center gap-2">
										<MapPin className="h-3.5 w-3.5 text-amber" />
										{site.location}
									</span>
								</div>
							</TickCard>
						</Reveal>
					</div>
				</Container>
			</Section>

			{/* -------------------------------- WHY -------------------------------- */}
			<Section className="overflow-hidden">
				<GridBackdrop />
				<Container className="relative py-24 md:py-32">
					<Reveal>
						<SectionHeading
							eyebrow="Why me"
							title="Why one person over an AI agency"
							lede="I've done the job these systems are replacing, and you'll never get handed to a junior."
						/>
					</Reveal>

					<div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
						{why.map((w, i) => (
							<Reveal key={w.title} delay={i * 0.04} className="h-full">
								<div className="h-full border border-white/10 bg-white/[0.02] p-7">
									<div className="eyebrow text-amber">{String(i + 1).padStart(2, "0")}</div>
									<h3 className="mt-4 text-[1.125rem] leading-snug">{w.title}</h3>
									<p className="mt-2.5 text-[0.9375rem] leading-relaxed text-steel text-pretty">
										{w.body}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</Container>
			</Section>

			{/* ------------------------------- CANDOR ------------------------------ */}
			<Section tone="paper">
				<Container className="py-24 md:py-32">
					<div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
						<Reveal>
							<SectionHeading
								tone="paper"
								eyebrow="Full disclosure"
								title="What I'd want to know if I were you"
							/>
						</Reveal>
						<Reveal delay={0.08}>
							<div className="space-y-6 text-[1.0625rem] leading-relaxed text-slate text-pretty">
								<p>
									<strong className="font-semibold text-ink">The firm is newer than the work.</strong>{" "}
									Fifteen years of this, built inside other people's companies, where the results
									stayed on their books and not in my portfolio. So I won't show you a wall of logos
									and I won't borrow anybody else's. I'd rather you judge me on free work you can
									hold in your hand before you spend a dollar.
								</p>
								<p>
									<strong className="font-semibold text-ink">I don't build the AI.</strong> I wire
									together tools that already exist, the way a good builder doesn't manufacture the
									windows. The value is knowing which parts to use, and in what order.
								</p>
								<p>
									<strong className="font-semibold text-ink">
										Everything is built in accounts you own.
									</strong>{" "}
									Your CRM, your number, your data, plus a written handover doc. Nothing is stuck
									behind my login, and you can end it whenever you want without losing a thing.
								</p>
								<p>
									<strong className="font-semibold text-ink">
										I'll tell you if you're not a fit.
									</strong>{" "}
									Under about three people the work still fits in your head, so there usually isn't
									enough repeating process for this to pay for itself. I'd rather say that on a free
									call than take your money.
								</p>
							</div>
						</Reveal>
					</div>
				</Container>
			</Section>
		</>
	);
}
