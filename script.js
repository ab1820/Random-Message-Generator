const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");

function randomQuote() {
  // fetching random quotes from API and parsing into JS object
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    console.log(result);
    quoteText.innerText = result.content; //acessing content from API objects
  });
}

quoteBtn.addEventListener('click', randomQuote);
