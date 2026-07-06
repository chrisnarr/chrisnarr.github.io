---
title: An Introduction to Reinforcement Learning
tags: 
date: 2026-04-06 00:00:00
---

## Introduction

In recent years, reinforcement learning (RL) has emerged as one of the most exciting branches of artificial intelligence.
At its core, reinforcement learning is a way for machines to learn by doing.
Inspired by how humans and animals learn from experience, RL involves an agent that interacts with an environment and learns to make decisions by receiving feedback in the form of rewards or penalties.
The goal is to maximize long-term reward through trial and error.
As an example, imagine teaching a dog to fetch a ball.
Each time it successfully brings the ball back, you give it a treat.
Over time, the dog learns that fetching the ball leads to rewards, which will reinforce it's behavior for future times.
Reinforcement learning follows a similar principle, only with algorithms instead of dog brains.
RL has already powered impressive feats, from beating world champions at complex games like Go <d-cite key="silver2016mastering"></d-cite> and StarCraft <d-cite key="vinyals2019grandmaster"></d-cite> to making small humanoid robots play soccer <d-cite key="haarnoja2024learning"></d-cite>.
As this field continues to evolve, it opens up possibilities for smarter, more adaptive systems in nearly every industry.

From a mathematical point of view, an agent interacts with a system that can be defined by a transition function as
$$
    \label{eq:system_dynamics}
    s_{t+1} = f(s_{t}, a_{t})
$$
where taking the current action $a_{t}$ in state $s_{t}$ brings us into the next state $s_{t+1}$.
Note here that the next state only depends on the current state and action.
This defines a very important property underlying almost all of Reinforcement Learning, namely the **Markov Property**.

Which action $a_t$ to take in state $s_t$ is defined by the **policy** $\pi$.
Formally, it's a function defined as
$$
    \label{eq:policy}
    a_t = \pi(s_t).
$$
By passing the current state $s_t$ to the policy, it tells us which action to take next.

To evaluate the performance of the agent, we need the last piece of the puzzle: the **reward function**.
The reward function gives the agent a form of "feedback" whether it is performing well on a particular task or not.
Mathematically, the reward function maps a state $s_t$ and action $a_t$ to a numerical value (the **reward**), i.e.,
$$
    \label{eq:reward}
    R_{t+1} = R(s_t, a_t).
$$
However, the reward function only gives a reward for a single transition, but obviously we are interested in maximizing rewards over multiple time steps, which leads to the definition of the **return** as
$$
    \label{eq:return}
    G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}.
$$
Here, $\gamma$ is the so-called **discount factor**, usually chosen as $\gamma \in [0,1)$.
Intuitively, the discount factor allows to weight rewards in the near future stronger than rewards further away, but there are also mathematical reasons for introducing this factor (e.g., to ensure the return remains finite, but we skip this discussion for now).

Starting at some inital state $s_{0}$, the policy $\pi$ decides on the next action $a_{0}$, which we pass to the environment to obtain the next state $s_{1}$ and the corresponding reward $r_{1}$.
Now, we are in a new state and can again apply policy $\pi$ to get the next action $a_{1}$.
We can repeat this process until the episode ends (or until infinity).
The collection of state action pairs forms a trajectory (also called **rollout**), i.e.,
$$
    \label{eq:trajectory}
    \tau = \{s_0, a_0, s_1, a_1, \dots \}
$$
Since the system dynamics and the policy are assumed to have some randomness in them, i.e., they define probability distributions rather than deterministic functions, we also have a probability distribution over possible trajectories $\tau$ when using policy $\pi$, which is formally written as $P(\tau|\pi)$.

Now, the overall goal of the agent is to tweak the policy such that it maximizes the **expected return**, which is defined as
$$
    \label{eq:expected_return}
    J(\pi) = \int_\tau P(\tau|\pi) G_t = \mathbb{E}_{\tau \sim \pi}[G_t].
$$

Given any policy $\pi$, we can compute the expected return under the policy, leading to the definition of the **value function** as
$$
    V^{\pi}(s_{t}) = \mathbb{E}_{\tau \sim \pi}[G_t | s_t]
$$
which gives us the expected return of policy $\pi$ if we start in state $s_t$.

A strongly related concept is the so called **action-value function** (or **Q-function**), defined as
$$
    Q^{\pi}(s_{t}, a_{t}) = \mathbb{E}_{\tau \sim \pi}[G_t | s_t, a_t]
$$
which gives us the expected return of policy $\pi$ if we start in state $s_t$ and first choose some action $a_t$ before choosing every subsequent action according to our policy $\pi$.


<!-- We can also formulate the relationship in a recursive fashion as
$$
    V^{\pi}(s_{t}) = \mathbb{E}_{\pi}[R(s_{t}, a_{t}) + \gamma V^{\pi}(s_{t+1})].
$$ -->

<!-- 
As before, this can also be reformulated in a recursive way as
$$
    Q^{\pi}(s_{t}, a_{t}) = \mathbb{E}_{\pi}[R(s_{t}, a_{t}) + \gamma Q^{\pi}(s_{t+1}, a_{t+1})].
$$
test

Based on all concepts introduced so far, there are now two ways we can take.
Either, we directly try to maximize $J(\pi)$ by adjusting the policy $\pi$ (leading to **Policy Gradient** methods), or, we try to estimate the expected future return via the value function or action-value function (leading to **Value-based methods**). -->
