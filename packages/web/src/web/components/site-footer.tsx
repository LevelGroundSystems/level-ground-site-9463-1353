import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { nav, site } from "../lib/site";
import { Btn, Container, Eyebrow } from "./primitives";

export function SiteFooter() {
	return (
		<>
			{/* Closing CTA — contained rounded panel with a radial accent wash,
			    borrowed from the reference design's footer block. */}
			<section className="bg-ink">
				<Container className="py-16 md:py-24">
					<div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-white/10 bg-ink-raise px-8 py-16 md:px-14 md:py-20">
						<div aria-hidden className="pointer-events-none absolute inset-0 blueprint opacity-60" />
						<div
							aria-hidden
							className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(232,121,43,0.16),transparent_58%)]"
						/>
						<div className="relative grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
							<div>
								<Eyebrow className="mb-5">Free · No obligation · 15 minutes</Eyebrow>
								<h2 className="text-[clamp(1.9rem,3.4vw,2.85rem)] text-balance">
									I'll find the three biggest gaps
									<br />
									<span className="text-amber">before you pay me anything.</span>
								</h2>
								<p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-steel text-pretty">
									Start with a fifteen-minute call. If it's a fit, the diagnostic that follows is free
									too, and the write-up of what each gap is costing is yours to keep either way.
								</p>
							</div>
							<div className="flex flex-col gap-3 md:items-end">
								<Btn to="/contact" size="lg" className="w-full md:w-auto">
									Book a conversation
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
								</Btn>
								<a
									href={site.phoneHref}
									className="text-center text-[0.9375rem] text-steel transition-colors hover:text-paper md:text-right"
								>
									Or just call me — {site.phone}
								</a>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<footer className="bg-ink">
				<Container className="py-14">
					<div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
						<div>
							<div className="font-display text-[1.0625rem] font-semibold tracking-tight">
								Level Ground<span className="text-steel"> Systems</span>
							</div>
							<p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-steel">
								{site.longTagline} Built by Nate Villar — fifteen years carrying a sales number.
							</p>
							<div className="mt-5 flex items-start gap-2 text-[0.875rem] text-steel">
								<MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-amber" />
								<span>
									{site.location}
									<br />
									<span className="text-steel/70">
										{site.coverage}
										<br />
										{site.remote}
									</span>
								</span>
							</div>
						</div>

						<div>
							<div className="eyebrow mb-4 text-steel/70">Site</div>
							<div className="flex flex-col gap-2.5">
								<Link to="/" className="text-[0.9375rem] text-steel transition-colors hover:text-amber">
									Home
								</Link>
								{nav.map((item) => (
									<Link
										key={item.href}
										to={item.href}
										className="text-[0.9375rem] text-steel transition-colors hover:text-amber"
									>
										{item.label}
									</Link>
								))}
								<Link to="/contact" className="text-[0.9375rem] text-steel transition-colors hover:text-amber">
									Contact
								</Link>
							</div>
						</div>

						<div>
							<div className="eyebrow mb-4 text-steel/70">Direct</div>
							<div className="flex flex-col gap-2.5">
								<a
									href={site.phoneHref}
									className="flex items-center gap-2 text-[0.9375rem] text-steel transition-colors hover:text-amber"
								>
									<Phone className="h-3.5 w-3.5" />
									{site.phone}
								</a>
								<a
									href={`mailto:${site.email}`}
									className="flex items-center gap-2 break-all text-[0.9375rem] text-steel transition-colors hover:text-amber"
								>
									<Mail className="h-3.5 w-3.5 shrink-0" />
									{site.email}
								</a>
							</div>
						</div>
					</div>

					<div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.8125rem] text-steel/60 md:flex-row md:items-center md:justify-between">
						<span>
							© {new Date().getFullYear()} {site.name}. All rights reserved.
						</span>
						<span className="font-mono text-[0.75rem] tracking-wide">
							Systems for businesses that don't have a department for it
						</span>
					</div>
				</Container>
			</footer>
		</>
	);
}
