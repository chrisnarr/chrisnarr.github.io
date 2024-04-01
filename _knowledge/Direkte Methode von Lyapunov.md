---
title: "Direct Method of Lyapunov"
excerpt: "The Direct Method of Lyapunov is a way to prove stability for a dynamical system."
collection: knowledge
draft: true
tags:
---

> **Idea**
> - System besitzt zu Beginn **positive Energie**
> - Zeige, dass Energie des Systems **streng monoton fallend** ist
>   → für $$t\rightarrow\infty$$ muss Energie des Systems gegen Null gehen
>   → System **ohne** Energie muss in **Ruhe** sein
{: .notice--idea}

>**PRO**
>- Differentialgleichung muss für Stabilitätsaussage der Ruhelagen **nicht** explizit **gelöst** werden
{: .notice--pro}

>**CON**
>- Nicht für jedes System lässt sich Energie-Funktion berechnen → **Pseudo-Energie-Funktionen**
>- Schwierig, geeignete Lyapunov-Funktion zu finden
{: .notice--con}

---

# Für zeitinvariante Systeme

**Zeitinvariantes System (3.4)**
$$ \underline{\dot{x}}=\underline{f}(\underline{x}), \;\;\; \underline{x}(t_0)=\underline{x}_0, \;\;\;\underline{x}\in\mathbb{R}^n $$
mit Ruhelage $$\underline{x}^*=\underline{0}$$

> [!idea] Idea
>
> - Betrachtung der Änderung von $$V(\underline{x})$$ entlang der Systemtrajektorien
> - Bilden der zeitlichen Ableitung von $$V(\underline{x})$$
>   $$
>   \dot{V}(\underline{x})= \sum_{i=1}^{n}\frac{\partial V}{\partial x_i}\dot{x}_i= \sum_{i=1}^{n}\frac{\partial V}{\partial x_i}f_i(\underline{x})= \frac{\partial V}{\partial \underline{x}}\underline{f}(\underline{x})
>   $$
> - **Lie-Ableitung:** Beschreibt, wie sich Funktion $$V(\underline{x})$$ entlang der Trajektorien des Systems (3.4) ändert

> [!theorem] Theorem: Direkte Methode von Lyapunov für lokale Stabilität
>
> 1.  Sei $$\underline{x}^*=\underline{0}$$ eine Ruhelage von (3.4)
> 2.  Sei $$V(\underline{x})$$ eine **stetig differenzierbare**, **lokal positiv definite** Funktion
> 3.  Sei **lokal** $$\dot{V}(\underline{x})\leq 0$$
>
> Dann ist $$\underline{x}^*$$ **lokal stabil** i.S.v.L, gilt $$\dot{V}(\underline{x}) < 0$$, so ist $$\underline{x}^*$$ **lokal asymptotisch stabil** i.S.v.L.

> [!theorem] Theorem: Direkte Methode von Lyapunov für globale Stabilität
>
> 1.  Sei $\underline{x}^* = \underline{0}$ die **einzige** Ruhelage von (3.4)
> 2.  Sei $V(\underline{x})$ eine **stetig differenzierbare**, **global** **positiv definite** Funktion
> 3.  Sei **global** $\dot{V}(\underline{x}) \leq 0$
> 4.  Sei $V(\underline{x})$ zudem **radial unbeschränkt**, also wenn $\|\underline{x}\|\rightarrow\infty$, dann $\|V(\underline{x})\|\rightarrow\infty$
>
> Dann ist $\underline{x}^* = \underline{0}$ **global stabil** i.S.v.L., gilt **global** $\dot{V}(\underline{x})<0$, so ist $\underline{x}^* = \underline{0}$ **global asymptotisch stabil** i.S.v.L.

> [!proof]- Proof: Radiale Unbeschränktheit
>
> - Abb. 3.3 zeigt Isolinien der global positiv definiten Funktion (Kurven, für die gilt $V(\underline{x})=c$ = konstant)
>   ![[Pasted image 20231020225728.png]]
> - Es existieren Werte von $c$ für die die durch $V(\underline{x})\leq c$ beschriebenen Mengen **unbeschränkt** sind
> - Wenn Systemtrajektorie auf einer Isolinie von $V(\underline{x})$ verläuft, die nicht geschlossen ist, strebt also $\|\underline{x}(t)\|\rightarrow \infty$, obwohl $V(\underline{x})$ global positiv definit ist und $\dot{V}(\underline{x})=0$
> - Damit kann es Systeme mit einer nicht global stabilen Ruhelage geben, obwohl die im Satz von Lyapunov (für lokale Stabilität) aufgeführten Bedingungen erfüllt sind
> - Dennoch sind die im Satz von Lyapunov aufgeführten Bedingungen hinreichend für lokale Stabilität, da es auf Grund der Stetigkeit von $V(\underline{x})$ immer eine Umgebung des Ursprungs gibt, in der alle Isolinien von $V(\underline{x})$ geschlossen sind und damit begrenzte Mengen beschreiben
> - Das heißt, für **globale** Stabilität, müssen alle Isolinien von $V(\underline{x})$ geschlossen sein, was durch **radiale Unbeschränktheit** von $V(\underline{x})$ gewährleistet wird

**Anmerkung:** Jede Funktion $V(\underline{x})$, die die im Satz von Lyapunov angegebenen Bedingungen erfüllt, heißt **Lyapunov-Funktion**.

**Anmerkung:** Mit Hilfe des Satzes von Lyapunov kann nur Stabilität, **nicht** aber **Instabilität** nachgewiesen werden. Wenn Stabilität mit einer Lyapunov-Funktion nicht bewiesen werden kann, kann das System **trotzdem** stabil sein! (→ Auswahl der richtigen Lyapunov-Funktion wichtig!)

> [!example]- Example: Feder-Masse-Dämpfer System
> ![[Pasted image 20231020225951.png]]
> ![[Pasted image 20231020230005.png]]

---

# Für zeitvariante Systeme

**Zeitinvariantes System (3.6)**
$$ \underline{\dot{x}}=\underline{f}(\underline{x},t), \;\;\; \underline{x}(t_0)=\underline{x}\_0, \;\;\;\underline{x}\in\mathbb{R}^n, \;\;\;t\geq0 $$
mit Ruhelage $\underline{x}^*=\underline{0}$

- Lyapunov-Funktionen können auch **zeitvariant** sein, also $V(\underline{x},t)$
- Nicht notwendig, um Stabilität zeitvarianter Systeme zu untersuchen, aber man gewinnt durch die Einführung der Zeit $t$ in die Lyapunov-Funktion einen zusätzlichen Freiheitsgrad, der die Suche nach einer passenden Lyapunov-Funktion vereinfacht
- Prinzip zum Nachweis der Stabilität der Ruhelage ist bei zeitvarianten Systemen identisch zu dem zeitinvarianten Fall
- Dadurch, dass nun $V(\underline{x},t)$ betrachtet wird, ergeben sich jedoch einige Unterschiede.
- Wie im vorherigen Abschnitt gezeigt wurde, existieren positiv definite Funktionen, die nicht geschlossene Isolinien haben
- Während im zeitinvarianten Fall die Stetigkeit von $V(\underline{x})$ sicherstellt, dass es immer eine Umgebung gibt, in der die Isolinien von $V(\underline{x})$ geschlossen sind, gilt dies für $V(\underline{x},t)$ nicht mehr
- Aus diesem Grund reicht Stetigkeit und positive Definitheit von $V(\underline{x},t)$ auch nicht mehr aus, damit $V(\underline{x},t)$ ein Kandidat für eine Lyapunov-Funktion ist
- zusätzlich $V(\underline{x},t)$ nach oben und unten abgeschätzt werden, damit garantiert ist, dass der Wertebereich, in dem sich $V(\underline{x},t)$ bewegt, beschränkt ist
- Dies wird dadurch sichergestellt, dass $V(\underline{x},t)$ eine abnehmende Funktion sein muss, d.h., dass eine stetige, positiv definite Funktion $W(\underline{x})$ existiert, so dass gilt, $V(\underline{x},t) \leq W(\underline{x})$
- Ähnliches gilt für die Abschätzung von $V(\underline{x},t)$ nach unten
- Diese stellt sicher, dass $V(\underline{x},t)\neq0, \forall \underline{x} \neq 0$

> [!theorem] Theorem: Direkte Methode von Lyapunov für zeitvariante Systeme
>
> 1.  Sei $\underline{x}^*=\underline{0}$ eine Ruhelage von (3.6)
> 2.  Sei $V(\underline{x},t)$ eine **stetig nach $\underline{x}$ differenzierbare** Funktion
> 3.  Seien $W_1(\underline{x})$ und $W_2(\underline{x})$ **stetige positiv definite** Funktionen, so dass $\forall t\geq 0$ gilt
>     $$
>     \begin{aligned}
>     W_1(\underline{x})\leq V(\underline{x},t)\leq W_2(\underline{x}) \\
>     \dot{V}(\underline{x},t)= \frac{\partial V}{\partial t} + \frac{\partial V}{\partial \underline{x}}\underline{f}(\underline{x},t) \leq 0
>     \end{aligned}
>     $$
>     → $\underline{x}^* = \underline{0}$ **lokal uniform stabil**
>
> Gilt zudem für eine **stetige positiv definite** Funktion $W_3(\underline{x})$
>
> $$
> \dot{V}(\underline{x},t)= \frac{\partial V}{\partial t} + \frac{\partial V}{\partial \underline{x}}\underline{f}(\underline{x},t) \leq -W_3(\underline{x}) , \;\;\; \forall t\geq 0
> $$
>
> → $\underline{x}^* = \underline{0}$ **lokal uniform asymptotisch stabil**
>
> Wenn $W_1(\underline{x})$, $W_2(\underline{x})$ und $W_3(\underline{x})$ $\mathcal{K}$-Funktionen und $W_1(\underline{x})$ zudem eine $\mathcal{K}_\infty$-Funktion ist
> → $\underline{x}^* = \underline{0}$ **global uniform asymptotisch stabil**

---

## Häufig verwendete Lyapunov-Funktionen

1. $V(\underline{x},t)=\|\underline{x}\|^2$: pdf, abnehmend, radial unbeschränkt
2. $V(\underline{x},t)=\underline{x}^\top P \underline{x}$ mit pdf $P \in \mathbb{R}^{n\times n}$: pdf, abnehmend, radial unbeschränkt
3. $V(\underline{x},t)=(t+1)\|\underline{x}\|^2$: pdf, radial unbeschränkt
4. $V(\underline{x},t)=e-t\|\underline{x}\|^2$: pdf, abnehmend
5. $V(\underline{x},t)=\sin^2(\|\underline{x}\|^2)$: lokal pdf, abnehmend

![[Pasted image 20231020222851.png]]
