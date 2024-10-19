/* eslint-disable */

// Traversing means going up, down, over, removing element
// Traversing going around elements and nodes

const wes = document.querySelector('.wes');
// console.log(wes);

// console.log(wes.children);
// console.log(wes.childNodes);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

// REmove p from the DOM
p.remove();

console.log(p);

// We've added it back to the DOM
document.body.appendChild(p);
