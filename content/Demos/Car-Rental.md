---
title: "Value and Policy Iteration: Jack's Car Rental"
date: 2026-11-22 00:00:00
draft: true
---

<iframe src="/static/demos/car-rental.html" title="Jack's car rental" style="width: 100%; height: 1300px; border: none;" loading="lazy"></iframe>

Jack manages two car rental locations, A and B. Every day, customers come to rent cars at both locations, and rented cars are returned there, both at random. Overnight, Jack can move up to five cars between the locations, at $2 per car. Every rented car earns $10, and each location can hold at most 20 cars.
The question is how many cars to move overnight, for every combination of cars at A and B. Both panels answer it with dynamic programming: **value iteration (VI)** on the left and **policy iteration (PI)** on the right.

Each cell of a heatmap is an evening state (cars at A upwards, cars at B to the right), and the number is the number of cars moved from A to B (negative: from B to A). Red numbers are moves that are not optimal. Below each panel, a strip of snapshots shows how the policy develops; switch to **Value** to see the value functions instead.
Hover over a cell to compare both solutions with the optimal one.

This is Example 4.2 from Sutton & Barto.

## Setup

The number of rental requests and returns per day at each location is Poisson distributed, with means 3 and 4 for requests and 3 and 2 for returns at A and B. Moving a car costs \$2, and future earnings are discounted with $\gamma = 0.9$.
Because the two locations only interact through the cars that are moved, the expected value of the next state factorises. That makes a full sweep over all $21 \times 21$ states and 11 actions cheap.

## Short Explanation

Both methods use the one-step lookahead

$$
Q_V(s, a) = -2|a| + \mathbb{E}\big[\,10 \cdot \text{rentals} \,\big] + \gamma\, \mathbb{E}\big[\, V(s') \,\big],
$$

where the expectations go over the random requests and returns, given the number of cars at each location after the move $a$.

**Value iteration** applies $V(s) \leftarrow \max_a Q_V(s, a)$ to every state in each sweep, and shows the greedy policy of the current values.

**Policy iteration** starts from $\pi_0$, which never moves any cars. It evaluates the policy with sweeps of $V(s) \leftarrow Q_V(s, \pi(s))$ until they converge, and then makes the policy greedy. Here it needs only four improvements, $\pi_0 \to \pi_4$, just like in the book, and the strip shows each of them.

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

See also [[Value-and-Policy-Iteration|value and policy iteration in a gridworld]].
