/* eslint-disable */

// with exception of const n let variables anything thats in the global scope is attached to the window object i.e window.age, functions etc
// const first = 'first';
// let second = 'second';
// var age = 100;

// function sayHi(){
//     console.log('hi!');
// }

// const age = 100;

// function go(){
//     // this is a function scope, its only available inside of the fn
//     const hair = 'blonde';
//     console.log(hair);
// }

// go();

// console.log(age);
// console.log(hair); // its not available outside the fn scope


// Block scoped
// if(1 === 1){
//     // const cool = true;
//     var cool = true; // only var is scoped outside gate/block
//     // let cool = true;
// }

// console.log(cool);


// function isCool(name){
//     // Block scopping
//     let cool;

//     if(name === 'wes'){
//         cool = true;
//     }else{

//         console.log('you are not wes');
//     }
//     return cool;
// }

// for(var i = 0; i < 10; i++){
//     console.log(i);
// }


// Scope lookUp example (JS uses lexical scopping to scope a fn from where it's defined not where they are runned)
// const dog = 'snikkers';

// function logDog(){
//     console.log(dog);
// }

// function go(){
//     const dog = 'sunny';
//     logDog();
// }

// go();


// Some Best practices
// 1. Try not to create global variables


// Functions Scopping
function sayHi(name){
    function yell(){ // this fn is scopped to its parent fn
        console.log(name.toUpperCase())
    }
    yell();

    // generally you will not use this kind of functions declaration
}

// yell(); its cannot run from here