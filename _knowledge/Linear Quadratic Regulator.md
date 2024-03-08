---
title: Controllability
draft: true
tags:
  -
---

https://www.youtube.com/watch?v=E_RDCFOlJx4&ab_channel=MATLAB

![[Pasted image 20230908233237.png]]

> [!idea] Idea
>
> - Design an **optimal** state-feedback controller for LTI Systems with quadratic cost function
> - Trade-off between how well the controller drives the system error to zero vs. how much effort

> [!goal] Goal
> Find the gain $K$, which minimizes the cost function

![[Continuous Linear Time-Invariant System]]

> [!definition] Quadratic Cost Function
>
> $$
> J = \int_0^\infty(x^\top Q x + u^\top R u)dt
> $$

![[Algebraic Riccati Equation (ARE)]]

$$
u = -Kx
$$

$$
K = R^{-1}B^\top P
$$
