# \# 11 - Custom Video Player

## Exercise
Replace the default controls of a video with custom designed ones & some extra functions:
- toggle play/pause on button click and on video click
- add buttons to skip ahead 25s or back 10s
- add sliders to adjust volume and playback rate
- show time elapsed on a progress bar
- update video time when progress bar is clicked (and allow click & drag for same)

## Impressions
- Once again, Wes encourages viewers to try to tackle the problems on our own as we move through the tutorial. I was pleased to find that I was able to do most of them successfully, and much more confidently than at the start of the challenge. Progress!
- I like that Wes finally separated the JS from the HTML file, and gave a hint on how to organize the code in the file. I liked even more that that's how I've been doing it all along...
- My solutions were not as tidy as Wes', but were essentially the same. In some cases, even though he showed how some code could be refactored, I chose to leave mine a little longer for readability.
- In the exercise, the video is supposed to be played/paused whenever the video display is clicked, but I changed this to a spacebar press (with the event listener `keypress` and checking for `e.keyCode === 32`) as this is more consistent with video playback controls in other interfaces which I am familiar with. [This is probably an accessibility matter, too: it adds another way to control playback, if clicking a mouse on a small button is challenging to a user. Of course it doesn't solve all the other controls, but one step at a time...]
- +1 for `parseFloat()`. I had that one almost entirely solved but something juuuust wasn't working.
