---
title: Controllability
draft: true
tags:
  -
---

We want to **minimize** some function $F(z)$ while respecting **equality** and **inequality** constraints.
The optimization problem can be formulated as:

$$
\begin{aligned}
             & \min F(z) \\
\text{s.t. } & \; g(z) = 0 \\
             & h(z) \leq 0
\end{aligned}
$$

The minimum might either... - ....be located **completely inside** the constraints, which means that all constraints are inactive and the problem becomes **unconstrained**, or... - ...it might be restricted by **one or multiple constraints**, which means some constraints are active

### Case 1: **Unconstrained**

In the unconstrained case, if $z^*$ is a minimum, then the gradient must be zero, i.e.
$$\nabla F(z^*)=0$$

### Case 2: **Equality Constrained**

If there is some equality constraint active, we enhance our initial function with the equality constraints into the **Lagrange function** $L(z,\lambda) = F(z)+\lambda^\top g(z)$. The parameters $\lambda$ are the **Lagrange multipliers**. For $z^*$ to be a minimum, the gradient of the Lagrange function w.r.t. $z$ **and** w.r.t. to $\lambda$ need to be zero, i.e.
$$\nabla_z L(z^*,\lambda^*) = 0 \;\;\text{ and }\;\; \nabla_\lambda L(z^*,\lambda^*) = 0$$

### Case 3: **Inequality Constrained**

If there are inequality constraints active, we enhance our function once again to get a Lagrange function $L(z,\mu) = F(z) + \mu^\top h(z)$, where the parameters $\mu$ are called the KKT multipliers. For $z^*$ to be a minimum, the gradient of the Lagrange function w.r.t. $z$ needs to be zero, but also the KKT multipliers need to be nonnegative, the inequality constraints nonpositive, and both combined need to be zero, i.e.
$$\nabla_z L(z^*,\mu^*) = 0 \;\;\text{ and }\;\; \mu^*\geq0, \;h(z^*)\leq0 \;\;\text{ and }\;\; \mu_i^* h_i(z^*)=0 \;\;\; \forall i $$
The KKT multipliers basically show if an inequality constraint is active or not.

- If it is active, the corresponding KKT multiplier is **positive** (i.e. nonzero), but since the inequality constraint is active, its value must be **exactly zero**
- If the inequality constraint is **inactive**, the value of the constraint will be **negative** (i.e. nonzero), but its corresponding multiplier will be **zero**
  So both values combined **must always be zero**.
