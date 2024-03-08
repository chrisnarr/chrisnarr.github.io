---
title: LaSalle's Invariance Principle
excerpt: "TBD"
collection: knowledge
draft: true
tags:
---

Es gibt **zwei** Hauptanwendungen:

1. Erweiterung der Stabilitätsanalyse nach Lyapunov für **zeitinvariante** Systeme, mit der in manchen Fällen Stabilität nachgewiesen werden kann, **ohne** dass $V(\underline{x})$ (lokal) **positiv definit** sein muss
2. Zeige, dass Trajektorien, die in einem bestimmten Gebiet beginnen, gegen eine **Invarianzmenge** konvergieren
   **Anmerkung:** Invarianzprinzip von LaSalle eignet sich auch für Stabilitätsnachweise von **Grenzschwingungen** → Zeige, dass außer der Zustände des Grenzzyklus keine andere invariante Menge in $S$ existiert

> [!definition] Definition: Invarianzmenge
> Eine Menge $\mathcal{M}$ heißt **Invarianzmenge** von einem **zeitinvarianten** System, wenn gilt
>
> $$
> \underline{x}(t_0)\in\mathcal{M} \Rightarrow \underline{x}(t)\in\mathcal{M},\;\forall t\in\mathcal{R}
> $$
>
> Trajektorien, die einmal in $\mathcal{M}$ eingetreten sind, können sie **nicht mehr verlassen**
> Beispiele: asymptotisch stabile Ruhelagen, Grenzzyklen

> [!definition] Definition: Invarianzprinzip von LaSalle
>
> 1.  Sei $\Omega$ eine kompakte (d.h. abgeschlossene und beschränkte) Invarianzmenge von (3.4)
> 2.  Sei $V(\underline{x})$ eine stetig differenzierbare Funktion mit $\dot{V}(\underline{x})\leq 0$ auf $\Omega$
> 3.  Sei $\mathcal{E}$ die Menge aller Punkte in $\Omega$, für die $\dot{V}(\underline{x})\leq 0$, und $\mathcal{M}$ die größte Invarianzmenge in $\mathcal{E}$
>
> Dann nähert sich jede Lösung von (3.4), die in $\Omega$ beginnt, für $t\rightarrow\infty$ an $\mathcal{M}$ an

> [!pro] **PRO**
> Hiermit kann **ohne positive Definitheit** von $V(\underline{x})$ gezeigt werden, dass jede Trajektorie des zeitinvarianten Systems (3.4), die in einer kompakten Invarianzmenge $\Omega$ beginnt, sich einer anderen Invarianzmenge $\mathcal{M}$ annähert

# Stabilitätsnachweis mit LaSalle

> [!idea] Idea
> Zeigt asymptotische Stabilität einer Ruhelage, selbst wenn $\dot{V}(\underline{x})$ **nur negativ semidefinit** ist

> [!goal] Goal
> Zeige, dass Invarianzmenge $\mathcal{M}$ nur aus dem Ursprung besteht

### Lokale Gültigkeit

> [!corollary] Korollar: Barbashin
>
> 1.  Sei $\underline{x}^*=\underline{0}$ eine Ruhelage von (3.4)
> 2.  Sei $V(\underline{x})$ eine **stetig differenzierbare** **positiv definite** Funktion auf $\mathcal{B}_\varepsilon$ mit $\dot{V}(\underline{x})\leq 0$ auf $\mathcal{B}_\varepsilon$
> 3.  Sei $\mathcal{S}=\{ \underline{x}\in\mathcal{B}_\varepsilon| \dot{V}(\underline{x})=0\}$
>
> Wenn keine Trajektorie von (3.4) außer $\underline{x}(t)=0$ in $\mathcal{S}$ bleiben kann, so ist die Ruhelage $\underline{x}^*=0$ **lokal** asymptotisch stabil.

### Globale Gültigkeit

> [!corollary] Korollar: Krasovskii
>
> 1.  Sei $\underline{x}^*=\underline{0}$ eine Ruhelage von (3.4)
> 2.  Sei $V(\underline{x})$ eine **stetig differenzierbare**, **radial unbeschränkte** und **positiv definite** Funktion auf $\mathbb{R}^n$ mit $\dot{V}(\underline{x})\leq 0$ auf $\mathbb{R}^n$
> 3.  Sei $\mathcal{S}=\{ \underline{x}\in\mathbb{R}^n| \dot{V}(\underline{x})=0\}$
>
> Wenn keine Trajektorie von (3.4) außer $\underline{x}(t)=0$ in $\mathcal{S}$ bleiben kann, so ist die Ruhelage $\underline{x}^*=0$ **global** asymptotisch stabil.

> [!example]- Example: Feder-Masse-Dämpfer System
> ![[Pasted image 20230911140753.png]]
