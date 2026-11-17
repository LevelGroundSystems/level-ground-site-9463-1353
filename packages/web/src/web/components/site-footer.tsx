import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";
import { nav, offer, site } from "../lib/site";
import { Btn, Container } from "./primitives";

export function SiteFooter() {
	const [location] = useLocation();
	return (
		<>
			{/* Closing CTA. Hidden on /contact, which is already the CTA. */}
			{location !== "/contact" && (
				<section className="bg-ink">
					<Container className="py-16 md:py-20">
						<div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-white/10 bg-ink-raise px-8 py-12 md:px-14 md:py-14">
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(232,121,43,0.16),transparent_58%)]"
							/>
							<div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
								<h2 className="max-w-xl text-[clamp(1.75rem,3vw,2.5rem)] text-balance">
									Where is your time going?
									<span className="block text-amber">Let's find out in {offer.introMinutes} minutes.</span>
								</h2>
								<div className="flex flex-col gap-3 md:items-end">
									<Btn href={site.bookingUrl} size="lg" className="w-full md:w-auto">
										Book a free call
										<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
									</Btn>
									<a
										href={site.phoneHref}
										className="text-center text-[0.9375rem] text-steel transition-colors hover:text-paper md:text-right"
									>
										Or call me: {site.phone}
									</a>
								</div>
							</div>
						</div>
					</Container>
				</section>
			)}

			<footer className="border-t border-white/10 bg-ink">
				<Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
					<div>
						<div className="font-display text-[1.0625rem] font-semibold tracking-tight">
							Level Ground<span className="text-steel"> Systems</span>
						</div>
						<div className="mt-1 text-[0.875rem] text-steel/70">
							© {new Date().getFullYear()} {site.name} · Wilbraham, MA
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9375rem] text-steel">
						{nav.map((item) => (
							<Link key={item.href} to={item.href} className="transition-colors hover:text-amber">
								{item.label}
							</Link>
						))}
						<a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-amber">
							<Phone className="h-3.5 w-3.5" />
							{site.phone}
						</a>
						<a
							href={`mailto:${site.email}`}
							className="flex items-center gap-2 transition-colors hover:text-amber"
						>
							<Mail className="h-3.5 w-3.5" />
							{site.email}
						</a>
					</div>
				</Container>
			</footer>
		</>
	);
}
