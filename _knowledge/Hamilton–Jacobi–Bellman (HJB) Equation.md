---
title: Controllability
draft: true
tags:
  -
---

# Continuous Time HJB

$$
- \frac{\partial V}{\partial t} = \min_{u(t)} \left( \left(\frac{\partial V}{\partial x}\right)^\top f(x(t),u(t)) + \mathcal{L}(x(t),u(t))\right)
$$

> [!proof]- Derivation
>
> $$
> \begin{aligned}
> \frac{d}{dt} V(x(t),t,t_f) &= \frac{\partial V}{\partial t} + \left(\frac{\partial V}{\partial x}\right)^\top \frac{dx}{dt} \\
> &= \min_{u(t)}\frac{d}{dt}\left( \int_0^{t_f} \mathcal{L}(x(\tau),u(\tau))d\tau + Q(x(t_f),t_f)\right)
> \end{aligned}
> $$

# Discrete Time HJB

$$
V(x_k,n) = \min_{u_k} \left( \mathcal{L}(x_k,u_k) + V(f(x_k,u_k),n-1) \right)
$$
