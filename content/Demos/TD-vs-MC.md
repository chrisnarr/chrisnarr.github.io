---
title: Temporal-Difference vs. Monte Carlo Learning
date: 2026-11-22 00:00:00
draft: false
---

<iframe src="/static/demos/td-mc.html" title="TD vs. MC gridworld" style="width: 100%; height: 1150px; border: none;" loading="lazy"></iframe>

Two robots learn to reach the goal in the same gridworld, which starts out as the classic *cliff walking* task (Sutton & Barto, Example 6.6): the left one with **Monte Carlo (MC)** control and the right one with **temporal-difference (TD)** control (SARSA or Q-learning).
**Click and drag** on either map to paint walls, lava, goals or the start cell with the selected tool (**right-click** erases), and watch how both agents adapt.

Each cell is shaded by its estimated value $\max_a Q(s,a)$: darker means more valuable, and a small dot means that the cell has never been updated. The arrows show the greedy policy.
The **highlighted** cells are the ones whose Q-values were just updated: TD updates one cell right behind the robot on every step, while MC waits (dashed trail) and then updates the whole episode at once.
Hover over a cell to compare both estimates with the optimal value $V^*$, which is computed with value iteration.

The plots show the return of each episode (dots, with a moving average), how often the current greedy policy reaches the goal from the start cell **S**, and the RMS error between $\max_a Q$ and $V^*$, all plotted against the number of environment steps.

## Setup

The robot moves up, down, left or right, but with the slip probability (0 by default) it slips to one of the two perpendicular directions instead. Walls and the border block movement.
Every step costs $-0.02$. Reaching a **goal** gives $+1$ and stepping into **lava** gives $-1$, and both end the episode. Episodes are also cut off after 100 steps.
Both agents explore with an $\varepsilon$-greedy policy and start from $Q = 0$. By default every episode starts at **S**; with *exploring starts* it starts in a random open cell instead.

## Short Explanation

Both methods nudge $Q(s_t, a_t)$ towards a **target** with learning rate $\alpha$,

$$
Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \big( \text{target} - Q(s_t, a_t) \big),
$$

and only differ in what that target is.

**Monte Carlo** uses the actual discounted return of the rest of the episode,

$$
G_t = r_{t+1} + \gamma r_{t+2} + \gamma^2 r_{t+3} + \dots ,
$$

so it has to wait until the episode is over. The target is unbiased, but it depends on every random action and slip that follows, so it has high variance.

**TD learning** uses one real reward and then *bootstraps* from its own current estimate of the next state:

$$
\text{SARSA:}\quad r_{t+1} + \gamma\, Q(s_{t+1}, a_{t+1}), \qquad
\text{Q-learning:}\quad r_{t+1} + \gamma \max_{a} Q(s_{t+1}, a).
$$

It can update after every step, and the target has low variance, but it is biased for as long as $Q$ itself is wrong. Information about the goal therefore moves backwards roughly one cell per visit, while MC pushes it along the whole trajectory in one go.
SARSA is *on-policy*: it learns the value of the $\varepsilon$-greedy policy it actually follows. Q-learning is *off-policy*: it learns the optimal values $Q^*$, regardless of how it explores. This is why only Q-learning's error to $V^*$ goes to zero.

## Things to Try

- **Turn on exploring starts.** Exploring starts launch every episode from a random cell, which is the standard trick that makes MC control work. Without them, MC easily gets stuck: as long as no update happens, its greedy policy can send the robot back and forth between two cells until the episode times out, so it may never see the goal. TD fixes such a loop within a few steps, because the Q-values it updates change the policy it follows mid-episode.
- **Compare SARSA with Q-learning** on the cliff. Q-learning learns the optimal path right along the lava, but it falls in now and then because of the $\varepsilon$-exploration; SARSA accounts for its own exploration and takes a safer detour. Compare the returns per episode.
- **Move the goal** (or paint a wall across the learned path) after the agents have converged, and see how quickly each one recovers.
- **Increase the slip probability.** The returns become noisier, which hurts MC more than TD.
- **Slow down** to a few steps per second and use **Step** to follow single updates.

## Parameters

- **Learning rate $\alpha$:** how far each update moves the estimate towards its target. Large values learn fast but noisily, especially for MC, whose targets vary a lot.
- **Exploration $\varepsilon$:** the probability of taking a random action instead of the greedy one.
- **Discount $\gamma$:** how much future rewards count; smaller values make the agent short-sighted.
- **Slip probability:** the chance of slipping sideways instead of moving in the chosen direction.
- **Speed:** environment steps per second; both agents always take the same number of steps.
