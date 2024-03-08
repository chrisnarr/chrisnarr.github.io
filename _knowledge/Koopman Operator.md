---
title: Data-driven Control (DDC)
draft: true
tags:
  -
---

Overview: https://www.youtube.com/watch?v=qOdwRel-1xA&ab_channel=SteveBrunton
Details: https://fluids.ac.uk/files/meetings/KoopmanNotes.1575558616.pdf

> [!idea] Idea
> Transform a **nonlinear** system into a **linear** system of **higher order**

> [!idea] Motivation
>
> - Gegeben sei $x(k+1) = f(x(k))$
> - Analyse und Reglerentwurf für **nichtlineare** Systeme durch **lineare** Theorie durchführbar.

> [!goal] Goal
> Finde Funktion $T$, sodass $z=T(x)$ sich nach $z(k+1)=A(z(k))$ entwickelt und (möglichst) via $x=Cz$ **linear** rücktransformiert werden kann
