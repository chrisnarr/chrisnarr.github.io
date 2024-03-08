---
title: Controllability
draft: true
tags:
  -
---

> [!goal] Goal
> Determine the sensitivity of an output $y_j$ with respect to an input $x_i$, i.e. how much does changing one input change the output.

# Local Methods

### One-factor-at-a-time

> [!idea] Idea
> Change only **one** input at a time and calculate the sensitivity based on the finite difference, i.e.
>
> $$
> s=\frac{\Delta y_j}{\Delta x_i}
> $$

> [!pro] **PRO**
>
> - easy to implement

> [!con] **CON**
>
> - Only **local** sensitivity analysis possible (i.e. changing another input might influence the sensitivity on the current input)
> - Assumes **independent** inputs

### Sensitivity Index (Hoffman & Gardener 1983)

> [!idea] Idea
>
> - Sample multiple input values for one input $x_i$ and calculate each corresponding output $y_i$. Take the maximum and minimum value of the output and calculate the sensitivity index
>   $$
>   s=\frac{y_{j,max}-y_{j,min}}{y_{j,max}}
>   $$

# Global Methods

### Regression / Partial Correlation Coefficients

### ANOVA (Analysis of Variance) with Blocking or Factorial Designs

### Latin Hypercube Sampling
