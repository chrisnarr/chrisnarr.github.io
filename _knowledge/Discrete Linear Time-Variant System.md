---
title: Controllability
draft: true
tags:
---

### Definition

> [!definition] Definition: Discrete Linear Time-Variant System
>
> $$
> \begin{aligned}
> 	\underline{x}(k+1) & = A(k)\underline{x}(k) + B(k)\underline{u}(k) \\
> 	\underline{y}(k) & = C(k)\underline{x}(k) + D(k)\underline{u}(k)
> \end{aligned}
> $$

### Notation

    $k \in \mathbb{N}_{0}$
    $\underline{x}(0) = \underline{x}_0$
    $\underline{x}(k) \in \mathbb{R}^{n}$: state
    $\underline{u}(k) \in \mathbb{R}^{m}$: control input
    $\underline{y}(k) \in \mathbb{R}^{q}$: system output
    $A(k) \in \mathbb{R}^{n \times n}$: state matrix
    $B(k) \in \mathbb{R}^{m \times n}$: input matrix
    $C(k) \in \mathbb{R}^{n \times q}$: output matrix
    $D(k) \in \mathbb{R}^{m \times q}$: feedthrough matrix
