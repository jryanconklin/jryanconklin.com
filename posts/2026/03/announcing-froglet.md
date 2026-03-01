---
title: "Announcing Froglet UI"
date: "2026-03-01"
description: "I built a small, brandless React component library. 20 components, zero opinions."
---

I've been working on a side project for a while now: [Froglet UI](https://froglet.io). It's a React component library. I shipped v1.0 this week.

The idea is simple. Most component libraries come with a visual identity baked in. Colors, border radii, spacing, hover states are all decided for you. That's fine for some things, but it gets in the way when you want to bring your own design system.

Froglet doesn't do that. Every visual property is a CSS custom property. Nothing is hardcoded. The components handle structure, accessibility, and keyboard behavior. You handle the look.

It covers the basics: buttons, inputs, links, labels, dialogs, tabs, layout containers. Twenty components in total. I built it to support my own work. Personal projects like this site, and to have something that reflects how I actually think about components. Write simple markup, expose clear CSS hooks, get out of the way.

This site is already using it. The links in the header and the social links below are both Froglet's `Link` component, styled with a few CSS custom properties in my global stylesheet.

If you're building something that needs a foundation without opinions, take a look: [froglet.io](https://froglet.io).
