# \#8 - HTML5 Canvas

## Exercise
Create a full-window canvas where the user can draw lines that change colour and width.

## Impressions
- It's always important to keep in mind that mouse motion is not a single `mousemove` event, but a rapid burst of short such events. This means that they may be interrupted by other events. In this case, we were explicitly listening for `mousedown` and `mouseup` to control drawing, but had to listen for confounding `mouseout` interruptions as well.
- This was a great first introduction to `<canvas>`. There is a lot to play with.
