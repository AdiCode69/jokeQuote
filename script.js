// quotes
const quoteContainer = document.getElementById("quote");
const btn1 = document.getElementById("btn1");
var url1 = "https://api.quotable.io/random";
var getQuote = () => {
    fetch(url1)
      .then((data) => data.json())
     .then ((item) => {
         
         quote.innerHTML = item.content;
     })
  };
  
  window.addEventListener("load", getQuote);
  btn1.addEventListener("click", getQuote);



// let getQuote = () => {
//  
//     fetch(url1)
//     .then(data => data.json())
//     .then(item =>{
//         quoteContainer.textContent = `${item.quote}`;
//         console.log(item.quote);
//     });
// }
// btn1.addEventListener("click",getQuote);
// getQuote();

// jokes
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        console.log(item.joke);
    });
}
btn.addEventListener("click",getJoke);
getJoke();

// copy to clipboard


function copyToClipboard1() {
  const str = document.getElementById('joke').innerText
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
function copyToClipboard() {
  const str = document.getElementById('quote').innerText
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
// function myFunction() {
//     // Get the text field
//     var copyText = document.getElementById("quote");
  
//     // Select the text field
//     // copyText.select();
//     // copyText.setSelectionRange(0, 99999); // For mobile devices
  
//      // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);
  
//     // Alert the copied text
//     alert("Copied the text: " + copyText.value);
//   } 

// function myFunction1(){
//   var copyText = document.getElementById("joke");
//   navigator.clipboard.writeText(copyText.value);
//   alert("Copied the text: " + copyText.value)
// }

// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
// let jokeElement = document.getElementById("joke").innerHTML = url.joke; 
// let btnB = document.getElementById("btn");


// function getData(){
//     fetch(url)
//   .then((response) => response.text())
//   .then((data) => console.log(data.joke));
// }

// btnB.addEventListener("click", getData);
// getData()