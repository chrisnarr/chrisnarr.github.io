---
title: Controllability
draft: true
tags:
  -
---

https://en.wikipedia.org/wiki/Sequential_quadratic_programming

> [!idea] Idea

- Iterative method (quasi-Newton method) for **constrained nonlinear optimization**
- Used on mathematical problems for which the objective function and the constraints are **twice continuously differentiable**
- SQP methods solve a sequence of optimization subproblems, each of which optimizes a quadratic model of the objective subject to a linearization of the constraints
  - If the problem is unconstrained, then the method reduces to Newton's method for finding a point where the gradient of the objective vanishes
  - If the problem has only equality constraints, then the method is equivalent to applying Newton's method to the first-order optimality conditions, or Karush–Kuhn–Tucker conditions, of the problem.
