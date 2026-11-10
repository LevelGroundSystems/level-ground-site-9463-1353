import { ArrowRight, Phone } from "lucide-react";
import {
	Btn,
	Container,
	Eyebrow,
	GridBackdrop,
	Reveal,
	Section,
} from "../components/primitives";
import { nav, site } from "../lib/site";
import { usePageMeta } from "../lib/seo";

export default function NotFound() {
	usePageMeta({
		title: "Page not found | Level Ground Systems",
		description: "This page doesn't exist.",
		path: "/404",
		noindex: true,
	});
	return (
		<Section className="grid min-h-[80vh] place-items-center overflow-hidden pt-[72px]">
			<GridBackdrop />
			<Container className="relative py-20 text-center">
				<Reveal>
					<Eyebrow className="mb-6 justify-center">Error 404</Eyebrow>
					<h1 className="mx-auto max-w-2xl text-[clamp(2.2rem,4.6vw,3.6rem)] text-balance">
						This page went the way of an unanswered lead.
					</h1>
					<p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-steel text-pretty">
						Nothing lives at this address. The difference is that I'll get you back on track in one click
						instead of leaving you on hold.
					</p>
					<div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
						<Btn to="/" size="lg">
							Back to the homepage
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</Btn>
						<Btn href={site.phoneHref} variant="outline" size="lg">
							<Phone className="h-4 w-4" />
							{site.phone}
						</Btn>
					</div>
					<div className="mt-14 flex flex-wrap justify-center gap-x-7 gap-y-3 border-t border-white/10 pt-8">
						{nav.map((item) => (
							<Btn key={item.href} to={item.href} variant="ghost">
								{item.label}
							</Btn>
						))}
						<Btn to="/contact" variant="ghost">
							Contact
						</Btn>
					</div>
				</Reveal>
			</Container>
		</Section>
	);
}
