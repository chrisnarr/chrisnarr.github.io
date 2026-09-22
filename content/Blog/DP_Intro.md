---
title: An Introduction to Dynamic Programming
date: 2026-09-22 00:00:00
draft: true
---

## Introduction

Dynamic Programming

Cost-to-go (or value function)
$$
V^{*}(s_{t}) = \min \mathbb{E}[R(s_{t}, a_{t}) + \gamma V^{*}(s_{t+1})].
$$

[@sutton1998reinforcement]