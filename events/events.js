/* eslint-disable*/

const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("🐛 IT GOT CLICKED!!!");
}

const hooray = () => console.log("HOORAY!");

butts.addEventListener("click", function () {
  console.log("Im an anon!");
});

coolButton.addEventListener("click", hooray);

// Downside in using arrow function is you 
// Cannot unbind it, use a variable function instead
butts.removeEventListener("click", handleClick);


// // Listen on multiple items
const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick(event) {

  console.log("You clicked a button!");
  const button = event.target;

  // console.log(button.textContent);

  // parseFloats keeps decimals, parseInt doesn't
  // console.log(parseFloat(event.target.dataset.price));
  
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  
  // Stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});

window.addEventListener(
  "click",
  function (event) {
    console.log("YOU CLICKED THE WINDOW");
    console.log(event.target);
    console.log(event.type);

    // Stop this event from propagating down instead of bubling up, at the windows level
    // event.stopPropagation();
    // console.log(event.bubbles);
  },
  //capture level trigger on Window
  { capture: true } 
);


const photoEl = document.querySelector(".photo");

photoEl.addEventListener("mouseenter", (e) => {
  console.log(e.currentTarget);
  console.log(this);
});
