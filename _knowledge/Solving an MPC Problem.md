---
title: Controllability
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

![[Pasted image 20230911232722.png]]

- An MPC Problem can be solved by transforming it into an [[Nonlinear Programming Problem (NLP)]], which is called **Discretization**

### Single Shooting Approach

> [!idea] Idea
> Use the **initial state** $x_0$ and the control input trajectory $\boldsymbol{u}$ to compute all the future states via the system dynamics $f(x,u)$ and remove those intermediate states from the optimization problem.

> [!pro] **PRO**
>
> - lower dimensional optimization variables

> [!con] **CON**
>
> - slow for larger prediction horizons
> - results in a smaller, but denser NLP, which cannot leverage sparsity tricks

### Multiple Shooting Approach

> [!idea] Idea
> Solve the NLP with **both** the control input trajectory $\boldsymbol{u}$ and the system state trajectory $\boldsymbol{x}$ as optimization variables.
> → Need to add equality constraints for the future states so they match system dynamics

> [!pro] **PRO**
>
> - faster for larger prediction horizons
> - results in a larger, but sparser program

> [!con] **CON**
>
> - higher dimensional optimization variables

### Collocation Approach

> [!idea] Idea

> [!pro] **PRO**
>
> -

> [!con] **CON**
>
> -
