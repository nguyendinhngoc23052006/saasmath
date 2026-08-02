---
title: "Bridge Rounds Explained: Convertible Notes, SAFEs, and Dilution"
description: "A bridge round buys time between priced rounds using a SAFE or convertible note. Here is how cap, discount, and conversion math work, and when a bridge is the wrong idea."
publishedAt: "2026-08-02"
pairedCalculator:
  slug: "bridge-round"
  label: "Bridge Round Calculator"
sources:
  - label: "Y Combinator: SAFE Primer"
    url: "https://www.ycombinator.com/documents"
  - label: "Startup Lawyer: Convertible Note Math"
    url: "https://www.startuplawyer.com/"
  - label: "Fred Wilson: Convertibles vs Priced Rounds"
    url: "https://avc.com/"
faqs:
  - q: "SAFE or convertible note?"
    a: "SAFE is simpler (no maturity, no interest). Note has interest and a maturity date, which creates leverage over the founder if the priced round is delayed."
  - q: "What is a typical cap and discount?"
    a: "US early stage 2024-25: 15-25% discount and a cap 1.25-2x above the prior round or expected next pre-money."
  - q: "Does an uncapped SAFE ever make sense?"
    a: "Only when you have extraordinary leverage (celebrity founder, previous exit). Otherwise no; investors are taking price risk with no ceiling."
  - q: "How does a bridge affect existing investors?"
    a: "It dilutes them at conversion. Existing investors often insist on the bridge being pro-rata or push for a priced round instead."
  - q: "When should I do a priced round instead?"
    a: "If the gap is larger than 12 months or the amount is more than half your last round. Bridge economics get punishing at scale."
related: ["bridge-round", "cap-table-dilution", "runway"]
---

## TL;DR

Bridge size = extra runway needed × current burn. Effective valuation = min(cap, next_pre × (1 − discount)). Whichever gives investors more shares wins.

## When to bridge

**Yes:** need 6-9 more months to hit a milestone that materially bumps valuation; existing investors willing to put more in; small amount (typically <50% of last round).

**No:** need 12+ months; existing investors won't lead; amount would be a full round on its own; company hasn't validated the milestone worth waiting for.

## The mechanics

- **Cap:** the maximum pre-money valuation at which the note or SAFE converts. Investor upside protection.
- **Discount:** percentage below the priced-round price. Compensates for early risk.
- **Conversion:** at the next priced round, investor receives shares at the more favorable of (a) cap-based price, (b) discounted price.

## Worked example

You need 6 months more runway at $100k monthly burn. Bridge size = $600k.

Assumptions:

- Expected next pre-money: $20M
- Note cap: $15M
- Discount: 20%

Discounted valuation: $20M × 0.8 = $16M.
Cap: $15M.
Effective valuation: min($15M, $16M) = **$15M**. Cap wins.

Post-money at conversion (bridge only): $15M + $600k = $15.6M.
Dilution from bridge: $600k / $15.6M ≈ **3.85%**.

That is separate from the priced round dilution. Total dilution at the priced round is priced-round dilution plus bridge conversion dilution.

Try scenarios in the [bridge round calculator](/calculators/bridge-round).

## Where the math gets punishing

**Cap much lower than the next round.** A $10M cap when the next round happens at $50M pre gives investors a 5x price advantage; a $600k bridge can convert to 4-6% ownership.

**Multiple bridges stacked.** Each conversion dilutes the founder, and the effective valuations differ by tranche. Model each SAFE separately.

**Interest accrual on notes.** A 6% coupon on a $2M note over 18 months adds $180k to the conversion amount. Small but real.

## The founder-side levers

- Higher cap. Every dollar of cap increase directly reduces conversion dilution.
- Lower discount. Investors resist below 15%; 25% is on the high end.
- Larger bridge from existing investors (they price for the follow-on).
- MFN clause: gives you the option to raise better terms later without repricing existing bridge investors.

## Common mistakes

- Treating the bridge as free money because the price is "unpriced". It converts at the priced round; the price is deferred, not absent.
- Signing an uncapped note thinking the discount protects you. It protects the investor.
- Not modeling total dilution (bridge + next round) before signing.
- Bridging without a clear milestone that justifies the higher next-round valuation.
- Missing a note's maturity date. Notes can force conversion into a "qualified financing" or trigger repayment.

## Related

- [Bridge Round Calculator](/calculators/bridge-round)
- [Cap Table Dilution](/calculators/cap-table-dilution)
- [Runway Calculator](/calculators/runway) — first, know how much runway you need
