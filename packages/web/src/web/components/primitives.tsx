import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "wouter";
import { cn } from "../lib/utils";

/* ------------------------------- Reveal ---------------------------------- */

export function Reveal({
	children,
	delay = 0,
	className,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
}) {
	const reduce = useReducedMotion();
	if (reduce) return <div className={className}>{children}</div>;
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
		>
			{children}
		</motion.div>
	);
}

/* ------------------------------- Eyebrow --------------------------------- */

export function Eyebrow({
	children,
	tone = "amber",
	className,
}: {
	children: ReactNode;
	tone?: "amber" | "steel" | "slate";
	className?: string;
}) {
	return (
		<div
			className={cn(
				"eyebrow flex items-center gap-2.5",
				tone === "amber" && "text-amber",
				tone === "steel" && "text-steel",
				tone === "slate" && "text-slate",
				className,
			)}
		>
			<span
				className={cn(
					"h-px w-6",
					tone === "amber" ? "bg-amber" : tone === "steel" ? "bg-steel/50" : "bg-slate/40",
				)}
			/>
			{children}
		</div>
	);
}

/* ------------------------------- Buttons --------------------------------- */

type BtnProps = {
	children: ReactNode;
	to?: string;
	href?: string;
	onClick?: () => void;
	variant?: "amber" | "outline" | "outline-dark" | "ghost";
	size?: "md" | "lg";
	className?: string;
	type?: "button" | "submit";
	disabled?: boolean;
};

const btnBase =
	"group inline-flex items-center justify-center gap-2 font-body font-semibold rounded-[var(--radius-ctl)] transition-all duration-200 active:scale-[0.985] disabled:opacity-55 disabled:cursor-not-allowed disabled:active:scale-100 whitespace-nowrap";

const variants = {
	amber: "bg-amber text-ink hover:bg-amber-deep hover:text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset]",
	outline: "border border-white/20 text-paper hover:border-amber hover:text-amber bg-white/[0.02]",
	"outline-dark": "border border-ink/20 text-ink hover:border-amber hover:text-amber-deep",
	ghost: "text-steel hover:text-paper",
} as const;

const sizes = {
	md: "px-5 py-2.5 text-[0.9375rem]",
	lg: "px-7 py-3.5 text-[1rem]",
} as const;

export function Btn({
	children,
	to,
	href,
	onClick,
	variant = "amber",
	size = "md",
	className,
	type = "button",
	disabled,
}: BtnProps) {
	const classes = cn(btnBase, variants[variant], sizes[size], className);
	if (to) {
		return (
			<Link to={to} className={classes}>
				{children}
			</Link>
		);
	}
	if (href) {
		return (
			<a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
				{children}
			</a>
		);
	}
	return (
		<button type={type} onClick={onClick} disabled={disabled} className={classes}>
			{children}
		</button>
	);
}

/* ------------------------------- Sections -------------------------------- */

export function Section({
	children,
	tone = "ink",
	className,
	id,
}: {
	children: ReactNode;
	tone?: "ink" | "paper" | "raise";
	className?: string;
	id?: string;
}) {
	return (
		<section
			id={id}
			className={cn(
				"relative",
				tone === "ink" && "bg-ink text-paper",
				tone === "raise" && "bg-ink-raise text-paper",
				tone === "paper" && "bg-paper text-ink",
				className,
			)}
		>
			{children}
		</section>
	);
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
	return <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-10", className)}>{children}</div>;
}

export function SectionHeading({
	eyebrow,
	title,
	lede,
	tone = "ink",
	align = "left",
	className,
}: {
	eyebrow?: string;
	title: ReactNode;
	lede?: ReactNode;
	tone?: "ink" | "paper";
	align?: "left" | "center";
	className?: string;
}) {
	return (
		<div
			className={cn(
				"max-w-3xl",
				align === "center" && "mx-auto text-center",
				className,
			)}
		>
			{eyebrow && (
				<Eyebrow
					tone={tone === "paper" ? "slate" : "amber"}
					className={cn("mb-5", align === "center" && "justify-center")}
				>
					{eyebrow}
				</Eyebrow>
			)}
			<h2 className="text-[clamp(2rem,3.6vw,3.15rem)] text-balance">{title}</h2>
			{lede && (
				<p
					className={cn(
						"mt-5 text-[1.0625rem] leading-relaxed text-pretty",
						tone === "paper" ? "text-slate" : "text-steel",
					)}
				>
					{lede}
				</p>
			)}
		</div>
	);
}

/* --------------------------------- Stat ---------------------------------- */

export function Stat({
	value,
	label,
	source,
	tone = "ink",
}: {
	value: string;
	label: string;
	source?: string;
	tone?: "ink" | "paper";
}) {
	return (
		<div className={cn("border-t pt-5", tone === "paper" ? "border-paper-line" : "border-white/10")}>
			<div className="font-display text-[clamp(2.1rem,4vw,3rem)] font-semibold leading-none text-amber">
				{value}
			</div>
			<div className={cn("mt-3 text-[0.9375rem] leading-snug", tone === "paper" ? "text-ink" : "text-paper")}>
				{label}
			</div>
			{source && (
				<div className={cn("eyebrow mt-2", tone === "paper" ? "text-slate/70" : "text-steel/70")}>{source}</div>
			)}
		</div>
	);
}

/* ------------------------------- StatCard --------------------------------
   Offset card composition borrowed from the reference design. The reference
   used it for invented metrics; here every card carries a real published
   source, which is the whole reason it earns the space. */

export function StatCard({
	value,
	label,
	source,
	tone = "paper",
	className,
}: {
	value: string;
	label: string;
	source: string;
	tone?: "paper" | "amber" | "ink";
	className?: string;
}) {
	return (
		<div
			className={cn(
				"flex h-full flex-col justify-between rounded-[var(--radius-card)] p-8 transition-transform duration-300 hover:-translate-y-1.5",
				tone === "paper" && "border border-paper-line bg-paper-raise shadow-[0_1px_2px_rgba(10,14,20,0.04)]",
				tone === "amber" && "bg-amber text-ink",
				tone === "ink" && "bg-ink text-paper",
				className,
			)}
		>
			<div
				className={cn(
					"font-display text-[clamp(2.4rem,4.4vw,3.4rem)] font-semibold leading-none tracking-tight",
					tone === "paper" && "text-ink",
					tone === "amber" && "text-ink",
					tone === "ink" && "text-amber",
				)}
			>
				{value}
			</div>
			<div
				className={cn(
					"mt-5 text-[0.9375rem] leading-snug",
					tone === "paper" && "text-slate",
					tone === "amber" && "text-ink/80",
					tone === "ink" && "text-steel",
				)}
			>
				{label}
			</div>
			<div
				className={cn(
					"eyebrow mt-6 border-t pt-3",
					tone === "paper" && "border-paper-line text-slate/60",
					tone === "amber" && "border-ink/15 text-ink/60",
					tone === "ink" && "border-white/12 text-steel/60",
				)}
			>
				{source}
			</div>
		</div>
	);
}

/* -------------------------------- Backdrop -------------------------------- */

export function GridBackdrop({ variant = "ink" }: { variant?: "ink" | "paper" }) {
	return (
		<div
			aria-hidden
			className={cn(
				"pointer-events-none absolute inset-0",
				variant === "ink" ? "blueprint fade-mask" : "blueprint-paper fade-mask-b",
			)}
		/>
	);
}

/* ---------------------------------- Card ---------------------------------- */

export function TickCard({
	children,
	tone = "ink",
	className,
}: {
	children: ReactNode;
	tone?: "ink" | "paper";
	className?: string;
}) {
	return (
		<div
			className={cn(
				"tick relative rounded-[var(--radius-card)] border p-8 transition-colors duration-300",
				tone === "paper"
					? "border-paper-line bg-paper-raise hover:border-amber/50"
					: "border-white/10 bg-white/[0.02] hover:border-amber/40",
				className,
			)}
		>
			{children}
		</div>
	);
}
