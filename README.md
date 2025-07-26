# fighting-game
A fighting game with JavaScript and HTML canvas.

---

## What Makes `<canvas>` Special

- **Rendering Context**  
  Unlike a `<div>`, `<canvas>` can be paired with a JavaScript rendering context—either `"2d"` or `"webgl"`—to draw shapes, images, animations, and even 3D graphics.

- **Not Just for Styling**  
  A `<div>` is for layout and styling, while `<canvas>` is a literal drawing surface. Think of it like a blank Photoshop layer instead of a content container.

- **Pixel Manipulation**  
  Direct access to pixels via methods like `getImageData()` and `putImageData()` makes it perfect for custom effects and image editing.

- **No Child DOM Elements**  
  Unlike a `<div>`, you can't nest HTML elements inside a `<canvas>`. All visuals are rendered through JavaScript drawing commands.

---

## Canvas Special Attributes

- **width / height**  
  Define the canvas size (default: 300×150 px).

- **Global attributes**  
  Accepts typical attributes like `id`, `class`, `style`, `onclick`, etc.

- **Draw with JavaScript**  
  Use `getContext('2d')` to access drawing methods
