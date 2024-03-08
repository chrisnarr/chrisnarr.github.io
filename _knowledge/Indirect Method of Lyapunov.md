---
title: Indirect Method of Lyapunov
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  - stability
---

> [!idea] Idea
>
> - Linearisierung des nichtlinearen Systems um die Ruhelagen und anschließende Stabilitätsanalyse

---

# Für zeitinvariante Systeme

**Nichtlineares, zeitinvariantes System**
$$ \underline{\dot{x}}=\underline{f}(\underline{x}) $$
mit Ruhelage $\underline{x}^*$, d.h. $\underline{f}(\underline{x}^*)=0$ und $\underline{f}(\underline{x})$ zweimal stetig differenzierbar

> [!steps] Steps
>
> 1.  Linearisierung durch Taylorreihenapproximation in der Ruhelage $\underline{x}^*$
>     $$
>     \underline{\dot{x}}=A\underline{x}
>     \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;
>     A=\left[\frac{\partial \underline{f}(\underline{x})}{\partial \underline{x}}\right]_{\underline{x}=\underline{x}^*}
>     $$
> 1.  Folgende Schlüsse können für die Ruhelage $\underline{x}^*$ des nichtlinearen Systems gezogen werden:
>     1. Alle Eigenwerte von $A$ haben einen **negativen Realteil** → **lokal asymp. stabil i.S.v.L.**
>     1. Ein Eigenwert der Systemmatrix $A$ hat einen **positiven Realteil** → **lokal instabil**
>     1. **Mindestens** ein Eigenwert der Systemmatrix $A$ hat einen **Realteil gleich Null** und **kein** Eigenwert hat **positive Realteile** → keine Aussage

---

# Für zeitvariante Systeme

**Nichtlineares, zeitvariantes System**

$$
\underline{\dot{x}}=\underline{f}(\underline{x},t)
$$

mit Ruhelage $\underline{x}^*$, d.h. $\underline{f}(\underline{x}^*,t)=0$, $\forall t$ und $\underline{f}(\underline{x},t)$ zweimal stetig differenzierbar

> [!steps] Steps
>
> 1.  Linearisierung durch Taylorreihenapproximation in der Ruhelage $\underline{x}^*$
>     $$
>     \underline{\dot{x}}=A(t)\underline{x}+\underline{f}_1(\underline{x},t)
>     \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;
>     A(t)=\left[\frac{\partial \underline{f}(\underline{x},t)}{\partial \underline{x}}\right]_{\underline{x}=\underline{x}^*}
>     $$
>     mit Restterm $\underline{f}_1(\underline{x},t)$
>     > [!warning] **Achtung:** Linearisierung ist nur dann gültig, wenn es eine uniforme Konvergenz des Restterms gegen Null gibt, also gilt
>     >
>     > $$
>     > \lim_{\|\underline{x}\|\rightarrow0}\sup_{t\geq0}\frac{\|\underline{f}_1(\underline{x},t)\|}{\|\underline{x}\|}=0
>     > $$
> 1.  Analyse der Systemmatrix $A$:
>     1. Ruhelage der Linearisierung **uniform asymptotisch stabil** → Ruhelage des nichtlinearen Systems **uniform asymptotisch stabil**
>     2. Ruhelage der Linearisierung **instabil** und linearisiertes System hat eine **konstante** Systemmatrix $A(t)=A_0$ → Ruhelage des nichtlinearen Systems **instabil**
>     3. Ruhelage der Linearisierung nur **instabil** → keine Aussage für nichtlineares System

---

# Stabilität linearer zeitvarianter Systeme

**Lineares, zeitvariantes System**

$$
\underline{\dot{x}}=A(t)\underline{x}
$$

**Anmerkung**

- Stabilität linearer **zeitinvarianter** Systeme kann durch Analyse der Lage der Eigenwerte der Systemmatrix bestimmt werden, Resultate lassen sich aber **nicht** auf **zeitvariante** lineare Systeme übertragen!
- **Lineares zeitvariantes** System kann also eine **instabile** Ruhelage haben, auch wenn alle Eigenwerte der Matrix $A(t)$ zu jeder Zeit $t$ in der linken Halbebene liegen!
  > [!example]- Example
  > ![[Pasted image 20231020162532.png]]

> [!theorem] Theorem: Stabilität **zeitvarianter linearer** Systeme (1)
> Die Ruhelage eines **zeitvarianten linearen** Systems ist **exponentiell stabil**, wenn die Eigenwerte der symmetrischen Matrix
>
> $$
> A(t)+A(t)^\top
> $$
>
> für alle Zeiten $\forall t$ in der linken Halbebene liegen

> [!proof]- Proof
>
> - Wähle als Lyapunov-Funktion $V(\underline{x})=\underline{x}^\top\underline{x}$
> - Größter negativer Eigenwert der symmetrischen Matrix $A(t)+A(t)^\top$ ist $\lambda$
> - Zeitliche Ableitung der Lyapunov-Funktion:
>   $$
>   \dot{V}(\underline{x}) = \underline{x}^\top \underline{\dot{x}} + \underline{\dot{x}}^\top \underline{x} = \underline{x}^\top (A(t) + A(t)^\top) \underline{x} \leq \lambda \underline{x}^\top\underline{x}=\lambda V(\underline{x})
>   $$
> - Schlussfolgerung:
>   - $\dot{V}(\underline{x})\leq0$, weil $\lambda \leq 0$
>   - $\underline{x}$ konvergiert **exponentiell** gegen die Ruhelage, da $V(\underline{x})$ durch die Ungleichung $\dot{V}(\underline{x}) \leq \lambda V(\underline{x})$ durch eine exponentiell fallende Funktion abgeschätzt werden kann

Vorheriger Satz liefert nur eine **hinreichende** Bedingung: es kann auch stabile zeitvariante Systeme geben, für die die Voraussetzung des Satzes nicht erfüllt ist.
Weiteres **hinreichendes** Kriterium:

> [!theorem] Theorem: Stabilität **zeitvarianter linearer** Systeme (2)
> Die Ruhelage eines zeitvarianten linearen Systems ist **exponentiell stabil**, wenn die Eigenwerte der Matrix $A(t)$, $\forall t$ in der **linken** Halbebene liegen und die Matrix $A(t)$ beschränkt ist, d.h.
>
> $$
> \int_0^\infty A(t)^\top A(t)\;\text{d}t < \infty
> $$

Für lineare zeitvariante Systeme gilt:

- Wenn System **exponentiell stabil** → **uniform asymptotisch stabil**
