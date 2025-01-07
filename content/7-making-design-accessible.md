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

When we contribute to open source projects, we're doing more than just creating interfaces or graphics – we're sharing work that others can learn from, adapt, and improve upon. This might mean designing a single feature for a small utility app, creating icons for a developer tool, or building a comprehensive design system for a large application. The size of the project doesn't matter as much as the approach: making our work accessible and understandable to others.

## Starting Simple

Not every project needs extensive documentation or a complex design system. For a small project, you might simply include notes directly in your design files explaining key decisions and usage guidelines. 

As an example, you might document:

- **The Problem:** Explain what issue you were trying to solve with your design.
- **Your Process:** Even if informal, share how you came up with the design, including any research you did.
- **Key Decisions:** Talk about important choices you made, like why you picked certain colors or layouts.
- **Challenges and Solutions:** Share insights on any difficult questions or deeper problems you encountered during the design process and how you resolved them.
- **How to Use It:** Give clear instructions on how your design should be used.
- **Technical Details:** Include any specific information needed to use the design, like color codes.
- **Accessibility:** Explain how your design works for people with different abilities.
- **Future Ideas:** If you have thoughts on how the design could be improved later, share those too.

## Documentation That Fits

As the project grows, you can expand this documentation based on the questions other contributors ask and the patterns that emerge.

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

The complexity of your design deliverables should match the needs of your project. For a simple feature, static mockups with clear annotations might be sufficient. For more complex interactions, you might need clickable prototypes. The key is providing enough context for others to understand how the design should work.

Here's how to make prototypes and mockups more valuable:

### Context and Purpose

Start each design exploration with:
- The problem being solved
- User needs being addressed
- Technical constraints considered
- Assumptions made

### Progressive Disclosure

Layer your information:
1. High-level overview for quick understanding
2. Detailed specifications for implementation
3. Design rationale for deeper learning
4. Research findings that informed decisions

### Interactive Elements

When appropriate and possible, create interactive prototypes that:
- Demonstrate key user flows
- Show state changes and transitions
- Highlight responsive behavior
- Include error states and edge cases

## Visual Assets That Scale

Whether you're creating a single icon or a complete interface, think about how others might need to modify or extend your work. Save your work in flexible formats and include any relevant usage guidelines. Here are some things to think about:

### Technical Considerations

- Use scalable formats (SVG for icons and logos)
- Provide multiple resolutions when needed
- Include source files for easy modification
- Document export and other settings

### Accessibility and Adaptation

- Design with different contexts in mind
- Provide variations for different uses
- Include guidelines for modification
- Consider cultural implications

### Style Guidelines

- Visual style and consistency
- Usage contexts and restrictions
- Modification options
- Attribution requirements

## Growing Your Impact

As you become more involved in a project, you might find opportunities to improve its overall design process. This could be as simple as creating templates for future design contributions or as involved as helping establish design guidelines. Let these systems grow naturally based on the project's needs rather than forcing complex processes too early.

## Conclusion

Effective open source design is about creating work that others can understand, use, and build upon. By making your process transparent and your files accessible, you enable true collaboration and collective improvement. Start small – perhaps by better documenting one component or reorganizing one set of files – and expand your approach as you see the benefits of increased clarity and collaboration.

The most successful open source designs aren't just well-crafted – they're well-documented, easily understood, and ready for others to build upon. By sharing not just what we create but how and why we create it, we strengthen the entire open source design ecosystem.