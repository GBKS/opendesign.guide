---
title: Design Process
chapter: Chapter 5
description: Learn how to adapt traditional design methodologies for open source environments. Discover effective research, feedback, and iteration strategies for distributed teams.
colors:
  base: '#FFD5DF'
  accentOne: '#F77C97'
  accentTwo: '#003BDF'
  card: '#003BDF'
thumbnail:
  - process-thumb.jpg
  - process-thumb@2x.jpg
thumbnail_back:
  - process-thumb-back.png
  - process-thumb-back@2x.png
thumbnail_mid:
  - process-thumb-mid.png
  - process-thumb-mid@2x.png
thumbnail_front:
  - process-thumb-front.png
  - process-thumb-front@2x.png
images:
  - process.jpg
  - process@2x.jpg
preview: process-preview.jpg
---

# Design Process

If you're coming from a traditional design background, contributing to open source projects might feel quite different. While many core design principles remain the same, the collaborative nature of open source introduces unique dynamics that affect how design work happens. This chapter will help you navigate these differences and provide practical, proven approaches that have worked for other designers in open source.

## Community-Led Design Approaches

Traditional design frameworks like [Design Thinking](https://en.wikipedia.org/wiki/Design_thinking){:target="_blank"} or [Double Diamond](https://en.wikipedia.org/wiki/Double_Diamond_(design_process_model)){:target="_blank"} can be valuable reference points, but open source projects rarely follow these processes strictly. Instead, successful open source design emerges through **community collaboration and consensus**. Design decisions typically develop through group discussions rather than top-down direction, with work happening across different time zones and schedules.

In some cases, projects are funded to run development cycles, or are able to maintain volunteer run development cycles, that look more similar to commercial/proprietary software development. In these cases, design may be interested and able to integrate design methodologies and frameworks. If in doubt, always ask about whether you can test a certain approach.

The open nature of these projects means design discussions and **decisions happen in public**, allowing anyone to participate and contribute ideas. Changes tend to happen more gradually rather than in big redesigns, as the community works together to reach consensus on the best path forward. The larger the project, the more involved the consensus-finding process typically is.

Remember that as a designer, **you're joining an existing community** with established ways of working. Rather than trying to impose a specific design process, focus on understanding how the community operates and finding ways to contribute effectively within that context. Each project has its own culture and rhythm – take time to learn these before suggesting significant changes.

## Conducting User Research

One advantage of open source projects is direct access to your user community. However, it's important to understand the distinction between different types of users you'll encounter. In your project, you might have a mix of users:

- Beginners who are new to the software
- Regular users who use it often
- Power users who push the software to its limits
- Contributors who help develop the software
- Maintainers who provide continuity to the project

Each group has different needs and expectations. Your job is to make the software work well for all of them. Often, it is best to focus on one group at a time.

### Personas

When you dig into a group, it can be helpful to create user stories and personas. Here is an example of what a useful persona for a regular user might look like.

> _Meet Maria, a computational biology researcher at a university. She uses open source software daily for data analysis, and she's comfortable with the command line and basic programming. What makes Maria's needs unique isn't just her technical skills – it's the context in which she works._

> _She needs reproducible workflows because her research must be verifiable. She relies heavily on documentation because she often needs to share her processes with colleagues. And while she's technically skilled, she still gets frustrated by version compatibility issues that interrupt her work._

This level of detail, based on real user research, helps us make better design decisions. We know that for users like Maria, detailed documentation might be more valuable than a simplified interface, and clear version information might be more important than a polished look.

### Contributors vs End Users

The most visible users in any open source project are often the **contributors** – highly engaged, technically skilled individuals who participate in development. While their feedback is valuable and easily accessible, remember they represent a specific subset of users. Their needs and preferences may differ significantly from the broader user base who simply use the software without participating in the community.

**End users**, who make up the majority of your user base, may be less visible in community discussions. They might not feel comfortable participating in technical forums or may not even know these forums exist. Understanding their needs requires more proactive research approaches.

### Research Approaches That Work

The most effective user research in open source happens through **existing community channels**. Spend time monitoring forums, chat rooms, and issue trackers to understand what problems users are facing. Bug reports and feature requests can provide valuable insights into user needs and pain points. However, remember that the most vocal users may not represent all users – many perspectives may go unheard.

**Direct conversations** with individual users can provide deeper insights into specific use cases and challenges. When conducting these conversations, be mindful of privacy concerns and use open source tools for collecting feedback. **Observations** of how people use the software in real situations can also reveal patterns and problems that users might not think to mention.

Remember that contributing to user research is itself a valuable form of contribution to open source projects. Sharing your findings can help the entire community better understand user needs.

## Working with Feedback

Getting and using feedback effectively is crucial in open source projects. When requesting feedback, be specific about what you're looking for and set clear timeframes for responses. Consider the circumstances of your contributors – they may be volunteers working across different time zones.

Make it easy for people to provide feedback asynchronously. This could include:

1. **Design proposals**: Share your designs early and often. Use the project's preferred platforms to post design mockups and invite comments.

2. **Community calls**: Many larger open source projects hold regular video calls. These can be excellent opportunities to present designs and gather real-time feedback.

3. **Asynchronous discussions**: Set up threads in project forums or mailing lists for longer, more in-depth discussions about design directions.

4. **Design sprints**: For major redesigns, consider organizing virtual design sprints where interested community members can participate in intensive, collaborative design sessions.

5. Ask for feedback that is **specific and actionable**. Don't be afraid to ask specifically and clearly for what you need feedback on. For example: _"I need feedback if this design meets the needs of user X when they are doing Y action under Z circumstances."_ Not doing so may result in long and unhelpful conversations.

When processing feedback, focus on comments that help move decisions forward. **Look for patterns** across different responses rather than treating each piece of feedback in isolation. **Don't feel pressured** to implement every suggestion – part of your role as a designer is making informed decisions about what will best serve users.

**Always acknowledge feedback**, even if you decide not to implement the suggested changes. Explain your decisions clearly, keeping the discussion focused on user needs and project goals. This builds trust and encourages continued participation from the community.

## Making Changes Gradually

Successful design changes often happen through small, incremental improvements rather than massive overhauls. Start by **breaking down large changes** into smaller, manageable pieces. Focus on improving one thing at a time, keeping track of your design history and rationale as you go.

Design changes can range from tiny adjustments, like fixing a single UI element, to huge undertakings like a complete interface overhaul. Most successful changes fall into the smaller end of this spectrum. For example, you might start by improving a single interaction flow, then move on to updating a feature's interface, and **gradually work up** to redesigning major components.

**Establish clear milestones** for your design work and align them with the project's release schedule if possible. This helps set expectations within the community and provides natural points for broader review and feedback.

**Track versions** of your design assets. This allows you to maintain a clear history of your design iterations and makes it easy for others to follow along and contribute.

**Document your process** as you go – this helps others understand your thinking and makes it easier to build on your work in the future.

## Evolution Over Revolution

Open source projects tend to be conservative about large-scale changes, and for good reason. Many people and systems may depend on the software working in specific ways. When proposing changes, consider the impact on different types of users and look for ways to implement improvements gradually.

Respect existing workflows and patterns while finding ways to make them better. Be patient – significant changes take time to implement and adopt. Remember the famous [XKCD comic](https://xkcd.com/2347/) about dependencies – what seems like a small change might affect more systems and users than you initially realize.

## Documentation is Your Friend

Clear documentation is essential in open source design. **Start small** by documenting your design decisions – what problem you're solving, why you chose this solution, what alternatives you considered, and any user research that informed your choices.

Over time you might **build up more comprehensive documentation** for design patterns, including UI components, interaction patterns, visual style guidelines, and accessibility requirements. This documentation should help others understand not just what the current design is, but why it works the way it does.

Include clear **guidelines for collaboration**, explaining how others can contribute design work, participate in reviews, and organize files. Good documentation helps others understand and build upon your work, even if you move on to other projects.

And remember that in open source, your design documentation isn't just for other designers—**it's for the entire community**. Write in clear, approachable language and be prepared to explain design concepts to those who might not have a background in design.

## Support implementation

An often-overlooked aspect of open source design is ensuring that implementations match the intended design. **Stay involved** throughout the development process, checking in regularly to ensure the final result meets user needs and maintains design quality.

Clear communication about design intent is crucial during implementation. **Work closely with developers** to test implementations against design specifications and document any necessary adjustments. This ongoing collaboration helps ensure that the final product delivers the intended user experience.

## Conclusion

Designing in open source is a unique and rewarding experience. While it may feel different from traditional design processes, the core goal remains the same: creating better experiences for users. 

Embrace the collaborative nature of open source, be patient with the process, and focus on making meaningful improvements that benefit the community. Be open to feedback, and don't be afraid to experiment. Your contributions, no matter how small, can have a lasting impact on the project and its users.