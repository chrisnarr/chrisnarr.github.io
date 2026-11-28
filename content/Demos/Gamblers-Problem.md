---
title: "Value and Policy Iteration: The Gambler's Problem"
date: 2026-11-22 00:00:00
draft: true
---

<iframe src="/static/demos/gambler.html" title="Gambler's problem" style="width: 100%; height: 760px; border: none;" loading="lazy"></iframe>

How much should a gambler bet on each coin flip to maximise the chance of reaching a goal? The left column solves the problem with **value iteration (VI)** and the right one with **policy iteration (PI)**. This is Example 4.3 from Sutton & Barto.

The top plots show the values, with fading lines for the earlier sweeps or policies and the dashed line for the optimal $V^*$. The bottom plots show the stakes, with grey dots for **all** optimal stakes. Hover over a plot to read off the numbers for a single capital.

## Problem Setup

- **State:** the gambler's capital $s \in \{1, \dots, G-1\}$, where $G$ is the goal (100 by default).
- **Action:** the stake $a \in \{1, \dots, \min(s, G - s)\}$.
- **Dynamics:** with probability $p_h$ the coin comes up heads and the gambler wins the stake, $s \to s + a$; otherwise they lose it, $s \to s - a$.
- **Reward and termination:** reaching the goal gives a reward of $1$ and going broke gives $0$; both end the game. There is no discounting.
- **Objective:** with these rewards, the value $V(s)$ is simply the probability of reaching the goal from capital $s$, and the optimal policy maximises it.

## Method

Both methods use the one-step lookahead

$$
Q_V(s, a) = p_h\, V(s + a) + (1 - p_h)\, V(s - a), \qquad V(0) = 0, \quad V(G) = 1 .
$$

**Value iteration** sweeps through the capitals and sets $V(s) \leftarrow \max_a Q_V(s, a)$ in place, until the largest change is below $10^{-10}$. The greedy stake is the *smallest* stake that achieves the maximum.

**Policy iteration** starts from the timid policy "always bet 1" and alternates two steps:

1. **Policy evaluation:** here it is done *exactly*, by solving the linear system $V(s) = Q_V(s, \pi(s))$ for all $s$ at once.
2. **Policy improvement:** make the policy greedy, changing a stake only if that strictly improves the value.

## Things to Try

- **Look at the grey dots.** For $p_h < 0.5$ there are many optimal policies: at most capitals, several stakes give exactly the same probability of winning. The spiky shape of the optimal policy in the book comes from breaking these ties towards the smallest stake. In this setting, bold play (betting everything that is needed to reach the next "milestone" like 25, 50 or 75) is optimal.
- **Set $p_h$ above 0.5.** Now the odds are in your favour, and the timid policy of always betting 1 is optimal. PI recognises this immediately, because its first policy is already stable. VI starts from $V = 0$, though, and needs about 1800 sweeps at $p_h = 0.55$ until its values settle.
- **Lower the goal** to make the structure easier to see: the optimal stakes always form "triangles" between the milestones.
- **Compare the first sweeps of VI with the first policies of PI.** After one sweep, VI only knows how to win in a single bet, and every further sweep adds one more bet to its horizon. PI's values, in contrast, are always the exact winning probabilities of an actual policy.

## Parameters

- **Probability of heads $p_h$:** the chance of winning a single bet.
- **Goal:** the capital needed to win.
- **Speed:** VI sweeps (and PI steps) per second; each PI step is either an exact evaluation or an improvement.

See also [[Value-and-Policy-Iteration|value and policy iteration in a gridworld]].
