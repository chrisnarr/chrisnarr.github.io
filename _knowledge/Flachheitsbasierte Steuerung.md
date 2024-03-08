---
title: Data-driven Control (DDC)
draft: true
tags:
  -
---

![[Pasted image 20230918222950.png]]
Bei der Generierung der Solltrajektorien können **drei** Fälle unterschieden werden:

1. Solltrajektorien $\underline{y}_d(t),t\in[0,t_f]$ werden für den flachen Ausgang als **hinreichend oft differenzierbarer** Zeitverlauf vorgegeben
2. Solltrajektorien werden für die Regelgrößen $\underline{w}=\underline{\eta}(\underline{x})$, $\dim \underline{w}=m$, als hinreichend oft differenzierbarer Zeitverlauf $\underline{w}_d(t), t\in[0,t_f]$ vorgegeben, wobei mindestens eine Regelgröße $w_i$ keine Komponente von $\underline{y}$ ist
3. Solltrajektorien sind nur durch Anfangszustand $\underline{x}_d(0)$ und Endzustand $\underline{x}_d(t_f)$ festgelegt

# Fall 1

- Bestimmung der Steuerfunktion $\underline{u}_d(t)$ mit Hilfe von Gleichung (6.3)

# Fall 2

- Rückführung auf **Fall 1**
- Aus (6.2) und w = η(x) folgt mit
  ![[Pasted image 20230918223055.png]]
  eine implizite Differentialgleichung für die Solltrajektorie $\underline{y}_d$
- Kann durch numerische Integration gelöst werden

# Fall 3

- Rückführung auf **Fall 1**
- Berechnung der flache Ausgänge $\underline{y}_d(0)$ und $\underline{y}_d(t_f)$ aus $\underline{x}_d(0)$ und $\underline{x}_d(t_f)$
- Berechnete Ausgänge durch hinreichend oft differenzierbare Kurven (Splines, Polynome, . . . ) verbinden
- Alternative Planungsverfahren bieten z.B. Optimalsteuerungsansätze
- Liegen die Solltrajektorien $\underline{y}_d(t)$ in den Koordinaten des flachen Ausgangs vor, erhält man durch Einsetzen von $\underline{y}_d(t)$ in (6.2) und (6.3) die zugehörigen Zustände und Eingänge
  ![[Pasted image 20230918223107.png]]
- Somit kann die Steuerung durch das inverse System (6.7) und (6.8) erzeugt und auf das System (1.2) aufgeschaltet werden (siehe Abb. 6.2)

> [!con] **CON**
>
> - Für eine Steuerung muss das System **stabil** sein
> - **Anfangswerte** des Systems müssen hinreichend genau **bekannt** sein
> - Nur **kleine** Störungen dürfen auf das System einwirken
>   Wenn Vorraussetzungen nicht erfüllt, dann [[Flachheitsbasierte Regelung]] nötig
