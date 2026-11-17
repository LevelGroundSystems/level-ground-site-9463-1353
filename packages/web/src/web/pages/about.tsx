import { ArrowRight, Phone } from "lucide-react";
import { Btn, Container, Eyebrow, GridBackdrop, Reveal, Section, TickCard } from "../components/primitives";
import { offer, site } from "../lib/site";
import { pageMeta, usePageMeta } from "../lib/seo";

const facts = [
	{ k: "Name", v: site.owner },
	{ k: "Based in", v: "Wilbraham, MA" },
	{ k: "Years in sales & marketing", v: "15" },
	{ k: "Languages", v: "English · Spanish" },
	{ k: "Education", v: "B.S. Business Management, George Mason University" },
];

export default function About() {
	usePageMeta(pageMeta.about);
	return (
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
							<Eyebrow className="mb-7">About</Eyebrow>
						</Reveal>
						<Reveal delay={0.06}>
							<h1 className="text-[clamp(2.4rem,5vw,4rem)] text-balance">
								Hi, I'm Nate.
								<span className="mt-2 block text-amber">I help owners work less and keep more.</span>
							</h1>
						</Reveal>
						<Reveal delay={0.12}>
							<div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-steel text-pretty">
								<p>
									I spent 15 years in sales and marketing, in building products, flooring, and
									software. At every company I saw the same thing: good businesses losing money to
									slow replies, forgotten follow-ups, and hours of repeat work.
								</p>
								<p>
									AI can now handle a lot of that for a small business, at a price that makes sense.
									I find where your time and money are leaking, set up the fix in the tools you
									already use, and train your team.
								</p>
								<p className="text-paper">
									You work with me directly, start to finish. I answer my own phone.
								</p>
							</div>
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
					</div>

					<Reveal delay={0.14}>
						<TickCard className="lg:mt-12">
							<div className="eyebrow text-amber">Quick facts</div>
							<dl className="mt-7 space-y-5">
								{facts.map((row) => (
									<div key={row.k} className="border-b border-white/[0.07] pb-4">
										<dt className="eyebrow text-steel/60">{row.k}</dt>
										<dd className="mt-1.5 font-display text-[1.0625rem] font-semibold leading-snug text-paper text-pretty">
											{row.v}
										</dd>
									</div>
								))}
							</dl>
						</TickCard>
					</Reveal>
				</div>
			</Container>
		</Section>
	);
}
