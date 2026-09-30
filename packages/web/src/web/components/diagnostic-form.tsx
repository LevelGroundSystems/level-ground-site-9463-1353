import { ArrowRight, Check, Phone } from "lucide-react";
import { useState } from "react";
import { drags, focusAreas, offer, site, teamSizes } from "../lib/site";
import { useSubmitDiagnostic } from "../queries/diagnostics";
import { Btn } from "./primitives";

const base =
	"w-full rounded-[var(--radius-ctl)] border px-4 py-3 text-[1rem] transition-colors focus:border-amber focus:outline-none";

const arrow = (stroke: string) =>
	`appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22${stroke}%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:18px_18px] bg-[right_1rem_center] bg-no-repeat pr-11`;

/**
 * The form is dropped into both dark and light sections, so the controls come
 * in two skins. Dark inputs on a paper section read as invisible.
 */
const skins = {
	dark: {
		input: `${base} border-white/12 bg-white/[0.03] text-paper placeholder:text-steel/50`,
		label: "eyebrow mb-2 block text-steel/70",
		select: arrow("%238B9AAB"),
		body: "text-steel",
		fine: "text-steel/80",
	},
	paper: {
		input: `${base} border-paper-line bg-white text-ink placeholder:text-slate/45`,
		label: "eyebrow mb-2 block text-slate/70",
		select: arrow("%235A6572"),
		body: "text-slate",
		fine: "text-slate/80",
	},
} as const;

type Fields = {
	name: string;
	company: string;
	email: string;
	phone: string;
	website: string;
	teamSize: string;
	focus: string;
	biggestDrag: string;
	notes: string;
};

const empty: Fields = {
	name: "",
	company: "",
	email: "",
	phone: "",
	website: "",
	teamSize: "",
	focus: "",
	biggestDrag: "",
	notes: "",
};

export function DiagnosticForm({
	source,
	tone = "dark",
}: {
	source?: string;
	tone?: "dark" | "paper";
}) {
	const skin = skins[tone];
	const labelCls = skin.label;
	const inputCls = skin.input;
	const selectCls = `${skin.input} ${skin.select}`;
	const [f, setF] = useState<Fields>(empty);
	const submit = useSubmitDiagnostic();
	const set = (k: keyof Fields) => (v: string) => setF((p) => ({ ...p, [k]: v }));

	const required = f.name && f.company && f.email && f.phone && f.teamSize;

	if (submit.isSuccess) {
		return (
			<div className="rounded-[var(--radius-card)] border border-success/35 bg-success/[0.07] p-8 md:p-10">
				<div className="grid h-11 w-11 place-items-center rounded-full bg-success/15">
					<Check className="h-5 w-5 text-success" />
				</div>
				<h3 className={`mt-6 text-[1.5rem] leading-tight ${tone === "paper" ? "text-ink" : ""}`}>
					Got it. Talk soon.
				</h3>
				<div
					className={`mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-pretty ${skin.body}`}
				>
					<p>
						Here's exactly what happens next, so nothing is a surprise:
					</p>
					<ol className="space-y-3">
						{[
							"I reply within one business day to book a time that works.",
							`We spend ${offer.introMinutes} minutes on a call getting to know the business at a high level — what you do, how the work flows, where it's stuck.`,
							"If it's a fit, the diagnostic comes next — free, and you keep the written summary of the three biggest gaps whether or not you hire me.",
						].map((step, i) => (
							<li key={step} className="flex gap-3.5">
								<span className="eyebrow mt-1 shrink-0 text-amber">{String(i + 1).padStart(2, "0")}</span>
								<span>{step}</span>
							</li>
						))}
					</ol>
					<p className={`border-t pt-4 ${tone === "paper" ? "border-paper-line" : "border-white/10"}`}>
						If you'd rather not wait, call me directly.
					</p>
				</div>
				<Btn
					href={site.phoneHref}
					variant={tone === "paper" ? "outline-dark" : "outline"}
					size="lg"
					className="mt-6"
				>
					<Phone className="h-4 w-4" />
					{site.phone}
				</Btn>
			</div>
		);
	}

	return (
		<form
			className="space-y-5"
			onSubmit={(e) => {
				e.preventDefault();
				if (!required || submit.isPending) return;
				submit.mutate({
					name: f.name.trim(),
					company: f.company.trim(),
					email: f.email.trim(),
					phone: f.phone.trim(),
					website: f.website.trim() || undefined,
					teamSize: f.teamSize,
					focus: f.focus || undefined,
					biggestDrag: f.biggestDrag || undefined,
					notes: f.notes.trim() || undefined,
					source: source || undefined,
				});
			}}
		>
			<div className="grid gap-5 sm:grid-cols-2">
				<div>
					<label className={labelCls} htmlFor="d-name">
						Your name *
					</label>
					<input
						id="d-name"
						aria-label="Your name"
						className={inputCls}
						placeholder="Nate Villar"
						value={f.name}
						onChange={(e) => set("name")(e.target.value)}
						required
					/>
				</div>
				<div>
					<label className={labelCls} htmlFor="d-company">
						Company *
					</label>
					<input
						id="d-company"
						aria-label="Company"
						className={inputCls}
						placeholder="Company name"
						value={f.company}
						onChange={(e) => set("company")(e.target.value)}
						required
					/>
				</div>
				<div>
					<label className={labelCls} htmlFor="d-email">
						Email *
					</label>
					<input
						id="d-email"
						aria-label="Email"
						type="email"
						className={inputCls}
						placeholder="you@company.com"
						value={f.email}
						onChange={(e) => set("email")(e.target.value)}
						required
					/>
				</div>
				<div>
					<label className={labelCls} htmlFor="d-phone">
						Phone *
					</label>
					<input
						id="d-phone"
						aria-label="Phone"
						type="tel"
						className={inputCls}
						placeholder="(555) 555-5555"
						value={f.phone}
						onChange={(e) => set("phone")(e.target.value)}
						required
					/>
				</div>
				<div>
					<label className={labelCls} htmlFor="d-website">
						Website
					</label>
					<input
						id="d-website"
						aria-label="Website"
						className={inputCls}
						placeholder="company.com"
						value={f.website}
						onChange={(e) => set("website")(e.target.value)}
					/>
				</div>
				<div>
					<label className={labelCls} htmlFor="d-team">
						Team size *
					</label>
					<select
						id="d-team"
						aria-label="Team size"
						className={selectCls}
						value={f.teamSize}
						onChange={(e) => set("teamSize")(e.target.value)}
						required
					>
						<option value="">Select…</option>
						{teamSizes.map((t) => (
							<option key={t} value={t}>
								{t}
							</option>
						))}
					</select>
				</div>
			</div>

			<div>
				<label className={labelCls} htmlFor="d-focus">
					Where do you want the help first?
				</label>
				<select
					id="d-focus"
					aria-label="Where do you want the help first?"
					className={selectCls}
					value={f.focus}
					onChange={(e) => set("focus")(e.target.value)}
				>
					<option value="">Select…</option>
					{focusAreas.map((t) => (
						<option key={t} value={t}>
							{t}
						</option>
					))}
				</select>
			</div>

			<div>
				<label className={labelCls} htmlFor="d-drag">
					What's slowing you down most?
				</label>
				<select
					id="d-drag"
					aria-label="What's slowing you down most?"
					className={selectCls}
					value={f.biggestDrag}
					onChange={(e) => set("biggestDrag")(e.target.value)}
				>
					<option value="">Select…</option>
					{drags.map((t) => (
						<option key={t} value={t}>
							{t}
						</option>
					))}
				</select>
			</div>

			<div>
				<label className={labelCls} htmlFor="d-notes">
					Anything else worth knowing
				</label>
				<textarea
					id="d-notes"
					aria-label="Anything else worth knowing"
					rows={4}
					className={`${inputCls} resize-y`}
					placeholder="The tools you already use, what you've tried, what a good outcome looks like."
					value={f.notes}
					onChange={(e) => set("notes")(e.target.value)}
				/>
			</div>

			{submit.isError && (
				<p className="rounded-[var(--radius-ctl)] border border-red-500/40 bg-red-500/[0.07] px-4 py-3 text-[0.9375rem] text-red-500">
					That didn't go through. Try again, or just call me at {site.phone}.
				</p>
			)}

			<div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
				<Btn type="submit" size="lg" disabled={!required || submit.isPending}>
					{submit.isPending ? "Sending…" : "Request my free diagnostic"}
					{!submit.isPending && (
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
					)}
				</Btn>
				<p className={`text-[0.875rem] leading-snug ${skin.fine}`}>
					No cost, no obligation. You keep the write-up either way.
				</p>
			</div>
		</form>
	);
}
