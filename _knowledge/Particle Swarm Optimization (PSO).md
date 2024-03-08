---
title: Particle Swarm Optimization (PSO)
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  - gradient-free
  - optimization
---

> [!idea] Idea
>
> - Spawn a population of candidate solutions and move each particle in the search-space according to its **locally** best known position and the **globally** best known position (updated as better positions are found by other particles)

- Iterative optimization by trying to improve a candidate solution with regard to a given measure of quality
- population of candidate solutions move around in the search-space according to simple mathematical formula over the particle's position and velocity
- Each particle's movement is influenced by its **local** best known position, but is also guided toward the **globally** best known positions in the search-space (updated as better positions are found by other particles)

![[Particle Swarm Optimization.gif]]

> [!algorithm] Algorithm
>
> 1.  **Spawn** $n$ particles in the parameter space
> 2.  **Evaluate** the cost for each particle
> 3.  **Update** the position and velocity of each particle according to
>     $$x_{new} = $$
> 4.  Return to Step 2

> [!pro] **PRO**
>
> - **Parallelizable** in particle evaluations

> [!con] **CON**
