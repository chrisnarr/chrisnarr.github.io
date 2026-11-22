---
title: TD vs. Monte Carlo on a Plinko Board
date: 2026-11-22 00:00:00
draft: true
---

<iframe src="/static/demos/plinko.html" title="Plinko TD vs. MC" style="width: 100%; height: 1150px; border: none;" loading="lazy"></iframe>

A ball drops onto a triangle of pegs, bounces left or right at every peg, and lands in a slot with a payoff.
The value of a peg is the payoff a ball starting there can expect to win. Two learners estimate these values from **the same balls**: the left one with **Monte Carlo (MC)**, the right one with **TD(0)**. So any difference between them comes only from the update rule.

**Click** a peg to drop the balls there, **drag a peg sideways** to bias it towards one side (**double-click** makes it fair again), and **drag the payoff bars** up or down.
Pegs are shaded by their estimated value (or by their error, if you switch that on), faded pegs can't be reached from the drop peg, and highlighted rings mark the pegs that were just updated. Hover over a peg to compare both estimates with the true value.

## Short Explanation

This is a pure *prediction* problem: there are no actions, just a Markov chain. Every peg $s$ has a value

$$
V(s) = \mathbb{E}[\,G \mid s\,],
$$

where $G$ is the payoff of the slot the ball eventually lands in. The true values follow from a single backward pass from the slots, $V(s) = p_s\, V(s_\text{left}) + (1 - p_s)\, V(s_\text{right})$, where $p_s$ is the probability of bouncing left.

Both learners start from $V_0$ and move an estimate towards a target with learning rate $\alpha$, $V(s) \leftarrow V(s) + \alpha\,(\text{target} - V(s))$:

- **Monte Carlo** waits until the ball lands and then moves *every* peg on the path towards the payoff $G$ it actually won. This target is unbiased, but it carries all the randomness of every bounce below that peg.
- **TD(0)** updates each peg as soon as the ball leaves it, moving it towards the current estimate of the *next* peg, $V(s')$, or towards the payoff for the last row. That target only contains the randomness of one bounce, but it is biased as long as $V(s')$ is wrong, and information about the payoffs has to work its way up one row at a time.

## Things to Try

- **Watch the right plot** with the default jackpot board. MC's estimate at the drop peg jumps every time a ball hits the jackpot and slowly decays in between; TD's estimate is much smoother. With a constant $\alpha$, MC's estimate never stops jumping, while TD's settles. This is the variance argument for TD in one picture.
- **Watch the left plot.** MC is ahead at first, because TD has to wait for the payoffs to work their way up through ten rows of zero estimates. After a few hundred balls, TD overtakes it. Try different values of $\alpha$, or set $V_0$ closer to the true values.
- **Switch to $\alpha = 1/n$.** Now MC computes the exact sample average of the payoffs, and it wins clearly. TD averages over targets that were mostly wrong early on, so it gets stuck with that bias for a long time.
- **Change a payoff** after the estimates have converged. MC corrects every peg on the next path that ends in that slot; TD only corrects the last row at first, and then the change spreads upwards over many balls.
- **Click a lower peg** to drop the balls there. Both learners reuse the estimates they already have for the pegs below.
- **Add rows** to make the board deeper. The returns get noisier for MC, and the information takes longer to propagate for TD.

## Parameters

- **Learning rate $\alpha$:** how far each update moves the estimate. Large values react quickly but stay noisy, especially for MC.
- **Initial estimate $V_0$:** the starting value of every peg. TD's bias at the beginning comes entirely from this guess.
- **Rows:** the depth of the board (this resets the learners).
- **Speed:** how many rows per second the ball falls; slow it down and use **Step** to follow single updates.

See also the [[TD-vs-MC|gridworld demo]], which compares MC and TD for *control*.
