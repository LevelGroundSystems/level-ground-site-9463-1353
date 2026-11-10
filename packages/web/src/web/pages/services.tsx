import { ArrowRight, Ban, Check, Repeat, Wrench } from "lucide-react";
import { useEffect } from "react";
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
import { serviceIcons } from "../lib/service-icons";
import { services, site } from "../lib/site";
import { usePageMeta } from "../lib/seo";

const notFor = [
	{
		title: "Large companies",
		body: "Once you have IT, procurement, and agencies on retainer, I'd be competing on the one axis where I lose.",
	},
	{
		title: "Anyone who just wants a chatbot",
		body: "That's a feature request, not a business problem. It ends with you paying for something nobody uses.",
	},
];

export default function Services() {
	usePageMeta({
		title: "Services — Websites, Social Media, AI Training & Lead Generation | Level Ground Systems",
		description: "Four services for small businesses: websites, social media, responsible AI enablement training, and lead generation. See what's included in each.",
		path: "/services",
	});
	/* Links like /services#websites: jump to that section once it has rendered. */
	useEffect(() => {
		const id = window.location.hash.slice(1);
		if (!id) return;
		const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
		return () => window.clearTimeout(t);
	}, []);

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
								Four services.
								<span className="mt-2 block text-amber">One goal: level the playing field.</span>
							</h1>
						</Reveal>
						<Reveal delay={0.12}>
							<p className="mt-8 text-[1.125rem] leading-relaxed text-steel text-pretty">
								Everything here helps a small business look, sell, and work like a much bigger one.
								Pick one, or combine them.
							</p>
						</Reveal>
					</div>

					<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{services.map((svc, i) => {
							const Icon = serviceIcons[svc.id];
							return (
								<Reveal key={svc.id} delay={0.14 + i * 0.05} className="h-full">
									<a
										href={`#${svc.id}`}
										className="group flex h-full flex-col border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-amber/60"
									>
										<div className="grid h-11 w-11 place-items-center rounded-[var(--radius-ctl)] border border-amber/40 bg-amber/10">
											<Icon className="h-[1.15rem] w-[1.15rem] text-amber" />
										</div>
										<h2 className="mt-5 text-[1.25rem] leading-tight">{svc.name}</h2>
										<p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-steel text-pretty">
											{svc.short}
										</p>
										<span className="mt-4 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-amber">
											Details
											<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
										</span>
									</a>
								</Reveal>
							);
						})}
					</div>
				</Container>
			</Section>

			{/* ------------------------------- SERVICES ------------------------------ */}
			{services.map((svc, i) => {
				const Icon = serviceIcons[svc.id];
				const paper = i % 2 === 0;
				return (
					<Section
						key={svc.id}
						tone={paper ? "paper" : undefined}
						className={paper ? undefined : "overflow-hidden"}
					>
						{!paper && <GridBackdrop />}
						<div id={svc.id} className="relative scroll-mt-[72px]">
							<Container className="py-24 md:py-28">
								<div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
									<Reveal>
										<div
											className={`grid h-12 w-12 place-items-center rounded-[var(--radius-ctl)] border ${
												paper ? "border-ink/12 bg-paper-raise" : "border-amber/40 bg-amber/10"
											}`}
										>
											<Icon className="h-5 w-5 text-amber" />
										</div>
										<div className={`eyebrow mt-6 ${paper ? "text-slate/70" : "text-steel/60"}`}>
											Service {String(i + 1).padStart(2, "0")}
										</div>
										<h2 className="mt-3 text-[clamp(1.9rem,3.4vw,2.85rem)] leading-tight text-balance">
											{svc.name}
										</h2>
										<p
											className={`mt-5 text-[1.125rem] leading-relaxed text-pretty ${
												paper ? "text-slate" : "text-steel"
											}`}
										>
											{svc.body}
										</p>
										<div
											className={`mt-7 inline-flex border-l-2 border-amber pl-3.5 text-[1rem] font-semibold ${
												paper ? "text-ink" : "text-paper"
											}`}
										>
											{svc.outcome}
										</div>
									</Reveal>
									<Reveal delay={0.08}>
										<div
											className={`rounded-[var(--radius-card)] p-8 md:p-10 ${
												paper
													? "border border-paper-line bg-paper-raise"
													: "border border-white/10 bg-white/[0.02]"
											}`}
										>
											<div className="eyebrow text-amber">What's included</div>
											<ul className="mt-6 space-y-4">
												{svc.includes.map((item) => (
													<li key={item} className="flex items-start gap-3">
														<Check className="mt-1 h-4 w-4 shrink-0 text-amber" />
														<span
															className={`text-[1.0625rem] leading-snug ${
																paper ? "text-ink/85" : "text-paper/90"
															}`}
														>
															{item}
														</span>
													</li>
												))}
											</ul>
											<Btn
												to="/contact"
												variant={paper ? "outline-dark" : "outline"}
												className="mt-9"
											>
												Ask about {svc.cta}
												<ArrowRight className="h-4 w-4" />
											</Btn>
										</div>
									</Reveal>
								</div>
							</Container>
						</div>
					</Section>
				);
			})}

			{/* ---------------------------- BUILD VS MONTHLY ------------------------- */}
			<Section tone="raise">
				<Container className="py-24 md:py-28">
					<Reveal>
						<SectionHeading
							eyebrow="Straight answer"
							title="What's built once, and what's ongoing"
							lede="Worth being clear about before you sign anything, because plenty of agencies aren't."
						/>
					</Reveal>
					<div className="mt-14 grid gap-6 md:grid-cols-2">
						<Reveal className="h-full">
							<TickCard className="h-full">
								<div className="grid h-11 w-11 place-items-center rounded-[var(--radius-ctl)] border border-amber/40 bg-amber/10">
									<Wrench className="h-[1.15rem] w-[1.15rem] text-amber" />
								</div>
								<div className="eyebrow mt-6 text-steel/60">Built once</div>
								<h3 className="mt-3 text-[1.5rem] leading-tight">It's built, then it's yours</h3>
								<p className="mt-4 text-[1.0625rem] leading-relaxed text-steel text-pretty">
									Your website, your social profiles, your lead follow-up systems, and the training
									itself. Built in your own accounts and handed over, so they keep working whether or
									not you keep me on.
								</p>
							</TickCard>
						</Reveal>
						<Reveal delay={0.08} className="h-full">
							<TickCard className="h-full">
								<div className="grid h-11 w-11 place-items-center rounded-[var(--radius-ctl)] border border-amber/40 bg-amber/10">
									<Repeat className="h-[1.15rem] w-[1.15rem] text-amber" />
								</div>
								<div className="eyebrow mt-6 text-amber">Ongoing, monthly</div>
								<h3 className="mt-3 text-[1.5rem] leading-tight">Some work is new every month</h3>
								<p className="mt-4 text-[1.0625rem] leading-relaxed text-steel text-pretty">
									Social posting, outreach, and website care need new work every month. So the
									proposal states exactly how much is included — how many posts, how much outreach —
									and anything past that gets quoted and approved before it runs. You'll never find
									out what the limit was by reading an invoice.
								</p>
							</TickCard>
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
							<h2 className="text-[clamp(1.9rem,3.4vw,2.85rem)] text-balance">Who this isn't for</h2>
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
								A simple site for a two-truck crew and lead generation for a forty-person company
								aren't the same job. I price it once I know what the work is, and you'll have a number
								before anyone commits to anything.
							</p>
							<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
								<Btn to="/contact" size="lg">
									Book a conversation
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
