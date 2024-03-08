---
title: Controllability
draft: true
tags:
  -
---

> [!example]- Example
> Es wird eine Regelstrecke, die durch eine Differentialgleichung 2. Ordnung beschrieben wird und einen skalaren Eingang $u$ hat, betrachtet:
>
> $$
> \ddot{x}-\dot{x}^3 + x^2 = u
> $$
>
> Regelziel ist die Stabilisierung der Ruhelage $x^*=0$. Dafür wählt man als Ansatz für das Regelgesetz einen **nichtlinearen** Zustandsregler
>
> $$
> u = u_1(\dot{x}) + u_2(x)
> $$
>
> Verwendet man als Lyapunov-Funktion die **Gesamtenergie**, als Summe von kinetischer und potentieller Energie
> ![[Pasted image 20231101124403.png]]
> so ist die Ableitung der Lyapunov-Funktion nach der Zeit
> ![[Pasted image 20231101124421.png]]
> Damit $V(\underline{x})$ eine gültige Lyapunov-Funktion ist, muss gelten
> ![[Pasted image 20231101124441.png]]
> Die Methode soll nun verwendet werden, um zu zeigen, dass der Regler
>
> $$
> u = -2 \dot{x}^3 - 5x|x|
> $$
>
> die Ruhelage $x^*=0$ der mit $\alpha_1$ und $\alpha_2$ parametrisierten Differentialgleichung
>
> $$
> \ddot{x} + \alpha_1 \dot{x}^3 + \alpha_2 x^2 = u
> $$
>
> stabilisiert.
> Es kann durch Auswertung der Ungleichungen (3.14) gezeigt werden, dass der Regler die Ruhelage nur für $\alpha_1>-2$ und $|\alpha_2|<5$ **global asymptotisch** stabilisiert.
