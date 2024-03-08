---
title: Controllability
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

> [!idea] Idea
>
> - Use a **model** of the plant to predict it’s future and **minimize** a cost function to optimize the inputs subject to contraints

![[mpc_problem.png]]

> [!tldr] Steps
> Repeat for all timesteps $t$:
>
> 1. Estimate current state $x(t)$
> 2. Optimize w.r.t. $\{u_0, ..., u_{N-1}\}$
> 3. Only apply the first optimal input $u_0$ as input $u(t)$

---

# MPC Schemes

- [[Linear MPC]]
- [[Nonlinear MPC]]
- [[Stochastic MPC]]
- [[Explicit MPC]]

---

> [!definition] Definition: Input Trajectory
>
> $$
> \underline{u}^N \coloneqq \{u(0),u(1),...,u(N)\}
> $$

> [!definition] Definition: State Trajectory
>
> $$
> \underline{x}_{\underline{u}}^N(x_0) \coloneqq \{x(0),x_{\underline{u}}(1,x_0),...,x_{\underline{u}}(N,x_0)\}
> $$
>
> or if context is clear for brevity:
>
> $$
> \underline{x}_{\underline{u}}^N(x_0) \coloneqq \{x(0),x(1),...,x(N)\}
> $$

---

# Constraints

> [!definition] Definition: Input constraints
> $$u(k) \in \mathbb{U}$$

> [!definition] Definition: State constraints
> $$x(k) \in \mathbb{X}$$

> [!definition] Definition: Terminal constraints
> $$x(N) \in \mathbb{X}_f$$

> [!definition] Definition: Admissible Controls $\mathcal{U}_N(x_0)$
>
> $$
> \mathcal{U}_N(x_0) \coloneqq \{\underline{u}\;|\;(x_0,\underline{u})\in\mathbb{Z}_N\}
> $$
>
> $$
> \mathbb{Z}_N \coloneqq \{(x_0,\underline{u}) \,|\,u(k)\in\mathbb{U}, x_{\underline{u}}(k,x_0)\in\mathbb{X},k=0,1,...,N-1;x_{\underline{u}}(N,x_0)\in\mathbb{X}_f\}
> $$

> [!definition] Definition: Feasible Initial Values $\mathcal{X}_N​$
> Every initial state, which has a **non-empty** admissible control set $\mathcal{U}_N$
>
> $$
> \mathcal{X}_N \coloneqq \{x \in \mathbb{X}\;|\;\mathcal{U}_N(x_0)\neq\emptyset\}
> $$

---

# Cost Functions

> [!definition] Definition: Infinite Horizon Cost Function
>
> $$
> J_\infty(x_0,\underline{u}^\infty)=\sum_{k=0}^\infty l(x_{\underline{u}}(k,x_0),u(k))
> $$

> [!definition] Definition: Finite Horizon Cost Function
>
> $$
> J_N(x_0,\underline{u}^N)=\sum_{k=0}^{N-1} l(x_{\underline{u}}(k,x_0),u(k))+J_f(x_{\underline{u}}(N,x_0))
> $$

$l(x,u)$: stage cost, $J_f(x)$: target/terminal cost

---

# Constrained Optimal Control Problem

$$\mathbb{P}_N(x_0):J_N^*(x_0)=\min_{\underline{u}}\{J_n(x_0,\underline{u})\;|\;\underline{u}\in\mathcal{U}_n(x_0)\}$$

> [!definition] Assumption 1
> $f$, $l$, $J_f$ are continuous with $f(0,0) = 0$, $l(0,0) = 0$ and $J_f(0) = 0$

> [!definition] Assumption 2
> $\mathbb{X}$ is closed , $\mathbb{X}_f$ and $\mathbb{U}$ are compact and all sets contain the origin.

Under Assumption 1 and Assumption 2 the optimization problem $\mathbb{P}_N(x_0)$ has a solution $\forall x_0 \in \mathcal{X}_N$.

---

### Moving/Receding Horizon

At every timestep, only the **first element** of the optimized input trajectory is applied to the system, i.e. control input $\kappa_N(x_0) = u^*(0,x_0)$ with $u^*(0,x_0)$ from $\underline{u}^* = \{u^*(0,x_0),u^*(1,x_0),...,u^*(N-1,x_0)\}$ as solution of $\mathbb{P}_N(x_0)$

---

# Regulation, Tracking and Economic MPC

### Stabilization of the Equilibrium in the Origin

### Stabilization of other Equilibria

### Stabilization of a Reference Trajectory

### Stabilization of Non-Equilibrium Set Points

### Example 1: Economic Cost Function

### Example 2: Economic Cost Function

### Example 3: No Equilibrium

### Example 4: “Unreachable” Equilibrium

---

# MPC Stability

# Prerequisites

### Lyapunov Stability

### Positive Invariance

---

# MPC Stability Proof

### Terminal Set

### Large enough horizon

---

# Stability Theorems

### Stability constrained MPC

### Stability unconstrained MPC

---

# MPC Recursive Feasibility

## Recursive Feasibility

## Recursive Feasibility Proof

---

# Solving an MPC problem

#### Single Shooting Approach

- Remove all intermediate states from the optimization problem by using the system dynamics

#### Multiple Shooting Approach

- Treat each intermediate state as a optimization variable

#### Collocation Approach
