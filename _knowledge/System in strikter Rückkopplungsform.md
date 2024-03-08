---
title: Controllability
draft: true
tags:
---

> [!definition] Definition
> Systeme in strikter Rückkopplungsform lassen sich schreiben als:
>
> $$
> \begin{aligned}
> \dot{x}_1 &= f_1(x_1)+g_1(x_1)x_2 \\
> \dot{x}_2 &= f_2(x_1,x_2)+g_2(x_1,x_2)x_3 \\
> &\vdots \\
> \dot{x}_i &= f_i(x_1,...,x_i)+g_i(x_1,...,x_i)x_{i+1} \\
> &\vdots \\
> \dot{x}_n &= f_n(x_1,...,x_n)+g_n(x_1,...,x_n)u
> \end{aligned}
> $$
>
> mit $x\in\mathbb{R}^n$, $f_1(0) = ... = f_n(0) = 0$, $g_i(x_1,...,x_i)\neq0$ für $1\leq i \leq n$
