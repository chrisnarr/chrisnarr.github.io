---
title: Controllability
draft: true
tags:
  -
---

> [!idea] Idea
> The Schur complement can be used to **factorize a block matrix into a product of simpler block matrices**.

# Definition

Suppose $p$, $q$ are nonnegative integers, and suppose $A \in \mathbb{C}^{p \times p}$, $B \in \mathbb{C}^{p \times q}$, $C \in \mathbb{C}^{q \times p}$, $D \in \mathbb{C}^{q \times q}$. Let

$$
M =
\begin{bmatrix}
A & B \\
C & D
\end{bmatrix} \in \mathbb{C}^{(p+q) \times (p+q)}
$$

If $D$ is invertible, then the **Schur complement** of the block $D$ of the matrix $M$ is the $p \times p$ matrix defined by

$$
M/D \coloneqq A - B D^{-1} C
$$

If $A$ is invertible, the **Schur complement** of the block $A$ of the matrix $M$ is the $q \times q$ matrix defined by

$$
M/A \coloneqq D - C A^{-1} B
$$
