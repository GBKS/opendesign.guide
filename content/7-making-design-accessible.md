---
title: Making Design Accessible
chapter: Chapter 7
description: Learn to create and share effective design assets in open source projects. Master file organization, documentation, and collaboration with the wider community.
colors:
  base: '#FEDADE'
  accentOne: '#F77C97'
  accentTwo: '#2461C2'
  card: '#0C288A'
thumbnail:
  - design-assets-thumb.jpg
  - design-assets-thumb@2x.jpg
thumbnail_back:
  - design-assets-thumb-back.png
  - design-assets-thumb-back@2x.png
thumbnail_mid:
  - design-assets-thumb-mid.png
  - design-assets-thumb-mid@2x.png
thumbnail_front:
  - design-assets-thumb-front.png
  - design-assets-thumb-front@2x.png
images:
  - design-assets.jpg
  - design-assets@2x.jpg
preview: design-assets-preview.jpg
---

# Making Design Accessible

In open source design, you're not just creating interfaces or graphics; you're sharing work that others can learn from, adapt, and build upon. Whether it’s a single feature for a small utility app or a comprehensive design system for a large application, the goal remains the same: to make your design accessible, understandable, and easy to collaborate on for other contributors.

## Starting Simple

Not every project needs extensive documentation or a complex design system right away. For smaller projects, you can include simple notes directly in your design files to help others understand and use your work effectively.

 For example, you could document:

- **The Problem:** Explain what issue you were trying to solve with your design.
- **Your Process:** Share how you approached the problem, including any research or brainstorming notes you have (don’t worry if they’re informal.)
- **Key Decisions:** Highlight key choices you made, like colors, layouts, or typography, and the rationale behind them.
- **How to Use the Design:** Provide clear, actionable instructions for using your designs.
- **Technical Details:** Include any specific information needed to use the design, like color codes.
- **Accessibility:** Explain how your design accommodates people with varying abilities.
- **Future Ideas:** Consider sharing thoughts on potential improvements or new directions for the design.

## Documentation That Fits

As the project evolves, so should your documentation. A small set of notes for a single interface sketch might grow into a library of reusable components and guidelines. Pay attention to the patterns that emerge as you work.

For example, if you notice that many designs use the same typography, button styles, or layout grids, it might be time to create a reusable component library or design system. Structured documentation — like a style guide helps maintain consistency as the project scales.

Adapt your documentation to the project’s growth and the needs of its contributors. Keep it practical and focused on enabling others to build upon your work effectively.

Over time, projects needs often evolve. What starts as a single interface sketch might gradually expand into a collection of reusable components. Pay attention to when repeated patterns emerge – this often signals when it's time to create more structured documentation or establish consistent guidelines.

## Design System Architecture

Eventually you may want to work towards a clear structure for your design files that makes sense to others, not just you. Think of it as creating a map that helps others navigate your design thinking:

1. Project Overview
   - Design principles and goals
   - User personas and scenarios
   - Key decisions and their rationale
   - Visual design language

2. Component Library
   - Core elements (typography, colors, spacing)
   - UI components with usage guidelines
   - Interaction patterns
   - Accessibility considerations

3. Templates and Patterns
   - Page layouts
   - Common user flows
   - Responsive behavior

## Organizing Files

Keep file organization simple but scalable. Even in a small project, clear file names and a logical folder structure make a big difference. Instead of complex hierarchies, focus on making it easy for others to find and understand your work.

A basic structure might look like this:
```
designs/
    README        # Project overview and guidelines
    docs/
        overview
        components
        patterns
    current/      # Active design files
    archive/      # Previous versions
    exports/      # Production-ready assets
```

Think of the README as the entry point to the documentation. It should include an overview and links to all important files and resources.

A few more tips:
- Use clear, descriptive names for layers and components
- Organize elements logically in the layer hierarchy
- Include status indicators (Draft, Review, Final)
- Use dates for versioning design iterations
- Document any special considerations or dependencies

## Mockups and Prototypes 

Your design deliverables — whether mockups, wireframes, or interactive prototypes — should match the needs of the project. For simple features, static mockups with clear annotations might be sufficient. For more complex interactions, clickable prototypes can help bring your ideas to life. The key is providing enough context for others to understand how the design should work.

Here's how to make prototypes and mockups more valuable:

### Start with a Clear Problem Statement

Before you create mockups or prototypes, define what you're solving for. Include:
- The specific problem your design addresses. (_"Users need an easier way to navigate long forms.")_
- User needs being addressed (_"Quick access to saved drafts."_)
- Any constraints, like technical limitations. (_"Form components must load dynamically."_)
- Assumptions behind your design decisions. (_"Users will save progress at least once before submitting."_)

### Use Progressive Disclosure

Good prototypes and mockups communicate at different levels of detail. Now, depending on the audience:
- Start with a high-level overview: What’s the purpose of this design, and how does it fit into the bigger picture? (_"This dashboard redesign streamlines reporting tasks for admin users."_)
- Add implementation details: Specifics for developers, like spacing, typography, or interaction states. (_"Buttons have a 24px padding, hover states use #3A8FFF."_)
- Include design rationale: Explain the _"why"_ behind your choices to help others learn. (_"We moved the primary action to the top because users prioritize efficiency."_)
- Link to research findings when relevant: Back up your decisions with evidence. (_"Usability tests showed a 30% faster completion time with this layout."_)

### Make It Interactive When Necessary

Clickable prototypes are invaluable for illustrating complex user flows or behaviors. Use interactive elements to:

- Demonstrate key user flows, like signing up or making a purchase
- Show state changes and transitions, such as hover effects or error messages
- Highlight responsive design, like adapting to mobile or tablet views
- Document edge cases and exceptions, like error pages or states without data

## Visual Assets That Scale

Whether you're creating a single icon or a complete interface, think about how others might need to modify or extend your work. Save your work in flexible formats and include any relevant usage guidelines. Here are some things to think about:

### Technical Considerations

- Use scalable formats (SVG for icons and logos)
- Provide assets in multiple resolutions if needed, especially for responsive designs
- Include source files for easy modification
- Document export and other settings

### Accessibility and Adaptation

- Design with different contexts in mind
- Provide variations for dark mode, high contrast, or other accessibility needs
- Write clear guidelines for modifying the assets, ensuring consistency across adaptations
- Consider different cultural or regional implications (like color symbolism or text direction)

### Include Style and Usage Guidelines

Help contributors understand how to use your designs effectively:

- Define the visual style — colors, typography, spacing, and tone
- Clarify where and how assets can be used (like logos for headers, not backgrounds)
- Include examples of proper and improper usage or modifications to avoid misinterpretation
- Provide info on whether and how attribution is required for external reuse

## Scaling Your Contributions

As you become more involved in a project, you can contribute beyond individual designs by improving the project's overall design process. This doesn’t mean imposing complex systems upfront — but building what’s needed, when it’s needed. Let the project’s needs guide the level of structure you introduce. Simple, lightweight solutions are often more impactful than complex ones.

## Conclusion

Open-source design is about more than creating something beautiful or functional — it’s about enabling others to collaborate, learn, and build upon your work. This philosophy drives the open-source ecosystem, and it’s just as crucial in design.

### Key Takeaways

- **Design with Collaboration in Mind:** Every component, icon, or system you create is a building block for someone else. By making your work accessible and understandable, you’re opening doors for others to contribute and innovate.

- **Start Small, Scale Thoughtfully:** You don’t need to create a complex system on day one. Start by documenting small components or organizing files clearly. As the project grows, your contributions can evolve to meet new challenges.

- **Embrace Collective Growth:** The most impactful open designs aren’t just great in isolation — they’re tools for shared success. By sharing your thought process, decisions, and learnings, you’re building a foundation for others to create, adapt, and improve upon.