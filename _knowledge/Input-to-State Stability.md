---
title: Input-to-State Stability (ISS)
draft: false
tags:
  - stability
---

> [!idea] Idea
>
> - Wenn der Eingang beschränkt ist, ist auch der Ausgang beschränkt

![[Continuous Nonlinear Time-Variant System]]

- System (3.15)
- Funktion $\underline{f}$ sei stetig in $t$ und vorläufig zumindest lokal Lipschitz-stetig in $\underline{x}$ und $\underline{u}$
- Eingang $\underline{u}(t)$ sei stückweise stetige, beschränkte Funktion der Zeit $t$, es gilt also $\sup_{t_0\leq\tau\leq t}\|\underline{u}(\tau)\|<\infty$

- Nehmen wir an, für $\underline{u}=\underline{0}$ hat das System $\underline{\dot{x}}=\underline{f}(\underline{x},\underline{0},t)$ **starke** Stabilitätseigenschaften (globale, uniform asymptotisch stabile Ruhelage im Ursprung $\underline{x}=\underline{0}$)
- Was ist die Schlussfolgerungen für Stabilität der Ruhelage unter der Wirkung eines beschränkten Eingangs $\underline{u}$?
  - **Ideal:** Stabilität der Ruhelage würde zumindest insofern erhalten bleiben, dass die Zustandstrajektorie in der Nähe der Ruhelage verbleibt (Input-to-State Stabilität)
  - **Allerdings:** möglich, dass ein Eingang eine ursprünglich stabile Ruhelage destabilisiert (siehe Beispiel)

> [!example]- Example
> ![[Pasted image 20230911132821.png]]

> [!definition] Definition: Globale Stabilität i.S.v.L. mit Vergleichsfunktion
> Die Ruhelage $\underline{x}=\underline{0}$ eines zeitvarianten Systems ist **global uniform asymptotisch stabil**, wenn es eine $\mathcal{KL}$-Funktion $\beta$ gibt, so dass gilt
>
> $$
> \|\underline{x}(t)\| \leq \beta(\|\underline{x}(t_0)\|,t-t_0)
> $$
>
> für alle $t\geq t_0$ und für jeden Anfangszustand $\underline{x}(t_0)$

**Anmerkung:** Ähnliche Formulierungen können auch für **uniforme lokale** Stabilität oder **uniforme lokale asymptotische** Stabilität angegeben werden.

- Stabilität i.S.v.L. über Vergleichsfunktionen ist äquivalent zur ε − δ Definition der Stabilität:
  - Für jeden festen Anfangswert x(t0) ist die Zustandstrajektorie beschränkt durch eine mit der Zeit monoton fallende Funktion
  - Das heißt, es ist zwar möglich, dass die Zustandstrajektorie selber nicht monoton fallend ist (man denke an einen Strudel), allerdings gilt durch die Beschränkung, dass sich die Zustandstrajektorie für große Zeiten der Ruhelage annähern muss

> [!example]- Example
> ![[Pasted image 20230911133343.png]]

> [!definition] Definition: Input-to-State Stabilität (ISS)
> Das System (3.15) ist **Input-to-State stabil (ISS)** wenn es eine $\mathcal{KL}$-Funktion $\beta$ und eine $\mathcal{K}$-Funktion $\gamma$ gibt, so dass es für jeden Anfangszustand $\underline{x}(t_0)$ und für jeden beschränkten Eingang $\underline{u}(t)$ eine Lösung $\underline{x}(t)$ für $t \geq t_0$ gibt, die erfüllt, dass
>
> $$
> \|\underline{x}(t)\| \leq \beta(\|\underline{x}(t_0)\|,t-t_0) + \gamma \left(\sup_{t_0\leq\tau\leq t}\|\underline{u}(\tau)\|\right)
> $$

- Erster Summand der rechten Seite aus der $\mathcal{KL}$-Definition der Stabilität bekannt
- Für $\underline{u}(t)=\underline{0}$ liefert Ungleichung bekanntes Stabilitätsresultat und der Ursprung des autonomen Systems $\underline{\dot{x}}=\underline{f}(\underline{x},\underline{0},t)$ ist **global uniform asymptotisch stabil**
- Betrachten wir nun $\underline{u}(t)\neq\underline{0}$ und große Zeiten $t$ für die der erste Summand der rechten Seite $\beta(\|\underline{x}(t_0)\|,t-t_0)$ sehr klein ist bzw. gegen Null konvergiert
- In diesem Fall ist der Zustand beschränkt durch $\gamma \left(\sup_{t_0\leq\tau\leq t}\|\underline{u}(\tau)\|\right)$
- Definition garantiert, dass für einen **beschränkten** Eingang $\underline{u}(t)$ auch der Zustand $\underline{x}(t)$ **beschränkt** ist

> [!definition] Definition: Methode von Lyapunov für Input-to-State Stabilität
> Sei $V$ eine stetig differenzierbare Funktion, so dass
>
> $$
> \alpha_1(\|\underline{x}\|) \leq V(\underline{x},t) \leq \alpha_2(\|\underline{x}\|)
> $$
>
> $$
> \dot{V}(\underline{x},t) = \frac{\partial V}{\partial t} + \frac{\partial V}{\partial \underline{x}} \underline{f}(\underline{x},\underline{u},t) \leq -W_3(\underline{x})
> $$
>
> $\forall \|\underline{x}\| \geq \rho(\|\underline{u}\|) > 0, \;\;\; \forall(\underline{x},\underline{u},t)$ >$\alpha_1$,$\alpha_2$: $\mathcal{K}_\infty$-Funktionen $\rho$: $\mathcal{K}$-Funktion $W_3(\underline{x})$: stetige, global pdf Funktion
> Dann ist das System (3.15) **Input-to-State stabil** mit:
>
> $$
> \gamma=\alpha_1^{-1} \circ\alpha_2\circ\rho
> $$

> [!definition] Definition: Verkettung/Verknüpfung von Funktionen
> Wir definieren $S_1$, $S_2$ und $S_3$ als beliebige Mengen und wir definieren Funktionen $f_1:S_1\rightarrow S_2$ und $f_2:S_2\rightarrow S_3$ auf diesen Mengen.
> Die Funktion $f_2\circ f_1: S_1 \rightarrow S_3$, die durch $(f_2\circ f_1)(x)=f_2(f_1(x))$ definiert ist, ist die Verkettung (oder Verknüpfung) von $f_1$ und $f_2$.

- Vergleicht man dies mit der direkten Methode für zeitvariante Systeme aus Abschnitt 3.4.2 sieht man, dass wir jetzt eine weniger restriktive Bedingung an den Abstieg der Lyapunov-Funktion stellen
- Während (3.8) fordert, dass V <˙ 0 für alle x 6= 0, fordert unsere neue Formulierung nur, dass die Lyapunov-Funktion für eine Teilmenge des gesamten Zustandsraums x≥ ρ(u) fällt
- Nur wenn x groß ist, ist der Abstieg der Lyapunov-Funktion gefordert und der Zustand x kann eine Umgebung der Ruhelage erreichen
- In dieser Umgebung ist dann der Abstieg der Lyapunov Funktion nicht mehr gefordert und die Ruhelage selbst wird somit nicht erreicht
- Diese Bedingung realisiert, dass bei Vorhandensein eines Systemeingangs die Ruhelage nicht erreicht werden kann, weil ja das System immerzu angeregt wird
- Allerdings ist der Eingang beschränkt, so dass für Zustände, die weit entfernt von der Ruhelage sind, der Eingang wenig Auswirkung auf die Systemtrajektorie hat und die asymptotische Stabilität das Systemverhalten dominiert

> [!example]- Example
> ![[Pasted image 20230911134013.png]]
> ![[Pasted image 20230911134023.png]]

- Wir mussten feststellen, dass sogar starke Stabilitätsaussagen, wie globale asymptotische Stabilität des Ursprungs eines dynamischen Systems ohne Eingang, noch keine Aussage über die Robustheit dieser Stabilität gegenüber Störungen erlauben
- Erst zusätzliche Analyse der Input-to-State Stabilität gibt Garantie, dass kleine beschränkte Störungen auch zu beschränkten Zustandstrajektorien führen
- Wir konnten sehen, dass aus Input-to-State Stabilität trivialerweise folgt, dass die Ruhelage des ungestörten Systems global asymptotisch stabil ist
- Nächster Schritt: untersuchen unter welchen Bedingungen aus der Stabilität der Ruhelage des ungestörten Systems auch eine Robustheit der Stabilität gegenüber Störungen im Sinne der Input-to-State Stabilität ableitbar ist
- In der RS1 Vorlesung wurde unter Bedingungen an die Steuerbarkeit und Beobachtbarkeit gezeigt, dass für lineare Systeme Zustandsstabilität und BIBO-Stabilität äquivalent sind. Ein ähnliches Resultat kann auch für Zustandsstabilität und Input-to-State Stabilität linearer Systeme gezeigt werden.
- Bei nichtlinearen Dynamiken dagegen ist diese Äquivalenz natürlich allgemein nicht gegeben.
- Jedoch wird hier klar, welche besondere Rolle die exponentielle Stabilität für die Robustheit spielt
- Hat ein nichtlineares System eine exponentiell stabile Ruhelage, so kann unter milden zusätzlichen Voraussetzungen gezeigt werden, dass diese Stabilität robust gegenüber Störungen ist

> [!definition] Definition: Input-to-State Stabilität und exponentielle Stabilität
>
> 1.  Sei Funktion $\underline{f}$ stetig differenzierbar und uniform global Lipschitz-stetig in $\underline{x}$ und $\underline{u}$
>
> Wenn das ungestörte System $\underline{\dot{x}}=\underline{f}(\underline{x},\underline{0},t)$ eine **global exponentiell stabile** Ruhelage $\underline{x}=\underline{0}$ aufweist, dann ist das System $\underline{\dot{x}}=\underline{f}(\underline{x},\underline{u},t)$ **Input-to-State stabil**.
