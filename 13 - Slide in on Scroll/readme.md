# \# 13 - Slide in on Scroll

## Exercise
Create an effect where hidden images slide and fade in when the page is scrolled to bring them halfway above the bottom of the window.

## Impressions
- Again, this exercise was one I had to work out visually, because I couldn't wuite follow Wes' descriptions or math without pictures. So, I drew (many) diagrams and found that my confusion stemmed from 2 points:
  1. I had in mind an imaginary "trigger" line halfway through each image, and wanted to set off the slide transition when that line came above the bottom of the window (that is, when half the image was above the bottom of the window). Wes' approach was to set the trigger line on the *window*, one half-image-height distance (uh, yeah) from the bottom, and cue the transition when the top of the image hit that line. It's a little less intuitive (I couldn't figure out why the heck he was subtracting the half-image), but mathematically equivalent if you remember some basic algebra:
  ```javascript
  // My approach
  window.scrollY + window.innerHeight > image.offsetTop + (image.height / 2)
  // Wes' approach
  window.scrollY + window.innerHeight - (image.height / 2) > image.offsetTop
  ```
  2. I was also trying like hell to get the same half-image slide in "trigger" as you scroll *up* and uncover the bottom half of the image. Is that where Wes' method made the difference?? No. No it did nothing of the sort. I watched the video again closely, and the images slide back as soon as they are uncovered, just as mine were doing. Less sexy, I thought, but at least I wasn't actually missing anything.
- Looking at the supplied `debounce()` code in my text editor, I noticed that [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is a reserved word for a default local variable, similar to `this`. That could come in handy sometime...
- I also noticed the `apply()` function, and realized it has much the same role as `send()` does in Ruby: it allows you to write a call to a function (and pass it arguments) when you don't yet know what that function will be. That could also come in handy sometime...
