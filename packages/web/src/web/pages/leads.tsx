import { AlertCircle, Inbox, Loader2, Lock, Mail, Phone, RefreshCw } from "lucide-react";
import { useState } from "react";
import {
	Btn,
	Container,
	Eyebrow,
	GridBackdrop,
	Reveal,
	Section,
} from "../components/primitives";
import { useDiagnosticList } from "../queries/diagnostics";

function fmt(d: Date | string | number) {
	const date = new Date(d);
	return date.toLocaleString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit",
	});
}

export default function Leads() {
	const [input, setInput] = useState("");
	const [passcode, setPasscode] = useState("");
	const query = useDiagnosticList(passcode, passcode.length > 0);

	const unlocked = passcode.length > 0 && query.isSuccess;
	const rows = query.data ?? [];

	return (
		<Section className="min-h-screen overflow-hidden pt-[72px]">
			<GridBackdrop />
			<Container className="relative py-16 md:py-24">
				<Reveal>
					<Eyebrow className="mb-6">Internal · Diagnostic requests</Eyebrow>
					<h1 className="text-[clamp(2rem,4vw,3.25rem)] text-balance">Request inbox</h1>
					<p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-steel text-pretty">
						Every diagnostic request submitted from the site, newest first. Passcode-gated — not
						linked anywhere public.
					</p>
				</Reveal>

				{/* ---------------------------- Passcode gate --------------------------- */}
				{!unlocked && (
					<Reveal delay={0.08}>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								setPasscode(input.trim());
							}}
							className="mt-12 max-w-md border border-white/10 bg-white/[0.02] p-8"
						>
							<div className="flex items-center gap-2.5">
								<Lock className="h-4 w-4 text-amber" />
								<span className="eyebrow text-steel/70">Passcode required</span>
							</div>
							<input
								type="password"
								aria-label="Passcode"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder="Enter passcode"
								autoComplete="current-password"
								className="mt-6 w-full border border-white/15 bg-ink px-4 py-3 font-body text-[0.9375rem] text-paper outline-none transition-colors placeholder:text-steel/40 focus:border-amber"
							/>
							{query.isError && (
								<p className="mt-4 flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-amber">
									<AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
									That passcode didn't work. Check the LEADS_PASSCODE value in the root .env file.
								</p>
							)}
							<Btn
								type="submit"
								variant="amber"
								size="lg"
								disabled={input.trim().length === 0 || query.isFetching}
								className="mt-6 w-full"
							>
								{query.isFetching ? (
									<>
										<Loader2 className="h-4 w-4 animate-spin" />
										Checking…
									</>
								) : (
									"Unlock"
								)}
							</Btn>
						</form>
					</Reveal>
				)}

				{/* ------------------------------- Results ------------------------------ */}
				{unlocked && (
					<>
						<div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
							<div className="flex items-baseline gap-3">
								<span className="font-display text-[2rem] font-semibold leading-none text-amber">
									{rows.length}
								</span>
								<span className="text-[0.9375rem] text-steel">
									{rows.length === 1 ? "request" : "requests"} total
								</span>
							</div>
							<div className="flex items-center gap-3">
								<Btn
									variant="outline"
									onClick={() => query.refetch()}
									disabled={query.isFetching}
								>
									{query.isFetching ? (
										<Loader2 className="h-3.5 w-3.5 animate-spin" />
									) : (
										<RefreshCw className="h-3.5 w-3.5" />
									)}
									Refresh
								</Btn>
								<Btn
									variant="ghost"
									onClick={() => {
										setPasscode("");
										setInput("");
									}}
								>
									Lock
								</Btn>
							</div>
						</div>

						{rows.length === 0 ? (
							<div className="mt-12 border border-dashed border-white/15 p-14 text-center">
								<Inbox className="mx-auto h-7 w-7 text-steel/50" />
								<h2 className="mt-5 text-[1.375rem]">No requests yet</h2>
								<p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-steel text-pretty">
									Nothing has come through the form. Submissions will appear here the moment somebody
									books a diagnostic.
								</p>
							</div>
						) : (
							<div className="mt-8 space-y-4">
								{rows.map((r) => (
									<div key={r.id} className="border border-white/10 bg-white/[0.02] p-6 md:p-7">
										<div className="flex flex-wrap items-start justify-between gap-4">
											<div>
												<h2 className="text-[1.25rem] leading-snug">{r.company}</h2>
												<div className="mt-1 text-[0.9375rem] text-steel">
													{r.name} · {r.teamSize}
												</div>
											</div>
											<div className="text-right">
												<div className="eyebrow text-amber">#{r.id}</div>
												<div className="mt-1.5 text-[0.8125rem] text-steel/70">
													{fmt(r.createdAt)}
												</div>
											</div>
										</div>

										<div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.07] pt-5">
											<a
												href={`tel:${r.phone.replace(/[^\d+]/g, "")}`}
												className="flex items-center gap-2 text-[0.9375rem] text-paper transition-colors hover:text-amber"
											>
												<Phone className="h-3.5 w-3.5 text-amber" />
												{r.phone}
											</a>
											<a
												href={`mailto:${r.email}`}
												className="flex items-center gap-2 text-[0.9375rem] text-paper transition-colors hover:text-amber"
											>
												<Mail className="h-3.5 w-3.5 text-amber" />
												{r.email}
											</a>
											{r.website && (
												<span className="text-[0.9375rem] text-steel">{r.website}</span>
											)}
										</div>

										<dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
											{[
												{ k: "Focus", v: r.focus },
												{ k: "Biggest drag", v: r.biggestDrag },
												{ k: "Source", v: r.source },
											].map((cell) => (
												<div key={cell.k}>
													<dt className="eyebrow text-steel/50">{cell.k}</dt>
													<dd className="mt-1.5 text-[0.9375rem] leading-snug text-paper/90">
														{cell.v || "—"}
													</dd>
												</div>
											))}
										</dl>

										{r.notes && (
											<div className="mt-5 border-l-2 border-amber bg-white/[0.02] py-3.5 pl-4">
												<div className="eyebrow mb-1.5 text-steel/50">Notes</div>
												<p className="text-[0.9375rem] leading-relaxed text-paper/90 text-pretty">
													{r.notes}
												</p>
											</div>
										)}
									</div>
								))}
							</div>
						)}
					</>
				)}
			</Container>
		</Section>
	);
}
