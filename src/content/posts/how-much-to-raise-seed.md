---
title: "How Much to Raise in Your Seed Round"
description: "Reverse-engineer a seed round size from target runway, team, and burn. Includes the 18-month rule and when to raise more or less."
publishedAt: "2026-08-02"
pairedCalculator:
  slug: "seed-round"
  label: "Seed Round Sizing Calculator"
sources:
  - label: "Y Combinator: Seed Fundraising Guide"
    url: "https://www.ycombinator.com/library"
  - label: "SaaStr: How to Raise a Seed"
    url: "https://www.saastr.com/"
  - label: "Peter Reinhardt: How Much to Raise"
    url: "https://reinhardtluft.substack.com/"
faqs:
  - q: "Is 18 months of runway always right?"
    a: "It is the industry norm. Longer if the Series A bar for your category is high; shorter if you have paying customers and clear PMF signals."
  - q: "What about the 'raise more when the money is cheap' argument?"
    a: "Every additional dollar today compounds equity cost through subsequent rounds. Raise the minimum that hits the milestone, not the maximum on offer."
  - q: "Should I include founder salary?"
    a: "Yes. Whatever you pay yourself is real cash. Many seed founders pay $60-90k US. Below that, personal runway becomes the constraint."
  - q: "Is the 1.3x overhead right for non-US teams?"
    a: "US: 1.25-1.35x. Europe: 1.30-1.45x. Vietnam and SEA: 1.10-1.20x, but check current statutory contribution rates in your country."
  - q: "What if I'm pre-revenue?"
    a: "Then plan for 18-24 months to reach $1M ARR or another A-worthy milestone. Below that, plan smaller and re-raise."
related: ["seed-round", "runway", "cap-table-dilution"]
---

## TL;DR

Seed = burn × months of runway. Burn = (team × salary × 1.3) / 12 + non-personnel. Raise the minimum that gets you to a Series A milestone with a 3-month buffer.

## The formula

`monthly_burn = (team_size × avg_salary × 1.3) / 12 + non_personnel_monthly`

`raise_needed = monthly_burn × target_runway_months`

The 1.3 multiplier covers employer taxes, benefits, and equipment. It's a US baseline; adjust for your jurisdiction.

## Worked example

- Team: 5 people (2 founders + 3 engineers)
- Average fully-loaded salary: $130k
- Non-personnel monthly (hosting, tools, contractors): $6,000
- Target runway: 18 months

Monthly burn = (5 × $130,000 × 1.3) / 12 + $6,000 = $70,417 + $6,000 = **$76,417/mo**.

Raise needed = $76,417 × 18 = **$1.38M**.

At 20% dilution, that implies a post-money of $6.9M. Pre-money: $5.5M.

Try adjustments in the [seed round calculator](/calculators/seed-round).

## Why 18 months and not 24

- Fundraising takes 3-6 months when it goes well.
- Milestones (usually $1M ARR for SaaS) take 12-15 months from seed close in the median case.
- 18 months lets you close the A when you still have 3-6 months of cash and are negotiating from strength.

24 months of runway means either (a) your burn is low enough that you should raise less, or (b) you're building an ambitious deep-tech product where the milestone is genuinely a two-year build.

## Why not raise more

- Every dollar raised at seed compounds. A 25% seed instead of 15% seed means you own 12% less at Series B.
- Larger rounds attract fewer buyers at the next stage (Series A valuations need a step-up).
- Boards form at $2M+ rounds. Adds governance overhead.
- Cash on the balance sheet at Series A negotiations is not "extra runway"; it's evidence you didn't need what you raised.

## When to raise more

- Deep-tech with a real build cycle (hardware, biotech, foundation models).
- Regulated markets that require certification before revenue.
- Two-founder teams with a specific technical hire in mind at seed close.

## Common mistakes

- Padding the team plan to justify a bigger raise.
- Excluding founder salary "because it's temporary".
- Forgetting quarterly software renewals in the non-personnel line.
- Setting runway target to 12 months and running out during the raise.
- Anchoring on what other founders raised without matching their burn.

## Related

- [Seed Round Calculator](/calculators/seed-round)
- [Runway Calculator](/calculators/runway)
- [Cap Table Dilution](/calculators/cap-table-dilution)
