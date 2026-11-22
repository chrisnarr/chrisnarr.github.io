---
title: Value Iteration and Policy Iteration
date: 2026-11-22 00:00:00
draft: false
---

<iframe src="/static/demos/vi-pi.html" title="Value and policy iteration" style="width: 100%; height: 1150px; border: none;" loading="lazy"></iframe>

Both panels solve the same gridworld, whose dynamics are fully known, by dynamic programming: **value iteration (VI)** on the left and **policy iteration (PI)** on the right.
Every tick performs one sweep over all cells, so the horizontal axes of the plots measure the work in sweeps. The small blue ticks mark PI's policy improvements.

Cells show their current value (blue for positive, red for negative) and the current policy: the greedy policy for VI, and the policy $\pi$ being evaluated for PI. A red arrow is an action that is not optimal.
Highlighted cells changed their value in the last sweep, and outlined cells changed their action in PI's last improvement step.
**Click and drag** to paint walls, lava, ice or goals (**right-click** erases); both methods continue from their current values, so you can watch them adapt. Hover over a cell to see its one-step lookahead $Q(s,a)$ for both.

## Setup

The robot moves up, down, left or right, and with the slip probability it moves to one of the two perpendicular directions instead (on ice with at least $0.5$). Walls and the border block movement.
Entering a **goal** gives $+1$, entering **lava** gives $-1$ (both end the episode), and every other step gives the step reward.
Because the model $p(s' \mid s, a)$ and the rewards are known, no interaction with the environment is needed; everything is computed from the Bellman equations.

## Short Explanation

Both methods are built on the one-step lookahead

$$
Q_V(s, a) = \sum_{s'} p(s' \mid s, a) \big[ r(s') + \gamma V(s') \big],
$$

where $V(s') = 0$ for the terminal cells.

**Value iteration** repeatedly applies the Bellman *optimality* operator to every cell,

$$
V_{k+1}(s) = \max_a Q_{V_k}(s, a),
$$

and stops when the largest change in a sweep is below $\theta = 10^{-4}$. Each sweep propagates the information about the goal one cell further, which you can see as a wave spreading from the goal. The policy is only extracted at the end, as the greedy policy $\pi(s) = \arg\max_a Q_V(s, a)$.

**Policy iteration** keeps an explicit policy, starting from a random one, and alternates two steps:

1. **Policy evaluation:** sweep $V(s) \leftarrow Q_V(s, \pi(s))$ until $V$ converges to $V^\pi$. This uses the Bellman *expectation* operator, so each sweep is cheaper than a VI sweep: one action per cell instead of four.
2. **Policy improvement:** make the policy greedy with respect to $V^\pi$, $\pi(s) \leftarrow \arg\max_a Q_{V^\pi}(s, a)$. By the policy improvement theorem, the new policy is at least as good everywhere.

PI stops when an improvement step doesn't change any action. It typically needs only a handful of policies, but evaluating each one fully takes many sweeps.

## Things to Try

- **Lower the PI evaluation sweeps.** With a cap of $k$ sweeps per improvement you get *modified* (or optimistic) policy iteration. With $k = 1$ it behaves almost exactly like value iteration, and somewhere in between (for example $k = 5$) it typically needs the fewest sweeps of all.
- **Turn on in-place updates.** By default every sweep computes the new values from a copy of the old ones (Jacobi-style). In-place (Gauss–Seidel) updates use new values as soon as they are available, which usually cuts the number of sweeps.
- **Compare the two plots.** VI's greedy policy is usually optimal long before its values have converged. Most of the remaining sweeps only make the values more precise.
- **Change the step reward on the Cliff map.** At the default of $-0.04$ the robot takes a safe detour two rows above the lava. Around $-0.12$ it starts cutting closer to the lava, and from about $-0.15$ on, every route to the goal costs so much that jumping into the lava right away is optimal. With a step reward of zero or more, there is no reason to hurry, and the robot doesn't leave the bottom-left corner for the risky trip along the cliff. At $+0.1$, staying on the board forever pays more than the goal, so the robot even walks away from it.
- **Increase the slip probability or $\gamma$.** More slip makes the policy keep its distance from lava; a $\gamma$ closer to 1 makes the evaluation sweeps converge more slowly, so PI needs many more sweeps.

## Parameters

- **Discount $\gamma$:** how much future rewards count. It also sets the convergence rate: the error shrinks by about a factor $\gamma$ per sweep.
- **Step reward:** the reward for every move that doesn't end the episode.
- **Slip probability:** the chance of moving sideways instead of in the chosen direction.
- **PI evaluation sweeps per improvement:** how many evaluation sweeps PI performs before each improvement ("until converged" is classic policy iteration).
- **Speed:** sweeps per second; pause and use **Step** to go through single sweeps.

See also the [[TD-vs-MC|gridworld demo for TD and Monte Carlo learning]], where the agents have to learn the same kind of task without knowing the model.
