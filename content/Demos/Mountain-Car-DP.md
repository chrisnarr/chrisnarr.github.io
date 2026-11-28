---
title: "Value and Policy Iteration: Mountain Car"
date: 2026-11-22 00:00:00
draft: false
---

<iframe src="/static/demos/mountain-car-dp.html" title="Mountain car with value and policy iteration" style="width: 100%; height: 1150px; border: none;" loading="lazy"></iframe>

An underpowered car sits in a valley and has to reach the flag on the hill to the right. Its engine is too weak to drive straight up, so it first has to rock back and forth to build up momentum.
Both panels compute the optimal controller with dynamic programming: **value iteration (VI)** on the left and **policy iteration (PI)** on the right. The maps show the *state space* of the car, its position $x$ horizontally and its velocity $v$ vertically, with either the value of each state or the action of the policy (**push left**, **coast**, **push right**).
As in Sutton & Barto, each episode of the car starts at rest at a random position $x \in [-0.6, -0.4)$, marked by the short black bar on the maps, and both cars always start from the same state. **Click** a map to fix the start state instead; the **random** button switches back. The black line is the trajectory from the current start state under the current policy, and the car below replays it. The colored dot on the map shows the car's current state live, with the path it has driven so far.

## Setup

The car follows the classic mountain car dynamics (Moore, 1990):

$$
v_{k+1} = v_k + F\, a_k - 0.0025 \cos(3 x_k), \qquad x_{k+1} = x_k + v_{k+1},
$$

with $a_k \in \{-1, 0, +1\}$, $x \in [-1.2, 0.5]$ and $|v| \le 0.07$. Each decision is held for four simulation steps and costs $-1$; reaching $x = 0.5$ ends the episode. So $-V(s)$ is roughly the number of decisions needed to reach the goal (slightly less because of the discount).

The state space is continuous, so the value function is stored on a grid of $N \times N$ points. When a step from a grid point lands between grid points, the value there is interpolated bilinearly from the four surrounding grid points. Interpolating like this keeps the Bellman operator a contraction, so value and policy iteration still converge.

## Short Explanation

**Value iteration** applies the Bellman optimality backup to every grid point,

$$
V(s) \leftarrow \max_a \big[ -1 + \gamma\, V(f(s, a)) \big],
$$

where $f$ is the dynamics. After $k$ sweeps, $V$ is exact for every state that can reach the goal within $k$ decisions, so you can watch the dark region of "solved" states grow outwards from the goal, spiralling through phase space with every extra swing.

**Policy iteration** starts from the policy "always push right", which only works if the car already has enough momentum. It evaluates this policy with sweeps of $V(s) \leftarrow -1 + \gamma V(f(s, \pi(s)))$, then makes it greedy, and repeats. It needs only a handful of policies (seven with the defaults), but the first evaluation is expensive: states from which "always push right" never reaches the goal converge only slowly towards $-1/(1-\gamma) = -100$.

## Things to Try

- **Watch VI's greedy policy.** It already drives the car to the goal from $(-0.5, 0)$ after about 20 sweeps, long before the values have converged.
- **Limit PI's evaluation sweeps** to a few. PI then needs far fewer sweeps in total (about 55 instead of about 800 with the defaults), because it stops wasting sweeps on evaluating a bad policy precisely.
- **Switch to the policy view.** The optimal policy is mostly *bang–bang*: push in the direction of the current velocity, so that every swing gets bigger. The boundary between the regions is a spiral in phase space.
- **Change the grid resolution.** Even the coarsest $31 \times 31$ grid gives a working controller, but its policy boundary is blocky. Finer grids follow the boundary more closely, at a higher cost per sweep.
- **Increase the engine force.** With a strong enough engine, simply pushing right works, and PI's first policy is already good.

## Parameters

- **Grid resolution:** the number of grid points per dimension.
- **Discount $\gamma$:** close to 1, the value is almost the (negative) number of decisions to the goal.
- **Engine force $F$:** the acceleration of the engine; the default $0.001$ is the classic setting.
- **PI evaluation sweeps per improvement:** how many evaluation sweeps PI performs before each improvement.
- **Speed:** sweeps per second.

See also [[Value-and-Policy-Iteration|value and policy iteration in a gridworld]], and the [[MPPI|MPPI demo]] for a sampling-based controller that plans online instead.
