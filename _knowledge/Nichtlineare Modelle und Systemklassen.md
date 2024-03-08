---
title: Controllability
excerpt: "TBD"
collection: knowledge
draft: true
tags:
---

# Zustandsbeschreibung dynamischer Systeme

> [!definition] Definition: Systemzustand (Zustandsvariablen, Zustandsgrößen)
> Der Systemzustand $\underline{x}$ ist die **kleinste** Menge von Zahlen, die zu einem Anfangszeitpunkt $t_0$ spezifiziert sein müssen, um bei vorgegebenem Eingangsvektor $\underline{u}(t),t\geq t_0$, die dynamische Entwicklung des Systems, d.h. $x(t),t\geq t_0$, **eindeutig** beschreiben zu können

> [!idea] Wie lassen sich die Zustandsvariablen finden?
>
> - **Physikalisches System:** Zustandsvariablen repräsentieren **Energiezustand**
>   - Beispiel: Ort, Geschwindigkeit, Spannung, Strom
> - **Nicht-physikalisches System:** Zustandsvariablen repräsentieren **Bestandsvariablen**
>   - Beispiel: Anzahl von Computern in einem Warenlager
> - **Abstraktes System:** Zustandsvariablen repräsentieren **Speicherzustand**

---

# Klassifikation von nichtlinearen Modellen

### Systeme mit konzentrierten Parametern

> [!idea] Idea
> Systeme mit konzentrierten Parametern werden durch gewöhnliche Differentialgleichungen (ODEs) beschrieben.

> [!definition] Definition: Zustandsbeschreibung
> ![[Pasted image 20231009205400.png]]
> Annahme: Vektorfelder $\underline{f}$ und $\underline{h}$ sind glatt (i.e. beliebig oft stetig differenzierbar)

> [!definition] Definition: Implizite Systeme
>
> - Implizite Form einer DGL, wenn gilt:
>   $$
>   \underline{0}=\underline{f}(\underline{x},\underline{\dot{x}},\underline{u})
>   $$
> - Explizites Auflösen nach $\underline{x}$ oft nicht möglich
> - Eindeutige Lösung der DGL kann nur dann gefunden werden, wenn die Gleichung zumindest lokal eindeutig nach $\underline{x}$ auflösbar ist

> [!definition] Definition: Steuerungsaffine Systeme
> Eingangsgröße $\underline{u}$ beeinflusst das Systemverhalten **affin**, i.e.
>
> $$
> \underline{\dot{x}}=\underline{f}(\underline{x})+G(\underline{x})\underline{u}=\underline{f}(\underline{x})+\sum_{i=1}^{m}\underline{g}_i(\underline{x})u_i
> $$
>
> $$
> G(\underline{x})=\left[\underline{g}_1(\underline{x}),...,\underline{g}_m(\underline{x})\right]
> $$
>
> $$
> \underline{y}=\underline{h}(\underline{x},\underline{u})
> $$

> [!definition] Definition: Lineare Systeme (Lineares Zustandsmodell)
> Allgemeine Darstellung eines linearen zeitinvarianten Zustandsmodells (LTI-System):
>
> $$
> \begin{aligned}
> \underline{\dot{x}}=A\underline{x}+B\underline{u}\\
> \underline{y}=C\underline{x}+D\underline{u}
> \end{aligned}
> $$
>
> $A\in\mathbb{R}^{n\times n}$: **Systemmatrix** >$B\in\mathbb{R}^{n\times m}$: **Eingangsmatrix** >$C\in\mathbb{R}^{q\times n}$: **Ausgangsmatrix** >$D\in\mathbb{R}^{q\times m}$: **Durchschaltmatrix**
> Wenn $A,B,C,D$ **zeitabhängig**: lineares **zeitvariantes** (LTV) Zustandsmodell
> Für lineare Systeme mit $\underline{y}=\underline{\varphi}(\underline{u})$ mit Eingang $\underline{u}$ und Ausgang $\underline{y}$ gilt:
> **Superpositionsprinzip**
> Für beliebige Eingänge $\underline{u}_1(t),\underline{u}_2(t)$ und eine skalare Konstante $c\in\mathbb{R}$ gilt:
>
> $$
> \underline{\varphi}(\underline{u}_1(t)+\underline{u}_2(t))=\underline{\varphi}(\underline{u}_1(t))+\underline{\varphi}(\underline{u}_2(t))
> $$
>
> $$
> \underline{\varphi}(c \cdot \underline{u}_1(t)) = c \cdot \underline{\varphi}(\underline{u}_1(t))
> $$

**Anmerkung:** Für nichtlineare Systeme gilt das Superpositionsprinzip **nicht**. Im Allgemeinen sind nichtlineare Systeme deshalb im Gegensatz zu linearen Systemen **nicht** in die drei im Modellierungsdreieck dargestellten äquivalenten Darstellungen _Differentialgleichung_, _Zustandsraum_ und _Übertragungsfunktion_ umformbar.

---

### Systeme mit verteilten Parametern

> [!idea] Idea
> Systeme mit verteilten Parametern werden durch **partielle Differentialgleichungen (PDEs)** mit Randbedingungen beschrieben

**Systeme mit verteilten Parametern (PDEs)**

- Beschreiben physikalische Prozesse, die sowohl vom **Ort** als auch von der **Zeit** abhängen
- Veränderung **beider** Größen ist für das Systemverhalten wichtig
  Beispiele:
- Wärmeausbreitung, z.B. in Stäben oder Platten
- Akustischen Schwingungen, z.B. in Balken, Platten und Saiten

> [!example]- Example: Wärmeleitung
> ![[Pasted image 20231020123041.png]]

### Differential-Algebra-Systeme

> [!definition] Definition: Differential-Algebra-Systeme
> Gleichungssystem, das aus einem System **gewöhnlicher** Differentialgleichungen und einem System **algebraischer** Gleichungen besteht
>
> $$
> \begin{aligned}
> \underline{\dot{x}}=\underline{f}(\underline{x},\underline{u},t) \\
> \underline{0}=\underline{g}(\underline{x},\underline{u},t)
> \end{aligned}
> $$
>
> mit $\underline{x}\in\mathbb{R}^n, \underline{u}\in\mathbb{R}^m, \underline{f}\in\mathbb{R}^{n-k}, \underline{g}\in\mathbb{R}^k$

> [!example]- Example: Modellierung mehrmaschiger elektrischer Schaltkreise mit Kondensatoren
>
> - Spannungen über Kondensatoren mit Differentialgleichungen erster Ordnung beschrieben
> - Auswertung der Kirchhoffschen Maschen- und Knotengleichungen werden Randbedingungen für das System in Form algebraischer Gleichungen festgelegt

> [!example]- Example: Modellierung von Laufrobotern
>
> - Physikalisch nicht möglich, dass Roboterfuß den Boden durchdringt → Nebenbedingung lässt sich als Ungleichung (unilaterale Nebenbedingung) formulieren
>   $$
>   \begin{aligned}
>   g_1(\underline{x}) \geq 0 \\
>   \vdots \\
>   g_N(\underline{x}) \geq 0
>   \end{aligned}
>   $$
> - $g_i(\underline{x})$: Abstände der $N$ Fußecken zum Boden in Abhängigkeit vom Zustand $\underline{x}$ des Roboters
> - Fester Kontakt mit einer Fußecke $k$: Nebenbedingung muss erfüllt sein
>   $$
>   g_k(\underline{x}) = 0
>   $$
> - Simulation: Lösen des Differential-Algebra Systems
>   $$
>   \begin{aligned}
>   \underline{\dot{x}} &= \underline{f}(\underline{x},\underline{u}) \\
>   0 &= g_k(\underline{x})
>   \end{aligned}
>   $$
> - Gewöhnliche Differentialgleichung $\underline{\dot{x}}=\underline{f}(\underline{x},\underline{u})$ beschreibt Dynamik des Roboters, wobei der Eingangsvektor $\underline{u}$ die von Motoren aufgebrachten Momente in den Gelenken symbolisiert
>
> ![[Pasted image 20231020123939.png]]

### Zeitdiskrete Systeme

Beschrieben durch **Differenzen**gleichungen der Form:

$$
\underline{x}_{k+1}=\underline{f}(\underline{x}_{k},\underline{u}_{k}) \\
\underline{y}_k=\underline{h}(\underline{x}_{k},\underline{u}_{k})
$$

Diskretisierung kontinuierlicher linearer Regelgesetze:

$$
\underline{x}((k+1)T)=\underline{f}(\underline{x}(kT),\underline{u}(kT),kT) \\
\underline{y}(kT)=\underline{h}(\underline{x}(kT),\underline{u}(kT),kT)
$$

$k\in\mathbb{N}$, $T$: Abtastzeit
Für lineare zeitdiskrete Systeme gilt:

- $\underline{f}$ und $\underline{h}$ sind linear in $\underline{x}_k$ und $\underline{u}_k$
- Lösungen erfüllen das **Superpositionsprinzip**

### Hybride Systeme

Bestehen aus kontinuierlichen und ereignisorientierten Zustandsvariablen

- **Kontinuierlich:** Differentialgleichungen
- **Ereignisorientiert:** z.B. endliche Automaten
  Modellierung in Form von **hybriden** Zustandsmodellen:
- Zusammenfassung des kontinuierlichen Zustands $\underline{x}\in\mathbb{R}^n$ und des diskreten Zustands $\underline{q}\in\mathbb{N}$ in hybridem Zustandsvektor $\underline{\zeta}$
  $$
  \underline{\zeta}= \begin{pmatrix} \underline{x} \\ \underline{q} \end{pmatrix}
  $$
  **Annahme:** System verhält sich fast überall kontinuierlich → kann durch Differentialgleichungen $\underline{\dot{x}}=\underline{f}(\underline{x},\underline{q},\underline{u},t)$ beschrieben werden

“Ereignisse” für Zustandswechsel:

- Veränderung des diskreten Zustands
- Beschrieben durch Schaltflächen $s_j(\underline{x},\underline{q},\underline{u},t)=0$, $j=1,...,N$
- Ermöglichen Unstetigkeiten im kontinuierlichen Zustand $\underline{x}$

**Zusammenfassend:**

$$
\begin{aligned}

\underline{\dot{x}}=\underline{f}(\underline{x},\underline{q},\underline{u},t), \;\;\;\; \text{solange}\;s_j(\underline{x},\underline{q},\underline{u},t)\neq0 \; \forall j \\

\underline{\zeta}^+=\underline{\psi}_j(\underline{\zeta}^-,\underline{u},t) \;\;\;\; \text{wenn}\;s_j(\underline{x},\underline{q},\underline{u},t)=0 \; \exists j

\end{aligned}
$$

$\underline{\zeta}^-$: hybrider Systemzustand unmittelbar **vor** Auftreten des Ereignisses
$\underline{\zeta}^+$: hybrider Systemzustand unmittelbar **nach** Auftreten des Ereignisses
$\underline{\psi}_j$: Funktion mit Reinitialisierungsregeln für den hybriden Zustandsvektor

> [!example]- Example: Schrittmotor
>
> - Kontinuierlicher Systemzustand: Rotorwinkel
> - Diskreter Steuereingriff: Ansteuerimpulse (binär)

Alternative Formulierungen:

- zusätzlicher diskreter Steuereingang
- zusätzlicher kontinuierlicher und diskreter Systemausgang
- oft keine Unstetigkeiten im kontinuierlichen Zustand $\underline{x}$ erlaubt

**Spezialfall: Schaltende Systeme**

$$
\underline{\dot{x}}=\underline{f}(\underline{x},\underline{q},\underline{u},t) \;\;\;\;\; \text{für}\;\underline{x}\in S_q
$$

$S_q$: disjunkte Unterteilung des Zustandsraums $\mathbb{R}^n$
Abhängig vom aktuellen Zustand $\underline{x}$ wird Differentialgleichung ausgewählt:

$$
\underline{\dot{x}}=\underline{f}(\underline{x},\underline{q},\underline{u},t)=\underline{f}_q(\underline{x},\underline{u},t)
$$

> [!example]- Example: Dynamik der Regelstrecke ändert sich
>
> - Greifersystem, Gesamtmasse und Masseverteilung ändert sich

> [!example]- Example: Schaltende Regler
>
> - Diskontinuierliche Stellgröße der Form $\underline{u}=\text{sign}(\underline{s}(\underline{x}))$ mit Schaltvorgängen an der Stelle $\underline{s}(\underline{x})=0$
> - Funktion $\underline{s}(\underline{x})$ beschreibt Schaltflächen, die Zustandsraum in disjunkte Teilmengen trennen
> - Aufgabe des Reglerentwurfs: Bestimme Schaltflächen unter Berücksichtigung des Regelziels und der Stabilität des Systems, damit Systemzustand nach Erstkontakt auf Schaltfläche bleibt → Sliding Mode

---

# Linearisierungsmethoden

### Linearisierung durch Taylorreihen-Approximation

> [!idea] Vorgehen zur Lösung nichtlinearer Reglerentwurfsprobleme
>
> 1.  Linearisierung der nichtlinearen Dynamik
> 2.  Anwendung linearer Reglerentwurfsverfahren

> [!idea] Linearisierung nichtlinearer Dynamik
>
> - Approximation mittels Taylorreihenentwicklung mit Abbruch nach dem linearen (ersten) Glied

> [!con] **CON**
>
> - Linearisierung nur in kleinen Umgebung der verwendeten Referenztrajektorie / des verwendeten Arbeitspunktes gültig
> - Verlässt Systemzustand diese Umgebung, dann Verhalten des Systems nicht mehr vorhersehbar

### Linearisierung um eine allgemeine Referenzlösung

> [!idea] Großsignalverhalten
> **Referenzlösung:** Ergebnis des Großsignalverhaltens des Systems
>
> $$
> \underline{x}^*(t),\underline{y}^*(t),\underline{u}^*(t), \;\; t\geq0
> $$

- Regelungstechnisch **Kleinsignalverhalten** oft ausreichend
- Berechnung durch linearisierte Zustandsdifferentialgleichungen um bekannte Referenzlösung

> [!idea] Kleinsignalverhalten
> **Herleitung:** Taylorreihenentwicklung der Zustandsdifferentialgleichung
>
> $$
> \begin{aligned}
> \underline{\dot{x}}^*(t) + \Delta\underline{\dot{x}}(t) = \\
> \underline{f}(\underline{x}^*(t)+\Delta\underline{x}(t),\underline{u}^*(t)+\Delta\underline{u}(t)) = \\
> \underline{f}(\underline{x}^*(t)+\underline{u}^*(t))
> \begin{bmatrix}
> \frac{\partial f_i}{\partial x_j} \end{bmatrix}_{(\underline{x}^*(t),\underline{u}^*(t))} \Delta\underline{x}(t) + \begin{bmatrix} \frac{\partial f_i}{\partial u_j} \end{bmatrix}_{(\underline{x}^*(t),\underline{u}^*(t))} \Delta\underline{u}(t) \\ + \underline{R}(\Delta\underline{x}^2,\Delta\underline{u}^2)
> \end{aligned}
> $$

**Entwicklung der System-Ausgangsgleichung:**

- Vernachlässigung nichtlinearer Restglieder $\underline{R}(\Delta\underline{x}^2,\Delta \underline{u}^2)\approx0$ führt zum Kleinsignalmodell
  $$
  \Delta\underline{\dot{x}}(t) =
  \begin{bmatrix}
  \frac{\partial f_i}{\partial x_j}
  \end{bmatrix}_{(\underline{x}^*(t),\underline{u}^*(t))} \Delta\underline{x}(t) + \begin{bmatrix} \frac{\partial f_i}{\partial u_j} \end{bmatrix}_{(\underline{x}^*(t),\underline{u}^*(t))} \Delta\underline{u}(t)
  $$
  $$
  \Delta\underline{y}(t) =
  \begin{bmatrix}
  \frac{\partial h_i}{\partial x_j}
  \end{bmatrix}_{(\underline{x}^*(t),\underline{u}^*(t))} \Delta\underline{x}(t) + \begin{bmatrix} \frac{\partial h_i}{\partial u_j} \end{bmatrix}_{(\underline{x}^*(t),\underline{u}^*(t))} \Delta\underline{u}(t)
  $$

**Ergebnis:**
zeitinvariantes, nichtlineares Systems → lineares, zeitvariantes (LTV) System der Form:

$$
\begin{aligned}
\Delta\underline{\dot{x}} = A(t)\Delta\underline{x}+B(t)\Delta\underline{u} \\ \Delta\underline{y} = C(t)\Delta\underline{x}+D(t)\Delta\underline{u}
\end{aligned}
$$

**Anmerkung:** Wenn aus Zusammenhang ersichtlich ist, dass es sich um ein Kleinsignalmodell handelt, dann wird $\Delta$ häufig weggelassen

### Linearisierung um eine Ruhelage

- **Spezielle Referenzlösung:** Ruhelage oder stationäre Lösung in einem Arbeitspunkt

> [!definition] Definition: Ruhelage
>
> - Ruhelagen (statische Lösungen) des Systems $\underline{\dot{x}}=\underline{f}(\underline{x},\underline{u},t)$ bezüglich eines konstanten Eingangs $\underline{u}^*$ sind alle Zustandspunkte, für die gilt:
>   $$
>   \underline{\dot{x}}^*=\underline{f}(\underline{x}^*,\underline{u}^*,t)=\underline{0} \;\;\;\;\; \forall t\geq t_0
>   $$
> - Ruhelagen können durch Lösung dieses Systems impliziter oder expliziter nichtlinearer algebraischer Gleichungen bestimmt werden

**Linearisierung um eine Ruhelage**
Ergebnis einer Linearisierung um eine Ruhelage eines zeitinvarianten, nichtlinearen Systems vom Typ ist ein LTI-Zustandsmodell mit auf die Ruhelage bezogenen **konstanten** Zustandsmatrizen:

$$
\begin{aligned}
\Delta\underline{\dot{x}} = A\Delta\underline{x}+B\Delta\underline{u} \\
\Delta\underline{y} = C\Delta\underline{x}+D\Delta\underline{u}
\end{aligned}
$$

### Linearisierung durch Zustandsrückführung

**Für lineare Systeme:**

- Koordinatentransformation nutzen, um Systemdarstellungen zu erhalten, die die Systemanalyse und Reglersynthese vereinfacht
- Beispiel: Regelungsnormalform für einfaches Ablesen der Steuerbarkeit

**Für nichtlineare Systeme:**

- Kann man auch bei nichtlinearen Systemen Transformationen finden, die die Systemanalyse und Reglersynthese vereinfachen? → geometrische Regelungsverfahren
- Suche nach geeigneten Transformation führt unter Berücksichtigung differentialgeometrischer Bedingungen auf partielle Differentialgleichungen

### Nichtlineare Zustandstransformationen

**Feedback-Linearisierung**

- Darstellung eines nichtlinearen Systems in **linearen** Koordinaten
- **Keine** Näherung, die nur in einer kleinen Umgebung einer Referenztrajektorie oder des Arbeitspunktes gültig ist, sondern **exakte** Systemtransformation
- Bei Transformationen werden keine grundlegenden Systeminformationen verloren

**Eingangs-Ausgangs-Linearisierung (E/A-Linearisierung)**

- Analysiert Systemdynamik aus Perspektive eines zu regelnden Ausgangs und führt zu einem vollständig linearisierten E/A-Verhalten des Systems, die Zustandsgleichungen sind nur **teilweise linear**

**Zustands-Linearisierung:** Führt zu **vollständig** linearen Zustandsgleichungen
