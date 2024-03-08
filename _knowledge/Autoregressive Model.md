---
title: Controllability
draft: true
tags:
---

> [!idea] Idea
>
> - Represents a time series as a **linear** combination of its past **output** values and a stochastic process

# Equation

$$
y(t) = c + a_1 y(t−1) + a_2 y(t−2) + ... + a_p y(t−p) + e(t)
$$

$y(t)$: value of time series at time $t$
$y(t-1), y(t-2), ..., y(t-p)$: past $p$ values of the time series
$c$ : constant term
$a_1, a_2, ..., a_p$: autoregressive coefficients
$e(t)$: random error term
