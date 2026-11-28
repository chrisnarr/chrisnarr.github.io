---
title: "Value and Policy Iteration: Jack's Car Rental"
date: 2026-11-22 00:00:00
draft: true
---

<iframe src="/static/demos/car-rental.html" title="Jack's car rental" style="width: 100%; height: 1300px; border: none;" loading="lazy"></iframe>

How many cars should a rental company move between its two locations overnight? Both panels answer this with dynamic programming: **value iteration (VI)** on the left and **policy iteration (PI)** on the right. This is Example 4.2 from Sutton & Barto.

Each cell of a heatmap is an evening state (cars at A upwards, cars at B to the right), and its number is the number of cars moved from A to B (negative: from B to A). Red numbers are moves that are not optimal. Below each panel, a strip of snapshots shows how the policy develops; switch to **Value** to see the value functions instead. Hover over a cell to compare both solutions with the optimal one.

## Problem Setup

The number of cars at each location evolves as

$$
n_{k+1} = \min\big(\tilde n_k - \min(q_k, \tilde n_k) + r_k,\ 20\big), \qquad \tilde n_{A,k} = \min(n_{A,k} - a_k, 20), \quad \tilde n_{B,k} = \min(n_{B,k} + a_k, 20),
$$

for each location $A$ and $B$ separately, where the state $(n_{A,k}, n_{B,k}) \in \{0, \dots, 20\}^2$ is the number of cars at the two locations in the evening, the action $a_k \in \{-5, \dots, 5\}$ is the number of cars moved overnight from A to B (negative: from B to A), and $\tilde n_k$ is the number of cars in the morning. During the day, $q_k$ rental requests and $r_k$ returns arrive at each location; they are Poisson distributed with means 3 and 4 for the requests and 3 and 2 for the returns at A and B. A request can only be served if a car is available, and cars beyond 20 at a location are lost.

Every rented car earns $\$10$ and every moved car costs $\$2$, so the reward is $10 \cdot \min(q_k, \tilde n_k)$, summed over both locations, minus $2|a_k|$. The objective is to maximise the expected discounted earnings, with $\gamma = 0.9$. Because the two locations only interact through the cars that are moved, the expectation over the next state factorises, which makes a full sweep over all $21 \times 21$ states and 11 actions cheap.

## Method

Both methods use the one-step lookahead

$$
Q_V(s, a) = -2|a| + \mathbb{E}\big[\,10 \cdot \text{rentals} \,\big] + \gamma\, \mathbb{E}\big[\, V(s') \,\big],
$$

where the expectations go over the random requests and returns, given the number of cars at each location after the move $a$.

**Value iteration** applies the Bellman optimality backup $V(s) \leftarrow \max_a Q_V(s, a)$ to every state in each sweep. The panel shows the greedy policy of the current values.

**Policy iteration** starts from $\pi_0$, which never moves any cars, and alternates two steps:

1. **Policy evaluation:** sweep $V(s) \leftarrow Q_V(s, \pi(s))$ until $V$ converges to $V^\pi$.
2. **Policy improvement:** make the policy greedy with respect to $V^\pi$.

Here it needs only four improvements, $\pi_0 \to \pi_4$, just like in the book, and the strip shows each of them.

## Things to Try

- **Compare the two sweep counts.** PI needs only four policies, but evaluating each of them takes many sweeps. With the defaults, PI needs about 260 sweeps in total, while VI converges in about 100, and VI's greedy policy is already optimal much earlier.
- **Limit PI's evaluation sweeps** (for example to 5). This *modified* policy iteration uses more, but much cheaper, policies, and here it converges in about as many sweeps as VI.
- **Change the demand.** If more customers come to B, Jack moves noticeably more cars there. If more cars are returned at A, A fills up by itself, and Jack moves a few more cars from A to B.
- **Turn on the variant from Exercise 4.7.** An employee drives one car from A to B for free every night, and keeping more than 10 cars overnight at a location costs \$4 extra. The optimal policy gets a much more irregular shape, and PI handles it just as easily.
- **Make moving cars expensive**, and the band of "move 0" in the middle of the policy grows.

## Parameters

- **Rental requests and returns (λ):** the mean number of requests and returns per day at each location.
- **Cost per moved car:** the cost of moving one car overnight.
- **Discount $\gamma$:** how much tomorrow's earnings count.
- **PI evaluation sweeps per improvement:** how many evaluation sweeps PI performs before each improvement.
- **Speed:** sweeps per second.
