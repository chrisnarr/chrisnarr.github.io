---
title: Sliding Mode Control (SMC)
draft: true
tags:
  -
---

> [!idea] Idea
>
> - Spezialfall hybrider Systeme
> - Regelsysteme mit schaltendem Regler
> - Sliding Mode ist Phänomen in Regelkreisen mit **unstetigen** Stellgrößen
> - Anschauliche Analyse des resultierenden Systemverhaltens in der Zustandsebene für Systeme zweiter Ordnung möglich
> - Im Sliding Mode ist Systemdynamik nur durch Parameter der Schaltmannigfaltigkeiten $\underline{s}(\underline{x})=\underline{0}$ festgelegt

# TODO

> [!goal] Ziel
>
> - Hin- und Herschalten zwischen den Stellgrößen, sodass eine **gleitende** Bewegung des Systemzustandes entlang von **Schaltmannigfaltigkeiten** im Zustandsraum (Sliding Mode) entsteht

> [!pro] **PRO**
>
> - Große **Robustheit** gegenüber Parameteränderungen und äußeren Störungen
> - Führt zu **Ordnungsreduktion** → effizienter Ansatz für Regelungsentwurf für komplexe nichtlineare Systeme

> [!con] **CON**
>
> - **Chattering** kann zu hohem Verschleiß der Stellglieder führen

# Sliding Mode Prinzip

> [!example]- Example: System 2. Ordnung mit skalarem Eingang
>
> - Der Zustand x = [x1, x2] ⊤ stellt den zu kompensierenden Regelfehler dar
> - Somit ist das Regelziel x0 = 0
> - Um Sliding Mode zu erreichen, wird die Stellgröße des Systems so gewählt, dass die Trajektorien des geregelten Systems auf die Schaltgerade S = {x ∈ IRn| s(x) = 0} zustreben
> - Wenn sich der Systemzustand nach dem Erreichen auf die andere Seite der Schaltgerade $S$ bewegt, wird er durch Umschalten der Stellgröße wieder auf $S$ zubewegt
> - Somit existiert eine Umgebung von $S$, in der der Systemzustand, sobald er in diese gelangt, für zuküftige Zeiten verweilt
> - Gleitende Bewegung des Systemzustands entlang der Schaltgeraden $S$, die als Sliding Mode bezeichnet wird

## Schaltmannigfaltigkeit

> [!definition] Definition: Mannigfaltigkeiten
>
> - Mannigfaltigkeiten sind mathematische Beschreibungen von gekrümmten Hyperflächen
> - Spezialfall sind Hyperebenen
>   - (n-1)-dimensionale Unterräume $S$ im $n$-dimensionalen Raum dar, $S$ = {x ∈ IRn | c⊤x = 0 , c ∈ IRn }.
>   - Beispiel: Ebene ist eine Hyperfläche im dreidimensionalen Raum

![[Pasted image 20230908180509.png]]

- Im Folgenden werden Mannigfaltigkeiten durch beliebig oft stetig differenzierbare Funktionen $s(\underline{x})$ definiert
- Menge der Zustände $S=\{\underline{x}\in\mathbb{R}^n\;|\;\underline{s}(\underline{x})=0\}$ beschreibt eine Schaltmannigfaltigkeit

## Sliding Mode in Mehrgrößensystemen

- Für Mehrgrößensysteme mit $m$-dimensionalem Eingang können Sliding Modes auf verschiedenen Schaltmannigfaltigkeiten und ihren Schnittmengen erzwungen werden
- Die Stellgröße u1 garantiert den Sliding Mode in S1, Stellgröße u2 Sliding Mode in S2 und damit auf S1 ∩ S2, letztendlich wird mit der Stellgröße um Sliding Mode in S1 ∩ S2 ∩ . . . ∩ Sm garantiert
- Beispiel:
  ![[Pasted image 20230908180611.png]]

# Allgemeine Regelkreisstruktur und Regelziel

- Im Folgenden werden $n$-dimensionale Systeme mit **additiver** Störung betrachtet
  ![[Pasted image 20230918213037.png]]
- $\underline{d}(\underline{x},t) \in \mathbb{R}^n$: Systemunsicherheiten, äußere Störungen
- Stellgröße des Systems wird als **unstetige** Funktion des Systemzustandes gewählt
  ![[Pasted image 20230918213114.png]]

- Abhängig vom aktuellen Zustand $\underline{x}$ werden die Stellgrößen $u^+(\underline{x})$ oder $u^-(\underline{x})$ verwendet und das Systemverhalten wird abhängig vom aktuellen Zustand $\underline{x}$ durch die Differentialgleichung beschrieben
  ![[Pasted image 20230918213340.png]]

### Grundstruktur Sliding Mode Regelung

![[Pasted image 20230918213411.png]]

- Sliding Mode Regler berechnet aus der Sollgröße $\underline{w}(t)$ und dem aktuellen Systemzustand $\underline{x}(t)$ die Stellgröße $\underline{u}(t)$
- Auf die Strecke wirkt die Störgröße $\underline{d}(t)$

> [!example]- Example: Einfacher Sliding Mode Regler
>
> $$
> \underline{u}=-\text{sign}(\underline{s}(\underline{x}))
> $$
>
> mit der linearen Funktion s(x) = M(w−x), M ∈ IRm×n als Argument

> [!example]- Example: Zweipunkt- oder Mehrpunktschalter
> ![[Pasted image 20230918213529.png]]

- **Note:** Bei der Verwendung von Zweipunkt- oder Mehrpunktschaltern in Sliding Mode Regelungen muss die Funktion s(x) nicht immer allein im Argument des schaltenden Reglers stehen. So stellt z.B. u(x) = −sign(x1s(x)) mit der Funktion s(x) = x1 + x2 einen typischen Sliding Mode Regler der Form (8.2) für Systeme zweiter Ordnung mit skalarem Eingang u und dem Systemzustand x = [x1 x2]⊤ dar.

> [!goal] Goal
> Systemzustand soll nach erstem Kontakt auf den Schaltmannigfaltigkeiten bleiben und dort stabiles Verhalten zeigen
>
> $$
> \underline{s}(\underline{x})=0
> $$

---

# Stabilität des idealen Sliding Mode

- Systemdynamik von schaltenden Systemen (8.3) wird mit auf der rechten Seite unstetigen Differentialgleichungen beschrieben
- Es existiert eine Definitionslücke bei $s(\underline{x})=0$
- Diese könnte durch Definition einer der beiden Funktionen f+(x) und f−(x) einschließlich x ∈ S behoben werden, die Unstetigkeitsstelle bei s = 0 bliebe jedoch bestehen.
- Somit ist das schaltende System nicht Lipschitz-stetig und mit herkömmlichen Ansätzen kann keine eindeutige Lösung für das Differentialgleichungssystem (8.3) gefunden werden.
- Idealer Sliding Mode kann mit unterschiedlichen mathematischen Methoden beschrieben werden. Alle haben gemeinsam, dass, wenn Sliding Mode auftritt, der Geschwindigkeitsvektor tangential an einer Sliding Mannigfaltigkeit anliegt. Jedoch führen verschiedene Methoden zu verschiedenen Differentialgleichungen, die die Sliding Mode Bewegung beschreiben. Die Methoden können nicht absolut bewertet werden. Vielmehr ist es sinnvoll, die Methoden auf ihre Anwendbarkeit hin zu betrachten. Bestimmte Verfahren eignen sich fur bestimmte Systemstrukturen besser als andere.

> [!example]- Example
> ![[Pasted image 20230911233439.png]]

### Methode nach Filippov

**Annahmen:**

- nur für Systeme mit **skalarem Eingang**
- berücksichtigt nur Schaltvorgänge, die auf den beiden Seiten der Schaltfläche zwei Werte annehmen → keine Schaltglieder mit Verzögerungen oder Hysterese
- Es werden alle möglichen Funktionswerte $\underline{f}^+(\underline{x})$ und $\underline{f}^-(\underline{x})$, die in einer Umgebung U eines Punktes auf der Schaltmannigfaltigkeit auftreten können, betrachtet
- Eine Funktion $\dot{\underline{x}}_{fi} = \underline{f}(\underline{x})$, die in der konvexen Hülle liegt, welche diese Vektoren, ausgenommen Nullvektoren, aufspannen, stellt eine Lösung für die auf der rechten Seite unstetige Differentialgleichung (8.3) dar.

**Berechnung:**

- Funktion $f(x)$ kann mit dem Ansatz$$
\underline{\dot{x}}_{fi}= \alpha\underline{f}^+(\underline{x})+ (1-\alpha)\underline{f}^-(\underline{x})
$$mit $0 \leq \alpha \leq 1$, und der Bedingung$$
\dot{s}(\underline{x}_{fi})=\frac{\partial s}{\partial \underline{x}}\underline{\dot{x}}_{fi}=0
$$berechnet werden.

1. Berechne $\alpha$ mit $$
	\alpha=\frac{\frac{\partial s}{\partial \underline{x}}\underline{f}^{-}(\underline{x})}{\frac{\partial s}{\partial \underline{x}} (\underline{f}^{-}(\underline{x})-\underline{f}^{+}(\underline{x}))}
	$$
2. Berechne Systemdynamik mit$$
   \underline{\dot{x}}\_{fi} =
   \frac{\frac{\partial s}{\partial \underline{x}}\underline{f}^{-}(\underline{x})}{\frac{\partial s}{\partial \underline{x}} (\underline{f}^{-}(\underline{x})-\underline{f}^{+}(\underline{x}))}\underline{f}^+(\underline{x})

- \frac{\frac{\partial s}{\partial \underline{x}}\underline{f}^{+}(\underline{x})}{\frac{\partial s}{\partial \underline{x}} (\underline{f}^{-}(\underline{x})-\underline{f}^{+}(\underline{x}))}\underline{f}^-(\underline{x})
  $$Dabei ist vorausgesetzt, dass $\frac{\partial s}{\partial \underline{x}}\underline{f}^{-}(\underline{x}) \geq 0$ und $\frac{\partial s}{\partial \underline{x}}\underline{f}^{+}(\underline{x}) \leq 0$ gilt.

> [!explanation]- Veranschaulichung in 2D
> ![[Pasted image 20230911234133.png]]
> Die Funktionswerte in einem Punkt $\underline{x}_0$ auf $\underline{s}(\underline{x}) = 0$ sind $\underline{f}^+(\underline{x}_0)$ und $\underline{f}^-(\underline{x}_0)$. Daraus wird für (8.3) die Lösung $\dot{\underline{x}}_{fi}$ abgeleitet.

### Equivalent Control Method (Methode der Regularisierung nach Utkin)

Bietet Beschreibung des idealen Sliding Mode, die unabhängig von der Annäherung der Schaltfunktionen an die Schaltmannigfaltigkeiten gilt

**Annahme:**

- Keine skalare Stellgrößen gefordert
- Nur für steuerungsaffine Systeme einsetzbar

Im skalaren Fall ist die resultierende Dynamik nach der Methode von Filippov und nach der Equivalent Control Method identisch

**Berechnung:**

- Ausgangspunkt der Herleitung bildet die schaltende Regelung (8.1) und (8.2)
- Um die Bewegungsgleichung des Sliding Mode zu erhalten, wird eine neue Stellgröße $\underline{\tilde{u}}_{eq}$ eingeführt, die so beschaffen ist, dass mit ihr eine konventionelle Lösung für die Differentialgleichung (8.3) existiert
- Angenommen, die Startpunkte fur (8.3) befinden sich auf der Schaltfläche $S$.
- Es tritt Sliding Mode auf und die Systemtrajektorien verbleiben auf der Schaltfläche für $t > 0$
- Das heißt, neben $\underline{s}(\underline{x}) = \underline{0}$ gilt auch $\dot{\underline{s}}(\underline{x}) = \underline{0}$
- Kontinuierliche Ersatzstellgröße $\underline{\tilde{u}}_{eq}$ (equivalent control) hält das System genau auf der Schaltfläche und es gilt
  $$
  \begin{aligned}
  \underline{\dot{s}}(\underline{x}) &= \frac{\partial \underline{s}}{\partial \underline{x}}(\underline{x}) \underline{\dot{x}} \\
  &= \frac{\partial \underline{s}}{\partial \underline{x}}(\underline{x}) \underline{f}(\underline{x}) + \frac{\partial \underline{s}}{\partial \underline{x}}\underline{g}(\underline{x})\underline{\tilde{u}}_{eq}\\
  &= L_{\underline{f}}\underline{s}(\underline{x})+L_{\underline{g}}\underline{s}(\underline{x})\underline{\tilde{u}}_{eq}\\
  \end{aligned}
  $$
  und mit (8.17)
  $$
  \underline{\tilde{u}}_{eq} =
  -L_{\underline{g}}\underline{s}(\underline{x})^{-1}L_{\underline{f}}\underline{s}(\underline{x})
  $$
  Berechne Systemdynamik:
  $$
  \begin{aligned}
  \underline{\dot{x}} &= \underline{f}(\underline{x}) + \underline{g}(\underline{x})\underline{\tilde{u}}_{eq}(\underline{x})\\
  &= \underline{f}(\underline{x}) - \underline{g}(\underline{x})L_{\underline{g}}\underline{s}(\underline{x})^{-1}L_{\underline{f}}\underline{s}(\underline{x})
  \end{aligned}
  $$
  Anschaulich wird mit der Einführung einer kontinuierlichen Ersatzstellgröße $\underline{\tilde{u}}_{eq}$ die Richtung des Geschwindigkeitsvektors der Systemzustände tangential zur Schaltfläche gelegt.
  Dabei sei $L_{\underline{g}}\underline{s}(\underline{x}) \neq 0$

---

# Merkmale von Sliding Mode Regelungen

- Systemdynamik in **regelungsaffiner** Form
  $$
  \underline{\dot{x}} = \underline{f}(\underline{x})+\underline{G}(\underline{x})\underline{u}
  $$
- dann ist eine Bedingung für die gezielte Unterdrückung von additiven Störungen, dass der Vektor der Störungen $\underline{d}(\underline{x},t)$ in dem von $\underline{G}(\underline{x})$ aufgespannten Unterraum des Zustandsraumes liegt (_Matching Condition_):
  $$
  \underline{\dot{x}} = \underline{f}(\underline{x})+\underline{G}(\underline{x})(\underline{u}+\underline{d}(\underline{x},t))
  $$
- Eine weitere Voraussetzung ist, dass **obere Schranken** für die Störungen **existieren und bekannt** sind
  ![[Pasted image 20230918213805.png]]
- Weiterhin können die Terme $\underline{f}(\underline{x})$ und $\underline{G}(\underline{x})$ als unischer angenommen werden
- Liegen obere bzw. untere Schranken vor, so kann ein Sliding Mode Regler diese Unsicherheiten tolerieren
- Sliding Mode führt zu **Ordnungsreduktion**
- Im Sliding Mode ist die Dynamik des Systems von **niedrigerer** Ordnung (Ordnung (n − m)) als die des Originalsystems (Ordnung n)
- Sie ist allein durch die Parameter der Schaltmannigfaltigkeiten Si bestimmt.
- Idealer Sliding Mode entsteht in zeitkontinuierlichen Systemen nur bei **unendlich hohen Schaltfrequenzen**
- Unterteilung des Entwurfs von Sliding Mode Reglern in zwei Probleme:
  1. Schaltmannigfaltigkeiten so wählen, dass im Sliding Mode eine gewünschte Systemdynamik auftritt
  2. Diskontinuierliche Reglerfunktion finden, die das System in endlicher Zeit in Sliding Mode überführt

---

# Existenz des Sliding Modes und Einzugsgebiet

- Existenz des Sliding Modes wird durch Analyse der Annäherungsphase bestimmt
- Zur Vereinfachung betrachten wir im Folgenden den Eingrößenfall
- Es muss, zumindest für eine Teilmenge D der Schaltfläche S, gelten, dass sich die Trajektorien von beiden Seiten auf die Schaltfläche zubewegen
- Man nennt D **Domain of Sliding Mode**
- Formal wird D definiert durch alle x ∈ S mit
  ![[Pasted image 20230918213916.png]]
- Ist diese Bedingung erfüllt, wird sichergestellt, dass für alle Startwerte, die in einer kleinen Umgebung um $\mathcal{D}$ liegen, die Schaltfläche $\mathcal{S}$ in endlicher Zeit erreicht wird. Wir sprechen von einer lokalen Bedingung für die Existenz des Sliding Modes.
- Das Einzugsgebiet (Region of Attraction) des Sliding Modes sind alle Startwerte im Zustandsraum (auch außerhalb der kleinen Umgebung, die durch die Existenzbedingung (8.7) gegeben ist), für die der Domain of Sliding Mode $\mathcal{D}$ in endlicher Zeit erreicht wird und somit ein Sliding Mode existiert
- Eine genaue Berechnung des Einzugsgebiets ist schwierig, vergleiche dazu das Beispiel in Abschnitt 8.6
- Eine Abschätzung des Einzugsgebiets und eine globale Version der Existenzergebnisse kann man mit Hilfe eines Lyapunov Ansatzes erhalten
- Man wählt als Lyapunov Funktion
  $$
  V=\frac{1}{2}s^2
  $$
- Es gilt $V>0$ für $s \neq 0$. Dann fordert man, dass entlang aller Trajektorien die Lyapunov Funktion abnimmt, also $s$ betragsmäßig kleiner wird, durch
  ![[Pasted image 20230918214022.png]]  
  mit $\eta > 0$
- Bedingung garantiert nicht nur, dass man sich der Schaltfläche nähert, sondern auch, dass die Schaltfläche in **endlicher** Zeit erreicht wird
- Um das zu sehen, führt man eine Hilfsgröße W =√2V = |s| ein. Für W gilt mit (8.8), W˙ ≤ −η und durch Integration von 0 bis ts erhält man W(ts) − W(0) ≤ −ηts und damit |s(ts)| − |s(0)| ≤ −ηts

Nimmt man an, dass ts der Zeitpunkt ist, an dem die Schaltfläche erreicht wird, also |s(ts)| = 0, so folgt
![[Pasted image 20230918214059.png]]

- Man beachte, dass es nicht ausreicht V˙ = ss <˙ 0 an Stelle von (8.8) zu fordern. In diesem Fall ist das Erreichen von S zwar garantiert, aber nicht in endlicher Zeit. Es ist dann auch möglich, dass die Schaltfläche asymptotisch erreicht wird und es musste zusätzlich Bedingung (8.7) überprüft werden.
- Allerdings ist die Interpretation von ¨ ss <˙ 0 intuitiv: Fur ¨ s > 0 muss gelten s <˙ 0 und analog für s < 0 muss gelten s >˙ 0 um Annäherung an die Schaltfläche von beiden Seiten zu erreichen.
- Ist also die Abstiegsbedingung an die Lyapunov Funktion (8.8) für alle x ∈ Rn erfüllt und ist die Lyapunov Funktion V radial unbeschränkt, dann existiert der Sliding Mode global, das heißt für alle Startwerte x(0) ∈ Rn wird die Schaltfläche in endlicher Zeit ts erreicht und für t > ts verbleibt der Zustand (bei idealem Gleiten) auf der Schaltfläche.
- Gilt die Existenzbedingung (8.8) nur fur eine Teilmenge des Rn, so kann eine Abschätzung für den Einzugsbereich ähnlich wie in Abschnitt 3.9 angegeben werden. Dort wurde durch V (x) ≤ c eine beschränkte Menge Ec konstruiert. Wenn fur alle Punkte dieser Menge V < 0 gilt, dann ist diese Menge positiv invariant und damit Teilmenge des Einzugsgebiets.
- Die Schwierigkeit im Fall von Sliding Mode ist, dass durch V (x) ≤ c keine beschränkte positiv invariante Menge definiert wird. Die Menge, die durch V (x) ≤ c definiert ist, muss also noch zusätzlich eingeschränkt werden, um eine beschränkte positiv invariante Menge Ec zu erhalten. Gilt für alle Punkte in Ec die Abstiegsbedingung, so ist Ec eine Abschätzung für den Einzugsbereich.

> [!example]- Example
> ![[Pasted image 20230918214141.png]]

> [!example]- Example
> ![[Pasted image 20230918214200.png]]

---

# Beispiel: Sliding Mode Reglerentwurf für einen linearen Oszillator

---

# Implementierung - Kontinuierlicher Ersatzregler

- Ideal schaltender Regler u = −Ksign(s) auf Hardware meistens nicht implementierbar, starkes Chattering → Verschleiß der Hardware
- Kontinuierliche Approximation:
  ![[Pasted image 20230918214314.png]]

- führt zu Aufteilung des Sliding Mode Regelvorgangs in eine Annäherungsphase, in der die Grenzschicht |s| < ε erreicht wird
- An Stelle der Gleitphase mit der diskontinuierlichen Steuerung u tritt nun eine kontinuierliche Phase, in der die Stabilität der Regelung mit u = −K sε untersucht werden muss
- Es gilt, dass dieser Regler für ε → 0 gegen den idealen Sliding Mode Regler konvergiert.
- Mit Hilfe der Notation
- ![[Pasted image 20230918214330.png]]
- lässt sich das Regelgesetz (8.49) kompakt notieren als
  ![[Pasted image 20230918214349.png]]
- Im folgenden Beispiel wird untersucht, welche Konsequenz die Approximation des diskontinuierlichen, idealen Sliding Mode Reglers durch einen kontinuierlichen Ersatzregler hat.

> [!example]- Example
> ![[Pasted image 20230918214425.png]]
> ![[Pasted image 20230918214440.png]]

Das Beispiel **zeigt**, dass im Allgemeinen (also h(x) und g(x) > 0 beliebig) für diese Systemklasse durch einen kontinuierlichen Sliding Mode Ersatzregler die Ruhelage nicht asymptotisch erreicht werden kann und man sich mit der Konvergenz in die Nähe der Ruhelage zufrieden geben muss.

Allerdings ist es durchaus möglich, die Funktionen h(x) und g(x) > 0 so zu wählen, dass die Ruhelage trotzdem asymptotisch stabilisiert wird. Ein Beispiel ist der lineare ungedämpfte Oszillator aus Abschnitt 8.6 mit
![[Pasted image 20230918214519.png]]
In der Grenzschicht gilt u = −Kε (a1x1 +x2) und wirkt als PD-Regler fur die vorliegende lineare Dynamik. Die Ruhelage x1 = x2 = 0 wird global asymptotisch stabilisiert.
