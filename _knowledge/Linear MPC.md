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
> -

> [!idea] **Assumptions**
>
> 1.  Linear Time-Invariant Prediction Model
> 2.  Quadratic Cost Function $J = x^\top R x + u^\top R u$
> 3.  Linear Input/Output Constraints $Hx + Gu < 0$
>
> If just one of those assumptions is violated, then its considered to be [[Nonlinear MPC]]

# Linear Time-Invariant MPC

![[Discrete Linear Time-Invariant System#Definition]]

# Linear Time-Variant MPC

![[Discrete Linear Time-Variant System#Definition]]

---

# Stability Proof

There are different ways to prove stability for linear MPC:

1. Zero terminal constraint + terminal cost
2. Quasi-infinite horizon constraints
3. Long enough prediction horizon

---

# Recursive Feasibility

> [!idea] Idea
> If I find a solution in this time step, I can guarantee that I will also find a solution for **all** future time steps.
