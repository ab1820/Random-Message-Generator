const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");
const shareBtn = document.querySelector(".share"); //linkedin share
const copyBtn = document.querySelector(".copy"); //copy quote share
const tweetBtn = document.querySelector(".tweet"); //twitter share

//Random Quote Generator Function
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

copyBtn.addEventListener("click", () => {
  //copying the quote text on copyBTN click
  //writeText() property writes the specified text string to the system clipboard
  navigator.clipboard.writeText(quoteText.innerText);
});


shareBtn.addEventListener("click", () => {
  const Url = `https://linkedin.com/feed/?shareActive=${quoteText.innerText}`;
  window.open(Url, "_blank");
});

tweetBtn.addEventListener("click", () => {
  const Url = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(Url, "_blank");
});


quoteBtn.addEventListener('click', randomQuote);
