---
title: Controllability
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

source: https://www.youtube.com/watch?v=yFS5PSmlp6E&list=PLn8PRpmsu08pFBqgd_6Bi7msgkWFKL33b&index=11&ab_channel=MATLAB

- Einfügen eines Dämpfungsterms in ein passives System zu einer fortwährenden Abgabe von Energie führt, sobald sich dessen Zustand außerhalb der Ruhelage befindet. Dadurch kann diese global asymptotisch stabilisiert werden
- Passive Systeme weisen wie in Abschnitt 4.3 gezeigt, stabile Ruhelagen auf, da sie - physikalisch betrachtet - ihre gespeicherte Energie nur bei externer Energiezufuhr erhöhen können
- Solange ein solches System daher Energie dissipiert, nähert es sich einer Ruhelage
- Es liegt daher nahe, diese Eigenschaft fur den Entwurf von Reglern zu verwenden, die ein System global asymptotisch stabilisieren
- Dieser Abschnitt untersucht zuerst, unter welchen Voraussetzungen passive, unaktuierte Systeme eine asymptotisch stabile Ruhelage besitzen
- Darauf aufbauend wird gezeigt, wie asymptotische Stabilität einer Ruhelage durch Aufstellung eines entsprechenden Regelgesetzes hergestellt werden kann
- Abschließend wird die Feedback Passivierung eingeführt, mit deren Hilfe ein nicht-passives System in ein passives umgeformt werden kann

### Asymptotische Stabilität

Wir betrachten wieder das System

$$
\begin{aligned}
\dot{\underline{x}} &= \underline{f}(\underline{x},\underline{u}) \\
\underline{y} &= \underline{h}(\underline{x},\underline{u})
\end{aligned}
$$

mit $\underline{x} \in \mathbb{R}^n$, $\underline{u} \in \mathbb{R}^m$, $\underline{y} \in \mathbb{R}^q$ und $m=q$
Für das unaktuierte System ($\underline{u}=0$) gelte $\underline{f}(0,0)=0$ und $\underline{h}(0,0)=0$
Das System sei passiv mit einer stetig differenzierbaren, positiv definiten Speicherfunktion $V(\underline{x}(t))$
Die Ruhelage des freien Systems $\underline{x}=0$ ist damit stabil i.S.v.L.
Um nun asymptotische Stabilität dieser Ruhelage nachzuweisen, muss entweder gezeigt werden, dass $\dot{V}(\underline{x}(t))$ negativ definit ist oder es kann das Invarianzprinzip (vgl. 3.6) angewendet werden.
Dieser Nachweis ist möglich in Fällen, bei welchen $\dot{V}(\underline{x}(t))=0$ gilt, wenn $\underline{y}=\underline{0}$. Zur Anwendung des Invarianzprinzips muss dann gelten, dass
$$ \underline{y}(t) = \underline{0} \Rightarrow \underline{x}(t) = \underline{0} $$
für alle Lösungen von (4.20) mit $\underline{u}=0$ gilt. Das bedeutet, dass keine Lösung von $\dot{\underline{x}} = \underline{f}(\underline{x},\underline{0})$ in S = {x ∈ IRn| h(x, 0) = 0} bleiben kann außer der trivialen Lösung $\underline{x}(t)\equiv \underline{0}$. Die Aussage der Gleichung (4.21) kann mit der Eigenschaft der Beobachtbarkeit von LTI-Systemen verglichen werden.

> [!definition] Definition: Beobachtbarkeit
> Ein LTI-System wird vollständig **zustandsbeobachtbar** genannt, wenn jeder beliebige Anfangszustand $\underline{x}(t_0)$ aus der Kenntnis von $\underline{y}(t)$, $t_0 \leq t \leq t_e <\infty$ **eindeutig** bestimmt werden kann.

Für nichtlineare Systeme kann nun das Konzept der Null-Zustandsbeobachtbarkeit definiert werden.

> [!definition] Definition: Null-Zustandsbeobachtbarkeit
> Das System (4.19) - (4.20) heißt **null-zustandsbeobachtbar**, wenn keine Lösung von $\dot{\underline{x}} = \underline{f}(\underline{x},\underline{0})$ in S = {x ∈ IRn| h(x, 0) = 0} bleiben kann, außer der trivialen Lösung $\underline{x}(t)\equiv \underline{0}$.

> [!theorem] Satz: Passivität und asymptotische Stabilität
> Betrachtet wird das System (4.19) - (4.20). Der Ursprung von $\dot{\underline{x}} = \underline{f}(\underline{x},\underline{0})$ ist **asymptotisch** **stabil**, wenn das System
>
> 1.  streng zustandspassiv ist oder
> 2.  streng ausgangspassiv und null-zustandsbeobachtbar ist oder
> 3.  passiv und null-zustandsbeobachtbar ist mit einer stetig differenzierbaren, positiv definiten Speicherfunktion V(x(t)), für die V˙(x(t)) = 0 dann und nur dann gilt, wenn y = 0.
>
> Ist die Speicherfunktion zusätzlich **radial unbeschränkt**, dann ist das System **global asymptotisch stabil**

### Prinzip der passivitätsbasierten Regelung

> [!theorem] Satz
> Wenn das System (4.19) - (4.20)
>
> 1.  passiv mit einer **radial unbeschränkten**, **pdf** Speicherfunktion und
> 2.  null-zustandsbeobachtbar
>
> ist, dann kann der Ursprung $\underline{x}=\underline{0}$ global asymptotisch stabilisiert werden mit $\underline{u} = -\underline{\Phi}(\underline{y})$
> Dabei sei $\underline{\Phi}$ eine beliebige, lokal Lipschitz-stetige Funktion mit $\underline{\Phi}(\underline{0})=\underline{0}$ und $\underline{y}^\top \underline{\Phi}(\underline{y}) > 0$ für alle $\underline{y} \neq \underline{0}$.

Die Gültigkeit dieses Satzes kann nachgewiesen werden, indem man die Speicherfunktion $V(\underline{x})$ als Lyapunov-Kandidaten verwendet für das geschlossene System
$$ \dot{\underline{x}} =\underline{f}(\underline{x},-\underline{\Phi}(\underline{y})) $$
Die Ableitung von $V(\underline{x})$ ergibt
$$\dot{V}(\underline{x})=\frac{\partial V}{\partial \underline{x}}\underline{f}(\underline{x},-\underline{\Phi}(\underline{y})) \overset{\text{Passivität}}{\leq} -\underline{y}^\top \underline{\Phi}(\underline{y}) \overset{\text{Def.}}{\leq} 0$$
Folglich ist $\dot{V}$ **negativ definit** im Bezug auf $\underline{y}$ und mindestens **negativ semidefinit** im Bezug auf $\underline{x}$.

Zusätzlich gilt $\dot{V} = 0$ wegen der Definition von Φ(y) dann und nur dann, wenn y = 0. In Folge der Null-Zustandsbeobachtbarkeit gilt ferner für u(t) ≡ 0, also Φ(y) ≡ 0
$$\underline{y}(t) \equiv \underline{0} \Rightarrow \underline{x}(t) \equiv \underline{0}$$
womit, unter Anwendung des Invarianzprinzips (und des Korollars nach Krasovskii), der Ursprung global asymptotisch stabil i.S.v.L. ist, da S = {x ∈ IRn|V˙ (x) = 0} offensichtlich nur die Trajektorie x ≡ 0 enthält.

Das Grundprinzip dieses Ansatzes wird klar, wenn man die Speicherfunktion als Maß für die Energiemenge, die sich im System befindet, interpretiert. Ein passives System besitzt eine stabile Ruhelage im Ursprung. Um diese Ruhelage asymptotisch zu stabilisieren, muss lediglich eine Dämpfung ins System eingefügt werden, die dafür sorgt, dass Energie abgegeben (dissipiert) wird sobald x(t) nicht null ist. Die benötigte Dämpfung wird durch die Funktion $\underline{\Phi}$ erzeugt.

Bei der Auswahl von $\underline{\Phi}$ besteht sehr große Freiheit. So kann auch vorhandenen Stellgrößenbeschränkungen von u Rechnung getragen werden. Besteht zum Beispiel eine Beschränkung von u auf |ui| ≤ ki für 1 ≤ i ≤ p, kann $\underline{\Phi}$ gewählt werden zu
$$\Phi_i = k_i \;\text{sat}(y_i) \;\; \text{oder} \;\; \Phi_i = \frac{2k_i}{\pi}\arctan{y_i}$$

> [!example]- Example
> ![[Pasted image 20230918221431.png]]

---

# Feedback-Passivierung

> [!idea] Idea
>
> - Transformation eines nicht-passiven Systems in ein passives System durch geeignete Wahl der Rückführung.

Das kann beispielsweise durch besondere Wahl des Ausganges geschehen. Betrachtet wird hierzu ein System der Form

$$
\dot{\underline{x}} =\underline{f}(\underline{x})+\underline{G}(\underline{x})\underline{u}
$$

Angenommen, es existiere eine radial unbeschränkte, positiv definite, kontinuierlich differenzierbare Funktion $V$, die die Gleichung

$$
\frac{\partial V}{\partial \underline{x}}\underline{f}(\underline{x}) \leq 0, \forall \underline{x}
$$

erfüllt. Durch die Wahl von

$$
\underline{y}=\underline{h}(\underline{x})\overset{\text{def}}{=}\left[\frac{\partial V}{\partial \underline{x}}\underline{G}(\underline{x})\right]^\top
$$

erhält man dann ein passives System mit Eingang $\underline{u}$ und Ausgang $\underline{y}$. Erfüllt dieses auch die Bedingung der Null-Zustandsbeobachtbarkeit, kann ein global stabilisierendes Regelgesetz formuliert werden.

Im Beispiel aus dem vorhergehenden Abschnitt 4.4.2 wurde dies bereits intuitiv angewendet. Darin war G(x) = [0 1]⊤ und der Ausgang ergab sich zu y = x2. In der Praxis erlaubt jedoch nicht jedes System eine beliebige Wahl der Ausgänge.

Auch wenn das System eine freie Wahl der Ausgangsfunktion zulässt, ist die Anwendung dieser Methode auf Zustandsgleichungen beschränkt, deren Ursprung im ungeregelten Fall (u = 0) stabil ist. Durch die Verwendung einer Zustandsrückführung zur Erfüllung der Passivitätsbedingung kann die Anwendbarkeit auf eine größere Klasse von Systemen ausgeweitet werden.

Ausgegangen wird wieder von einem System der Form (4.22). Für den Fall, dass eine Zustandsrückführung
$$\underline{u} = \underline{\alpha}(\underline{x}) + \underline{\beta}(\underline{x})\underline{v}$$
und eine Ausgangsfunktion h(x) gefunden werden kann, mit der das System

$$
\begin{aligned}
\underline{\dot{x}} &= \underline{f}(\underline{x}) + \underline{G}(\underline{x})\underline{\alpha}(\underline{x})+\underline{G}(\underline{x})\underline{\beta}(\underline{x})\underline{v}
\\
\underline{y} &= \underline{h}(\underline{x})
\end{aligned}
$$

mit Eingang $\underline{v}$ und Ausgang $\underline{y}$ die Voraussetzungen des Satzes aus 4.4.2 erfüllt, kann dessen Ursprung mit $\underline{v}=-\Phi(\underline{y})$ global stabilisiert werden.

> [!example]- Example: Regelung eines Mehrgelenkroboters
> ![[Pasted image 20230918221619.png]]
> ![[Pasted image 20230918221657.png]]
