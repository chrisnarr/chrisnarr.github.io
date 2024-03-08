---
title: Robust Positively Invariant (RPI) Set
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

> [!idea] Idea
> Once a state inside an RPI set is reached, you cannot leave it anymore.

> [!definition] Definition
> A set $\mathcal{X}_f$ is a Robust Positively Invariant (PRI) Set, if for the discrete-time system $x_{k+1} = f(x_k,u_k,w_k)$ all subsequent states resulting from a control law $u_k = \kappa_f(x_k)$ lie in the same set $\mathcal{X}_f$ for all possible $w_k \in \mathbb{W}$, i.e.
> $$x_{0} \in \mathcal{X}_f \;\;\; \Rightarrow \;\;\;x_k = f(x_k,\kappa_f(x_k),w_k) \in \mathcal{X}_f$$
> for all $w_k \in \mathbb{W}, k \in \mathcal{I}_{\geq0}$.
