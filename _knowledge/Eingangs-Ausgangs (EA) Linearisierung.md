---
title: Data-driven Control (DDC)
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

> [!idea] Idea
>
> - Linearisierung einer ganz bestimmten E/A-Beziehung $y/v$
> - setzt voraus, dass man einen Ausgang $y$ des Systems festlegt, dessen dynamische Antwort auf den Reglereingang $v$ linearisiert werden soll
> - Zeitliche Ableitung dieses Ausganges liefert nach einigen Schritten die E/A–Beziehung in Regelungsnormalform, welche ein linearisierendes Regelgesetz liefert
> - E/A-Linearisierung erfordert die $r$-malige Ableitung der E/A-Beziehung nach der Zeit, wobei $r$ der relative Grad des Ausganges genannt wird
> - Ist der relative Grad **kleiner** als die Systemordnung, tritt eine **interne**, nicht am Ausgang beobachtbare **Dynamik** bei der Rückführlinearisierung auf
> - Ist die interne Dynamik **instabil**, kann das Regelgesetz nicht benutzt werden

> [!pro] **PRO**
>
> -

> [!con] **CON**
>
> - Falls $r<n$: potentiell **unsichtbare interne Dynamik**
