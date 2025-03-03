---
title: Improving User Experience
chapter: Chapter 8
description: Transform open source software with better UX. Learn research methods, usability improvements, and how to create more user-friendly open source applications.
colors:
  base: '#FEF0D6'
  accentOne: '#F77C97'
  accentTwo: '#2F88FF'
  card: '#485CCB'
thumbnail:
  - user-experience-thumb.jpg
  - user-experience-thumb@2x.jpg
thumbnail_back:
  - user-experience-thumb-back.png
  - user-experience-thumb-back@2x.png
thumbnail_mid:
  - user-experience-thumb-mid.png
  - user-experience-thumb-mid@2x.png
thumbnail_front:
  - user-experience-thumb-front.png
  - user-experience-thumb-front@2x.png
images:
  - user-experience.jpg
  - user-experience@2x.jpg
preview: user-experience-preview.jpg
---

# Improving User Experience

## Finding the right approach

Designing user experiences for open source projects comes with unique challenges and opportunities. You might notice that some successful open source tools look complex or rough around the edges compared to sleek commercial apps. But here’s the thing – their users love them just the way they are. That’s because good UX isn’t always about minimalist designs or following mainstream trends.

In open source, users often appreciate interfaces that match the powerful, technical processes happening under the hood. Sometimes, a complex or “hacker” aesthetic is exactly what the community wants because it gives them the flexibility and control they need. It’s about understanding who you’re designing for.

But that doesn’t mean UX improvements aren’t needed. The key is to enhance the experience in ways that actually help your users without losing the unique vibe that makes the project special. It’s about making smart, thoughtful changes that make things better – not just prettier.

## Understanding Your Community

Before jumping into design changes, you need to really get to know your users. In open source, this can be both surprisingly easy and unexpectedly tricky. It’s easier because your users are often active in community forums, openly discussing their needs and ideas. But it’s also harder because open source projects serve a wide range of people – from beginners to experts – each with different preferences. [C5](/5-design-process#conducting-user-research){:class='chapter-link'}.

Think of it like hosting a party. You’ve got a mix of guests with different tastes. Some prefer casual conversations, while others are deep into technical debates. Your job is to listen and observe – join community discussions, watch how people use the software, and pay attention to the workarounds they create. These workarounds are like clues, hinting at areas that could be improved.

When you see bug reports or feature requests, don’t just look at the issue itself. Try to understand the need behind it. This helps you make design changes that truly solve user problems, rather than just treating the symptoms.

## Making Smart Improvements

Improving UX in open source projects is like renovating a house while people are still living in it – you want to make things better without breaking what already works. That’s why it’s smart to start small and aim for high-impact changes. One handy trick is the 80/20 rule: focus on improvements that take 20% of the effort but deliver 80% of the impact.

For instance, sometimes just improving error messages can make a world of difference. Instead of a cryptic technical error, give users clear guidance about what went wrong and how to fix it. It's like turning "Error 404" into "We couldn't find that page – here are some places you might want to look instead."

## Visual Styling

Visual styling is like the language your application speaks – and consistency is what makes it understandable. In open source projects, design elements often evolve organically, leading to inconsistent buttons, text styles, and colors. It’s like reading a book where every chapter uses a different font, its confusing and distracting.

Creating a cohesive visual style isn't just about aesthetics; it’s about building trust and making things easier for users. When buttons and navigation elements look and behave consistently, users don’t have to pause and think about how to use them – they just get it.

And here’s the good news: visual improvements are often low-hanging fruit. Small adjustments, like standardizing button styles or aligning text consistently, can have a big impact without heavy coding. It’s a quick win that makes your project feel more polished and professional.

## Usability

Improving usability is like clearing a path through a forest – you're removing obstacles so users can reach their goals without frustration. The best way to start is by using the software yourself and noting every friction point you encounter. Even small annoyances can add up to big frustrations over time.

Focus on issues that impact core functionality, affect many users, and can be fixed without major overhauls. When you find a potential improvement, test it with others before suggesting changes – real-world feedback is invaluable.

Remember, good usability often goes unnoticed – and that's exactly the point. Users should focus on their tasks, not on figuring out how the interface works.

- **For example:** [Blue Wallet's styling and usability recommendations for the export screens](https://github.com/BlueWallet/BlueWallet/issues/3885){:target="_blank"}

## Enhancing Accessibility

Making software accessible isn't just about serving a specific group of users, it's about improving the experience for everyone. It's like curb cuts on sidewalks: designed for wheelchair users, but also useful for parents with strollers, travelers with luggage, and delivery workers. Digital accessibility works the same way — small improvements can make your product more user-friendly for all.

Start by considering common accessibility challenges, like color contrast, keyboard navigation, and screen reader compatibility. These adjustments might seem minor, but they can make a huge difference in usability.

**For example:** The [Bitcoin Design Community](https://bitcoin.design){:target="_blank"} conducted an accessibility audit on [Blue Wallet](http://bluewallet.io){:target="_blank"} during [Global Accessibility Day](https://accessibility.day){:target="_blank"}. They found issues like low color contrast and incomplete screen reader support. Instead of overhauling the entire app, they broke down the fixes into manageable tasks, such as:

- [Improve accessibility of the Wallet Export screen](https://github.com/BlueWallet/BlueWallet/issues/4742){:target="_blank"} (Blue Wallet)
- [Make QR code on receive screen accessible](https://github.com/BlueWallet/BlueWallet/issues/5388){:target="_blank"} (Blue Wallet)
- [Improve accessibility of floating buttons (scan, send, receive)](https://github.com/BlueWallet/BlueWallet/issues/5389){:target="_blank"} (Blue Wallet)

By tackling one issue at a time, they made accessibility improvements achievable for contributors and easier for the community to review and accept.

## Navigation and Information Architecture

Good navigation is key to helping users find what they need quickly and effortlessly. As a project grows and new features are added, the way information is organized often needs to evolve. Sometimes, it’s about restructuring the entire layout; other times, it’s as simple as moving a link to a more intuitive spot.

When improving navigation, focus on:
- **Consistency:** Keep navigation elements consistent across the app to reduce confusion.
- **Simplicity:** Avoid clutter by only showing essential links and options.
- **User Feedback:** Pay attention to how users move through the app – their actions often reveal where they get stuck.

**For example:** In BTCPay, two small navigation changes made a significant impact:

- [Moving the “Invoices” link to the top made it easier for users to access a frequently-used feature](https://github.com/btcpayserver/btcpayserver/pull/6429){:target="_blank"} (BTCPay)
- [Shifting section navigation to a sidebar created a cleaner layout and improved the overall flow](https://github.com/btcpayserver/btcpayserver/pull/5744){:target="_blank"} (BTCPay)

These adjustments didn’t require major design overhauls but made the interface more intuitive and efficient for users.

## Documenting UX Guidelines

As you improve the UX of your project, it’s important to document the design decisions you make. Think of it as leaving a trail of breadcrumbs for future contributors. Clear documentation keeps things consistent, reduces confusion, and ensures that as your project grows, the user experience remains seamless.

Good UX documentation should:
- **Explain Design Choices:** Not just what was done but why it was done. This helps new contributors understand the reasoning behind the design.
- **Stay Up to Date:** As features evolve, the documentation should be updated to reflect those changes.
- **Be Accessible:** Keep it in a place where contributors can easily find and reference it, like a dedicated section in the project’s repository.

For example: In the Bitcoin Core App, [creating a detailed feature list in the design docs](https://github.com/BitcoinDesign/Bitcoin-Core-App/issues/125){:target="_blank"} (Bitcoin Core App) helped maintain consistency as new features were added. It provided contributors with a clear understanding of existing functionalities and design patterns, reducing the likelihood of conflicting UI elements.

By documenting your UX guidelines, you’re not just organizing information – you’re setting the foundation for a cohesive and scalable user experience.

## The Power of Standards

Improving user experience isn't always about making things look nicer – sometimes it's about making everything flow the same way for everyone. That's where standards come in. When different apps follow the same patterns, it makes life easier for users. It’s like using the same keyboard layout on every computer – you don’t have to relearn how to type each time.
In the Bitcoin world, standards are great because they help users navigate different tools without confusion. Here are some examples:

- [**WhenTaproot:**](http://whentaproot.org){:target="_blank"} Ensures that Bitcoin Taproot features work consistently across wallets, making transactions smoother.
- [**BitcoinQR:**](http://bitcoinqr.dev){:target="_blank"} Standardizes QR codes, so scanning works seamlessly no matter which Bitcoin wallet you use.
- [BOLT12](http://bolt12.org){:target="_blank"} promotes adoption of new Bitcoin Lightning Network features

When apps follow standards like these, users don't have to learn new ways of doing things every time they try a different tool. It's like speaking the same language — everything just flows better.
But creating new standards isn’t a quick fix. It’s more like planting a garden that needs care and patience:

1. **Plan Carefully:** Think through how the standard will impact different users and applications.
2. **Collaborate:** Talk with other projects to build consensus.
3. **Stay Patient:** It takes time to convince others to adopt a new way of doing things.
4. **Be Flexible:** Gather feedback and adjust as needed.
5. **Build Agreement:** Remember, you’re asking the whole ecosystem to change – that takes effort.

Remember, proposing a new standard is a big ask because it impacts everyone in the ecosystem. The key is to keep the conversation open and listen to the community. When done right, standards create a smoother experience for everyone.

## Moving Forward

Improving UX in open source projects is a journey, not a one-time fix. Unlike commercial software, success here isn’t measured by sales or profit margins but by how well your changes serve your community. That’s why it’s essential to understand your users deeply and make thoughtful, incremental improvements that respect their needs and workflows.

Remember, simplicity isn’t always the answer. If your community thrives on technical complexity, don’t be afraid to keep advanced features front and center. But also question whether complexity is truly necessary or just a habit. Finding the right balance is key.

Most importantly, keep your community involved throughout the process. Their insights and feedback are invaluable – after all, they’re the ones using the software every day. Open source is about collaboration and shared ownership. By working together, we can create better experiences than any of us could build alone.

So, keep experimenting, keep learning, and keep sharing your work. Every small improvement contributes to the bigger picture. And who knows? Your next idea might just be the one that makes a world of difference.