---
title: System Identification
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

> "_All models are wrong, but some are useful._" - George E. P. Box

![[system_identification_workflow.png]]

- System Identification uses **data** to create models
- Collect data and separate it into **Estimation Data** and **Validation Data**

---

# White Box Models (Physics-based Model)

![[Pasted image 20230908164751.png]]

- Use first principles to model the differential equations of the system

---

# Gray Box Models

- Mix of [[White Box Models]] and [[Black Box Models]]
- Multiple scenarios: 1. Partly known differential equation with unknown parameters
  $$
  y = A \ddot{x} + B \dot{x} + f(x)
  $$
      	2. Known differential equation with unknown parameters
  $$
  y = A \ddot{x} + B \dot{x} + Cx + D
  $$
      	3. Known differential equation with partly known parameters
  $$
  y = 0.3 \ddot{x} + B \dot{x} + 2x + D
  $$

---

# Black Box Models

![[Pasted image 20230908164707.png]]

- Purely data-driven models
- Use training data to fit a prediction model that can explain them

---

# Linear System Identification

- Fit Transfer Function
- Autoregressive Moving Average (ARMA) Model
- [[Linear Autoregressive Exogenous Input (ARX) Model]]

> [!warning] Curve Fitting of output data is something different than model identification!
> Curve Fitting misses the dynamical system properties.

---

# Nonlinear System Identification

Examples:

- [[Neural Network]]
- [[Nonlinear ARX Model]]
- [[Hammerstein-Wiener Model]]

---

# Whiteness and Residual Autocorrelation

![[system_identification_example_heat_exchanger.png]]

- White Gaussian Noise as output disturbance

**Residual Autocorrelation:**

- Use the prediction model to predict the next data sample from the current one
- Calculate the difference between the predicted and the actual data sample (called **residual**)
- Calculate the autocorrelation of the residuals
  - High correlation means that the residuals are not random and thus do not come from the White Gaussian Noise
  - Low correlation means the originate from the White Gaussian Noise
- Calculate the correlation between the system input and the residuals

- If the residual error is correlated to the input, then there are some unmodeled system dynamics
- If the cross correlation is low, but the autocorrelation of the residuals is high, then there is something missing in the disturbance model dynamics

---

# Offline System Identification

---

# Online System Identification

## Finite-History Algorithms

- finite size of data points to build the model from
- PRO: only considers the latest data

## Infinite-History Algorithms

- through recursion, use all of the past data
- Algorithms:
  - Normalized Gradient
  - Unnormalized Gradient
  - Kalman Filter
  - Forgetting Factor Algorithm

![[system_identification_infinite_history_algorithms.png]]
