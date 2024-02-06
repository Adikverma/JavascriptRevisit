// ------------------------------------------------ basics
// 
//function abc(){} //function declaration //hoisted
//const abc = function(){} //function expression //not hoisted
//const abc = ()=>{} //arrow function //not hoisted
// (()=>{console.log("hello world");})() //iife : immediately invoked function expression

// ------------------------------------------------ lexical chaining or scope chaining
// 
// const name="adi";
// function abc(){
//     function bc(){
//         function c(){
//             console.log(name); // access name from upper scopes till global
//         }
//         c();
//     }
//     bc();
// }
// abc();

// ------------------------------------------------ default and rest parameters
// 
// default params: start from the right side
// function abc(a, b=3){
//     console.log(a,b); // 2 3
// }
// abc(2);
// 
// rest params:
// function abc(a, ...b){
//     console.log(a, b); // 1 [2, 3, 4, 5]
// }
// abc(1, 2, 3, 4, 5);.

// ---------------------------------------------- params destructuring
// 
// let obj = {
//     name:"adi",
//     age:22
// }
// function abc({name, age}){
//     console.log(name, age);
// }
// abc(obj);

// --------------------------------------------- higher order functions
// 
// functions accepting functions as a callback or returning functions
// function higerFunc(callback){ // function as a param
//     callback();
//     return function(name){ // returning function
//         console.log("returned one", name);
//     }
// }
// const returnedFunc = higerFunc(()=>{console.log("param func")});
// returnedFunc("adi");

// --------------------------------------------- 