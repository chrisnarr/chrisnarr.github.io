---
title: Controllability
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

![[Flachheitsbasierte Regelung.png]]

> [!idea] Idea
>
> - Ein [[Flat System|flaches System]] durch **nichtlineare Zustandstransformation** in ein **lineares** System transformieren und anschließende lineare Regelung.

> [!danger] Annahme
>
> - Kenntnis **aller** Zustände $\underline{x}$ wird vorausgesetzt
> - Sind nicht alle Zustände messbar, Schätzung durch nichtlinearen Folgebeobachter

> [!steps] Steps
>
> 1.  Durch eine **[[Flachheitsanalyse]]** die Flachheit eines Systemausgangs nachweisen
> 2.  **Entwurfsprozess:**
>     1. Planung der Trajektorie zur Beschreibung des Sollverhaltens
>     2. Stabilisierung der Folgebewegung entlang der Solltrajektorie durch Regelung

> [!steps] Steps
>
> 1.  Berechnung der Solltrajektorien der **Ausgänge** $\underline{y}_d(t)$ aus den Solltrajektorien der **Regelgrößen** $\underline{w}_d(t)$ (da Zustandsrückführung abhängig von $\dot{v}_1$, muss Solltrajektorie $\underline{y}_d$ mindestens zweimal differenzierbar sein)
> 2.  **Exakte Linearisierung** der Dynamik des Folgefehlers durch die Zustandsrückführung
> 3.  Vorgabe des Einschwingverhalten des Regelfehlers $e$ durch den Folgeregler
> 4.  Bestimmung des flachen Ausgangs $\underline{y} \coloneqq [x_1,x_2]^\top$ bzw. $\underline{z} \coloneqq [y_1,y_2,\dot{y}_2]^\top$

> [!example]- Example: Fahrzeugmodell

### Quasi-Statische Zustandsrückführung

- Hierfür werden zunächst die neuen Eingänge eingeführt
  ![[Pasted image 20230918223507.png]]
- Durch Einsetzen von (6.9) in die Gleichungen für $u_1$ und $u_2$ aus (6.6) ergibt sich die Zustandsrückführung
  ![[Pasted image 20230918223518.png]]
- Setzt man (6.9) in die Beziehungen für $x_1$, $x_2$ und $x_3$ in (6.6) ein, so erhält man
  ![[Pasted image 20230918223528.png]]
- was einer Zustandstransformation der ursprünglichen Zustände $\underline{x}$ in die neuen Zustände $\underline{z}$entspricht
  ![[Pasted image 20230918223539.png]]
- Wendet man die Transformation (6.10), (6.11) und (6.12) auf das nichtlineare System (6.4) an, reduziert sich das System auf **zwei Integratorketten**
  ![[Pasted image 20230918223551.png]]
- In diesen Koordinaten ist nun ein **lineares** Reglerdesign möglich
- Durch Polplazierung kann leicht die Dynamik des Folgefehlers $e = y - y_d$ vorgegeben werden, indem die neuen Eingänge mit geeigneten Reglerparametern $p_1$, $p_2$ und $p_3$ zu bestimmt werden
  ![[Pasted image 20230918223607.png]]
- Setzt man (6.13) in (6.9) ein, so ergibt sich für den Folgefehler $e_1$ und $e_2$ die **exakt lineare** Dynamik
  ![[Pasted image 20230918223616.png]]
  **Anmerkung:**
- Da die Zustände des geschlossenen Regelkreises durch die Rückführung nicht erweitert werden, spricht man bei (6.10) von einer **quasi-statischen Zustandsrückführung**

### Dynamische Zustandsrückführung

- Hierzu führt man mit den neuen Zustand $x_4$ und die neuen Eingänge $u_1$ und $u_2$ ein.
  ![[Pasted image 20230918223641.png]]
- Wählt man die Eingänge
  ![[Pasted image 20230918223646.png]]
- so erhält man durch Auflösen der Gleichungen für $\ddot{y}_1$ und $\ddot{y}_2$ in (6.6) nach $u_1$ und $u_2$ die dynamische Zustandsrückführung der Form
  ![[Pasted image 20230918223656.png]]

**Anmerkung:**

- Da die Zustände des geschlossenen Regelkreises durch die dynamische Rückführung erweitert werden, spricht man von einer **dynamischen Zustandsrückführung**

**Anmerkung:**

- Kenntnis **aller** Zustände $\underline{x}$ wird vorausgesetzt
- Sind nicht alle Zustände messbar, Schätzung durch nichtlinearen Folgebeobachter

> [!pro] **PRO**
>
> - Trajektorien von flachen Systemen können **einfach** geplant und durch Steuerungen oder Regelungen realisiert werden
> - Besitzen ähnliche **Steuerbarkeitseigenschaften** wie lineare Systeme

> [!con] **CON**
>
> - Nichtlineare Transformation **schwer** zu finden
