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
> - Divide each sampling dimension into $n$ bins and sample from each dimension, such that **every row and column** of the Hypercube is sampled **exactly once**

![[Latin Hypercube Sampling.png]]

> [!algorithm] Algorithm
>
> 1.
> 2.
> 3.

> [!example] Parameters
>
> - $p_1$: _parameter 1_ (typical: $0.1$)
> - $p_2 \in \mathbb{R}$: _parameter 2_ (typical: $0.9$)
> - $p_3 \in [0,2]$: _parameter 3_ (typical: $0.8$)

> [!pro] **PRO**
>
> - generating a **near-random** sample of parameter values from a multidimensional distribution
> - **Low number** of samples needed to represent the whole sampling space
> - **Low discrepancy** of samples

> [!con] **CON**
>
> - **No guarantee** for the optimal solution

# Orthogonal Latin Hypercube Sampling

![[Orthogonal Latin Hypercube Sampling.png]]

> [!idea] Idea
>
> - Divide the sampling space into $n$ equally probable **subspaces** and collect samples simultaneously to ensure the **LHC property**

> [!pro] **PRO**
>
> - generating a **near-random** sample of parameter values from a multidimensional distribution
> - **Very low number** of samples needed to represent the whole sampling space
> - **Low discrepancy** of samples

> [!con] **CON**
>
> - **No guarantee** for the optimal solution
