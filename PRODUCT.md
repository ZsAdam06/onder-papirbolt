# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, confirmed equally important:
- Local residents doing a quick pre-visit check: opening hours, address, phone, whether the shop is open right now.
- Parents/shoppers browsing the current product catalog (the "Újság"/Magazine page) before or instead of visiting in person, especially around school-start season.
- Employees of a handful of named local companies (MOL, Jabil, Birla Carbon) checking their 10% staff-discount terms before buying.

## Product Purpose

The official website for Onder Papírbolt, a stationery/office-supply shop in Tiszaújváros, Hungary. It exists to help people find the shop, see what it currently sells, understand its services, and check discount eligibility — driving in-person visits and phone/email inquiries. There is no online store; all transactions happen in the physical shop. Success is a visitor who quickly gets the practical answer they came for (open now? what's new? do I get 10% off?) and, ideally, visits or contacts the shop.

## Positioning

A personal, decades-old local shop, not a chain: "the kind of shop it used to be," where staff actively help rather than just ring up purchases. This is the confirmed differentiator versus other stationery retailers/chains in the area, and it's already expressed in the existing copy ("Ahol személyesen segítenek, nem csak kiszolgálnak," "Tiszaújváros papírboltja évtizedek óta," "Mindig számíthat ránk.").

## Operating Context

- Physical store: 3580 Tiszaújváros, Barcsay Jenő tér 4.
- Hours: Mon–Fri 08:00–17:00 with a 12:00–13:00 lunch break; Sat 09:00–12:00; closed Sunday. The homepage shows a live open/closed badge computed from this schedule.
- Custom rubber stamps: pre-order only, details arranged in person or by email — not a self-serve online flow.
- Corporate/institutional orders: arranged individually, delivery by agreement.
- School-start notebook packages: assembled per school class.
- Corporate discount: 10% off the bill total for employees of MOL, Jabil, and Birla Carbon, on presentation of a valid photo staff ID at the till. Cannot be applied retroactively; not combinable with other promotions.
- Product catalog ("Újság"/Magazine) is editorial content managed through a Supabase-backed admin panel (auth-gated `/admin` route), not a transactional storefront.

## Capabilities and Constraints

- Informational site with one dynamic, database-backed feature: the Magazine post feed (Supabase `posts` table + `product-images` storage bucket), managed via an authenticated Admin panel.
- No checkout, cart, or online payment anywhere — every commercial action happens in-store or via phone/email.
- Hungarian language only (no i18n planned).
- Google Maps (Contact page) and the Facebook timeline (Magazine page) must stay click-to-load, never auto-embedded iframes — this is a documented privacy-policy commitment and a hard constraint on any redesign.
- React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router v7 (HashRouter); this is an existing, working stack and is not up for reconsideration here.

## Brand Commitments

- Name: Onder Papírbolt.
- Tagline/voice already established: "Tiszaújváros papírboltja évtizedek óta," "Mindig számíthat ránk," "Ahol személyesen segítenek, nem csak kiszolgálnak." Warm, personal, local, trustworthy — not corporate or slick.
- Primary color teal-600, accent color orange-500 (existing, documented in CLAUDE.md).
- Typography: Playfair Display for headings/brand text (`brand-font` class), Inter for body text; both self-hosted via Fontsource.
- Existing logo asset: `logo_szoveggel.png`; existing photography: shop entrance (`IMG_2452.jpg`), hero pencils image (`hero.jpg`).
- This is a refinement/polish engagement, not a rebrand: the identity above is confirmed and should be preserved, not replaced.

## Evidence on Hand

- Real, verified contact facts in `constants.ts`: address, phone, email, Facebook page, opening hours.
- Real corporate-partner logos in `public/` for the discount program: MOL, Jabil, Birla Carbon (`mol-logo.jpg`, `jabil_logo.png`, `birla_carbon_logo.jpg`).
- Real shop photography (`IMG_2452.jpg`, `hero.jpg`); no stock imagery of people, no testimonials, no press mentions, no numeric claims beyond "several thousand products in stock." Future work must not invent testimonials, customer quotes, review scores, or additional corporate partners.
- Legal pages already exist and are in scope to preserve: Impresszum, Adatvédelmi tájékoztató (privacy policy), cookie banner.

## Product Principles

1. Personal and warm over polished-corporate — the design should read like a real, long-standing neighborhood shop, not a generic retail template.
2. Serve all three audiences without letting one crowd out the others: fast practical info (hours/location/phone) stays reachable from the homepage, the catalog stays browsable, and the discount program stays easy to find for the three named companies' staff.
3. Never fabricate: no invented reviews, stats, staff photos, or partners beyond what's confirmed above.
4. Preserve the click-to-load privacy commitments for Maps and Facebook — this is a legal-page commitment, not just a UX preference.
5. Hungarian-only, generally accessible — no assumption of a tech-savvy audience.

## Accessibility & Inclusion

No specific accessibility requirement was identified beyond general good practice (confirmed: no known specialized audience need). Standard solid WCAG-quality execution is the bar.
