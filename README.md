# fighting-game
A fighting game with JavaScript and HTML canvas.

What Makes <canvas> Special
- Rendering Context: Unlike a <div>, <canvas> can be paired with a JavaScript rendering context—either "2d" or "webgl"—which lets you draw shapes, images, animations, and even 3D graphics.
- Not Just for Styling: <div> is for layout and styling, while <canvas> is a literal drawing surface. It’s more like a blank Photoshop layer than a box of content.
- Pixel Manipulation: You can directly access and manipulate pixels with methods like getImageData() and putImageData(). That’s useful for effects and image editing.
- No Child DOM Elements: You can't nest HTML elements inside a <canvas> like you can with a <div>. All content inside canvas is rendered via drawing commands.

Canvas Special Attributes 
- width / height: Set the canvas size (default is 300×150 px).
- Global attributes: Like id, class, style, onclick, etc.
- Draw with JS: Use getContext('2d') to access drawing methods (e.g., fillStyle, drawImage()).
