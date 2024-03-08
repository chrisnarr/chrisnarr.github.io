---
title: Input-Output Stability (IOS)
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  - stability
---

> [!idea] Idea

- Bisher zustandsraumbasierten Ansatz gewählt, um nichtlineare dynamische Systeme zu modellieren und haben das Hauptaugenmerk auf das Verhalten der Zustandstrajektorien gelegt
- Alternativer Ansatz zur Modellierung dynamischer Systeme ist die Analyse des Eingangs-/Ausgangsverhaltens
- In diesem Abschnitt führen wir Eingangs-/Ausgangs-Modelle ein und definieren die Eingangs-/Ausgangs- bzw. L Stabilität, d.h. wir verlangen ganz ähnlich wie bei der Input-to-State Stabilität, dass ein beschränkter Eingang zu einem beschränkten Ausgang führt
- Wieder haben wir als Anwendung die Robustheit im Hinterkopf: Liegt am Eingang eine kleine Störung an, welche Auswirkungen hat diese Störung auf den Ausgang? Idealerweise ist in diesem Fall auch der Ausgang beschränkt und klein
- Als weitere Anwendung präsentieren wir das Small-Gain Theorem, das uns hilft, Stabilität von verkoppelten Systemen zu untersuchen. Hier ist die Modellierung als Eingangs-/Ausgangssystem besonders vorteilhaft, wenn wir den Ausgang eines Subsystems als Eingang eines anderen Subsystems betrachten.

# $\mathcal{L}$-Stability

Wir betrachten ein nichtlineares System, dessen Eingangs-/Ausgangsverhalten durch
![[Pasted image 20230911134333.png]]
repräsentiert wird, wobei H eine Abbildung ist, die den Ausgang y(t) in Abhängigkeit von einem Eingang u(t) berechnet.![[Pasted image 20230911134340.png]]

Für den Eingang $\underline{u}$ gelte stückweise Stetigkeit und Beschränktheit der Norm, also

Die Norm ist dabei wie folgt definiert:![[Pasted image 20230911134349.png]]

Der Funktionenraum Lmp ist demnach der Raum der Funktionen, die in der p-Norm beschränkt sind. Der Index p in Lmp gibt den Typ der p-Norm an, während m die Dimension des Eingangs u(t) ist. Um die Notation nicht zu überlasten, werden wir das $m$ nur dann notieren, wenn es für das Verständnis unabdingbar ist. Wichtig ist, dass die Dimension des Eingangs im Funktionenraum Lmp nicht notwendigerweise die gleiche ist, wie die Dimension des Ausgangs im Funktionenraum Lqp . Wenn wir im Folgenden notieren u ∈ L, dann ist die Norm u(t) L eine beliebige p-Norm.

> [!example]- Example
> ![[Pasted image 20230911134417.png]]

Ein System mit der Eigenschaft, dass jeder beschränkte Eingang u(t) ∈ L einen beschränkten Ausgang y ∈ L generiert, wird im Folgenden als stabiles System definiert werden. Für instabile Systeme gibt es demnach ein Problem: Auch wenn der Eingang beschränkt ist, also u(t) ∈ L, ist der Ausgang unbeschränkt, also y ∈ L /.

Die Abbildung H kann also nicht als Abbildung H : L → L von einem beschränkten Raum in einen beschränkten Raum definiert werden. Abhilfe schafft die Definition des erweiterten Raums Le mit
![[Pasted image 20230911134442.png]]
wobei uτ die Trunkierung von u ist, definiert durch
![[Pasted image 20230911134457.png]]
Für endliche Zeiten \tau ist dann auch das Integral endlich.![[Pasted image 20230911134513.png]]
Eine Abbildung H : Le → Le wird als **kausal** bezeichnet, wenn der Wert des Ausgangs (H(u))(t) für beliebige Zeiten $t$ nur von Werten des Eingangs abhängt, die in der Vergangenheit liegen, also u(τ ) mit τ < t. Im Folgenden gehen wir immer von kausalen Abbildungen aus.

> [!definition] Definition: $\mathcal{L}$-Stability
> Eine Abbildung H : Le → Le ist $\mathcal{L}$**-stabil**, wenn es eine Funktion $\alpha$ der Klasse K gibt und eine Konstante $\beta >0$, so dass
> ![[Pasted image 20230911134734.png]]
> für alle Eingänge u ∈ Le und $\tau \in [0,\infty)$
> Die Abbildung ist **finite-gain** $\mathcal{L}$**-stabil**, wenn es eine Konstante $\gamma>0$ gibt und $\beta >0$, so dass
> ![[Pasted image 20230911134743.png]]
> für alle u ∈ Le und $\tau \in [0,\infty)$

- Ist Ungleichung (3.19) oder (3.20) erfüllt, dann führt ein beschränkter Eingang notwendigerweise auch zu einer Beschränkung des Ausgangs.
- Weiterhin gilt, dass sehr kleine Eingänge im Allgemeinen zu kleinen Ausgängen führen. Das ist durch die Klasse K-Funktion α bzw. die Verstärkung (in der englischen Literatur gain) γ gegeben.
- Für einige Systeme führt u = 0 nicht zu einem Ausgang y = 0. In diesem Fall ist der sogenannte **bias term $\beta$** relevant. Ein Ziel der robusten Regelung sollte es sein, durch Wahl des Reglers und dessen Parametrierung, $\beta = 0$ und $\gamma$ klein zu erreichen (siehe H∞-Regelung in der Vorlesung RS2).
- Während (3.19) einen nichtlinearen Zusammenhang erlaubt, ist für (3.20) nur ein linearer Zusammenhang zwischen der Norm des Eingangs und der Norm des Ausgangs erlaubt. Das ist natürlich insbesondere für lineare dynamische Systeme relevant. Für nichtlineare Systeme ist finite-gain Stabilität eine starke Aussage. Das nichtlineare System hat dadurch ein quasi lineares Eingangs-Ausgangsverhalten.

> [!example]- Example
> ![[Pasted image 20230911134843.png]]

> [!example]- Example
> ![[Pasted image 20230911134858.png]]

# $\mathcal{L}$-Stabilität, Zustandsstabilität und Input-to-State Stabilität

Als wir die Stabilität im Zustandsraum untersucht haben, ist insbesondere Lyapunovs direkte Methode zum Einsatz gekommen. Wir untersuchen dafür unter anderem, ob ein Kandidat für eine Lyapunov-Funktion die Abstiegseigenschaft erfüllt. In diesem Abschnitt werden wir einerseits Lyapunov-Theoreme fur Eingangs-/Ausgangs-Stabilität angeben.
Andererseits werden wir auch Einblick gewinnen, wie die verschiedenen Stabilitätskonzepte (Zustandsstabilität, Input-to-State Stabilität und Eingangs-/Ausgangs-Stabilität) verknüpft sind.
Wir betrachten also erneut ein System im Zustandsraum mit Zustandsdifferentialgleichung (3.21) und Ausgangsgleichung (3.22):

$$
\underline{\dot{x}}=\underline{f}(\underline{x},\underline{u},t)
$$

$$
\underline{y}=\underline{h}(\underline{x},\underline{u},t)
$$

Es gilt $\underline{x}\in\mathbb{R}^n,\underline{u}\in\mathbb{R}^m$ und die Abbildung $\underline{f}$ sei stetig in $t$ und zumindest lokal Lipschitz-stetig in $(\underline{x},\underline{u})$.
Unser erstes Ziel sei es, ein hinreichendes Stabilitätskriterium für L Stabilität zu erhalten, wenn die Stabilitätseigenschaften der Ruhelage x = 0 des autonomen Systems x˙ = f(x, 0, t) bekannt sind. Bei der Zustandsstabilität haben wir unterschieden zwischen lokaler und globaler Stabilität.
Um diese Unterscheidung auch für L Stabilität machen zu können, definieren wir die sogenannte small-signal L Stabilität.

> [!definition] Definition: Small-signal $\mathcal{L}$-Stability
> Eine Abbildung $H:\mathcal{L}_e \rightarrow \mathcal{L}_e$ ist **small-signal $\mathcal{L}$-stabil**, wenn es eine Konstante $r>0$ gibt, sodass die Ungleichung
>
> $$
> \|(H(\underline{u}))_\tau\|_\mathcal{L}\leq \alpha(\|\underline{u}_\tau\|_\mathcal{L})+\beta
> $$
>
> für alle $\underline{u}\in\mathcal{L}_e$ mit $\underset{0\leq t \leq \tau}{\sup}\|\underline{u}(t)\| \leq r$ erfüllt ist.
> Analog wird small-signal finite-gain $\mathcal{L}$ Stabilität mit Ungleichung (3.20) definiert.

Jetzt sind wir bereit, einen Satz anzugeben, der aus der lokalen, exponentiellen Stabilität einer Ruhelage Ruckschlüsse auf die Stabilität des Eingangs-Ausgangsverhaltens erlaubt.
Aus Abschnitt 3.11 über Input-to-State Stabilität erinnern wir uns, dass exponentielle Stabilität eine so starke Stabilitätseigenschaft ist, dass die Robustheit der Stabilität unter Störungen gezeigt werden kann, also ein stabiles Eingangs-/Zustandsverhalten.
Das nachfolgende Theorem bezieht sich auf die Eingangs-/Ausgangs-Stabilität und setzt ebenfalls exponentielle Stabilität der Ruhelage voraus. Wir starten mit der lokalen Version und erweitern dann auf ein äquivalentes globales Resultat:

# Small-Gain Theorem

- [[Small-Gain Theorem]]

> [!theorem] Theorem: Small-signal finite-gain $\mathcal{L}$ Stabilität und exponentielle Stabilität
> Wir betrachten (3.21)-(3.22) mit $r > 0$ und $ru > 0$ so dass $x \leq r$ und $u \leq ru$.
> Wir setzen folgendes voraus:
>
> - $\underline{x} = 0$ ist eine lokal exponentiell stabile Ruhelage von $\underline{\dot{x}}=\underline{f}(\underline{x},\underline{0},t)$ und es gibt demnach eine Lyapunov Funktion $V(\underline{x},t)$ mit den folgenden Eigenschaften
>   $$
>   c_1\|\underline{x}\|^2 \leq V(\underline{x},t) \leq c_2\|\underline{x}\|^2
>   $$
>   $$
>   \frac{\partial V}{\partial t} + \frac{\partial V}{\partial \underline{x}} \underline{f}(\underline{x},\underline{0},t)  \leq -c_3\|\underline{x}\|^2
>   $$
>   $$
>   \left\|\frac{\partial V}{\partial\underline{x}}\right\| \leq c_4\|\underline{x}\|
>   $$
>   für $\underline{x}$ hinreichend klein und positive Konstanten $c_1$ bis $c_4$
> - Die Abbildungen $\underline{f}$ und $\underline{h}$ erfüllen die Ungleichungen
>   $$
>   \| \underline{f}(\underline{x},\underline{u},t) - \underline{f}(\underline{x},\underline{0},t)\| \leq L\|\underline{u}\|
>   $$
>   $$
>   \|\underline{h}(\underline{x},\underline{u},t)\| \leq \eta_1\|\underline{x}\| + \eta_2\|\underline{u}\|
>   $$
>   für alle $(\underline{x}, \underline{u})$ hinreichend klein mit den Konstanten $L>0$, $\eta_1 >0$ und $\eta_2 > 0$
>
> Dann ist für jedes $\underline{x}_0$ mit $\underline{x}_0 \leq rp \frac{c_1}{c_2}$ das System (3.21)-(3.22) small-signal finite-gain $\mathcal{L}_p$ stabil für beliebige $p \in [1,\infty]$.

Dieser Satz gibt uns nur eine lokale Version des Zusammenhangs zwischen exponentieller Stabilität und L Stabilität. Es kann auch die globale Version angegeben werden: Wenn der Ursprung global exponentiell stabil ist und alle Annahmen global erfüllt sind, dann ist das System (3.21)-(3.22) finite-gain Lp stabil für alle p ∈ [1, ∞]. Der Beweis des Satzes ist konstruktiv und liefert unter anderem eine Formel zur Berechnung der Verstärkung γ aus (3.20) als

$$
\gamma = \eta_2 + \frac{\eta_1 c_2 c_4 L}{c_1 c_3}
$$

Der Satz erlaubt es also für eine exponentiell stabile Ruhelage des autonomen System s unter relativ milden zusätzlichen Bedingungen an f und h die L Stabilität zu zeigen. Während wir (3.26) bereits am Anfang des Abschnittes vorausgesetzt hatten, kommt hier nur eine Bedingung an die Ausgangsgleichung (3.27) hinzu und wir fordern Lipschitz-Stetigkeit der Ausgangsgleichung. Allerdings ist exponentielle Stabilität eine sehr starke Annahme fur die Stabilität der Ruhelage. Oft können wir nur zeigen, dass eine Ruhelage asymptotisch stabil ist. Der folgende Satz kann dann angewendet werden:

> [!theorem] Theorem: Small-signal $\mathcal{L}$ Stabilität und asymptotische Stabilität
> Wir betrachten (3.21)-(3.22) mit $r > 0$ und $ru > 0$ so dass $x \leq r$ und $u \leq ru$.
> Wir setzen folgendes voraus:
>
> - $\underline{x} = 0$ ist eine lokal uniform asymptotisch stabile Ruhelage von $\underline{\dot{x}}=\underline{f}(\underline{x},\underline{0},t)$ und es gibt demnach eine Lyapunov Funktion $V(\underline{x},t)$ mit den folgenden Eigenschaften
>   $$
>   \alpha_1(\|\underline{x}\|) \leq V(\underline{x},t) \leq \alpha_2(\|\underline{x}\|)
>   $$
>   $$
>   \frac{\partial V}{\partial t} + \frac{\partial V}{\partial \underline{x}} \underline{f}(\underline{x},\underline{0},t)  \leq -\alpha_3(\|\underline{x}\|)
>   $$
>   $$
>   \left\|\frac{\partial V}{\partial\underline{x}}\right\| \leq \alpha_4(\|\underline{x}\|)
>   $$
>   für $\underline{x}$ hinreichend klein und Funktionen $\alpha_1$ bis $\alpha_4$ der Klasse $\mathcal{K}$
> - Die Funktionen $\underline{f}$ und $\underline{h}$ erfüllen
>   $$
>   \| \underline{f}(\underline{x},\underline{u},t) - \underline{f}(\underline{x},\underline{0},t)\| \leq \alpha_5(\|\underline{u}\|)
>   $$
>   $$
>   \|\underline{h}(\underline{x},\underline{u},t)\| \leq \alpha_6(\|\underline{x}\|) + \alpha_7(\|\underline{u}\|) + \eta
>   $$
>   für alle $(\underline{x}, \underline{u})$ hinreichend klein, für Funktionen $\alpha_5$ bis $\alpha_7$ der Klasse $\mathcal{K}$ und einer Konstanten $\eta > 0$.
>
> Dann ist für jedes $\underline{x}_0$ mit $\|\underline{x}_0\| \leq \alpha_2^{-1}(\alpha_1(r))$ das System (3.21)-(3.22) small-signal $\mathcal{L}_\infty$ stabil.

In diesem Fall bekommen wir also fur abgeschwächte Voraussetzungen (es wird nur asymptotische Stabilität verlangt), auch eine abgeschwächte Schlussfolgerung: Es kann keine finite-gain Stabilität gezeigt werden und wir haben Stabilität nur in der L∞-Norm und nicht für beliebige p-Normen.
Auch ist es schwieriger ein globales Resultat zu bekommen. In diesem Fall kann allerdings die Input-to-State Stabilität helfen, diese Lucke zu schließen:

> [!theorem] Theorem: $\mathcal{L}$ Stabilität und Input-to-State Stabilität
> Annahmen:
>
> - System ist nach $(3.21)$ Input-to-State stabil
> - Funktion $\underline{h}$ erfüllt:
>   $$
>   \|\underline{h}(\underline{x},\underline{u},t)\| \leq
>   \alpha_1(\|\underline{x}\|)+\alpha_2(\|\underline{u}\|)+\eta
>   \;\;\;\;\; \forall (\underline{x},\underline{u})
>   $$
>   mit den $\mathcal{K}$-Funktionen $\alpha_1,\alpha_2$ und einer Konstanten $\eta>0$
>
> Dann ist das System für alle $\underline{x}_0$ $\mathcal{L}_\infty$ stabil.

Im vorhergehenden Theorem ist naturlich Voraussetzung, dass wir zeigen können, dass das System Input-to-State stabil ist. Wenn wir uns erinnern, dass in Abschnitt 3.11 Input-to-State Stabilität gezeigt werden konnte fur Systeme mit exponentiell stabilen Ruhelagen, dann haben wir hier unter Umständen auch keinen neuen Weg L Stabilität zu zeigen. Ist es aber möglich, ISS über einen Lyapunov Ansatz zu zeigen, dann muss lediglich noch die Ausgangsgleichung untersucht werden und es muss keine exponentielle Stabilität der Ruhelage vorliegen. Im Idealfall gibt es mehrere Möglichkeiten den Ausgang zu definieren und die Anforderung an die Stabilität erlaubt es, einen passenden Ausgang auszuwählen.

> [!example]- Example
> ![[Pasted image 20231020163151.png]]

Abschließend diskutieren wir noch die Frage, ob die Anforderung der Lipschitz-Stetigkeit restriktiv ist. Zum Beispiel ist die Funktion f(x, u) = −3x + (1 + 2x2)u, die wir am Anfang des Abschnitts 3.11 zur Input-to-State Stabilität diskutiert haben, nicht global Lipschitz-stetig. Auch konnten wir Input-to-State Stabilit¨at fur das dynamische System x˙ = −3x+(1+2x2)u nicht zeigen. Allerdings ist auch die Funktion f(x, u) = −x−2x3+(1+x2)u nicht Lipschitz-stetig. Trotzdem kann man in diesem Fall Input-to-State Stabilit¨at des Systems x˙ = −x − 2x3 + (1 + x2)u zeigen.
