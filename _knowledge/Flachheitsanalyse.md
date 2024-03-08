---
title: Flat System Analysis
draft: true
tags:
  -
---

> [!warning]
> Bisher gibt es keine notwendigen und hinreichenden Flachheitsbedingungen, weswegen es auch aktuell keine allgemein anwendbare Methode gibt.

Zwei mögliche Vorgehensweisen:

1. **Lösbarkeit von linearen partiellen Differentialgleichungen:** Sind die Differentialgleichungen lösbar, ist das System flach, und jede Lösung stellt einen flachen Ausgang dar
2. **Heuristik:** Durch geschickte Überlegung einen flachen Ausgang finden

# Heuristik

> [!tldr] Steps
>
> 1.  Auswahl eines Kandidaten für einen flachen Ausgang $\underline{y}$, der möglichst viel Information über das dynamische Systemverhalten beinhaltet
> 2.  Sukzessive **zeitliche Ableitung** des Kandidaten zur Herleitung nichtlinearer algebraischer Gleichungen zur Bestimmung von $\underline{x}$ und $\underline{u}$
> 3.  Gleichung (6.1) muss so oft abgeleitet werden, bis aus dem resultierenden Gleichungssystem für $y_i,...,\overset{(\gamma_i)}{y_i}$ mit $i=1,...,m$ alle Unbekannten $x_j$ mit $j=1,...,n$ und $u_i$ mit $i=1,...,m$ (zumindest lokal) bestimmt werden können
> 4.  Kandidat für flachen Ausgang ist umso erfolgversprechender, je **häufiger** abgeleitet werden kann, ohne dass Eingänge $u_i$ in den Ableitungen auftauchen

> [!example]- Example: Kinematisches Modell eines Fahrzeugs
> ![[Pasted image 20230918222622.png]]

**Anmerkungen:**

- Die Beziehungen für $\underline{y}$, $\underline{u}$ und $\dot{u}_1$ in (6.6) sind nur lokal gültig (z.B. Singularitäten bei $\frac{\dot{y}_2}{\dot{y}_1}$)
- Oft sind die erforderlichen Ableitungen **umfangreich**
- Erleichterung durch Algebra-Programme (z.B. Mathematica, Maple)
