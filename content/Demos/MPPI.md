---
title: Model Predictive Path Integral (MPPI) Control
date: 2026-11-15 00:00:00
draft: false
---

<iframe src="/static/demos/mppi.html" title="MPPI simulator" style="width: 100%; height: 1000px; border: none;" loading="lazy"></iframe>

**Click** anywhere to set the target, **drag** the obstacles around, **double-click** an obstacle to remove it, and **scroll** over an obstacle to resize it.
**Auto mode** (on by default) generates a new target, roughly ahead of the robot, and new obstacles every time the robot reaches the target; turn it off to place targets yourself.
The thin lines are the sampled rollouts (darker means a higher weight, red means the sample crashed), and the thick line is the resulting optimal plan.
The two plots below the map show the same samples in input space: the sampled sequences of $v$ and $\omega$ over the horizon, with the same weight-based shading, and the optimal (weighted-average) input sequence on top. Hover over a plot to read off the optimal input at a given time.

## Short Explanation

The robot is a unicycle with dynamics

$$
\dot p_x = v \cos\theta, \qquad \dot p_y = v \sin\theta, \qquad \dot\theta = \omega .
$$

where $x = [p_x, p_y, \theta]^\top$ is the state, consisting of the position $p = (p_x, p_y)$ and the heading angle $\theta$, and $u = [v, \omega]^\top$ is the input, consisting of the linear velocity $v$ and the angular velocity $\omega$.

MPPI is a sampling-based model predictive controller.
It keeps a nominal control sequence $U = (u_0, \dots, u_{T-1})$ over a horizon of $T$ steps, and at every control step it

1. Samples $K$ perturbed sequences $u_t + \epsilon_t^k$ with $\epsilon_t^k \sim \mathcal{N}(0, \Sigma)$,
2. Rolls each one out through the model and computes its cost
   $$
   S_k = \sum_{t=0}^{T-1} \Big( \ell(x_t, u_t) + \gamma\, u_t^\top \Sigma^{-1} \epsilon_t^k \Big) + V_f(x_T),
   $$
3. Weights the samples with a softmin
   $$
   w_k = \frac{\exp\!\big(-\tfrac{1}{\lambda}(S_k - \min_j S_j)\big)}{\sum_i \exp\!\big(-\tfrac{1}{\lambda}(S_i - \min_j S_j)\big)},
   $$
4. Updates the nominal sequence with the weighted average of the perturbations, $u_t \leftarrow u_t + \sum_k w_k \epsilon_t^k$,
5. Applies $u_0$ to the robot and shifts $U$ by one step to warm-start the next iteration.

No gradients of the dynamics or the cost are needed, only forward evaluations.
Here, the stage cost $\ell$ consists of the distance to the target, small penalties for input effort, for driving backwards and for not facing the target, and a soft penalty in a safety band around each obstacle. A rollout that collides with an obstacle or leaves the arena is stopped there and pays a large penalty for every remaining step of the horizon, so earlier crashes cost more. The terminal cost $V_f$ is the remaining distance to the target.

## Parameters

- **Temperature $\lambda$:** small values make the update follow only the best few samples, large values average over everything and make the robot sluggish.
- **Noise $\sigma_v, \sigma_\omega$:** the noise is added to the input sequence; too little noise and the trajectories are only updated very slowly; too much and the plan gets very jittery.
- **Samples $K$ and horizon $T$:** a longer horizon lets the robot plan around larger obstacles, but needs more samples to cover the larger space of control sequences.
