# Level Ground Systems — repositioning rebuild (2026-09-18)

## Positioning (locked, from Nate's brief)
Franchises and corporations win on budget, teams, and software. This business builds the
AI systems that let a 10-person company match their speed, consistency, and polish.
Core message: **level the playing field**. Sales & marketing leads; operations makes it sticky.
No lead-generation framing anywhere.

## Deliverable 1 — business brief
`/home/user/nv-brief.report/content.md` → `content.pdf` (14 pages). 8 parts + methodology +
references. 4 charts, all visually verified. 3 cited sources (Goldman Sachs 10,000 Small
Businesses, U.S. Census BTOS, Salesforce SMB Trends). Anchor stat: 76% use AI, 14% integrated.

## Deliverable 2 — website (`/home/user/villar-systems`)
Pages: `/` `/services` `/how-it-works` `/proof` `/about` `/contact` `/leads` (internal).
Design system unchanged: ink `#0A0E14`, amber `#E8792B`, Sora / Instrument Sans / JetBrains Mono.

Rebuilt this round:
- [x] `lib/site.ts` — new name/tagline/coverage/offer/nav/teamSizes/focusAreas/drags
- [x] `design.md` — rewritten for new positioning
- [x] backend renamed leads → diagnostics (`diagnostic_requests` table, `diagnostics.*` routes)
- [x] `components/diagnostic-form.tsx` (replaces audit-form) — dark + paper skins
- [x] `components/site-nav.tsx`, `components/site-footer.tsx` — wordmark + CTA copy
- [x] `pages/index.tsx`, `services.tsx`, `how-it-works.tsx`, `proof.tsx`, `about.tsx`
- [x] `pages/contact.tsx`, `pages/leads.tsx`, `app.tsx` — wired to new form/queries/route
- [x] `index.html` — title + meta description + OG copy

Verified: lint 0/0, typecheck clean, `bun run build` clean, db:push applied (old empty
`audit_requests` dropped), form submit → DB → `/leads` tested end-to-end and test rows deleted,
all 7 pages screenshotted at 1440px and key pages at 390px.

## Standing rules
- No fabricated proof. `/proof` ships as explicit placeholders only.
- No pricing on the site. Rate card stays internal (in the brief).
- Banned words: solutions, leverage, synergy, transform, cutting-edge, revolutionary,
  seamless, unlock, empower, 10x, game-changing, disrupt.
- Recurring production (email sends, social posts, reporting) needs stated included volume
  in any flat monthly fee, or the margin disappears.

## Open with Nate
1. ~~**Company name.**~~ Settled 2026-09-21: the business is **Level Ground Systems**
   (short form "Level Ground" where space is tight). Logo is a spirit-level mark.
2. **Booking link.** `site.bookingUrl` is a placeholder; set `bookingIsPlaceholder: false`
   once his Google Calendar appointment link is pasted in.
3. `/proof` was removed at Nate's request (no engagements finished yet). Rebuild it only
   from real results — never fabricated ones.
