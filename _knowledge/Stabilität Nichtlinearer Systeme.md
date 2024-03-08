---
title: Stability of Nonlinear Systems
draft: false
tags:
---

- **Verbreitete Interpretation:** Eingang ist Störung, wie wirkt sich diese Störung auf die Zustände bzw. auf den Ausgang aus?
- Für **Lineare** Systeme **BIBO Stabilität** (bounded input, bounded output):
  - Bedingungen an Übertragungsfunktion, die garantieren, dass bei einem **beschränkten Eingang** auch der **Ausgang beschränkt** ist
- Input-to-State Stabilität und der E/A-Stabilität sind Verallgemeinerung für nichtlineare Systeme

---

## Für Systeme ohne **Eingänge** (autonom)

Es existieren unterschiedliche Methoden, um die Stabilität eines Systems ohne Eingänge zu untersuchen.

### Methoden, die **Stabilität** beweisen

- [[Direkte Methode von Lyapunov]]: Stabilitätsanalyse mit Lyapunov-Funktionen
- [[Indirekte Methode von Lyapunov]]: Linearisierung und anschließende Stabilitätsanalyse
- [[Invarianzprinzip von LaSalle]]: Bestimmung von Stabilität über die Existenz von Invarianzmengen

### Methoden, die **Instabilität** beweisen

- [[Satz von Chetaev]]:

### Einzugsgebiet / Domain of Attraction

Ist die Ruhelage nicht **global**, aber dafür **lokal** asymptotisch stabil, interessiert, in welchem Bereich die Ruhelage asymptotisch stabil ist.

- Meistens schwierig oder sogar unmöglich, das Einzugsgebiet **genau** zu berechnen
- Mit Lyapunov-Funktion kann **Teilmenge** des Einzugsgebiets bestimmt werden
- Unterschiedliche Lyapunov-Funktionen führen zu unterschiedlichen Abschätzungen

> [!definition] Definition: Domain of Attraction (DoA)/Basin
>
> - Differentialgleichungssystem (3.1) mit der Ruhelage $\underline{x}^*$
> - Einzugsgebiet $\mathcal{A}(\underline{x}^*)$ der Ruhelage $\underline{x}^*$ zur Zeit $t=t_0$ ist die Menge aller Anfangsbedingungen $\underline{x}_0$ zur Zeit $t_0$, für die die Zustandstrajektorie gegen die Ruhelage konvergiert:
>   $$
>   \mathcal{A}(\underline{x}^*)\coloneqq \left\{\underline{x}_0\bigg|\lim_{t\rightarrow\infty}\underline{\Phi}(t;t_0,\underline{x}_0)=\underline{x}^*\right\}
>   $$
> - $\underline{\Phi}(t;t_0,\underline{x}_0)$: Lösung der Differentialgleichung mit der Anfangsbedingung $\underline{x}(t_0)=\underline{x}_0$

#### Für Zeitinvariante Systeme

> [!theorem] Theorem: Bestimmung eines Einzugsgebietes
>
> 1.  Sei $\underline{x}^*$eine Ruhelage, deren asymptotische Stabilität durch die Lyapunov-Funktion $V(\underline{x})$ gezeigt werden kann
> 2.  Sei $\mathcal{V}=\{\underline{x}^*\} \cup \{\underline{x}\;|\;V(\underline{x})>0,\dot{V}(\underline{x})<0\}$, und $\mathcal{E}_c=\{\underline{x}\;|\;V(\underline{x})\leq c\}$
> 3.  Sei $\mathcal{E}_c \subseteq \mathcal{V}$
> 4.  Sei $\mathcal{E}_c$ **beschränkt**
>
> Dann ist $\mathcal{E}_c$ ist eine Teilmenge des Einzugsgebiets

> [!proof]- Proof
> **Problem**:
>
> - $\mathcal{V}$ alleine **nicht invariant**, d.h. Trajektorie, die in $\mathcal{V}$ beginnt, könnte $\mathcal{V}$ wieder verlassen
> - Sobald die Trajektorie $\mathcal{V}$ verlassen hat, gilt nicht mehr $\dot{V}(\underline{x})<0$ → Konvergenz zur Ruhelage nicht mehr gewährleistet
>
> Untermengen von $\mathcal{V}$ der Form $\mathcal{E}_c=\{\underline{x}\;|\;V(\underline{x})\leq c\}$ sind dagegen **invariant**: ist eine Trajektorie zu einer Zeit in $\mathcal{E}_c$, kann sie $\mathcal{E}_c$ nicht mehr verlassen
>
> - Da zusätzlich $\dot{V}(\underline{x})<0$ gilt, ist die Konvergenz gegen die Ruhelage für alle Anfangswerte in $\mathcal{E}_c$ gesichert
>
> **Warum muss die Menge $\mathcal{E}_c$ beschränkt sein?**
>
> - Wäre die Menge $\mathcal{E}_c$ unbeschränkt, so wären beliebig große Zustandswerte Teil des Einzugsgebiets
> - Für $\underline{x}$ gegen Unendlich wäre es allerdings dann möglich, dass die Lyapunov-Funktion $V(\underline{x})$ gegen einen konstanten Wert konvergiert → Widerspruch zur Forderung, dass im Einzugsgebiet alle Phasenbahnen gegen die Ruhelage konvergieren müssen
>
> **Anmerkung:** Argumentation analog zur Forderung der radialen Unbeschränktheit der Lyapunov-Funktion zum Beweis der globalen Stabilität

Berechnung des gesamten Einzugsgebietes:

> [!theorem] Theorem: Charakterisierung des Einzugsgebietes
>
> - Einzugsgebiet einer Ruhelage ist eine **offene, zusammenhängende, invariante** Menge
> - **Rand** des Einzugsgebiets ist ebenfalls **invariant** und besteht aus Trajektorien der Differentialgleichung

> [!example]- Example: Einzugsgebiet für den inversen Van-der-Pol Oszillator
> ![[Pasted image 20231020230718.png]]

---

## Für Systeme mit Eingängen

Da bei nichtlinearen Systemen die **Stabilität** abhängig von den **Eingängen** des Systems sein kann, müssen diese ebenfalls berücksichtigt werden. Dabei lassen sich zwei Stabilitätsarten definieren:

1. [[Input-to-State Stability]]
2. [[Input-Output Stability]]
