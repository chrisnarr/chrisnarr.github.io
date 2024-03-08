---
title: Controllability
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

#iterative #gradient-free #optimization #algorithm

> [!idea] Idea
> Spawn a number of agents and optimize them by iteratively evaluating and combining their parameters.

![[Differential Evolution Algorithm.gif|500]]

> [!algorithm] Algorithm
>
> 1. **Sample** $n$ agents in the parameter space
> 2. Until termination criterion is met (e.g. n_iter, good fitness)
>    1. Calculate new position of agent by **combining positions** of existing agents
>       1. For each agent, pick three other agents
>       2. Pick a random index $i \in [1,...,d]$
>    2. If new position is better, keep it, otherwise discard it
>    3. Return to Step 2

- Initialize all agents $\mathbf {x}$ with random positions in the search-space
- Until a termination criterion is met (e.g. number of iterations performed, or adequate fitness reached), repeat the following:
  - For each agent ![\mathbf {x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/32adf004df5eb0a8c7fd8c0b6b7405183c5a5ef2) in the population do:
    - Pick three agents ![\mathbf{a},\mathbf{b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c6f1488994015f56ee267a2dfadf01a1d067e7d6), and ![\mathbf {c}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8798d172f59e21f2ce193a3118d4063d19353ded) from the population at random, they must be distinct from each other as well as from agent ![\mathbf {x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/32adf004df5eb0a8c7fd8c0b6b7405183c5a5ef2). (![\mathbf {a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1a957216653a9ee0d0133dcefd13fb75e36b8b9d) is called the "base" vector.)
    - Pick a random index ![R \in {1, \ldots, n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/05e00cf302a8fd21efe0fa9e4c7819d31926bfe6) where ![n](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) is the dimensionality of the problem being optimized.
    - Compute the agent's potentially new position $\mathbf{y} = [y_1, \ldots, y_n]$ as follows:
      - For each ![i \in {1,\ldots,n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7898b0be3a01bf31af25ec96239b2a7b96b77055), pick a uniformly distributed random number ![{\displaystyle r_{i}\sim U(0,1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/eb1e4de0c519fe2552d558fb82544ed04fe383bb)
      - If ![{\displaystyle r_{i}<CR}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b6a8dae3625bc4cbe9e1ef78ca6c20e88bf6fe86) or �=�![i = R](https://wikimedia.org/api/rest_v1/media/math/render/svg/cec1fa77f13c4874c20dea097a36ce37edd94df2) then set![y_i = a_i + F \times (b_i-c_i)](https://wikimedia.org/api/rest_v1/media/math/render/svg/3a763f33f15c968382dd82c4a0b7ec8be4306cf2) otherwise set ��=��![y_i = x_i](https://wikimedia.org/api/rest_v1/media/math/render/svg/773d160000d34db76a51243bbd27a99b1863d2d2). (Index position �![R](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b0bfb3769bf24d80e15374dc37b0441e2616e33) is replaced for certain.)
    - If ![{\displaystyle f(\mathbf {y} )\leq f(\mathbf {x} )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/490f3453bc953d0b078425fbe10849e9bf7f4fcc) then replace the agent ![\mathbf {x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/32adf004df5eb0a8c7fd8c0b6b7405183c5a5ef2) in the population with the improved or equal candidate solution ![\mathbf {y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bb25a040b592282dc2a254c3117e792c3c81161f).
- Pick the agent from the population that has the best fitness and return it as the best found candidate solution.

> [!example] Parameters
>
> - $\text{NP} \geq 4$: population size (typical: $10n$)
> - $\text{CR} \in [0,1]$: _crossover probability_ (typical: $CR=0.9$)
> - $F \in [0,2]$: _differential weight_ (typical: $F=0.8$)

> [!pro] **PRO**
>
> - **Parallelizable** in gene evaluations

> [!con] **CON**
>
> - Optimization performance may be greatly impacted by parameter choices
