---
title: "How to Calculate Startup Runway"
description: "Runway is cash on hand divided by net monthly burn. This guide covers what counts as burn, why net vs gross matters, and when to start raising."
publishedAt: "2026-08-02"
pairedCalculator:
  slug: "runway"
  label: "Startup Runway Calculator"
sources:
  - label: "Y Combinator Startup Library"
    url: "https://www.ycombinator.com/library"
  - label: "SaaStr: Runway Basics"
    url: "https://www.saastr.com/"
  - label: "Bessemer: Cash is King"
    url: "https://www.bvp.com/atlas"
faqs:
  - q: "What is the minimum runway I should keep?"
    a: "Common rule: begin fundraising at 9 months of runway; close before 6. Below 6 months you are negotiating from weakness."
  - q: "Do I count receivables as cash?"
    a: "Only if they convert reliably within the month. Enterprise SaaS often has 60+ day terms; count only what you can spend."
  - q: "Does deferred revenue affect runway?"
    a: "Deferred revenue is cash you already have. It sits in the bank. The revenue is recognized later but the runway benefit is now."
  - q: "How does runway differ for bootstrapped vs venture-backed companies?"
    a: "Bootstrapped: profitable enough that runway is infinite. Venture-backed: net burn is positive by design, runway is finite, next raise is the plan."
  - q: "What if my burn is uneven month to month?"
    a: "Use trailing 3-month average net burn, not last month. Bonuses, annual insurance, and holiday quarters skew a single month."
related: ["runway", "burn-rate", "seed-round"]
---

## TL;DR

Runway is cash on hand divided by net monthly burn. Net burn is monthly cash out minus monthly cash in. When net burn is negative you are profitable and runway is infinite.

## The formula

`runway_months = cash_on_hand / max(monthly_burn - monthly_revenue, 0.01)`

That's it. The floor keeps the math from dividing by zero for a break-even company.

## Worked example

A pre-seed team has:

- Cash on hand: $420,000
- Monthly gross burn: $65,000
- Monthly revenue: $12,000

Net burn is $65,000 − $12,000 = $53,000 per month. Runway is $420,000 / $53,000 ≈ 7.9 months. Fundraising should already be in motion.

Try the numbers yourself in the [runway calculator](/calculators/runway).

## What counts as burn

Include every cash outflow: payroll and employer taxes, benefits, contractors, rent, cloud, ads, software, refunds, chargebacks. Exclude accruals and depreciation. If it did not leave the bank this month, it does not count this month.

## Gross vs net

Gross burn is the cost side alone. Net burn subtracts revenue. Runway uses net burn because that is what actually consumes the bank balance. Gross burn tells you whether the cost structure is bloated; net burn tells you when you die.

## Common mistakes

- Treating deferred revenue as future cash. The cash is already in the bank.
- Averaging a quarter that included a large one-time payment.
- Ignoring seasonality (Q4 spend spikes are real).
- Excluding founder salary or contractor payments from burn because "they're temporary".
- Assuming pipeline revenue will convert on schedule.

## When to raise

Standard heuristic: 9 months out, start; 6 months out, close. Investors know these numbers too, and a founder who walks in with 4 months of runway will be priced accordingly.

## Related calculators

- [Burn Rate Calculator](/calculators/burn-rate) — separate gross from net
- [Seed Round Calculator](/calculators/seed-round) — size the next raise
- [Bridge Round Calculator](/calculators/bridge-round) — if a full round is not viable
