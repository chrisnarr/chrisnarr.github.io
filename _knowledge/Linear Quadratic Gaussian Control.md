---
title: Controllability
draft: true
tags:
  -
---

In [control theory](https://en.wikipedia.org/wiki/Control_theory), the **linear–quadratic–Gaussian** (**LQG**) **control problem** is one of the most fundamental [optimal control](https://en.wikipedia.org/wiki/Optimal_control) problems, and it can also be operated repeatedly for [model predictive control](https://en.wikipedia.org/wiki/Model_predictive_control).

It concerns [linear systems](https://en.wikipedia.org/wiki/Linear_system) driven by [additive white Gaussian noise](https://en.wikipedia.org/wiki/Additive_white_Gaussian_noise). The problem is to determine an output feedback law that is optimal in the sense of minimizing the expected value of a quadratic [cost](https://en.wikipedia.org/wiki/Cost_functional) criterion. Output measurements are assumed to be corrupted by Gaussian noise and the initial state, likewise, is assumed to be a Gaussian random vector.

Under these assumptions an optimal control scheme within the class of linear control laws can be derived by a completion-of-squares argument. This control law which is known as the **LQG** controller, is unique and it is simply a combination of a [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter) (a linear–quadratic state estimator (LQE)) together with a [linear–quadratic regulator](https://en.wikipedia.org/wiki/Linear-quadratic_regulator) (LQR). The [separation principle](https://en.wikipedia.org/wiki/Separation_principle) states that the state estimator and the state feedback can be designed independently.

LQG control applies to both [linear time-invariant systems](https://en.wikipedia.org/wiki/LTI_systems) as well as [linear time-varying systems](https://en.wikipedia.org/wiki/Time-variant_system), and constitutes a linear dynamic feedback control law that is easily computed and implemented: the LQG controller itself is a dynamic system like the system it controls. Both systems have the same state dimension.

A deeper statement of the separation principle is that the LQG controller is still optimal in a wider class of possibly nonlinear controllers. That is, utilizing a nonlinear control scheme will not improve the expected value of the cost function. This version of the separation principle is a special case of the [separation principle of stochastic control](https://en.wikipedia.org/wiki/Separation_principle_in_stochastic_control) which states that even when the process and output noise sources are possibly non-Gaussian [martingales](<https://en.wikipedia.org/wiki/Martingale_(probability_theory)>), as long as the system dynamics are linear, the optimal control separates into an optimal state estimator (which may no longer be a Kalman filter) and an LQR regulator.

In the classical LQG setting, implementation of the LQG controller may be problematic when the dimension of the system state is large. The **reduced-order LQG problem** (fixed-order LQG problem) overcomes this by fixing *a priori* the number of states of the LQG controller. This problem is more difficult to solve because it is no longer separable. Also, the solution is no longer unique. Despite these facts numerical algorithms are available to solve the associated [optimal projection equations](https://en.wikipedia.org/wiki/Optimal_projection_equations) which constitute necessary and sufficient conditions for a locally optimal reduced-order LQG controller.

LQG optimality does not automatically ensure good robustness properties. The robust stability of the closed loop system must be checked separately after the LQG controller has been designed. To promote robustness some of the system parameters may be assumed stochastic instead of deterministic. The associated more difficult control problem leads to a similar optimal controller of which only the controller parameters are different.

It is possible to compute the expected value of the cost function for the optimal gains, as well as any other set of stable gains.

The LQG controller is also used to control perturbed non-linear systems.

# Problem Formulation
