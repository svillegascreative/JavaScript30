# \#5 - Flex Panel Gallery

## Exercise
Create a 5-panel image gallery that expands to reveal any image (and additional text) when a given panel is clicked.

## Impressions
- Flexbox. It's been awhile since I've looked at it, so I didn't remember all the necessary pieces, but it's so useful (especially in combination with Grid) that I will have to employ it more often. I _did_, however, recall the headspin you get when you switch `flex-direction` to `vertical` and lose all sense of direction...
- I started by coding ahead, and used `add()` rather than `toggle()` to add the `.open` class on the panels. In all honesty, I didn't consider `toggle()`, because I hadn't noticed that functionality in the video (clicking the panel again to close it) -- I was expecting the panels to close themselves whenever another is opened, and was disappointed when that wasn't the case at the end of the video.
- I also hadn't noticed the text slides in _after_ the panels opening, but a separate event listener and function took care of that. I'm still not sure I follow why the function had to take the event as an argument and check its property name for `flex`...

## Extension
- I wanted to switch the opening/closing action of the panels to what I expected. This was surprisingly easy: I just removed the `.open` class from all panels before re-applying it to the one clicked.
