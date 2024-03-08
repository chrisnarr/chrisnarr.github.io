---
title: Data-driven Control (DDC)
draft: true
tags:
  -
---

> [!idea] Idea
> Control a system by using **input/output data** of the system.

---

# Indirect Data-driven Control

![[Pasted image 20231023164333.png]]

> [!idea] Idea
> Control a system by using input/output data to first **estimate a model** and then control the system using the identified model.

> [!steps] Steps
>
> 1.  Use [[System Identification]] Methods to create a model of the system
> 2.  Design a controller to control the identified system

---

# Direct Data-driven Control

![[Pasted image 20231023164344.png]]

> [!idea] Idea
> Control a system by **directly** using input/output data **without** estimating an system model.

## For Linear Systems

- Data-driven control for linear systems makes use of [[Willems Fundamental Lemma]]

## For Nonlinear Systems

-
