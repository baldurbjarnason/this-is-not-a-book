---
title: "Escalating requirements\: cyanide for projects"
date: "2015-08-22 13:51:53"
category: What_does_the_writer_want
---

## "What about magazines?"

It'd be fun here to pull an Anna Karenina reference and spin some yarn about digital projects being all unique in how they fail, but it just wouldn't be true.

What is true is that almost all digital projects—software, web, specifications work, even web 'content' creation—die the same way: in a cycle of escalating requirements. It always starts out fine, "We need to start a blog", "We need to standardise a thing for doing 'foo'", but then, like crows to carrion, the sh-sh-shoulds start flocking to the project.

"We really shouldn't just do a blog for just this project. We really should do a department blog as well."

"Oh, and the engineering department really should start one as well. We need to bring them in."

"Exactly. And that means we really should choose a blog system that supports an arbitrary number of blogs. Something like Wordpress MU instead of the regular kind. Sysadmins will have an opinion on that."

"That means we really should put together a blogging policy. Which means we need input from the HR, possibly the CEO."

That's just the beginning. Before you know it, the project is either indefinitely delayed and over budget, or it has been outright cancelled. And if you are really really unlucky, you will see the over-specced project completed. Which is when you'll discover that you have created a monstrosity: too many features, unusable UI, unstable as hell, buggier than an ant farm. The simple project that was supposed to solve a single problem in a simple way becomes a major productivity tax on your organisation.

Standards are especially prone to this cycle of doom except it rarely manes to kill off the specification: nobody gets fired for creating a horrible horrible specification. They always start off intending to create a simple solution to a shared problem but immediately the requirements start escalating.

"What about magazines?"

"What about academic journals?"

"What about cookbooks?"

"What about textbooks?"

Before you know it, the new specification is larger, more complex, and less usable than whatever proprietary solutions it is replacing. If you're really unlucky, the standard ends up being worse than the problem it's supposed to solve because you now still have the original problem but also have to deal with a bunch of buggy implementations of a half-baked standard. You don't get fired for creating a horrible specification but you do get fired for not defending your employer's turn in a standards organisation, even when giving up that ground is the right thing to do.

All of this has a simple solution: just say no. Pick a *small*, clearly defined problem and *just solve that problem*. Don't solve or fix *anything* else. Don't worry about not solving it in a clever enough way. Don't worry about future extensibility—at most you base your solution on somebody else's who has had to worry about it.

"But what about magazines? We really should keep them in mind. You can't just ignore a major potential use case."

Yes, we can. Just don't fall into the trap. Solve the first problem first. If you later find that that solution is too simple to use elsewhere—good!—that means you probably struck the right balance between usability and complexity. So you just start over:

1. Pick a problem. A small one. Clearly defined.
2. Solve just that problem and nothing else.
3. Ship it.

[You can't create a complex system that works from scratch.](https://en.wikipedia.org/wiki/John_Gall_(author)#Gall.27s_law) You just can't. And you can't *fix* an existing complex system that isn't working by making it more complex. ("We really should maintain backwards compatibility.")

Incrementally built simple systems that interlock into complex systems are the only way to create working large-scale digital projects. Don't fall into the trap of escalating requirements.
