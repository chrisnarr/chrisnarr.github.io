---
title: Controllability
draft: true
tags:
---

> [!idea] Idea
>
> - Combination of an [[Autoregressive Model]] and an [[Exogenous Input Model]], i.e., input and output of the system are related by a **linear** equation

# Equation

$$
\begin{aligned}
y(t) = c & + a_1 y(t−1) + a_2 y(t−2) + ... + a_p y(t−p) \\
& + b_1 u(t−1) + b_2 u(t−2) + ... + b_q u(t−q) + e(t)
\end{aligned}
$$

$y(t)$: value of time series at time $t$
$c$ : constant term
$y(t-1), y(t-2), ..., y(t-p)$: past $p$ values of the time series
$a_1, a_2, ..., a_p$: autoregressive coefficients
$u(t-1), u(t-2), ..., u(t-q)$: past $p$ input variables
$b_1, b_2, ..., b_q$: coefficients that capture the relationship between the input variables and the output
$e(t)$: random error term
