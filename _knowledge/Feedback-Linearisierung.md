---
title: Data-driven Control (DDC)
draft: true
tags:
  -
---

> [!idea] Idea
> Durch Rückführung des Systemzustandes kann ein nichtlineares System in eine äquivalente **lineare** Darstellung transformiert werden, welche für einen **größeren** Bereich im Zustandsraum gültig ist.

# Verfahren

1. [[Eingangs-Ausgangs (EA) Linearisierung]]
2. [[Zustands-Linearisierung]]

# Vergleich von Zustands- und E/A-Linearisierung

- Beide Verfahren können unter bestimmten Voraussetzungen das gleiche Ergebnis liefern
- Allgemeine Vorgehensweisen:
  ![[Pasted image 20231020222110.png]]
- Bestimmung der Transformationsbeziehung $\underline{\varphi}$ ist unterschiedlich
- Ergebnis beider Verfahren identisch, wenn der gewählte oder von der Problemstellung vorgegebene Ausgang $y$ eine Lösung $\varphi_1$ der Zustands-Linearisierung ist
- In dem Fall hat der Ausgang auch maximalen relativen oder Differenzengrad $r=n$
- Bei der E/A–Linearisierung kann ein Ausgang zur Linearisierung benutzt werden, der keine Lösung der Zustands-Linearisierung ist, weil sein relativer Grad nicht mit der Systemordnung übereinstimmt
- Das resultierende lineare System hat eine interne Dynamik, die nicht an $y$ beobachtet werden kann
