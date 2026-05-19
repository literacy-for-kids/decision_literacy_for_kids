---
sidebar_position: 20
sidebar_label: "Optional: Decision Trees"
title: "Optional Week 2: Decision Trees"
description: "Mapping complex, multi-step decisions with branching paths, probabilities, and working backwards."
---

# Extension Week 2: Decision Trees
*Mapping Complex, Multi-Step Decisions*

Most of the decisions in this course have been single-step: "Should I do X or Y?" But real life is often more complex. One decision leads to another, which leads to another. **Decision trees** let you map out these branching paths, see all the possible futures, and work backwards from where you want to end up.

This is the tool of choice for strategists, doctors making treatment plans, and anyone facing a sequence of interconnected choices.

:::warning Extension Week Readiness
**Use this extension if:**
- The learner has completed **at least Weeks 1–11** of the core curriculum (through Phase 3).
- The learner showed strong engagement with **Week 9 (Expected Value)** — decision trees combine EV with multi-step branching.
- The learner is comfortable with basic probability estimates and scoring outcomes.

**Hold off if:**
- The learner struggled with Week 9's expected value calculations.
- The core 18-week curriculum hasn't been completed yet — finish the capstone first if possible.
:::

---

:::info Facilitator Snapshot
- Decision trees are visual and hands-on — lots of drawing this week.
- The concept of "working backwards" is especially powerful and applies far beyond decision trees.
- This extension works best after the student has mastered Expected Value (Week 9).
- Target age: best for ages 9+ or advanced younger students.
:::

:::tip Quick Navigation
- [Facilitator Preparation](#facilitator-preparation)
- [Guided Session 1: The Decision Tree](#guided-session-1)
- [Guided Session 2: Working Backwards](#guided-session-2)
- [Independent Practice](#independent-practice)
:::

## Facilitator Preparation

:::info Before You Begin
- Large paper or poster board for drawing trees (they spread out!)
- Colored markers (one color per decision branch works well)
- Prepare the Practice Scenario trees (partially drawn for the student to complete)
- Review Expected Value (Week 9) — we combine EV with trees this week
:::

:::tip Facilitation Mindset
Decision trees look complicated but they're just a series of what-if questions drawn out. Start very simple and build up. If the student gets overwhelmed, zoom in to just one branch at a time.
:::

---

## For Younger Learners (Ages 8–9)

:::info Adapting This Week
**Simplest version of the concept:** "A decision tree is a map of 'what if?' — it shows you all the paths a choice could take and helps you pick the best one."

**What to shorten or skip:**
- Focus on the umbrella tree (Session 1, Activity 1) and the working-backwards goal planner (Session 2, Activity 4). These are the most accessible.
- Skip formal backward induction calculations. Keep working-backwards intuitive: "Start at the end and walk back."
- Skip the Counting Game proof — just play it for fun.
- Use only 2 branches per decision (not 3+). Two is plenty.
- Keep sessions to 20 minutes.

**Adapting the activities:**
- Draw the tree LARGE on poster paper. Use colors: green for "you choose" nodes, blue for "the world decides" nodes.
- Let the learner assign scores using stars (⭐ to ⭐⭐⭐⭐⭐) rather than numbers 1–10.
- Skip EV calculation for younger learners. Instead: "Which path has the most stars if things go normally?"
- For working backwards: use a very concrete goal — "I want to bring cupcakes to school on Friday. What do we need to do on Thursday? Wednesday?"
- The facilitator should draw while the learner dictates the branches.

**Journal alternative:** "I drew a decision tree for ___. The best path was ___ because ___." Drawn is ideal.

**What success looks like:** The learner can draw a simple 2-branch tree with outcomes, and explain "I'd pick this path because ___."
:::

:::info For Ages 10–12
- Full decision trees with EV calculations, backward induction, and multi-step branching.
- Challenge: build a 3+ step tree for a real decision in their life.
- Discuss when trees are worth drawing vs. when intuition is enough.
- Explore the Counting Game proof and find the pattern algebraically.
:::

---

## Guided Session 1
### The Decision Tree
#### Learning Goal
By the end of this session, the student can:

- draw a decision tree for a 2-step decision
- distinguish between decision nodes (you choose) and chance nodes (the world decides)
- read a decision tree to compare different paths

---

#### Activities

**1. Anatomy of a Decision Tree**

Draw the basic elements:

```
■ = Decision Node (YOU choose)
● = Chance Node (the WORLD decides)
▶ = Outcome (what happens)
```

Simple example:

```
■ Bring an umbrella?
├─ YES (bring it)
│   ● Weather?
│   ├─ Rain (60%) → ▶ Dry and prepared! [Score: 8]
│   └─ Sun (40%) → ▶ Carried it for nothing [Score: 5]
│
└─ NO (leave it)
    ● Weather?
    ├─ Rain (60%) → ▶ Soaking wet! [Score: 2]
    └─ Sun (40%) → ▶ Free hands, sunshine! [Score: 9]
```

Now calculate the Expected Value of each branch:

- **Bring umbrella:** (0.6 × 8) + (0.4 × 5) = 4.8 + 2.0 = **6.8**
- **No umbrella:** (0.6 × 2) + (0.4 × 9) = 1.2 + 3.6 = **4.8**

Conclusion: Bring the umbrella! (Higher EV)

But notice: the BEST single outcome is leaving the umbrella on a sunny day (score 9). The tree tells us to give up the best-case scenario to avoid the worst-case scenario. That's the power of EV + trees together.

---

**2. A Two-Step Tree**

Now add a second decision:

```
■ Study for the test?
├─ YES (study 1 hour)
│   ● Test result?
│   ├─ Pass (85%) → ■ Celebrate or study more?
│   │                  ├─ Celebrate → ▶ Happy, good grade [8]
│   │                  └─ Study more → ▶ Very prepared for next test [7]
│   └─ Fail (15%) → ■ Try again or give up?
│                     ├─ Try again → ▶ Learning from failure [5]
│                     └─ Give up → ▶ Defeated feeling [2]
│
└─ NO (play instead)
    ● Test result?
    ├─ Pass (30%) → ▶ Lucky! Free afternoon AND good grade [9]
    └─ Fail (70%) → ■ Try again or give up?
                     ├─ Try again → ▶ Behind but trying [4]
                     └─ Give up → ▶ Failed and behind [1]
```

Discuss:
- "See how one decision leads to another? The tree shows ALL possible futures."
- "Which overall path gives the best expected outcome?"
- Calculate the EV of the "Study" branch vs. the "Don't Study" branch.

---

**3. Build a Tree Together**

Choose a fun scenario and draw a tree from scratch:

Suggested: "It's Saturday morning. You can go to a friend's house OR stay home and play video games. But if you go to your friend's house, you might get invited to go swimming (which you love) OR you might end up doing something boring."

Draw it out:
- What are the decision nodes?
- What are the chance nodes?
- What probabilities and scores would you assign?
- What does the tree recommend?

---

## Guided Session 2
### Working Backwards
#### Learning Goal
By the end of this session, the student can:

- use "backward induction" to find the best path through a multi-step tree
- explain why starting from the end is sometimes easier than starting from the beginning
- apply working-backwards thinking to a real scenario

---

#### Activities

**1. The Maze Strategy**

Quick warm-up:

> "When you solve a maze, is it easier to start from the beginning or the end?"

Many mazes are MUCH easier solved backwards because from the end, there's often only one path. From the start, there are many branches.

> "Decision trees work the same way. Start at the end (the outcomes), and work backwards to figure out the best first move."

---

**2. Backward Induction**

Return to the two-step study tree from Session 1. Solve it from the bottom up:

**Step 1: Solve the last decisions first.**

At each final decision node, pick the better option:
- "Celebrate or study more?" → Celebrate (8 > 7)
- "Try again or give up?" after studying → Try again (5 > 2)
- "Try again or give up?" after not studying → Try again (4 > 1)

**Step 2: Replace each final decision with its best value.**

Now the tree simplifies:

```
■ Study?
├─ YES → (0.85 × 8) + (0.15 × 5) = 6.8 + 0.75 = 7.55
└─ NO → (0.30 × 9) + (0.70 × 4) = 2.7 + 2.8 = 5.5
```

**Step 3: Choose the first move with the highest value.**

Study wins (7.55 > 5.5).

> "By solving from the end, we figured out the best strategy for every possible future FIRST, then used those answers to make the first decision. This is called **backward induction** and it's how chess players, business strategists, and game designers think."

---

**3. Plan a Strategy Game**

Apply backward thinking to a simple strategy game:

**The Counting Game:**
- Two players take turns.
- On your turn, say 1, 2, or 3 numbers (continuing the count upward).
- The person who says "21" loses.

Play a few rounds. Then:

> "Can you figure out the winning strategy? Work backwards from 21."

- If you say 21, you lose.
- So you want your opponent to say 21.
- If you say 20, they must say 21. You win!
- So you want to say 20. To guarantee saying 20, you need to say 16 (they say 17-19, you say 20).
- To guarantee 16, say 12. Then 8. Then 4.
- **Winning strategy: say 4, 8, 12, 16, 20. (Multiples of 4!)**

> "By working backwards from the end, you can figure out the exact winning strategy. This is backward induction in action!"

---

**4. Real-Life Working Backwards**

Apply the technique to a real goal:

> "Where do you want to end up? Now let's work backwards to figure out what decisions you need to make."

Example:

```
GOAL: Finish a big school project without stress (due Friday)

  What needs to be true on Thursday night? → Project is almost done
  What needs to happen by Wednesday? → First draft is complete
  What needs to happen by Tuesday? → Research is done
  What needs to happen by Monday? → Topic is chosen, materials gathered
  What should I do TODAY (Sunday)? → Choose topic and make a plan
```

> "Instead of staring at a big goal and feeling overwhelmed, working backwards breaks it into clear steps."

---

## Independent Practice

### Goal

Build decision trees for real decisions and practice backward thinking.

### Activities

**1. My Decision Tree**

Pick a real decision you're facing (or one coming up soon). Draw a full decision tree:

- At least 2 decision points
- At least 2 chance nodes with estimated probabilities
- Score each outcome (1-10)
- Calculate the EV of each main branch
- Use backward induction to find the best first move

**2. Goal Backwards**

Pick a goal you want to achieve in the next month. Work backwards from the goal to today:

- What needs to be true the day before the deadline?
- What needs to happen the week before?
- What should you start doing THIS week?
- What's the very first step?

### Decision Journal

> Draw a decision tree for an important upcoming choice. Include probabilities and outcome scores. What does the tree recommend? Does the recommendation match your gut feeling? If they disagree, which will you follow and why?

### Reflection Questions

- When is a decision tree overkill? When is it worth the effort to draw one?
- Is it better to plan every step in advance, or to figure things out as you go? When does each approach work best?
- Can you think of a game (board game, video game, or sport) where "working backwards" would help you win?

---

## Check for Understanding

After this week, check whether the learner can:

1. **Draw a basic tree:** "You can ride your bike or walk to the park. If you bike, there's a chance it rains (you get soaked) or stays sunny (you arrive fast). If you walk, rain means you use your umbrella, sun means a nice stroll. Draw the tree." (Looking for: correct decision node → chance nodes → outcomes structure.)
2. **Calculate EV on a tree:** Given the tree above with probabilities and scores, can they multiply and add to find which branch wins? (Looking for: correct arithmetic and the right conclusion.)
3. **Work backwards:** "You want to be ready for a camping trip on Saturday. What needs to happen by Friday? By Thursday? By Wednesday?" (Looking for: a backwards chain from the goal to today.)

If the learner can draw a tree, calculate EV on it, and work backwards from a goal, they've mastered decision trees.

---

## Pause and Notice

:::note What Matters Here
After the decision tree or working-backwards activity, ask:

> "When you drew all the possible paths, did it feel good to SEE the options laid out — or did it feel overwhelming? Sometimes seeing all the possibilities makes deciding feel harder."

> "Decision trees are powerful, but they can also create a trap: the illusion that you can predict everything. Real life is messier than any tree. The goal isn't to map every possible future — it's to think through the MOST LIKELY branches and make a better first move."

**This week's takeaway:** You don't need a perfect map to make a good decision. A rough sketch of the main branches is often enough. And working backwards from where you want to end up is one of the most powerful thinking tricks you'll ever learn.
:::

---

## Spiral Review

:::tip Connecting to Earlier Weeks
- **From Week 9:** "Decision trees are Expected Value, expanded. Instead of one gamble, you chain multiple decisions and chance events together — and EV guides you at every branch."
- **From Week 11:** "Reversibility matters on trees too. Two-way-door branches are easier to recover from, so you can be bolder. One-way-door branches deserve more careful scoring."
- **From Week 12:** "Each branch of your tree creates ripples. The tree helps you SEE those ripples before they happen."
- **From Week 3:** "Working backwards is calibration in reverse. Instead of 'How confident am I?', you ask 'What would need to be true?' and check whether it is."
:::
