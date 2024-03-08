---
title: Controllability
draft: true
tags:
---

### Definition

> [!definition] Definition: Discrete Linear Time-Invariant System
>
> $$
> \begin{aligned}
> 	\underline{x}(k+1) & = A\underline{x}(k) + B\underline{u}(k) \\
> 	\underline{y}(k) & = C\underline{x}(k) + D\underline{u}(k)
> \end{aligned}
> $$

### Notation

    $k \in \mathbb{N}_{0}$
    $\underline{x}(0) = \underline{x}_0$
    $\underline{x}(k) \in \mathbb{R}^{n}$: state
    $\underline{u}(k) \in \mathbb{R}^{m}$: control input
    $\underline{y}(k) \in \mathbb{R}^{q}$: system output
    $A \in \mathbb{R}^{n \times n}$: state matrix
    $B \in \mathbb{R}^{m \times n}$: input matrix
    $C \in \mathbb{R}^{n \times q}$: output matrix
    $D \in \mathbb{R}^{m \times q}$: feedthrough matrix
