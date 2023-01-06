# Random-Quote-Generator

My first off-site project for my portfolio. I was requested to create a random number, quote, message or joke of the day generator. 

Building it from scratch with HTML and CSS were easy, I was able to fly through it. 
Javascript I am still learning, so for some resources thankfully there was MDN I was able to turn to, and somewhat get the hang of what an API is. I found one that is available on Github for free to generate random quotes.

I did have to follow along in some views for some Javascript, but once I understood what they were doing, I was able to begin tackling it myself.

<hr>

### Created With:
- HTML5
- CSS3
- Javascript in Node.js (still learning)

### Resources:
- Canva for creating the background
- (colorhunt.co) for beautifully created color palettes available for free
- Youtube of course
- MDN Docs
- Codecademy

I explain a little bit of what my code does if you decided to read it, available in the code files themselves.


The code to generate new random quotes everytime the New Quote button is clicked.
```
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  // fetching random quotes from API and parsing into JS object
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    console.log(result);
    quoteText.innerText = result.content; //acessing content from API objects
    authorName.innerText = result.author; //accessing author name from API objects
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
  });
}
```

### What You Can Experience:
- a fully functional copying button to copy and paste the random quote of the day
- share buttons for Twitter and LinkedIn
- When you click on the New Quote button, you will see it change to "loading quote..." then revert back to "new quote" available to be clicked again.

<hr>

# Live Site URL: https://ab1820.github.io/Random-Quote-Generator/


<hr>

## Screenshot:
![screenshot](https://user-images.githubusercontent.com/114027684/210903445-fddaf910-3f7e-4ac6-8b6a-88fecda79386.png)

