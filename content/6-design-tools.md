---
title: Tools and Resources
chapter: Chapter 6
colors:
  base: '#FEE6E4'
  accentOne: '#ADE3F5'
  accentTwo: '#FFA8AD'
  card: '#233F68'
thumbnail:
  - tools-thumb.jpg
  - tools-thumb@2x.jpg
images:
  - tools.jpg
  - tools@2x.jpg
---

# Tools and Resources

## Introduction to Open Source Design Tools

As a designer contributing to open source projects, you'll find that your choice of tools can significantly impact your workflow and your ability to collaborate effectively with the community. While many designers are accustomed to proprietary software like Adobe Creative Suite or Sketch, the open source world often favors tools that align with its philosophy of openness and accessibility.

Embracing open source design tools not only demonstrates your commitment to the open source ethos but also ensures that your work is accessible to a wider range of contributors. Many of these tools are powerful alternatives to their proprietary counterparts and are continually improving thanks to active community development.

## Vector Graphics: Inkscape

Inkscape is a powerful vector graphics editor that serves as an excellent alternative to Adobe Illustrator. It supports a wide range of vector formats, including SVG, which is particularly useful for web graphics and icon design. Inkscape offers a comprehensive set of tools for creating and manipulating vector shapes, working with text, and applying various effects.

One of Inkscape's strengths is its extensibility. The software supports Python scripts and extensions, allowing you to automate repetitive tasks or add new functionalities. This can be particularly useful when working on large-scale design projects for open source software.

When using Inkscape for open source projects, consider creating your designs at multiple scales to ensure they look good on different devices and at various sizes. Inkscape's SVG output is clean and standards-compliant, making it ideal for use in web applications or as a basis for further manipulation in code.

## Raster Graphics: GIMP

GIMP (GNU Image Manipulation Program) is a robust alternative to Adobe Photoshop. While its interface may take some getting used to, GIMP offers a comprehensive set of tools for image editing, photo retouching, and creating raster graphics.

GIMP's layer-based editing system allows for complex compositions, and its support for a wide range of plugins extends its capabilities even further. When working on open source projects, GIMP's ability to handle a variety of file formats becomes particularly useful, as you may need to work with legacy graphics or output your work in specific formats for different use cases.

One particularly useful feature of GIMP for open source design is its scripting capabilities. You can use Scheme or Python to automate tasks, which can be a huge time-saver when working on large projects or when you need to apply consistent edits across multiple images.

## UI Design: Pencil Project

While many commercial UI design tools exist, the open source Pencil Project offers a solid alternative for creating user interface mockups and prototypes. Pencil provides a range of built-in shapes and UI elements, and also allows you to create your own reusable shapes, making it suitable for designing consistent interfaces across an entire application.

Pencil's ability to export to various formats, including HTML and PDF, makes it easy to share your designs with the broader open source community. Its cross-platform nature (available for Windows, macOS, and Linux) ensures that your design files will be accessible to contributors regardless of their operating system.

When using Pencil for open source projects, consider creating a shared library of UI components that match the project's visual style. This can help maintain consistency across different parts of the application and make it easier for multiple designers to contribute to the project.

## 3D Modeling: Blender

While not all open source projects require 3D graphics, for those that do, Blender is an incredibly powerful tool. Originally focused on 3D modeling and animation, recent versions of Blender have expanded to include video editing, 2D animation, and even VFX capabilities.

Blender's node-based material system is particularly useful for creating complex textures and materials that can be easily tweaked and adjusted. If you're working on an open source game or a project that involves 3D visualizations, Blender's ability to export to various formats makes it easy to integrate your work into different engines or platforms.

Even if your project doesn't directly involve 3D graphics, Blender can be useful for creating isometric illustrations or rendering 3D mockups of physical products. Its powerful rendering engines (both built-in and via plugins) can produce highly realistic images that can enhance the visual appeal of your project's documentation or marketing materials.

## Design Systems and Pattern Libraries

Design systems and pattern libraries are crucial for maintaining consistency across large open source projects. While not a tool in the traditional sense, these resources are invaluable for open source designers.

Several open source projects have created comprehensive design systems that you can learn from or even adapt for your own use:

1. Material Design: While created by Google, the Material Design system is open source and widely used in many projects.
2. elementary OS Human Interface Guidelines: A detailed design system for the elementary OS Linux distribution.
3. GNOME Human Interface Guidelines: The design system for the GNOME desktop environment.

When creating a design system for your open source project, consider using tools like Storybook, which allows you to create a living style guide that developers can easily reference and integrate into their workflow.

## Accessibility Tools

Ensuring accessibility is a crucial aspect of open source design, as these projects often aim to be usable by as wide an audience as possible. Several open source tools can help you evaluate and improve the accessibility of your designs:

1. WAVE: A web accessibility evaluation tool that provides visual feedback about the accessibility of your web content.
2. Contrast Checker: A simple tool to check the contrast ratio of your color choices to ensure readability.
3. Axe: An accessibility testing engine that can be integrated into automated workflows.

Remember that while these tools are helpful, they should complement, not replace, manual testing and feedback from users with disabilities.

## Version Control for Designers

While version control systems like Git are typically associated with code, they can also be incredibly useful for managing design assets. Using version control for your design files allows you to track changes over time, collaborate more effectively with others, and maintain a clear history of your design process.

Consider using Git Large File Storage (LFS) for managing larger binary files like high-resolution images or complex vector graphics. This can help keep your repository size manageable while still allowing you to version these files effectively.

Several GUI tools can make Git more approachable for designers who aren't comfortable with the command line:

1. GitKraken: A cross-platform Git client with a user-friendly interface.
2. SourceTree: Another popular Git client with a visual interface for managing repositories.

## Collaboration Platforms

Effective collaboration is key in open source projects. While many projects use GitHub for both code and design collaboration, there are other platforms that can enhance the design workflow:

1. Figma: While not open source itself, Figma offers a free tier and is widely used in open source projects due to its robust collaboration features.
2. Penpot: An open source design and prototyping platform that's gaining popularity in the open source community.

These platforms allow real-time collaboration, making it easier to work with contributors across different time zones and locations.

## Conclusion

The landscape of open source design tools is rich and diverse, offering powerful alternatives to proprietary software. By familiarizing yourself with these tools and resources, you'll be better equipped to contribute effectively to open source projects.

Remember that the choice of tools should always be guided by the needs of your project and the preferences of your community. Be open to learning new tools and workflows, as this adaptability is key to success in the dynamic world of open source design.

Lastly, don't forget that the most important tool at your disposal is the open source community itself. Engage with other designers, developers, and users in your project's community. Their insights, feedback, and contributions will be invaluable in creating designs that truly serve the needs of your project's users.
