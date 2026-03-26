---
sidebar_position: 9
sidebar_label: "Week 9: Expected Value"
title: "Week 9: Expected Value"
description: "The simple math of weighing risks and rewards — how to compare uncertain options like a professional."
---

# Week 9: Expected Value
*The Math of Weighing Risks and Rewards*

Phase 3 begins. In Phases 1 and 2, you built awareness — randomness, process vs. outcome, brain shortcuts. Now we add quantitative tools that help us cut through uncertainty. Welcome to **Data & Signal Processing.**

This week's tool is **expected value (EV)** — a surprisingly simple formula that professional gamblers, investors, and decision scientists use every day:

> **EV = (Probability of Outcome × Value of Outcome) for each possible outcome, added together.**

In plain language: "Imagine doing this a hundred times. On average, how does it turn out?" Put your **Probability Glasses** back on — this week we're turning confidence levels into exact calculations.

---

:::info Facilitator Snapshot
- This is the most "mathy" week in the curriculum. Keep it concrete with tokens, coins, and dice.
- The goal is NOT to turn every decision into a calculation. The goal is to develop the INSTINCT for spotting when one option has better expected value than another.
- If the student struggles with multiplication, use simpler numbers or skip to the intuitive version: "If you did this 10 times, how many times would you win? How many would you lose?"
:::

:::tip Quick Navigation
- [Facilitator Preparation](#facilitator-preparation)
- [Guided Session 1: The Simple Bet](#guided-session-1)
- [Guided Session 2: The Real Decision Calculator](#guided-session-2)
- [Independent Practice](#independent-practice)
:::

## Week at a Glance

| Component | Key Concept | Duration |
|---|---|---|
| Guided Session 1 | The Simple Bet — calculating expected value | ~30 min |
| Guided Session 2 | The Real Decision Calculator — EV in real life | ~30 min |
| Independent Practice | Personal EV calculations and the 100 Times Test | ~20 min |

**Key vocabulary:** expected value (EV), positive EV, negative EV, the 100 Times Test
**Difficulty:** Advanced · **Prep time:** ~10 minutes

---

## Facilitator Preparation

:::info Before You Begin
- Have coins and dice ready
- Prepare 10-15 tokens/counters per player for the betting games
- Prepare the scenario cards for Session 2
- A calculator (or scratch paper) is helpful but not required
- Review the student's Decision Journal — are there any entries where EV thinking would have helped?
:::

:::tip Facilitation Mindset
EV is a tool, not a commandment. It tells you what the math favours, but it doesn't account for how much a loss would hurt or how much a win would mean. We'll address those nuances in Session 2.
:::

## Age Differentiation

This is the most math-heavy week. Adjust depth by age group:

| | Ages 8–9 | Ages 10–12 |
|---|---|---|
| **EV formula** | Skip the formula. Use "the 100 Times Test" and intuitive reasoning: "If you played this game 10 times, would you win or lose overall?" Use physical tokens to count. | Introduce the EV formula explicitly. Have them calculate EV for multiple scenarios. Push toward real-world applications. |
| **Bet activities** | Fewer bets, simpler numbers (whole-number probabilities). | Full set of bets including fractions and decimals. |
| **Casino discussion** | Brief and matter-of-fact. | Connect to real-world business models. |

---

## Guided Session 1
### The Simple Bet
#### Learning Goal
By the end of this session, the student can:

- calculate the expected value of a simple coin-flip or dice bet
- explain what "positive EV" and "negative EV" mean
- determine whether a repeated bet would make or lose points over time

---

#### Activities

**1. The Coin Flip Casino**

Remember the coin-flip bet from Week 6? You felt the pull of loss aversion — even though the math was in your favor, it *felt* risky. This time, we're going to calculate exactly WHY the math said you should play.

Start with this:

> "I'll flip a coin. Heads: you win 2 tokens. Tails: you lose 1 token. Want to play?"

Before flipping, calculate together:

- Probability of heads: 50% (0.5)
- Value if heads: +2
- Probability of tails: 50% (0.5)
- Value if tails: -1

EV = (0.5 × 2) + (0.5 × -1) = 1.0 + (-0.5) = **+0.5 per flip**

> "On average, every time you flip, you gain half a token. Over 20 flips, you'd expect to be up about 10 tokens. This is a GOOD bet."

Now play 20 rounds for real and tally the results. Do the actual results match the prediction?

Discuss: individual flips are unpredictable, but over many flips, the average settles near the EV. If you lost tokens on a positive-EV bet, remember the 2×2 grid from Week 2: this is a good process with a bad outcome. The math was right even though the result stung.

---

**2. Spot the Good Bet**

Calculate EV for each. Is it positive (good) or negative (bad)?

| Bet | Calculation | EV |
|---|---|---|
| Heads +3, Tails -2 | (0.5×3)+(0.5×-2) | +0.5 ✅ |
| Roll 6 on a die: +10, otherwise -3 | (1/6×10)+(5/6×-3) | -0.83 ❌ |
| Draw a red card from a deck: +4, black card: -3 | (0.5×4)+(0.5×-3) | +0.5 ✅ |
| Roll even on a die: +2, odd: -3 | (0.5×2)+(0.5×-3) | -0.5 ❌ |

Key insight: "Your gut might say the +10 bet looks amazing. But because you only win 1 time in 6, and you lose 3 every other time, it's actually a bad bet."

---

**3. Why Casinos Always Win**

Brief discussion:

> "Every game in a casino has a negative expected value for the player. The casino doesn't need to win every hand — it just needs the math to be slightly in its favour. Over thousands of games, the casino ALWAYS comes out ahead. That's EV in action."

Connect to real life: "When someone offers you a deal that seems amazing, ask yourself: what's THEIR expected value? If they're making money on average, you're probably losing it."

> **Opportunity cost connection:** "Choosing one bet means choosing NOT to keep your tokens for the next bet. That's opportunity cost — a concept we'll explore fully in Week 11."

---

## Guided Session 2
### The Real Decision Calculator
#### Learning Goal
By the end of this session, the student can:

- apply EV thinking to a real-world (non-gambling) decision
- explain when EV is a good guide and when it falls short
- articulate the difference between "what the math says" and "what feels right"

---

#### Activities

**1. Kid-Friendly EV Decisions**

Work through these together:

**Scenario A: The Spelling Test**
> You can study for 1 hour (boring but effective) or skip studying (fun but risky).
> - If you study: 80% chance of an A, 20% chance of a B
> - If you skip: 30% chance of an A, 40% chance of a B, 30% chance of a C
> - Your values: A = 10 points of happiness, B = 6, C = 2

EV(study) = (0.8×10) + (0.2×6) = 8 + 1.2 = **9.2**
EV(skip) = (0.3×10) + (0.4×6) + (0.3×2) = 3 + 2.4 + 0.6 = **6.0**

Studying has much higher EV — even though it costs an hour of fun.

**Scenario B: The Lemonade Stand**
> It costs $5 to set up. On a sunny day (60% likely), you'll make $15. On a cloudy day (40% likely), you'll make $3.

EV = (0.6×15) + (0.4×3) - 5 = 9 + 1.2 - 5 = **+$5.20**

Good bet!

---

**2. When EV Isn't Enough**

Try this with real tokens:

> "You have 10 tokens — your entire supply. Here's a bet: flip a coin. Heads, you win 8 extra tokens. Tails, you lose ALL 10. Should you play?"

Calculate the EV: (0.5 × 8) + (0.5 × −10) = 4 + (−5) = **−1** — so the math says no.

Now change the bet: Heads, you win 12. Tails, you lose all 10. EV = (0.5 × 12) + (0.5 × −10) = **+1**. The math now says YES. But ask:

> "Even though the EV is positive, would you really bet EVERYTHING you have on a single coin flip?"

Discuss:
- Losing everything wipes you out — even if the math is slightly in your favor.
- This is why EV alone isn't always sufficient. We also need to consider:
  - **Can you survive the worst case?**
  - **How many times can you play?** (EV works best over many repetitions)
  - **Is this a one-time or repeat situation?**

Key insight: "Use EV for decisions you'll face many times. For big, one-time decisions, also ask: 'Can I handle the downside?'"

---

**3. The EV Instinct**

The ultimate goal isn't to calculate EV for every choice. It's to develop an INSTINCT. We call it the **100 Times Test**:

> "When someone offers you a deal, your brain should automatically ask: 'If I did this a hundred times, would I come out ahead or behind?'"

Practice the **100 Times Test** with quick-fire scenarios:
- "Buy one get one free on something you were going to buy anyway" → Positive EV
- "Spend $5 on lottery tickets" → Negative EV
- "Study an extra 30 minutes instead of watching TV" → Probably positive EV
- "Skip breakfast to sleep in" → Depends on your values!

---

## Independent Practice

### Goal

Apply EV thinking to a real decision and build the instinct for quick EV assessment.

### Activities

**1. Personal EV Calculation**

Pick a real decision you're facing this week. Try to build an EV calculation:

1. List the possible outcomes for each option
2. Estimate the probability of each outcome (doesn't have to be exact)
3. Rate how good/bad each outcome would be (1-10 scale)
4. Multiply and add

The exact numbers don't matter as much as the PROCESS of thinking through probabilities and values.

**2. EV Quick-Fire**

For 5 decisions you make this week, do a quick mental EV check: "If I did this 100 times, am I ahead or behind?" Write a one-sentence summary for each.

### Decision Journal

> Choose an upcoming decision. Before you decide, write out the options, estimate the probabilities, and calculate the EV. Then make your choice and explain whether you followed the EV or not — and why.

### Reflection Questions

- Is a decision with negative EV always a bad decision? Can you think of an exception?
- Why do people buy lottery tickets even though the EV is very negative?
- How accurate are your probability estimates? What would make them more accurate?

---

:::tip Simplify (Ages 8–9)
Skip the EV formula entirely. Focus on the 100 Times Test: "If you played this game 10 times, would you win or lose overall?" Use physical tokens to make bets tangible, and limit scenarios to coin flips (50/50 probabilities).
:::

:::tip Extend (Ages 10–12)
Challenge students to calculate EV for real decisions they face (e.g., studying vs. not studying, spending vs. saving). Have them create their own "bet" for a friend to evaluate. Introduce the idea that EV improves with better probability estimates — connecting back to Week 4 (calibration).
:::
