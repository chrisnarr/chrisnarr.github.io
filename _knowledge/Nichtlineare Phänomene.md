---
title: Controllability
draft: true
excerpt: "TBD"
collection: knowledge
tags:
---

> [!idea] Idea
> Für **lineare** Systeme stehen viele Methoden zur Systemanalyse zur Verfügung
> → **Linearisierung** eines nichtlinearen Systems um einen Arbeitspunkt

**Problem:** Linearisierung schränkt Systemanalyse in zwei Punkten ein

1. Linearisierung ist **Näherung**, nur **lokal** um Arbeitspunkt gültig → nur zur Untersuchung des **lokalen** Systemverhaltens nutzbar
2. Klasse der nichtlinearen Systeme deutlich allgemeiner als lineare System → nichtlineare Systeme können Eigenschaften aufweisen, die durch lineare Modelle **gar nicht** oder nur **unzureichend** abgebildet werden können

# Globale und lokale Eigenschaften

| Lineare Systeme                                                                                | Nichtlineare Systeme                                                                            |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Eigenschaften wie Steuerbarkeit, Beobachtbarkeit und Stabilität sind **globale** Eigenschaften | Eigenschaften wie Steuerbarkeit, Beobachtbarkeit und Stabilität sind meist nur **lokal** gültig |
| Nur **eine** Ruhelage möglich                                                                  | **Mehrere** Ruhelagen möglich                                                                   |

> [!example]- Example: Nichtlineares System mit mehreren Ruhelagen
> ![[Pasted image 20231020130151.png]]

# Finite Escape Time

| Lineare Systeme                                                                                       | Nichtlineare Systeme                                                                                 |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Zustand eines **instabilen** linearen Systems kann nur in **unendlicher** Zeit ins Unendliche streben | Zustand eines **instabilen** nichtlinearen Systems kann in **endlicher** Zeit ins Unendliche streben |

> [!example]- Example: Finite Escape Time
> ![[Pasted image 20231020130407.png]]

# Nichtlineare Grenzzyklen

- **Periodische** Vorgänge, charakteristische Erscheinung in nichtlinearen Systemen
- Können gewünscht sein (z.B. elektrische Schwingkreise, periodische Laufbewegung)
- Können nicht gewünscht sein (z.B. mechanische Systeme mit schaltenden Stellgliedern)
- Grenzzyklen in **nichtlinearen** Systemen sind **weniger** störanfällig als solche in linearen Systemen

| Lineare Systeme                                                                                    | Nichtlineare Systeme                                                                              |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Konjugiert komplexes Polpaar **genau** auf der imaginären Achse nötig für periodische Schwingungen | Stabile Grenzschwingungen können erzwungen werden                                                 |
| **Amplitude** der Oszillation hängt vom **Anfangswert** ab                                         | **Amplitude und Frequenz** der Oszillation können **unabhängig** vom Anfangswert erzwungen werden |
| Parameteränderungen führt zu **Lagewechsel** des Polpaares → Schwingung klingt auf/ab              | Nichtlineare Grenzzyklen können **Unstetigkeitsstellen** aufweisen                                |

> [!example]- Example: Van-der-Pol-Oszillator
> ![[Pasted image 20231020130626.png]]

> [!example]- Example: Volterra-Lotka Jäger-Beute Modell
> ![[Pasted image 20231020130700.png]]

# Chaos

| Lineare Systeme                                                                                    | Nichtlineare Systeme                                                                               |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **kleine** Änderungen des Anfangszustandes bewirken nur **kleine** Änderungen des Systemverhaltens | **kleine** Änderungen des Anfangszustandes können **große** Änderung des Systemverhaltens bewirken |

> [!example]- Example: Jonglierroboter
> ![[Pasted image 20231020131137.png]]
> ![[Pasted image 20231020131146.png]]

# Bifurkation

> [!definition] Definition: Bifurkation
> Nichtlineare Systeme, deren Verhalten von einem Parameter abhängt, können bei einer Änderung des Parameters ihr **Verhalten drastisch ändern**.
> Beispiel: System besitzt für kleine Parameterwerte **eine** Ruhelage, für größere Parameterwerte jedoch **mehrere** Ruhelagen oder Grenzzyklen

> [!example]- Example: Knickschwingungen eines Balkens
> ![[Pasted image 20231020131241.png]]
> ![[Pasted image 20231020131254.png]]

# Schnattern

Trajektorien hybrider Systeme können **Knicke** aufweisen → Schnatter-/Gleitvorgänge können entstehen

> [!example]- Example
> ![[Pasted image 20231020131025.png]]

# Beispiele von nichtlinearen Kennlinien

- Nichtlineare Systembeschreibungen entstehen, wenn in die Systemmodellierung Übertragungsglieder eingehen, die das Superpositionsprinzip **nicht** erfüllen

> [!example]- Example
>
> - Begrenzungs-, Sättigungs- oder Schwellwertkennlinien in Verstärkern (z.B. Strom-Überlastschutz in elektrischen Verstärkern)
> - Hysterese beschreibt typische nichtlineare Effekte in magnetischen Systemen
> - Reibungskennlinien (z.B. viskose Reibung, Haftreibung)
> - Lose- oder Vorspannungskennlinien in mechanischen Systemen
>
> ![[Pasted image 20231020130921.png]]
