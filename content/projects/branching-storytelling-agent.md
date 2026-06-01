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

Keeping a story coherent while players keep changing the path. That is the problem this project is built around.

Long-form story generation is a runtime problem: scenes, goals, player choices, constraints, and state transitions. The challenge is not generating the next paragraph. It is knowing what must stay true across scenes, what can change, and what to do when the player takes an unexpected path.

## What I'm building

- Decomposing long scripts into structured story units.
- Tracking player behavior and story state.
- Choosing the next narrative node without losing coherence.
- Making AI storytelling feel less linear and more responsive.

## Design notes

Longer context windows help, but they do not solve the structural problem. A story still needs to know what matters, what can change, what must stay true, and how to recover when the player wanders off-script.

Here is a concrete case: a player decides mid-scene to betray an ally they were supposed to protect. The model can generate a reaction. But should the ally remember this next scene? Does it change what the player is allowed to do later? Does the story's ending branch from here, or was this a throwaway choice? Those questions cannot be answered by the context window alone. They require explicit state: what persists, what expires, and what triggers a branch.

We are exploring a scene graph structure where each node carries its own state requirements: what must be true for the scene to activate, what changes when the player passes through it, and what the system needs to carry forward. The goal is not to constrain the player. It is to make the story's memory reliable enough that freedom feels meaningful.

## Open questions

- How should a story graph balance author intent and player freedom?
- What state needs to persist across scenes?
- How can the system avoid both railroading and narrative drift?
