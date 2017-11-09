# #\10 - Hold Shift and CHeck Checkboxes

## Exercise
Given a checklist, add functionality so that when a user holds `Shift` and checks a second box (either above or below the first one), all items in between also become checked.

## Impressions
- In the video, Wes encourages watchers to give it a try before watching his solution, and warns that it can be tricky to figure out, but the code itself is not too complex. I wrote out some pseudocode to resolve the problem before coding it, which helped.
- Once I had solved the challenge and returned to the video, it turns out I had solved it in a way that Wes suggests isn't optimal, making sound more complicated that it was for me. I'm still not sure if or why my way would be suboptimal -- he suggests it is HTML-dependent, and if the HTML changes the script will break -- but maybe mine is a different implementation of the approach he referred to. I find my way more readable and easier to reason about than the presented solution. I'm only left wondering about performance differences as the list gets longer: is it worse to add more event listeners (as I'm doing), or to loop through a longer list (as he does)?
- All in all, pretty pleased with myself for crushing this one on my own. :)
