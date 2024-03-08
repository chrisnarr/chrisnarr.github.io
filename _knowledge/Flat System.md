---
title: Flat System
excerpt: "TBD"
collection: knowledge
draft: true
tags:
  -
---

> [!idea] Idea
> Ein System wird als **flach** bezeichnet, wenn ein (ggf. fiktiver) Systemausgang $\underline{y}$ existiert, aus welchem sich **alle Zustands-** und **Eingangsgrößen** in Abhängigkeit **dieses einen Ausgangs und seinen zeitlichen Ableitungen** berechnet lassen

- Neu Koordinaten stehen mit den Originalkoordinaten in einem **eindeutig umkehrbaren, nichtlinearen** Zusammenhang
- Nichtlineare Koordinatentransformation kann als **dynamische Rückführung** interpretiert werden

> [!danger] Annahme: $\underline{f}$ und $\underline{u}$ hinreichend oft differenzierbar

> [!definition] Definition: Differentiell Flaches System
> Ein nichtlineares System (1.2) heißt **differentiell flach**, wenn es einen fiktiven Ausgang
>
> $$
> \begin{aligned}
> \underline{y} &= \underline{\Phi}\left(\underline{x},u_1,...,u_m,\dot{u}_1,...,\dot{u}_m,...,\overset{(\alpha_1)}{u_1},...,\overset{(\alpha_m)}{u_m}\right) \\
> &= \underline{\Phi}\left(\underline{x},\underline{u},\underline{\dot{u}},...,\overset{(\alpha)}{\underline{u}}\right) \end{aligned}
> $$
>
> mit $\dim \underline{y} = \dim \underline{u}$ gibt, der folgende Bedingungen erfüllt:
>
> - Zustände $x_i, i=1,...,n$ und Eingänge $u_i, i=1,...,m$ können als Funktionen der Komponenten $y_i, i=1,...,m$ und einer **endlichen** Anzahl $\gamma_i$ ihrer Zeitableitungen $\overset{(\gamma_i)}{y_i}$ **eindeutig** ausgedrückt werden:
>   $$
>   \begin{aligned} \underline{x} &= \underline{\Psi}_1\left(y_1,...,y_m,\dot{y}_1,...,\dot{y}_m,...,\overset{(\gamma_1-1)}{y_1},...,\overset{(\gamma_m-1)}{y_m}\right) \\ &= \underline{\Psi}_1\left(\underline{y},\underline{\dot{y}},...,\overset{(\gamma-1)}{\underline{y}}\right) \\
>   \underline{u} &= \underline{\Psi}_2\left(y_1,...,y_m,\dot{y}_1,...,\dot{y}_m,...,\overset{(\gamma_1)}{y_1},...,\overset{(\gamma_m)}{y_m}\right) \\ &= \underline{\Psi}_2\left(\underline{y},\underline{\dot{y}},...,\overset{(\gamma)}{\underline{y}}\right) \end{aligned}
>   $$
> - Wenn Bedingungen **lokal** erfüllt, so heißt der fiktive Ausgang _flacher Ausgang_
> - _Differentiell_, da aus den Komponenten von $\underline{y}$ durch Differentiation alle Zustände und Eingänge sowie deren Zeitableitungen bestimmt werden können

> [!idea] Zusätzliche Infos
>
> - Da $\dim \underline{y} = \dim \underline{u}$ und (6.3) sind die Komponenten von $\underline{y}$ **differentiell unabhängig**, d.h. sie erfüllen **keine** Differentialgleichungen der Form
>   $$
>   \underline{\varphi}\left(\underline{y},\underline{\dot{y}},...,\overset{(\delta)}{\underline{y}}\right)=\underline{0}
>   $$
> - Systeme, die mittels **statischer** oder **dynamischer** Zustandsrückführung exakt linearisiert werden können, sind **immer** flach
> - Jedes flache System kann mit einer dynamischen Zustandsrückführung linearisiert werden
> - Jedes flache System ist **steuer**- bzw. **erreichbar**
> - Für ein flaches System existieren **beliebig viele** flache Ausgänge
> - Es ergibt sich so häufig die Möglichkeit, einen flachen Ausgang mit einer anschaulichen Bedeutung und einer direkten Relevanz für das zu lösende Regelproblem zu wählen

> [!idea] Info
>
> - Da $\underline{x}$ und $\underline{u}$ (und damit auch $\underline{\dot{x}}$) als Funktion von $\underline{y}$ darstellbar, können **alle** dynamischen Eigenschaften eines flachen Systems **allein** durch den flachen Ausgang festgelegt werden (”System wird durch seinen flachen Ausgang **parametriert**”)
> - Damit können **Ruhelagen** mit $f(\underline{x}^*,\underline{u}^*)=0$ eines Systems **einfach** bestimmt und analysiert werden, da für $\underline{y}=\underline{y}^*$ und $\overset{(i)}{\underline{y}}=0$ mit $i\geq1$ gilt:
>   $$
>   \begin{aligned}
>   \underline{x}^*=\underline{\Psi}_1\left(\underline{y}^*,\underline{0},...,\underline{0}\right)=\underline{\tilde{\Psi}}_1(\underline{y}^*) \\
>   \underline{u}^*=\underline{\Psi}_2\left(\underline{y}^*,\underline{0},...,\underline{0}\right)=\underline{\tilde{\Psi}}_2(\underline{y}^*)
>   \end{aligned}
>   $$

Ist ein System flach, so können **nichtlineare Trajektorienfolgeprobleme** leicht durch eine Steuerung oder eine Regelung gelöst werden.

- [[Flachheitsbasierte Steuerung]]
- [[Flachheitsbasierte Regelung]]
