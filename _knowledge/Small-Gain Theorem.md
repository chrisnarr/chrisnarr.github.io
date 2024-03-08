---
title: Small-Gain Theorem
draft: true
tags:
  -
---

- Die Eingangs/Ausgangs-Modellierung und die entsprechenden Stabilitätsresultate sind insbesondere hilfreich, wenn wir die Stabilität von verkoppelten Systemen untersuchen müssen, siehe Abb. 3.8 für ein Beispiel.
- Insbesondere das finite gain $\gamma$ eines Systems erlaubt es uns zu beobachten, wie sich die Norm eines Signals verändert, wenn das Signal durch das System propagiert.
- Wie in Abb. 3.8 seien im Folgenden zwei Systeme gegeben, H1 : Le → Le und H2 : Le → Le. Beide Systeme seien finite-gain L stabil, so dass (γ1, β1) and (γ2, β2) existieren, so dass gilt:
  ![[Pasted image 20230911135110.png]]
  Weiter nehmen wir an, dass es eindeutige Ausgänge e1, y2 ∈ Le und e2, y1 ∈ Le für jedes Paar von Eingängen u1 ∈ Le und u2 ∈ Le gibt. Zur Vereinfachung der Notation definieren wir $\underline{u}=[u_1,u_2^\top]$, $\underline{y}=[y_1,y_2^\top]$ und $\underline{e}=[e_1,e_2^\top]$ als Eingang, Ausgang und Fehler des verkoppelten Systems.
  ![[Pasted image 20230911135218.png]]

Das nachfolgende Small-Gain Theorem wird uns helfen, Eingangs-/Ausgangs-Stabilität des verkoppelten Systems zu untersuchen.

> [!definition] Definition: Small-Gain Theorem
> Wenn $H_1$ und $H_2$ finite-gain $\mathcal{L}$ stabil sind, dann ist deren Rückkopplung $\mathcal{L}$ stabil, wenn $\gamma_1\gamma_2 <1$.

- Eine Interpretation von der Verkopplung wie in Abb. 3.8 dargestellt kommt aus der robusten Regelung. Wir nehmen an, in der Modellierung des Systems gibt es Ungenauigkeit und fassen in H1 das nominelle Modell zusammen, also den Teil der Modellierung, den wir kennen. In H2 fassen wir die Unsicherheit zusammen und nehmen an, dass diese Perturbation des nominellen Verhalten zumindest stabil ist. Fur kleine Unsicherheiten ist γ2 klein und erlaubt Freiheiten beim Reglerentwurf fur das nominelle System, da γ1 dann relativ groß sein darf.
- Im folgenden Beispiel wird der Einfluss von γ2 auf die Stabilität des Gesamtsystems aus dem vorherigen Beispiel untersucht

> [!example]- Example
> ![[Pasted image 20230911135024.png]]
