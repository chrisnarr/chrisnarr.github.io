---
title: Controllability
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

- Uses a data-driven model representation for the prediction, see [[Willems Fundamental Lemma]]

### Linear Data-Driven MPC without noise

Given a data trajectory $\{u_k^d, y_k^d\}_{k=0}^{N-1}$, consider

$$
\begin{aligned}
\min_{\alpha, \bar{u}, \bar{y}} & \;\;\; \sum_{k=0}^{L-1} \|\bar{u}_k - u^s\|_R^2 + \|\bar{y}_k - y^s\|_Q^2 \\
s.t. & \;\;\;
\begin{bmatrix}
\bar{u} \\
\bar{y}
\end{bmatrix}
=
\begin{bmatrix}
H_{L+n}(u^d) \\
H_{L+n}(y^d)
\end{bmatrix}
\alpha, \\
& \;\;\;
\begin{bmatrix}
\bar{u}_{-k} \\
\bar{y}_{-k}
\end{bmatrix}
=
\begin{bmatrix}
u_{t-k} \\
y_{t-k}
\end{bmatrix},
k = 1,...,n,
\\
& \;\;\;
\bar{u}_k \in \mathbb{U},
\bar{y}_k \in \mathbb{Y},
k = 1,...,L-1
\end{aligned}
$$

#### Stability guarantees by...

1. Enforcing **terminal equality constraint**, i.e. stay at the setpoint for at least $n$ steps
   $\bar{u}_k=u^s,\bar{y}_k=y^s, k = L-n,...,L-1$
2. Enforcing **terminal equality constraint** for **some** equilibrium $(u^s(t),y^s(t))$
3. Including **terminal set constraint** $\bar{\xi}_l \in \Xi_f$ and **terminal cost** $\|\bar{\xi}_L\|_P^2$ where $\bar{\xi}_L \coloneq (\bar{u}_{[L-n,L-1]}, \bar{y}_{[L-n,L-1]})$
4. Choosing prediction horizon $L$ **sufficiently long**

### Robust Linear Data-Driven MPC

See talk Franky "Data-driven MPC: From linear to nonlinear systems with guarantees" on YouTube
