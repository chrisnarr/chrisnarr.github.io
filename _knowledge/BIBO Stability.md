---
title: Bounded-Input-Bounded-Output (BIBO) Stability
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

> [!idea] Idea
> If a system is BIBO stable, then the output will be bounded for every input to the system that is bounded.

> [!definition] Definition Boundedness
> A signal is bounded if there is a finite value $B>0$ such that the signal magnitude never exceeds $B$, that is
>
> - For discrete-time signals: $\exists B \forall n(\ | y[n]|\leq B)\quad n\in \mathbb{Z}$
> - For continuous-time signals: $\exists B\forall t(\ |y(t)|\leq B)\quad t\in \mathbb {R}$
