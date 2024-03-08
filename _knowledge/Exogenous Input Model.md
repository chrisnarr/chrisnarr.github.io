---
title: Controllability
draft: true
tags:
---

> [!idea] Idea
>
> - Represents a time series as a **linear** combination of its past **input** values and a stochastic process

# Equation

$$
y(t) = c + b_1 u(t−1) + b_2 u(t−2) + ... + b_q u(t−q) + e(t)
$$

$y(t)$: value of time series at time $t$
$u(t-1), u(t-2), ..., u(t-q)$: past $p$ input variables
$c$ : constant term
$b_1, b_2, ..., b_q$: coefficients that capture the relationship between the input variables and the output
$e(t)$: random error term
