---
title: Controllability
draft: true
tags:
---

- Model for **nonlinear systems**
- Combination of a [[Hammerstein Model]] and a [[Wiener Model]]

![[Pasted image 20231023143435.png]]

- Series connection between... 1. **Static Nonlinearity** 2. **Linear time-invariant system** 3. **Static Nonlinearity**
  $$
  \begin{aligned}
  \tilde{u}(t) &= f(u) \\
  \tilde{y}(t) &= \tilde{u}(t) \ast g(t) \\
  y(t) &= h(\tilde{y})
  \end{aligned}
  $$
  $g(t)$: Impulse response to transfer function $G(s)$
  $\ast$: Convolution operator

> [!example]- Example
> The **input nonlinearity** can represent typical physical transformations in actuators and the **output nonlinearity** can describe common sensor characteristics
