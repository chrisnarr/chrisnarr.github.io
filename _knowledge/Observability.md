---
title: Observability
excerpt: "TBD"
collection: knowledge
draft: false
tags:
  -
---

> [!idea] Idea
> All (important) system states can be reconstructed just from the **outputs** of a system

> [!definition] Definition
>
> - A system of order $n$ is called **observable**, if and only if the observability matrix $S_B$ has a **column** rank $n$ with
>   $$ S_B = \begin{pmatrix} C \\ CA \\ CA^2 \\ ... \\ CA^{n-1} \\ \end{pmatrix} $$
