---
title: Controllability
draft: true
tags:
  -
---

A QCQP is an optimization problem defined as

$$
\begin{aligned}
& \min q_b(x) \\
& \text{s.t. } q_a(x) \geq 0,
\end{aligned}
$$

where $q_a,q_b: \mathbb{R}^n \rightarrow \mathbb{R}$ are quadratic functions, i.e.

$$
\begin{aligned}
q_a(x) = x^\top Q_a x + u_a^\top x + c_a \\
q_b(x) = x^\top Q_b x + u_b^\top x + c_b
\end{aligned}
$$

This problem is a convex optimization problem if $Q_b \succeq 0$ and $Q_a \preceq 0$.
Even if this problem is nonconvex, it can be solved efficiently by using the [[S-lemma]] to reformulate it into [[Semidefinite Programming (SDP)]].
