/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

// function without a name is an annonymous fn
// Annonymous function

// function (firstname){
//     return `Dr. ${firstname}`;
// }


// function expression i.e store a function in a variable
// const doctorize = function(firstname){
//     return `Dr. ${firstname}`;
// }
// functions are firstclass citizens
// diff btw the annony n fn express is hoisting(JS take regular fn and placed them at the top i.e VIP, you can technically run a fn b4 its defined)


// Arrow function 
// note: arrow fn are annonymous fn

// const inchToCm = inches => inches * 2.54; // because we've one argument ie inches we can remove the (inches) to inches

// lets try this
// function add(a, b=3) {
//     const total = a + b;
//     return total;
// }

//  const add = (a, b=3) => a + b;


// Returning an object in Arrow fn
// function makeABaby(first, last){
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }


// Converted to Arrow this is also a perfect arrow fn
// const makeABaby = (first, last) => {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }


// Converted to Arrow
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


// IIFE function 
// immediately invoked function expression
// wraped in a parenthesis and put another on d end to immediartely run

// (function(){
//     console.log('Running the anon function')
//     return 'You are cool';
// })();

// (function(age){
//     return `You are cool and age ${age}`;
// })(10);


// Methods: are fn that lives inside and object
// console.log i.e log is the function inside of object console

const bin = {
    name: 'Faisal ayyub',
    // Method!
    sayHi: function(){
        console.log(`Hey ${this.name}`);
        return 'Hey bin';
    },

    // Short hand Method
    // This is the most common way to do a method
    // this keyword can be used here as well
    yellHi(){
        console.log('Hey Faisal');
        return 'Hey weeeee';
    },

    // Arrow fn
    // you can use arrow inside of method if you don't want to use this keyword
    wisperHi: () => {
        console.log('Hey wess');
    }
}


// callback functions
const button = document.querySelector('#clickMe');

// function handleClick() {
//     console.log('Great Clicking')
// }

// button.addEventListener('click', handleClick );


// callbacks fn
// button.addEventListener('click', bin.yellHi ); // note we did not run it i.e yellHi instead of yellHi()

// Or pass annonymous fn inside
// eslint-disable-next-line prefer-arrow-callback
// button.addEventListener('click', function() {
//     console.log('Nice job!!!');
// });


// Timer callbacks note: it takes two things
// setTimeout(bin.yellHi, 1000); 


// can also pass annon fn
// setTimeout(function(){
//     console.log('Done time to eat')
// }, 1000); 


// can also pass arrow fn
// setTimeout(() =>{
//     console.log('Done time to eat')
// }, 1000); 