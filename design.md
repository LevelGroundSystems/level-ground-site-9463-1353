# Level Ground Systems — Design

Marketing website for a one-person AI consultancy that builds AI systems for owner-operated small and medium businesses (roughly 5–50 people) competing against franchises and corporations with far bigger budgets. Ships on web only.

**Core message:** level the playing field — *AI systems that let a small business run like a big one.*

Visual direction: **confident operator, not tech vendor** — deep ink backgrounds, warm off-white paper sections, a single amber accent, blueprint grid textures, monospace data labels. Credible and grounded, never sci-fi. No glowing brains, no robots, no neural-network meshes. The core job: get a stretched owner to book a conversation and take the free diagnostic.

## Brand & Colors

CSS variables in `packages/web/src/web/styles.css`. Single light-mode-agnostic token set — sections alternate between `ink` (dark) and `paper` (warm off-white) surfaces deliberately, so both are first-class rather than a light/dark toggle.

| Token | Hex | Use |
|-------|-----|-----|
| `--ink` | `#0A0E14` | Dark section background, nav, footer |
| `--ink-raise` | `#111823` | Raised cards on ink |
| `--ink-line` | `rgba(255,255,255,0.09)` | Hairlines on ink |
| `--paper` | `#F6F4F1` | Warm off-white section background |
| `--paper-raise` | `#FFFFFF` | Cards on paper |
| `--paper-line` | `#E2DDD6` | Hairlines on paper |
| `--amber` | `#E8792B` | Single accent: CTAs, numbers, underlines, active state |
| `--amber-deep` | `#C25F17` | Hover on amber |
| `--steel` | `#8B9AAB` | Muted text on ink |
| `--slate` | `#5A6472` | Muted text on paper |
| `--success` | `#3D9A6B` | Form success state |

**Accent discipline:** amber appears at most twice per viewport — once on a CTA, once on a data point. Everything else is ink, paper, steel, slate.

## Typography

- **Display:** `Sora` (600/700) — headlines, section titles, stat numbers. Tight tracking (`-0.03em`) at large sizes.
- **Body:** `Instrument Sans` (400/500/600) — paragraphs, nav, buttons. Line height 1.65.
- **Mono:** `JetBrains Mono` (500, uppercase, `0.14em` tracking, 11–12px) — eyebrow labels, section numbering (`01 / SERVICES`), metric captions.

Loaded from Google Fonts in `packages/web/index.html`. Deliberately avoiding Inter, Space Grotesk, Roboto.

Scale: hero `clamp(2.75rem, 6vw, 5.25rem)`, section title `clamp(2rem, 3.6vw, 3.25rem)`, body `1.0625rem`, small `0.9375rem`.

## Texture & Motion

- **Blueprint grid:** 1px CSS grid overlay at 4% opacity behind hero and CTA bands — reads as drafting paper, not sci-fi.
- **Corner ticks:** small amber L-brackets on key cards, echoing measurement marks.
- **Motion:** one orchestrated page-load reveal per page — staggered fade-up (16px, 60ms stagger) via `motion/react`. Scroll reveals on section entry only. No parallax, no hover-tilt.

## Copy Rules

Non-negotiable, carried from the business brief:

- **Outcomes, not features.** "Every enquiry gets answered in under five minutes" — never "AI-powered response automation."
- **Banned words:** solutions, leverage, synergy, transform/transformation, cutting-edge, revolutionary, seamless, unlock, empower, 10x, game-changing, disrupt.
- **No pricing on the site.** Scope varies too much; the site's job is to get the diagnostic booked.
- **No fabricated proof, ever** — no invented testimonials, logos, review scores, metrics, or dashboard screenshots. There are zero clients today. The proof page ships as an explicitly-marked placeholder that says so, because the honest version converts and a fake one destroys the only advantage this business has.
- **Any published statistic on the site carries its source inline.**

## Pages

- **Home** (`pages/index.tsx`) — hero built on "level the playing field", the six gaps small businesses lose on, the two service pillars (sales & marketing first), how it works in four steps, proof placeholder, booking CTA.
- **Services** (`pages/services.tsx`) — Pillar 1 sales & marketing in depth, then Pillar 2 operations & efficiency, plus an explicit "who this isn't for" list.
- **How It Works** (`pages/how-it-works.tsx`) — the four steps in detail, the 30-day build timeline, what's required from the client.
- **Proof** (`pages/proof.tsx`) — honest placeholder case-study slots, what gets measured, and a plain statement that there is no client work to show yet.
- **About** (`pages/about.tsx`) — Nate's career, why a sales operator rather than a technologist, and full disclosure.
- **Contact** (`pages/contact.tsx`) — the diagnostic request form + direct phone/email + booking link.
- **Leads** (`pages/leads.tsx`) — passcode-gated internal view of submitted diagnostic requests.

Shared: `components/site-nav.tsx`, `components/site-footer.tsx`, `components/diagnostic-form.tsx`, `components/primitives.tsx` (Eyebrow, SectionHeading, Stat, StatCard, Btn variants, GridBackdrop, TickCard, Reveal).

## Key User Flows

1. Owner lands on Home → recognises the "bigger competitor isn't smarter, just faster" framing → clicks "Book a conversation" → Contact → submits the diagnostic request (name, company, email, phone, team size, focus area, biggest drag) → stored in DB → success state with next-step expectations and Nate's direct number.
2. Referred visitor → About → reads the sales-operator credibility narrative → books via the calendar link or calls directly.
3. Nate → `/leads` → enters passcode → sees every diagnostic request with timestamps.

## Architecture

- **API**: oRPC procedures in `packages/web/src/api/routes/diagnostics.ts` — `diagnostics.submit` (public, validated) and `diagnostics.list` (passcode-guarded). Table `diagnostic_requests` in `database/schema.ts`.
- **Client**: hooks in `src/web/queries/diagnostics.ts` via TanStack Query.
- **Placeholders to swap before launch**: `bookingUrl` in `src/web/lib/site.ts`, the `LEADS_PASSCODE` env value, and the company name in `site.name` if it changes.
