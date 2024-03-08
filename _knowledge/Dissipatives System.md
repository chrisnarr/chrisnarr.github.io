---
title: Dissipativity
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

- Eigenschaften [[Dissipatives System|Dissipativität]] und [[Passives System|Passivität]] werden für Systemmodelle bezüglich ihrer **Ein- und Ausgangsgrößen** und einer abstrakten **Speicherfunktion** (ähnlich einer Lyapunov-Funktion) bestimmt

![[Pasted image 20230918215144.png]]

> [!definition] Definition: Dissipativität (Integralgleichung)
> Das System $S$ vom Typ (1.2) heißt dissipativ bezüglich der Versorgungsrate $s$, wenn eine **positiv semidefinite** Funktion $V(\underline{x})$ existiert, sodass die integrale Dissipativitätsungleichung
>
> $$
> \int_0^t s(\underline{u},\underline{y})d\tau + V(\underline{x}(0)) \geq V(\underline{x}(t)) , \;\;\;\;\;\; \forall t\geq0
> $$
>
> für alle Anfangswerte $\underline{x}_0$ und alle Eingangsgrößen $\underline{u}(t)$ **erfüllt** ist.

> [!definition] Definition: Dissipativität (Differentialgleichung)
> Das System $S$ vom Typ (1.2) heißt dissipativ bezüglich der Versorgungsrate $s$, wenn eine bezüglich $t$ stetig differenzierbare, positiv semidefinite Funktion $V(\underline{x})$ existiert, sodass die differentielle Dissipativitätsungleichung
>
> $$
> s(\underline{u},\underline{y}) \geq \dot{V}(\underline{x}(t)), \;\;\;\;\;\; \forall t\geq 0
> $$
>
> für alle Anfangswerte $\underline{x}_0$ und alle Eingangsgrößen $\underline{u}(t)$ erfüllt ist.

**Anmerkung:** Dies heißt, dass in einem dissipativen System die Summe der zugeführten Energie und der anfänglich gespeicherten Energie größer oder gleich der im System gespeicherten Energie ist. Entsprechend (4.1) ist das System $S$ also dissipativ genau dann, wenn die generalisierte dissipierte Leistung größer oder gleich null ist. Es handelt sich bei dissipativen Systemen physikalisch anschaulich um Systeme, die nur bei externer Energiezufuhr die in ihnen gespeicherte Energie erhöhen können. Falls in (4.4) das Gleichheitszeichen gilt und die generalisierte dissipierte Leistung gleich null ist, nennt man das System $S$ **verlustlos**.

---

> [!definition] Definition: Verallgemeinerte Energiebilanz und Versorgungsrate eines Systems
> Gegeben sei ein System $S$ vom Typ (1.2)
>
> $$
> \begin{aligned}
> \underline{\dot{x}}=\underline{f}(\underline{x},\underline{u}) \\
> \underline{y} =\underline{h}(\underline{x},\underline{u})
> \end{aligned}
> $$
>
> mit lokal Lipschitz-kontinuierlichen Funktionen $\underline{f}:\mathbb{R}^n \times \mathbb{R}^m \rightarrow \mathbb{R}^n$ und $\underline{h}:\mathbb{R}^n \times \mathbb{R}^m \rightarrow \mathbb{R}^q$ >**Verallgemeinerte Energiebilanz des Systems:**
> Energiezufluss + Anfangsenergie = Energieabfluss + gespeicherte Energie
> ![[Pasted image 20230918215348.png]] >$s(\underline{u},\underline{y})$: Versorgungsrate
>
> **Versorgungsrate $s(\underline{u},\underline{y})$:**
> Reelle Funktion, welche für alle Anfangswerte $\underline{x}_0=\underline{x}(0)$ und alle Eingangsgrößen $\underline{u}(t)$ die folgende Bedingung erfüllen muss
> ![[Pasted image 20230918215427.png]]

- In der verallgemeinerten Energiebilanz (4.1) werden die anfangs gespeicherte Energie und die zum Zeitpunkt $t$ gespeicherte Energie des Systems mit Hilfe einer abstrakten Speicherfunktion $V(\underline{x}(t))$ dargestellt, die vom Zustand des Systems abhängt und sich mit der Zeit ändert
- Die dissipierte Energie dagegen ist lediglich eine Funktion der Zeit $t$ und hängt nicht vom Systemzustand ab. Es handelt sich um Energieverluste des Systems, die nicht im Modell berücksichtigt wurden und durch Austausch mit der Umgebung zerstreut (”dissipiert“) werden.
- Der Netto Energiezufluss des Systems wird mittels einer Versorgungsrate (4.2) beschrieben
- Die Bedingung (4.2) besagt, dass die zugeführte Energie nie über alle Grenzen steigt
- Es ist zu beachten, dass es sich bei dem Netto-Energiezufluss, den gespeicherten Energien und der dissipierten Energie in (4.1) um systemtheoretisch verallgemeinerte (=generalisierte) Größen handelt, die nur in speziellen Fällen in konkrete physikalische Größen wie Energien oder Leistung übergehen. So ergibt sich eine physikalische Interpretation der abstrakten Energiebilanz (4.1), wenn die Versorgungsrate des Systems als ein Skalarprodukt zwischen Potential- und Flussgrößen gebildet wird (z. B. Spannung und Strom oder Kraft und Geschwindigkeit). In diesem Fall entspricht die Versorgungsrate einer Momentanleistung

  $$
  P_{in}(t)=\underline{y}^\top(t)\underline{u}(t)
  $$

  und das zeitliche Integral dieser Momentanleistung

  $$
  \int_0^t P_{in}(\tau)d\tau
  $$ einer in das System geflossenen Energie.
  $$

- Ist beispielsweise $u$ die elektrische Spannung und $y$ der elektrische Strom, ergibt sich als Versorgungsrate $s(u,y)=uy$ die elektrische Leistung. Im Falle eines mechanischen Systems, dessen Geschwindigkeit mittels der Stellgröße Kraft geregelt wird, ergibt sich als Versorgungsrate die mechanische Leistung. Während die Versorgungsrate $s$ eine generalisierte Leistung darstellt, repräsentiert $g(t)$ eine generalisierte dissipierte Leistung. Im anschaulichen Sonderfall steht $g(t)$ für die physikalisch dissipierte Leistung des Systems, d. h. eine Leistung, die in andere nicht betrachtete Energieformen (d. h. nicht modellierte Zustandsgrößen) zerstreut wird
- Bei einem mechanischen System könnte dies z. B. die durch Reibung erzeugte thermische Energie sein. Die Speicherfunktion V(x(t)) bezeichnet im physikalisch interpretierbaren Fall die Energiemenge, die sich in den modellierten Energiespeichern des Systems befindet.
- Je nachdem, ob die Leistung des Systems über einen Zeitraum oder nur zu einem bestimmten Zeitpunkt betrachtet wird, unterscheidet man zwischen Definitionen basierend auf integralen oder differentiellen Ungleichungen.
