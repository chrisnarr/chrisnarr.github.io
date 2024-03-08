---
title: Willem's Fundamental Lemma
draft: true
tags:
  -
---

For a sequence $\{u_k\}_{k=0}^{N-1}, u_k \in \mathbb{R}^m$ , define the Hankel matrix

$$
H_L(u) =
\begin{bmatrix}
u_0 & u_1 & ... & u_{N-L} \\
u_1 & u_2 & ... & u_{N-L+1} \\
\vdots & \vdots & \ddots & \vdots\\
u_{L-1} & u_L & ... & u_{N-1} \\
\end{bmatrix}
$$

- Each trajectory (column) is of length $L$ and each column is shifted by one step

> [!definition] Persistence of Excitation (PE)
> The input $u$ is **persistently exciting** of order $L$ if $\text{rank}(H_L(u)) = mL$.

> [!theorem] Theorem: Willems Fundamental Lemma
> Using a **single** open-loop data trajectory $(u^d,y^d)$, we can describe all trajectories of an **unknown LTI** system via
>
> $$
> \begin{bmatrix}
> H_L(u^d) \\
> H_L(y^d)
> \end{bmatrix}
> \alpha =
> \begin{bmatrix}
> u \\
> y
> \end{bmatrix}
> $$

$\{u_k,y_k\}_{k=0}^{L-1}$ is a trajectory of $G$ **if and only if** there exists $\alpha \in \mathbb{R}^{N-L+1}$ such that

$$
\begin{bmatrix}
H_L(u^d) \\
H_L(y^d)
\end{bmatrix}
\alpha =
\begin{bmatrix}
u \\
y
\end{bmatrix}
$$
