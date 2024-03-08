---
title: Backstepping
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

> [!idea] Idea
>
> - Lyapunov-basiertes, **rekursives** Verfahren
> - Nur anwendbar auf ein [[System in strikter Rückkopplungsform]]
> - Zustandsgrößen $x_i$ werden rekursiv in neue Koordinaten $z_i$ transformiert

> [!steps] Steps
>
> 1.  Ausgehend von Teilsystem erster Ordnung wird in jedem Entwurfsschritt der Systemzustand um eine Zustandsvariable erweitert
> 2.  Neue Zustandsvariable resultiert aus einer **nichtlinearen Koordinatentransformation**
>     - so ausgelegt, dass für neues Teilsystem Stabilität mit Hilfe einer **partiellen Lyapunov-Funktion** nachgewiesen werden kann

**Integrator Backstepping:**

- Transformiertes System weist **lineare** Dynamik in den Koordinaten $z$ auf
- Kann durch eine **Integratorkette mit Rückführungen** beschrieben werden
- Bei Verzicht auf eine lineare Systemdynamik ist es oft möglich, durch geschickte Wahl der Pseudo-Stellgrößen im System vorhandene nützliche Nichtlinearitäten zur Stabilisierung zu nutzen

**Ergebnis:**

- Explizites Regelgesetz für Stellgröße $u$ in Abhängigkeit der Zustände $z$ bzw. $x$
- **Asymptotisch stabiles** Verhalten

![[Pasted image 20231020105806.png]]

# Verfahren

1. **Aufteilung** des Systems in Teilsysteme an jeder Zustandsgröße $x_i$
   - Teilsystem mit Zustand $\tilde{x}_{i-1}=[x_1, ...,x_{i-1}]^\top$ kann als Regelstrecke mit der Stellgröße $x_i$ interpretiert werden
2. Rekursive **Stabilisierung** des Teilsystems durch Lyapunov-basierten Reglerentwurf
   - Jede Zustandsgröße $x_i$ als stabilisierende Stellgröße für das Teilsystem $x_{i-1}$ auslegen
   - Pseudo-Stellgröße $x_i$ so wählen, dass das Teilsystem $\tilde{x}_{i-1}$ um seine Ruhelage stabilisiert wird
   - Wiederholung bis zur $n$-ten Gleichung → $u$ wird so gewählt, dass Gesamtsystem stabil
     → Verfahren entspricht schrittweisen Rückführlinearisierung

> [!pro] **PRO**
>
> - Kann für komplizierte nichtlineare Systeme mit einem systematischen iterativen Verfahren ein explizites Regelgesetz hergeleiten, welches das geschlossene System **asymptotisch** stabilisiert
> - **Größeres Einzugsgebiet** (im besten Fall der gesamte Zustandsraum) als Linearisierung um AP
> - Kann bei bestimmten Systemen stabilisierendes Regelgesetz finden, mit Linearisierung nicht

> [!con] **CON**
>
> - Ausdrucke $\alpha_i$ werden immer komplizierter
> - Anfällig gegenüber **Modellierungsfehlern**, da Transformation modellbasiert und von einer genauen Erfassung der nichtlinearen Funktionen $f_i$ und $g_i$ abhängig ist

#### Anmerkung: Pseudo-Stellgröße

- Pseudo-Stellgröße für $x_i$ kann beliebig gewählt werden, solange $\dot{V}_{i-1}$ dadurch lokal bzw. global **negativ definit**
- Gezeigte Wahl führt für jedes Teilsystem zur Kompensation aller Nichtlinearitäten und somit zur schrittweisen Linearisierung der Gesamtstrecke.
- “Integrator Backstepping”: resultierende Strecke kann durch Verknüpfung von Integratoren beschrieben werden
  ![[Pasted image 20231020221311.png]]
- “intelligentere” Wahl von $x_i$: Ausnutzen der Nichtlinearitäten des Systems, welche bereits zur negativen Definitheit von $\dot{V}_{i-1}$ beitragen
- Betrachtet man beispielsweise die Ableitung im 1. Schritt des Beispiels, $\dot{V}_{1}=z_1(z_1^2-z_1^3+x_2)$, so fällt auf, dass nicht alle nichtlinearen Terme kompensiert werden müssen:
  $$
  \dot{V}_1=-z_1^4+z_1(z_1^2+x_2)
  $$
  Es genügt $\alpha_1=-z_1^2-z_1$, um das erste Teilsystem zu stabilisieren.

**Vorteile:**

- Berechnung der folgenden Pseudo-Stellgrößen sowie des finalen Regelgesetzes wird vereinfacht
- Eigendynamik der Strecke wird intelligent genutzt anstatt sämtliche Nichtlinearitäten einfach auszulöschen → schnellere Konvergenz

#### Denkbare Erweiterungen

- Untersuchungen der Robustheit
- Adaptive Auslegung
- Wahl anderer Lyapunov Funktionen
- Betrachtung von MIMO-Systemen

> [!example]- Example
>
> - $x_2$ als Pseudo-Stellgröße für folgendes Teilsystem, so definiert, dass Ruhelage $x_1^*=0$ stabilisiert wird
> - Mit berechnetem $x_2$ wird $x_3$ so entworfen, dass Ruhelage $x_2^*=0$ stabil
> - $x_3$ als “Pseudo-Stellgröße” für das nächste Teilsystem auslegen
> - …
> - Erstes Teilsystem: Lyapunov-Funktion $V_1=$¨V1 =12x21
> - Analyse von $\dot{V}_1$ ergibt Pseudo-Stellgröße $\alpha_1$:
>   $$
>   \dot{V}_1 =x_1\dot{x}_1 =x_1(f_1(x_1)+g_1(x_1)x_2)
>   $$
> - Die Wahl von
>   $$
>   x_2\coloneqq \alpha_1 = -\frac{1}{g_1(x_1)}(f_1(x_1)+x_1)
>   $$
>   führt beispielsweise mit $\dot{V}_1=-x_1^2$ die gewünschte Stabilisierung herbei.
> - Die Zustandsgröße $x_2$ kann jedoch nicht einfach mit $\alpha_1$ gleichgesetzt werden, da es eine reale Systemzustandsgröße und somit keine echte Stellgröße für das System ist.
> - Aus diesem Grund betrachten wir in jedem Schritt des Verfahrens die Abweichung zwischen realer Zustandsgröße $x_i$ und gewünschter Größe $\alpha_{i-1}$.
> - Es ergibt sich die nichtlineare Zustandstransformation
>   $$
>   \begin{aligned}
>   z_1 &\coloneqq x_1 \\
>   z_2 &\coloneqq x_2-\alpha_1(z_1) \\
>   &\vdots \\
>   z_i &\coloneqq x_{i}-\alpha_{i-1}(z_1,...,z_{i-1}) \\
>   &\vdots \\
>   z_n &\coloneqq x_{n}-\alpha_{n-1}(z_1,...,z_{n-1})
>   \end{aligned}
>   $$
> - Nun kann in jedem Schritt die zuvor verwendete Lyapunovfunktion um die nächsthöhere Variable erweitert werden. Es ergeben sich so genannte **partielle Lyapunovfunktionen**:
>   $$
>   \begin{aligned}
>   V_1=\frac{1}{2}z_1^2 \\
>   \vdots \\
>   V_i=V_{i-1}+\frac{1}{2}z_i^2 \\
>   \vdots \\
>   V_n=\frac{1}{2} \sum_{i=1}^{n}z_i^2
>   \end{aligned}
>   $$
> - Rekursives Untersuchen der Ableitungen $\dot{V}_i$ alle $\alpha_{i-1}$ so bestimmen, dass partielle Lyapunovfunktion **lokale** bzw. **globale asymptotische** Stabilität des Teilsystems garantiert
> - Hierzu werden die Ableitungen der Ersatzvariablen $z_i$ benötigt
> - Bei $V_n$ angekommen bedeutet dies, dass das Gesamtsystem $\underline{\dot{z}}=...$ seiner Ruhelage $\underline{z}^*=0$ zustrebt und somit alle $x_i$ die Wunschgröße $\alpha_{i-1}$ erreichen.

> [!example]- Example: Backstepping für ein System 3. Ordnung
> ![[Pasted image 20231020220310.png]]
> ![[Pasted image 20231020220320.png]]

# Robustes Backstepping

- $f_i(x)$ und $g_i(x)$ meist nicht exakt bekannt → nominelles Modell
- Robustes Backstepping, um z.B. Stabilität auch unter Unsicherheiten im Modell zu garantieren

> [!example]- Example
>
> - System 2. Ordnung, $x_1,x_2\in\mathbb{R}$, mit Eingang $u$ und unbekannter Störung $\delta$
>   ![[Pasted image 20231020220445.png]]
> - Annahme: $f$ und $g$ exakt bekannt, Störung $\delta$ unbekannt
> - Sei $g(x_1,x_2)\neq0$ und $f(0,0)=0$ → Ursprung ist Ruhelage des Systems für $\delta=0$ und $u=0$
> - Störung sei **beschränkt** und es gelte $\max |\delta|\leq\delta_{max}$
> - Ziel: Backstepping Regelung macht System Input-to-State stabil gegenüber der Störung $\delta$
> - In diesem Fall bleibt die Stabilität der Ruhelage auch unter Einwirkung einer Störung erhalten und die Störung kann keine Divergenz der Systemtrajektorien verursachen. Allerdings werden sich die geregelten Trajektorien auch nie asymptotisch dem Ursprung annähern, sondern verbleiben in einer Umgebung des Ursprungs, dessen Radius von der im schlimmsten Fall auftretenden Störung $\delta_{max}$ abhängt.
> - Reglerentwurf: - Start mit erstem Teilsystem $\dot{x}_1=x_2$ (analog oben), Störung erst im zweiten Schritt relevant
>   ![[Pasted image 20231020220643.png]]
> - Wenden wir uns jetzt der Untersuchung der Robustheit zu und setzen den Regler in V˙2 ein. → negativ definiter Ausdruck und zusätzlicher Term, der von der Störung abhängt, weil die unbekannte Störung nicht durch die Stellgröße kompensiert werden kann
>   ![[Pasted image 20231020220720.png]]
> - Wegen (z2 − δ)2 = z22 − 2z2δ + δ2 ≥ 0 gilt z2δ ≤ z22/2 + δ2/2 und damit erhalten wir für ¨ V˙2
>   ![[Pasted image 20231020220922.png]]
>   mit k0 = min k1, k2 −12.
> - Wieder führen wir eine Konstante $0<\theta<1$ ein und es folgt
>   ![[Pasted image 20231020221100.png]]
>   als Startpunkt für die Analyse der Input-to-State Stabilität
> - Für ausreichend große Zustandswerte
>   $$
>   \sqrt{z_1^2+z_2^2} \geq \frac{\delta_{max}}{\sqrt{2k_0\theta}} \eqqcolon \rho(\delta_{max})
>   $$
> - gilt, dass die Lyapunov-Funktion fällt, i.e.
>   $$
>   \dot{V}_2 \leq -k_0(1-\theta)(z_1^2+z_2^2) \leq 0
>   $$
>   → Lyapunov-Funktion fällt → Zustandstrajektorien erreichen Menge pz21 + z22 ≤ ρ(δmax) und verlassen sie nicht mehr → Stabilität gegenüber (beschränkte) Störungen
> - Trajektorien werden Umgebung der Ruhelage erreichen, aber nie gegen die Ruhelage konvergieren
> - Wegen ρ(δmax) = √δmax2k0θ gilt, dass Umgebung größer, je größer die worst-case Störung $\delta_{max}$
> - Durch geeignete Wahl von $k_0$ bzw. $k_1$ und $k_2$ kann Umgebung kleiner gemacht werden
> - Keine generelle Aussage über Robustheit von Backstepping Verfahren möglich
