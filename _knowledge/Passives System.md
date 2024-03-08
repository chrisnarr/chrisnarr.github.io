---
title: Passitivity
draft: false
tags:
  -
---

- Passivität ist ein Spezialfall der [[Dissipatives System|Dissipativität]]

> [!definition] Definition: Passivität (Integralgleichung)
> Das System $S$ vom Typ (1.2) mit $m=q$ (äquivalente Anzahl von Ein- und Ausgangsgrößen) nennt man **passiv**, wenn es bezüglich der speziellen Versorgungsrate
>
> $$
> s(\underline{u},\underline{y})=\underline{y}^\top \underline{u}
> $$
>
> dissipativ ist. D.h. es existiert eine **positiv semidefinite** Funktion $V(\underline{x})$, sodass die integrale Passivitätsungleichung
>
> $$
> \int_0^t \underline{y}^\top\underline{u} \;d\tau+ V(\underline{x}(0)) \geq V(\underline{x}(t)) , \;\;\;\;\;\; \forall t\geq0
> $$
>
> für alle Anfangswerte $\underline{x}_0$ und alle Eingangsgrößen $\underline{u}(t)$ erfüllt ist.

> [!definition] Definition: Passivität (Differentialgleichung)
> Das System $S$ vom Typ (1.2) mit $m=q$ heißt **passiv** bezüglich der Versorgungsrate $s=\underline{y}^\top\underline{u}$, wenn eine skalare Funktion $V(\underline{x})$ existiert, die **positiv semidefinit** und bezüglich $t$ **stetig differenzierbar** ist, sodass die differentielle Passivitätsungleichung
>
> $$
> \underline{y}^\top\underline{u} \geq \dot{V}(\underline{x}(t)) , \;\;\;\;\;\; \forall t\geq0
> $$
>
> für alle Anfangswerte $\underline{x}_0$ und alle Eingangsgrößen $\underline{u}(t)$ erfüllt ist.

> [!definition] Definition: Strenge Zustandspassivität
> Das System $S$ vom Typ (1.2) mit $m=q$ heißt **streng zustandspassiv** bezüglich der Versorgungsrate $s=\underline{y}^\top\underline{u}$, wenn eine skalare Funktion $V(\underline{x})$, die positiv semidefinit und bezüglich $t$ stetig differenzierbar ist, und eine weitere skalare, **positiv definite** Funktion $\Psi(\underline{x})$ existieren, sodass die differentielle Passivitätsungleichung
>
> $$
> \underline{y}^\top\underline{u} \geq \dot{V}(\underline{x}(t)) +\Psi(\underline{x}) , \;\;\;\;\;\; \forall t\geq0
> $$
>
> für alle Anfangswerte $\underline{x}_0$ und alle Eingangsgrößen $\underline{u}(t)$ erfüllt ist.

> [!definition] Definition: Strenge Ausgangspassivität
> Das System $S$ vom Typ (1.2) mit $m=q$ heißt **streng ausgangspassiv** bezüglich der Versorgungsrate $s=\underline{y}^\top\underline{u}$, wenn eine skalare Funktion $V(\underline{x})$, die positiv semidefinit und bezüglich $t$ stetig differenzierbar ist, und eine weitere vektorielle Funktion $\underline{\rho}(\underline{y})$ mit positiv definitem $\underline{y}^\top \underline{\rho}(\underline{y})$ existieren, sodass die differentielle Passivitätsungleichung
>
> $$
> \underline{y}^\top\underline{u} \geq \dot{V}(\underline{x}(t)) + \underline{y}^\top\underline{\rho}(\underline{y}) , \;\;\;\;\;\; \forall t\geq0
> $$
>
> für alle Anfangswerte $\underline{x}_0$ und alle Eingangsgrößen $\underline{u}(t)$ erfüllt ist.

Das System $S$ heißt…

- … **streng passiv**, wenn die generalisierte dissipierte Leistung $g(t)$ bis auf den Wert an der Stelle $x=0$ **größer null** ist
- … **verlustlos**, wenn sie gleich null ist

# Verschaltung passiver Systeme

> [!theorem] Satz: Passivität von Systemen in Parallelschaltung
> Zwei passive Systeme in Parallelschaltung ergeben ein **passives** Gesamtsystem.

> [!theorem] Satz: Passivität von Systemen in Rückkopplungsverschaltung
> Zwei gegeneinander rückgekoppelte passive Systeme ergeben ein **passives** Gesamtsystem.

**Anmerkung:** Bei paralleler Verschaltung und Rückkopplungsverschaltung zweier passiver Systeme ergibt sich der Netto-Energiezufluss des Gesamtsystems aus der Summe der Netto-Energiezuflusse der Teilsysteme

# Passivität und Stabilitätseigenschaften

> [!idea] Idee
> Wenn ein System fortlaufend Leistung dissipiert, nähert sich dieses System einer Ruhelage, i.e. es ist **asymptotisch stabil**.

### Passivität und Stabilität i.S.v.L.

> [!theorem] Satz: Passivität und Lyapunov-Stabilität
> Sei das System (1.2) **passiv** mit einer **stetig differenzierbaren, positiv definiten** Speicherfunktion $V(\underline{x}(t))$. Dann ist die Ruhelage des freien Systems $\underline{x}=0$ **stabil i.S.v.L.**

**Anmerkung:** Dies folgt unmittelbar aus der differentiellen Passivitätsungleichung (4.8) mit $\underline{u}=0$, denn in diesem Fall muss $\dot{V}(\underline{x}(t))$ negativ semidefinit sein.

**Anmerkung:** Es sei darauf hingewiesen, dass im Gegensatz zur Stabilität i.S.v.L. die Passivität auch die Eingangsgröße des Systems berücksichtigt.

> [!example]- Example: Aktuiertes Feder-Masse-Dämpfer System
>
> - Mechanisches System, welches je nach Wahl der Parameter passiv oder nicht passiv ist
>   ![[Pasted image 20230918220621.png]]
>   ![[Pasted image 20230918220639.png]]

> [!example]- Example: Elektrische RLC-Schaltung
> ![[Pasted image 20230918220722.png]]
> ![[Pasted image 20230918220736.png]]
