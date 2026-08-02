---
title: "Gross Burn vs Net Burn: Which Metric Matters When"
description: "Gross burn measures cost structure. Net burn measures how fast the bank runs out. Investors ask for both, and treating them as one number hides real problems."
publishedAt: "2026-08-02"
pairedCalculator:
  slug: "burn-rate"
  label: "Burn Rate Calculator"
sources:
  - label: "Bessemer: The Burn Multiple"
    url: "https://www.bvp.com/atlas/the-burn-multiple"
  - label: "David Sacks: Burn Multiple"
    url: "https://sacks.substack.com/"
  - label: "a16z: 16 Startup Metrics"
    url: "https://a16z.com/16-startup-metrics/"
faqs:
  - q: "Why do investors ask for both?"
    a: "Net burn tells them when you die. Gross burn tells them whether your cost base is defensible if growth slows."
  - q: "Which one drives valuation?"
    a: "Neither directly. Growth drives valuation. Burn efficiency (burn multiple) modifies it."
  - q: "Should I annualize burn?"
    a: "For burn multiple, yes. Multiply monthly net burn by 12 and divide by ARR."
  - q: "What is a good burn multiple?"
    a: "Under 1x is elite. 1–2x is very good. 2–3x is fine at seed. Above 3x is a growth-efficiency problem."
  - q: "How is burn multiple different from CAC payback?"
    a: "CAC payback is unit-level. Burn multiple is company-level and captures overhead, R&D, and admin costs that CAC ignores."
related: ["burn-rate", "runway", "rule-of-40"]
---

## TL;DR

Gross burn is total cash out per month. Net burn is cash out minus cash in. Runway uses net; efficiency conversations use both plus ARR.

## The formulas

- `gross_burn = (starting_cash - ending_cash) / months + revenue / months`
- `net_burn = (starting_cash - ending_cash) / months`
- `burn_multiple = (net_burn * 12) / ARR`

## Worked example

A Series A company between March and June:

- Starting cash: $6.0M (March 1)
- Ending cash: $5.1M (June 1)
- Revenue over three months: $900k
- Current ARR: $4.0M

Net burn per month = ($6.0M − $5.1M) / 3 = $300k. Gross burn = $300k + $900k / 3 = $600k. Burn multiple = $300k × 12 / $4.0M = 0.9x.

That is a healthy Series A. See the [burn rate calculator](/calculators/burn-rate).

## When gross burn matters more

- **Layoff decisions.** You cut gross costs, not net numbers. Knowing gross tells you what levers exist.
- **Contingency planning.** If revenue disappears in a downturn, gross is your survival number.
- **M&A conversations.** Acquirers underwrite the cost base, not the revenue you're currently booking.

## When net burn matters more

- **Runway calculations.** Cash divided by net burn.
- **Board updates.** Directors track net burn month over month.
- **Fundraising.** Investors ask "how much runway" first, which is a net-burn question.

## The burn multiple

David Sacks popularized burn multiple as the single-number efficiency read: net burn per unit of net new ARR. The Bessemer variant divides annualized net burn by ARR (simpler, less noisy month to month). Either works if you stay consistent.

Interpretation bands from Sacks:

- < 1x: amazing
- 1–1.5x: great
- 1.5–2x: good
- 2–3x: suspect
- > 3x: bad

## Common mistakes

- Comparing gross burn across companies without normalizing for stage.
- Reporting a single quarter's burn multiple without a trailing average.
- Excluding one-time expenses when they were foreseeable (e.g. lease deposits).
- Netting expansion revenue against gross burn instead of net.
- Confusing accrual-based P&L burn with cash burn.

## Related

- [Runway Calculator](/calculators/runway) — cash divided by net burn
- [Rule of 40](/calculators/rule-of-40) — growth plus margin
- [Quick Ratio](/calculators/quick-ratio) — MRR gained vs lost
