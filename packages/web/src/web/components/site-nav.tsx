import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "../lib/utils";
import { nav, site } from "../lib/site";
import { Btn } from "./primitives";

/* Logo mark: a spirit-level line with the bubble centered — the business is
   named for putting a small company on even footing, so the mark is the tool
   that proves something is level. Same badge shape and size as before. */
function LevelMark({ className }: { className?: string }) {
	return (
		<span
			className={cn(
				"relative grid h-8 w-8 shrink-0 place-items-center border border-amber/60 bg-amber/10",
				className,
			)}
		>
			<svg
				viewBox="0 0 24 24"
				aria-hidden
				className="h-[1.3125rem] w-[1.3125rem] text-amber"
				fill="none"
				stroke="currentColor"
				strokeWidth="2.1"
				strokeLinecap="square"
			>
				<line x1="2" y1="12" x2="7.6" y2="12" />
				<line x1="16.4" y1="12" x2="22" y2="12" />
				<circle cx="12" cy="12" r="3.5" strokeWidth="1.9" />
			</svg>
			<span className="absolute -bottom-px -right-px h-2 w-2 border-b-[1.5px] border-r-[1.5px] border-amber" />
		</span>
	);
}

function Wordmark() {
	return (
		<Link to="/" className="group flex items-center gap-2.5">
			<LevelMark />
			<span className="font-display text-[1.0625rem] font-semibold tracking-tight text-paper">
				Level Ground<span className="text-steel"> Systems</span>
			</span>
		</Link>
	);
}

export function SiteNav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [location] = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => setOpen(false), [location]);

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-0 z-50 transition-all duration-300",
				scrolled ? "border-b border-white/10 bg-ink/92 backdrop-blur-xl" : "border-b border-transparent",
			)}
		>
			<div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-6 md:px-10">
				<Wordmark />

				<nav className="hidden items-center gap-1 lg:flex">
					{nav.map((item) => (
						<Link
							key={item.href}
							to={item.href}
							className={cn(
								"px-3.5 py-2 text-[0.9375rem] font-medium transition-colors",
								location === item.href ? "text-amber" : "text-steel hover:text-paper",
							)}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="hidden items-center gap-3 lg:flex">
					<a
						href={site.phoneHref}
						className="flex items-center gap-2 text-[0.9375rem] font-medium text-steel transition-colors hover:text-paper"
					>
						<Phone className="h-3.5 w-3.5" />
						{site.phone}
					</a>
					<Btn to="/contact" variant="amber">
						Book a conversation
					</Btn>
				</div>

				<button
					type="button"
					aria-label="Menu"
					onClick={() => setOpen((v) => !v)}
					className="grid h-10 w-10 place-items-center border border-white/15 text-paper lg:hidden"
				>
					{open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
				</button>
			</div>

			{open && (
				<div className="border-t border-white/10 bg-ink/98 backdrop-blur-xl lg:hidden">
					<div className="flex flex-col px-6 py-4">
						{nav.map((item) => (
							<Link
								key={item.href}
								to={item.href}
								className="border-b border-white/[0.07] py-3.5 text-[1.0625rem] font-medium text-paper"
							>
								{item.label}
							</Link>
						))}
						<a href={site.phoneHref} className="border-b border-white/[0.07] py-3.5 text-[1.0625rem] text-steel">
							{site.phone}
						</a>
						<Btn to="/contact" variant="amber" size="lg" className="mt-5">
							Book a conversation
						</Btn>
					</div>
				</div>
			)}
		</header>
	);
}
