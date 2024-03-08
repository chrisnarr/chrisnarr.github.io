---
title: Data-driven Control (DDC)
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

- Used in optimal control theory to find the best possible control for taking a dynamical system from one state to another, especially in the presence of constraints for the state or input controls

> [!idea] Idea
>
> - It is necessary for any optimal control along with the optimal state trajectory to solve the so-called Hamiltonian system, which is a two-point boundary value problem, plus a maximum condition of the control Hamiltonian

- These necessary conditions become sufficient under certain convexity conditions on the objective and constraint functions
- Maximizing the Hamiltonian is much easier than the original infinite-dimensional control problem; rather than maximizing over a function space, the problem is converted to a pointwise optimization
- similar logic as the [[Bellman’s Optimality Principle]]
- The resulting [[Hamilton–Jacobi–Bellman (HJB) Equation]] provides a necessary and sufficient condition for an optimum, and admits a straightforward extension to stochastic optimal control problems, whereas the maximum principle does not
- The conditions the Pontryagin's Maximum Principle specifies only need to hold over a particular trajectory, instead of the whole state space as for the [[Hamilton–Jacobi–Bellman (HJB) Equation]]
