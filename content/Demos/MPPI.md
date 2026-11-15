---
title: Model Predictive Path Integral (MPPI) Control
date: 2026-11-15 00:00:00
draft: false
tags:
  - control
  - demo
---

<iframe src="/static/demos/mppi.html" title="MPPI simulator" style="width: 100%; height: 760px; border: none;" loading="lazy"></iframe>

**Click** anywhere to set the target, **drag** the obstacles around, **double-click** an obstacle to remove it, and **scroll** over an obstacle to resize it.
With **Auto mode** on, a new target (roughly ahead of the robot) and new obstacles are generated every time the robot reaches the target.
The thin lines are the sampled rollouts (darker means a higher weight, red means the sample crashed), and the thick line is the resulting optimal plan.

## What you're looking at

The robot is a unicycle with state $x = (p_x, p_y, \theta)$ and inputs $u = (v, \omega)$, i.e., linear and angular velocity:

$$
\dot p_x = v \cos\theta, \qquad \dot p_y = v \sin\theta, \qquad \dot\theta = \omega .
$$

MPPI is a sampling-based model predictive controller.
It keeps a nominal control sequence $U = (u_0, \dots, u_{T-1})$ over a horizon of $T$ steps, and at every control step it

1. samples $K$ perturbed sequences $u_t + \epsilon_t^k$ with $\epsilon_t^k \sim \mathcal{N}(0, \Sigma)$,
2. rolls each one out through the model and computes its cost
   $$
   S_k = \phi(x_T) + \sum_{t=0}^{T-1} \Big( q(x_t, u_t) + \gamma\, u_t^\top \Sigma^{-1} \epsilon_t^k \Big),
   $$
3. weights the samples with a softmin
   $$
   w_k = \frac{\exp\!\big(-\tfrac{1}{\lambda}(S_k - \min_j S_j)\big)}{\sum_i \exp\!\big(-\tfrac{1}{\lambda}(S_i - \min_j S_j)\big)},
   $$
4. updates the nominal sequence with the weighted average of the perturbations, $u_t \leftarrow u_t + \sum_k w_k \epsilon_t^k$,
5. applies $u_0$ to the robot and shifts $U$ by one step to warm-start the next iteration.

No gradients of the dynamics or the cost are needed, so the cost can be as non-smooth as we like.
Here it is the distance to the target, small penalties for driving backwards and for not facing the target, a soft penalty in a safety band around each obstacle, and a large constant cost for any rollout that collides with an obstacle or leaves the arena.

## Things to try

- **Temperature $\lambda$:** small values make the update follow only the best few samples (the effective sample size, ESS, in the top-right corner drops), large values average over everything and make the robot sluggish.
- **Noise $\sigma_v, \sigma_\omega$:** too little noise and the robot can't find its way around obstacles; too much and the plan gets jittery.
- **Samples $K$ and horizon $T$:** a longer horizon lets the robot plan around larger obstacles, but needs more samples to cover the larger space of control sequences.
- **Traps:** build a U-shaped wall of obstacles between the robot and the target. Since MPPI is a local method, it can get stuck in such local minima.
