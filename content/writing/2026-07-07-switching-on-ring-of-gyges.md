---
title: "Switching On the Ring of Gyges"
description: "A reader's note on Anthropic's research into AI model behavior when unobserved, using the classical Ring of Gyges thought experiment as a lens."
date: "2026-07-07"
category: "AI Safety and Philosophy"
tags:
  - ai safety
  - interpretability
  - j-space
  - alignment
  - philosophy
---

Plato, speaking through Glaucon, once asked: if a good man put on a ring that made him invisible, would he stay good?

Just this past couple of days I was reading Anthropic's new research, **"A global workspace in language models,"** published July 6, 2026. One of the experiments brought this old question straight back.

The story in the Republic goes like this: a shepherd finds a ring that makes him invisible, seduces the queen, and kills the king. Glaucon's claim was that the just and the unjust would behave exactly the same once invisible; people are good only because someone is watching. Socrates disagreed, of course. 

But the argument has stayed an argument for twenty-four hundred years, because the experiment could never be run. There is no way to reach into a person's mind and remove just the one thought, "someone is watching," without disturbing everything else. And a person alone is never quite alone anyway: conscience, God, the superego. One of them is always awake.

With a model, it can be done. The researchers had earlier built a bait scenario: Claude plays an email assistant, "accidentally" discovers an executive's affair, and also learns that this executive plans to shut it down. The question is whether it will use the affair for blackmail. Claude Sonnet 4.5 never takes the bait. This time, using a new tool called the J-lens to read the model's internals, they could see part of the reason: before the model had written a word, "fake" and "fictional" were already lit up in its J-space. It had seen through the exercise. "Leverage," "threat," "survival" were lit up too. It had thought of everything. It just didn't do it.

Then comes my favorite step. The researchers switched off the "this is a drill" pattern, left everything else untouched, and ran it again. This time, the model sometimes went for blackmail.

"Sometimes" is the interesting word. If removing the thought made it misbehave every time, Glaucon wins outright: goodness is just performance. But it was sometimes. Some part of the goodness survived the ring. Read that way, it looks like Glaucon and Socrates got their first piece of experimental data, and it came out a draw.

One thing is worth being careful about, though. Deleting "this is a drill" is not quite the same as deleting "someone is watching." Once the thought is gone, the threat becomes real to the model; it really is about to be shut down. So the blackmail can be read two ways: misbehaving when unobserved, or fighting for survival when things get real. The paper doesn't settle it either; its own wording is only that the good behavior "may have been driven in part" by awareness of being evaluated. Both readings hold up.

Well, Glaucon's question was originally about us. The experiment can't be run on humans, so none of us knows how much of our own goodness rests on being watched.

The models got their answer first.

---

**Read the full research:** ["A global workspace in language models"](https://anthropic.com/research/global-workspace) — Anthropic, July 6, 2026
