---
title: "The Rule of 40 for SaaS: How Public Companies Score"
description: "Brad Feld's Rule of 40 says growth rate plus profit margin should equal or exceed 40. Here is where it holds, where it breaks, and how public SaaS stacks up."
publishedAt: "2026-08-02"
pairedCalculator:
  slug: "rule-of-40"
  label: "Rule of 40 Calculator"
sources:
  - label: "Brad Feld: The Rule of 40%"
    url: "https://feld.com/archives/2015/02/rule-40-healthy-saas-company/"
  - label: "Meritech: Public SaaS Rule of 40"
    url: "https://www.meritechcapital.com/"
  - label: "SaaS Capital: Rule of 40 in Practice"
    url: "https://www.saas-capital.com/"
faqs:
  - q: "Which margin do investors use?"
    a: "EBITDA is classic. FCF margin is the current preference because SBC and capitalized R&D can inflate EBITDA."
  - q: "Does it apply below $25M ARR?"
    a: "Not meaningfully. Below scale, growth dominates and margin is usually deeply negative by choice."
  - q: "What score do top public SaaS hit?"
    a: "Snowflake, Datadog, Cloudflare regularly cleared 50-60 in the growth years; the median public SaaS in 2023-24 hovered mid-30s."
  - q: "Can you fake it with one-time revenue?"
    a: "Yes; large multi-year prepay bookings inflate ARR growth for a period. Normalize before scoring."
  - q: "What about the Rule of 60 or 50?"
    a: "Higher-bar variants for elite companies. Same math, higher target."
related: ["rule-of-40", "mrr-arr-growth", "burn-rate"]
---

## TL;DR

`score = growth_rate_percent + profit_margin_percent`. 40 is the pass bar. 60+ is elite. Below 40 is the honest state of most SaaS today.

## The formula

Growth rate is YoY revenue growth. Profit margin is EBITDA or free cash flow, expressed as a percentage of revenue. Add them.

Brad Feld introduced it in 2015 as a shorthand for balancing burn against growth: a company growing 100% can afford a −60% margin; a company growing 20% needs +20% margin.

## Worked example

Company A: 60% YoY growth, −10% EBITDA margin. Score: 50. Passes with room.

Company B: 25% YoY growth, 15% EBITDA margin. Score: 40. Passes at the line.

Company C: 15% YoY growth, 5% EBITDA margin. Score: 20. Fails.

Try scenarios in the [Rule of 40 calculator](/calculators/rule-of-40).

## What margin to use

**EBITDA margin:** original Feld definition. Widely reported, easy to look up.

**FCF margin:** current investor preference. Captures capitalized software development, deferred revenue timing, and stock-based comp effects. FCF-based Rule of 40 is a harder bar.

**Non-GAAP operating margin:** SBC excluded. Common in SaaS earnings; makes Rule of 40 easier to clear artificially.

Pick one, stay with it, and be explicit about which you're reporting.

## When the rule breaks

**Early stage.** A $2M ARR company growing 200% with −100% margin scores 100. That does not make it a good business; the margin math is meaningless at that base.

**Consumption pricing.** Usage-based revenue is choppy. Trailing-twelve-month growth smooths it.

**Post-IPO efficiency mode.** A once-hyper-growth company hitting 30% growth with 20% FCF margin is a different Rule-of-40 pass than a fast-growing loss-making startup at the same score.

## Public SaaS benchmarks

From Meritech's public SaaS index (approximate, mid-2020s):

- **Elite (>60):** ~5% of the index. Snowflake at IPO. Datadog in peak years.
- **Meets (40–60):** ~25%. Cloudflare in most years.
- **Below (<40):** the majority. Growth compression post-2022 knocked most companies below.

The board conversation post-2022: growth from 60% to 30% is fine if margin goes from −20% to +15%. The score holds.

## Common mistakes

- Mixing EBITDA growth with non-EBITDA margin.
- Using bookings growth instead of revenue growth.
- Not netting stock-based comp when the audience expects it.
- Applying it to businesses under $10M ARR.
- Comparing your score to a company with 10x your scale.

## Related

- [Rule of 40 Calculator](/calculators/rule-of-40)
- [Burn Rate Calculator](/calculators/burn-rate) — the burn side of the trade-off
- [MRR / ARR Growth](/calculators/mrr-arr-growth) — the growth side
