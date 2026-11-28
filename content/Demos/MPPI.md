---
title: Model Predictive Path Integral (MPPI) Control
date: 2026-11-15 00:00:00
draft: false
---

<iframe src="/static/demos/mppi.html" title="MPPI simulator" style="width: 100%; height: 1000px; border: none;" loading="lazy"></iframe>

A mobile robot has to drive to a target without hitting any obstacles. It is controlled by **model predictive path integral (MPPI)** control, a sampling-based model predictive controller that replans at every control step.

The thin lines are the sampled rollouts (darker means a higher weight, red means the sample crashed), and the thick line is the resulting optimal plan. The two plots below the map show the same samples in input space: the sampled sequences of $v$ and $\omega$ over the horizon, with the same weight-based shading, and the optimal (weighted-average) input sequence on top. Hover over a plot to read off the optimal input at a given time. **Click** anywhere to set the target, **drag** the obstacles around, **double-click** an obstacle to remove it, and **scroll** over an obstacle to resize it. **Auto mode** (on by default) generates a new target, roughly ahead of the robot, and new obstacles every time the robot reaches the target; turn it off to place targets yourself.

## Problem Setup

The robot is modelled as a discrete-time unicycle,

$$
p_{x,k+1} = p_{x,k} + \Delta t\, v_k \cos\theta_k, \qquad
p_{y,k+1} = p_{y,k} + \Delta t\, v_k \sin\theta_k, \qquad
\theta_{k+1} = \theta_k + \Delta t\, \omega_k ,
$$

where the state $x_k = [p_{x,k}, p_{y,k}, \theta_k]^\top$ consists of the position $p_k = (p_{x,k}, p_{y,k})$ and the heading angle $\theta_k$, the input $u_k = [v_k, \omega_k]^\top$ consists of the linear velocity $v_k \in [-0.6, 1.6]$ m/s and the angular velocity $\omega_k \in [-2.5, 2.5]$ rad/s, and $\Delta t = 0.05$ s is the control period. The same model is used for the simulated robot and inside the controller, so there is no model mismatch.

The robot is a disc with a radius of $0.22$ m and drives in a $12 \times 8$ m arena with circular obstacles, none of which it may touch, just like the border of the arena. Its task is to reach the target, which counts as reached within $0.25$ m.

## Method

MPPI keeps a nominal control sequence $U = (u_0, \dots, u_{T-1})$ over a horizon of $T$ steps, and at every control step it

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

## Things to Try

- **Change the temperature $\lambda$.** With a small $\lambda$, the update follows only the best few samples and the plan reacts quickly but jitters; with a large $\lambda$, it averages over almost all samples and the robot becomes sluggish.
- **Reduce the number of samples $K$.** With few samples, only a few of them find a good way past the obstacles, and the plan becomes noisy and less reliable.
- **Shorten the horizon $T$** and put the target right behind a large obstacle. If no rollout reaches around the obstacle, every sample only sees the distance to the target, and the robot can get stuck in front of it.
- **Set the obstacle weight to 0.** Only the crash penalty is left, so the plans graze the obstacles much more closely.
- **Lower the noise $\sigma_\omega$.** The samples then hardly turn, and the robot needs much longer to steer around obstacles or turn towards a new target.

## Parameters

- **Samples $K$ and horizon $T$:** a longer horizon lets the robot plan around larger obstacles, but needs more samples to cover the larger space of control sequences.
- **Temperature $\lambda$:** small values make the update follow only the best few samples, large values average over everything and make the robot sluggish.
- **Noise $\sigma_v, \sigma_\omega$:** the noise is added to the input sequence; too little noise and the trajectories are only updated very slowly; too much and the plan gets very jittery.
- **Obstacle weight:** the weight of the soft penalty in the safety band around each obstacle.
