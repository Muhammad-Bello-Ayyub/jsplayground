/* eslint-disable */
console.log('it worked');

const item = document.querySelector('.item');

const width = 200;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`; // <img onload="alert('HACKED')" src="https://picsum.photos/50"/>

// NOte: myHTML is not an element here, so 
// you will need to insert it into the DOM 
const myHTML = `
<div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// NOw lets set the innerHTML
// Its only a string as of nOw

// console.log(myHTML.classList);
// console.log(typeof myHTML);
// item.innerHTML = myHTML;


// turn a string into a DOM element
// You will get #DocumentFragmnent which will 
// Help you access the classList element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
