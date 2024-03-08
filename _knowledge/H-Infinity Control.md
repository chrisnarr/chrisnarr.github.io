---
title: Data-driven Control (DDC)
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

$\mathcal{H}_\infty$ methods are used in [control theory](https://en.wikipedia.org/wiki/Control_theory) to synthesize controllers to achieve stabilization with guaranteed performance. To use $\mathcal{H}_\infty$ methods, a control designer expresses the control problem as a [mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization) problem and then finds the controller that solves this optimization. $\mathcal{H}_\infty$ techniques have the advantage over classical control techniques in that $\mathcal{H}_\infty$ techniques are readily applicable to problems involving multivariate systems with cross-coupling between channels; disadvantages of $\mathcal{H}_\infty$ techniques include the level of mathematical understanding needed to apply them successfully and the need for a reasonably good model of the system to be controlled. It is important to keep in mind that the resulting controller is only optimal with respect to the prescribed cost function and does not necessarily represent the best controller in terms of the usual performance measures used to evaluate controllers such as settling time, energy expended, etc. Also, non-linear constraints such as saturation are generally not well-handled. These methods were introduced into control theory in the late 1970s-early 1980s by [George Zames](https://en.wikipedia.org/wiki/George_Zames) (sensitivity minimization), J. William Helton (broadband matching), and [Allen Tannenbaum](https://en.wikipedia.org/wiki/Allen_Tannenbaum) (gain margin optimization).

The phrase $\mathcal{H}_\infty$ *control* comes from the name of the mathematical space over which the optimization takes place: $\mathcal{H}_\infty$ is the *[Hardy space](https://en.wikipedia.org/wiki/Hardy_space)* of [matrix](<https://en.wikipedia.org/wiki/Matrix_(mathematics)>)-valued functions that are [analytic](https://en.wikipedia.org/wiki/Analytic_function) and bounded in the open right-half of the [complex plane](https://en.wikipedia.org/wiki/Complex_plane) defined by Re(_s_) > 0; the $\mathcal{H}_\infty$ norm is the maximum singular value of the function over that space. (This can be interpreted as a maximum gain in any direction and at any frequency; for [SISO](https://en.wikipedia.org/wiki/Single-Input_and_Single-Output) systems, this is effectively the maximum magnitude of the frequency response.) $\mathcal{H}_\infty$ techniques can be used to minimize the closed loop impact of a perturbation: depending on the problem formulation, the impact will either be measured in terms of stabilization or performance.

Simultaneously optimizing robust performance and robust stabilization is difficult. One method that comes close to achieving this is $\mathcal{H}_\infty$ [loop-shaping](https://en.wikipedia.org/wiki/H-infinity_loop-shaping), which allows the control designer to apply classical loop-shaping concepts to the multivariable frequency response to get good robust performance, and then optimizes the response near the system bandwidth to achieve good robust stabilization.

# Problem Formulation

![[Pasted image 20230908163033.png]]

The plant P has two inputs, the exogenous input w, that includes reference signal and disturbances, and the manipulated variables u. There are two outputs, the error signals z that we want to minimize, and the measured variables v, that we use to control the system. $v$ is used in $K$ to calculate the manipulated variables $u$. Notice that all these are generally [vectors](<https://en.wikipedia.org/wiki/Vector_(geometry)>), whereas $P$ and $K$ are matrices.

In formulae, the system is:
![[Pasted image 20230908163209.png]]
It is therefore possible to express the dependency of $z$ on $w$ as:

![[Pasted image 20230908163229.png]]

Called the lower linear fractional transformation
![[Pasted image 20230908163246.png]]

Therefore, the objective of $\mathcal{H}_\infty$ control design is to find a controller $K$ such that $F_l(P,K)$ is minimised according to the $\mathcal{H}_\infty$ norm. The same definition applies to $\mathcal{H}_2$ control design. The infinity norm of the transfer function matrix $F_l(P,K)$ is defined as:
![[Pasted image 20230908163305.png]]
where $\overline{\sigma}$ is the maximum singular value of the matrix $$F_l(P,K)(j\omega)$$The achievable $\mathcal{H}_\infty$ norm of the closed loop system is mainly given through the matrix $D_{11}$ (when the system $P$ is given in the form (A, B1, B2, C1, C2, D11, D12, D22, D21)). There are several ways to come to an $\mathcal{H}_\infty$ controller:

- A [Youla-Kucera parametrization](https://en.wikipedia.org/wiki/Youla-Kucera_parametrization) of the closed loop often leads to very high-order controller.
- [Riccati](https://en.wikipedia.org/wiki/Riccati_equation)-based approaches solve two [Riccati equations](https://en.wikipedia.org/wiki/Riccati_equation) to find the controller, but require several simplifying assumptions.
- An optimization-based reformulation of the Riccati equation uses [linear matrix inequalities](https://en.wikipedia.org/wiki/Linear_matrix_inequality) and requires fewer assumptions.

# $\mathcal{H}_\infty$ loop shaping

**H-infinity loop-shaping** is a design methodology in modern [control theory](https://en.wikipedia.org/wiki/Control_theory). It combines the traditional intuition of classical control methods, such as [Bode's sensitivity integral](https://en.wikipedia.org/wiki/Bode%27s_sensitivity_integral), with [H-infinity optimization techniques](https://en.wikipedia.org/wiki/H_infinity) to achieve controllers whose stability and performance properties hold despite bounded differences between the nominal plant assumed in design and the true plant encountered in practice. Essentially, the control system designer describes the desired responsiveness and noise-suppression properties by weighting the plant [transfer function](https://en.wikipedia.org/wiki/Transfer_function) in the [frequency domain](https://en.wikipedia.org/wiki/Frequency_domain); the resulting 'loop-shape' is then 'robustified' through optimization. Robustification usually has little effect at high and low frequencies, but the response around unity-gain crossover is adjusted to maximise the system's stability margins. H-infinity loop-shaping can be applied to multiple-input multiple-output (MIMO) systems.

H-infinity loop-shaping has been successfully deployed in industry. In 1995, R. Hyde, K. Glover and G. T. Shanks published a paper describing the successful application of the technique to a VTOL aircraft. In 2008, D. J. Auger, S. Crawshaw and S. L. Hall published another paper describing a successful application to a steerable marine radar tracker, noting that the technique had the following benefits:

- Easy to apply – commercial software handles the hard math.
- Easy to implement – standard transfer functions and state-space methods can be used.
- Plug and play – no need for re-tuning on an installation-by-installation basis.

A closely related design methodology, developed at about the same time, was based on the theory of the gap metric. It was applied in 1993 for designing controllers to dampen vibrations in large flexible structures at [Wright-Patterson Air Force Base](https://en.wikipedia.org/wiki/Wright-Patterson_Air_Force_Base) and [Jet Propulsion Laboratory](https://en.wikipedia.org/wiki/Jet_Propulsion_Laboratory)

# mu Synthesis

## D-K Iteration
