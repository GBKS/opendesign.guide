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

User Experience design in open source projects presents unique challenges and opportunities. While many successful open source projects may have interfaces that seem complex or unpolished by commercial standards, they often maintain devoted user bases. This demonstrates an important principle: good UX isn't always about minimalist design or following commercial software conventions.

In fact, some open source projects intentionally maintain a "hacker" aesthetic or complex interface because it better serves their user base's needs and expectations. For their users, a more technical interface can reinforce the sophisticated computational processes happening under the hood and provide the flexibility they need for custom workflows.

However, this doesn't mean we should ignore UX improvements. The key is understanding your specific user community and making thoughtful, targeted improvements that enhance rather than detract from their experience.

## Understanding Your Community

Before making any changes, you need to really get to know your users – and in open source, this is both easier and harder than you might think. It's easier because your users are often right there in your community forums, actively discussing their needs. It's harder because open source projects typically serve wildly different types of users, from beginners to experts, each with their own preferences [C5](/5-design-process#conducting-user-research){:class='chapter-link'}.

Getting to know your users is like being a good host at a party. Spend time listening to conversations in community forums. Watch how people use your software. Pay attention to the workarounds they develop – these are like subtle hints that something could be improved. When users file bug reports or feature requests, look beyond the immediate issue to understand the underlying need they're expressing.

## Making Smart Improvements

Think of improving UX like renovating a house that people are living in – you want to make things better without disrupting what's already working well. This is where the 80/20 rule comes in handy: look for changes that take 20% of the effort but create 80% of the impact. In open source projects, where resources are often limited, this approach is particularly valuable.

For instance, sometimes just improving error messages can make a world of difference. Instead of a cryptic technical error, give users clear guidance about what went wrong and how to fix it. It's like turning "Error 404" into "We couldn't find that page – here are some places you might want to look instead."

## Visual Styling

Think of visual styling as the universal language of your application. When a project lacks consistent design, it's like trying to read a book where every page uses different fonts and layouts – it's jarring and distracting. Many open source projects grow organically without dedicated design guidance, leading to inconsistent buttons, text styles, and colors.

Creating a cohesive visual style isn't just about aesthetics – it's about building trust and reducing cognitive load. When interface elements follow consistent patterns, users can focus on their tasks rather than figuring out how different parts of the interface work. The best part? Visual improvements often require minimal code changes while creating immediate, visible impact for users.

## Usability

Usability improvements are like clearing a path through a forest – you're making the journey easier for everyone who follows. The best place to start is by using the software yourself and documenting every friction point you encounter. No detail is too small, as even minor annoyances can add up to significant user frustration.

Focus on issues that affect core functionality, impact many users, and can be fixed with reasonable effort. Test your solutions with other users before proposing changes. Remember, good usability often goes unnoticed – and that's exactly the point. Users should be able to focus on their tasks without thinking about the interface.

- [Styling and usability recommendations for the export screens](https://github.com/BlueWallet/BlueWallet/issues/3885){:target="_blank"} (Blue Wallet)

## Accessibility tweaks

Making software accessible isn't about serving a specific group of users – it's about making it work better for everyone. Think about curb cuts in sidewalks: they were designed for wheelchair users, but they also help people with strollers, delivery workers, and travelers with rolling luggage. Digital accessibility works the same way: improvements that make software more accessible often make it better for all users.

Take the work done in the [Blue Wallet](http://bluewallet.io){:target="_blank"}, for example. They improved accessibility through a series of relatively small changes. As part of [Global Accessibility Day](https://accessibility.day){:target="_blank"}, the [Bitcoin Design Community](https://bitcoin.design){:target="_blank"} organized an accessibility audit which identified issues like insufficient color contrast and poor screen reader support. Instead of attempting a complete overhaul, they created specific, actionable issues that could be addressed one at a time. This made the improvements manageable for contributors and easier for the community to review and accept. Here are some of those issues:

- [Improve accessibility of the Wallet Export screen](https://github.com/BlueWallet/BlueWallet/issues/4742){:target="_blank"} (Blue Wallet)
- [Make QR code on receive screen accessible](https://github.com/BlueWallet/BlueWallet/issues/5388){:target="_blank"} (Blue Wallet)
- [Improve accessibility of floating buttons (scan, send, receive)](https://github.com/BlueWallet/BlueWallet/issues/5389){:target="_blank"} (Blue Wallet)

## Navigation and Information Architecture

Good navigation is key to users finding what they are looking for. As a project adds more features or expands it userbase, navigation often needs to be adjusted. This might be a complete restructuring, or moving an individual link to a more intuitive location. Here are two examples from BTCPay:

- [UI: Move app's invoices link to the top](https://github.com/btcpayserver/btcpayserver/pull/6429){:target="_blank"} (BTCPay)
- [UI: Move section navigation to sidebar](https://github.com/btcpayserver/btcpayserver/pull/5744){:target="_blank"} (BTCPay)

## Documenting UX Guidelines

As you improve the UX of your project, it's important to document your decisions. This helps keep things consistent, especially when new contributors join. Some examples:

- [Create a feature list in the design docs](https://github.com/BitcoinDesign/Bitcoin-Core-App/issues/125){:target="_blank"} (Bitcoin Core App)

## The Power of Standards

Sometimes the best way to improve user experience isn't about changing how things look – it's about getting everyone to do things the same way. That's where standards come in. When different applications follow the same patterns, everything becomes easier for users. Think about it like having the same keyboard layout on every computer – it just makes sense!
Here are some great examples of standards making bitcoin more user-friendly:

- [WhenTaproot](http://whentaproot.org){:target="_blank"} helps applications implement Bitcoin Taproot features consistently
- [BitcoinQR](http://bitcoinqr.dev){:target="_blank"} makes QR codes work the same way across different Bitcoin wallets
- [BOLT12](http://bolt12.org){:target="_blank"} promotes adoption of new Bitcoin Lightning Network features

When applications follow these kinds of standards, users don't have to learn new ways of doing things every time they try a different tool. It's like speaking the same language – everything just flows better.
But creating new standards isn't a quick fix. It's more like planting a garden that needs constant care:

1. You need to plan everything out carefully
2. You have to talk with lots of different people and projects
3. It takes patience to convince others to adopt your ideas
4. You'll probably need to adjust things based on feedback
5. Building agreement takes time and effort

Remember, when you propose a new standard, you're asking the whole ecosystem to change how they do things. That's a big ask! It works best when you keep the conversation going and stay open to ideas from the community.

## Moving Forward

As you work on improving UX in open source projects, remember that success often looks different than it does in commercial software. Focus on understanding your specific user community and making thoughtful, incremental improvements that respect their needs and workflows. Don't be afraid to maintain a technical interface if that's what serves your users best, but also don't assume that complexity is always necessary.

Most importantly, keep your community involved throughout the process. Their insights and feedback are invaluable in creating improvements that truly serve their needs. After all, open source is about working together to create something better than any of us could create alone.