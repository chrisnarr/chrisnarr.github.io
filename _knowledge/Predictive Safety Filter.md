---
title: Controllability
draft: true
tags:
  -
---

> [!idea] Idea
>
> - Find a system input close to the original input, which also satisfies constraints

![[predictive_safety_filter.png]]

> [!definition] Definition
>
> $$
> \begin{aligned}
> & \min \|u_L(x(k))-u_0\| \\
> \text{s.t. } & x_{i+1} = f(x_i,u_i) \\
> x_i \in \mathbb{X}, u_i \in \mathbb{U}
> \end{aligned}
> $$
>
> $S$: safe terminal set

![[predictive_safety_filter_formulation.png]]

> [!pro] **PRO**
>
> - implicit safe set
> - implicit safe controller
> - implicit decision module (when to overwrite input)
> - efficient solvers available

**Problem:** Model dynamics not completely known

> [!question]- Why not directly use MPC instead of learning-based approach?
>
> - Objective function might be difficult to formalize + must be differentiable
