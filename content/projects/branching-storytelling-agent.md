---
title: "Branching Storytelling Agent"
description: "A narrative runtime for long-form AI storytelling, using structured scenes, goals, branches, and player-driven state transitions."
status: "Prototype notes"
pillar: "Agents for Narrative"
featured: true
order: 2
tags:
  - narrative systems
  - story state
  - agents
---

Keeping a story coherent while players keep changing the path — that is the problem this project is built around.

Long-form story generation is a runtime problem: scenes, goals, player choices, constraints, and state transitions. The challenge is not generating the next paragraph. It is knowing what must stay true across scenes, what can change, and what to do when the player takes an unexpected path.

## What I'm building

- Decomposing long scripts into structured story units.
- Tracking player behavior and story state.
- Choosing the next narrative node without losing coherence.
- Making AI storytelling feel less linear and more responsive.

## Design notes

Longer context windows help, but they do not solve the structural problem. A story still needs to know what matters, what can change, what must stay true, and how to recover when the player wanders off-script.

## Open questions

- How should a story graph balance author intent and player freedom?
- What state needs to persist across scenes?
- How can the system avoid both railroading and narrative drift?
