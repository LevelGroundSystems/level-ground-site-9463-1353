import { ArrowUpRight, CalendarClock, Mail, Phone } from "lucide-react";
import { Btn, Container, Eyebrow, GridBackdrop, Reveal, Section } from "../components/primitives";
import { offer, site } from "../lib/site";
import { pageMeta, usePageMeta } from "../lib/seo";

export default function Contact() {
	usePageMeta(pageMeta.contact);
	return (
		<Section className="overflow-hidden pt-[72px]">
			<GridBackdrop />
			<Container className="relative pb-20 pt-20 md:pb-28 md:pt-24">
				<div className="max-w-2xl">
					<Reveal>
						<Eyebrow className="mb-7">Contact</Eyebrow>
					</Reveal>
					<Reveal delay={0.06}>
						<h1 className="text-[clamp(2.4rem,5.2vw,4.2rem)] text-balance">
							Let's talk.
							<span className="mt-2 block text-amber">First call is free.</span>
						</h1>
					</Reveal>
					<Reveal delay={0.12}>
						<p className="mt-7 text-[1.125rem] leading-relaxed text-steel text-pretty">
							{offer.introMinutes} minutes. Tell me how your business runs and where your week goes.
							I'll tell you honestly if I can help.
						</p>
					</Reveal>
					<Reveal delay={0.18}>
						<div className="mt-10">
							<Btn href={site.bookingUrl} size="lg">
								<CalendarClock className="h-4 w-4" />
								Book a time on my calendar
								<ArrowUpRight className="h-4 w-4" />
							</Btn>
						</div>
					</Reveal>
					<Reveal delay={0.22}>
						<div className="mt-10 grid gap-3 sm:max-w-md">
							<a
								href={site.phoneHref}
								className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-amber"
							>
								<Phone className="h-4 w-4 flex-none text-amber" />
								<span className="font-display text-[1.0625rem] font-semibold text-paper">{site.phone}</span>
							</a>
							<a
								href={`mailto:${site.email}?subject=Intro%20call`}
								className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-amber"
							>
								<Mail className="h-4 w-4 flex-none text-amber" />
								<span className="break-all text-[0.9375rem] font-medium text-paper">{site.email}</span>
							</a>
						</div>
					</Reveal>
				</div>
			</Container>
		</Section>
	);
}
