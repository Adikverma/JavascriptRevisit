// ------------------------------------------------------------ block vs function scoped
// 
// let and const are block scopped but not var
// {
//     const constVar = "const";
//     let letVar = "let";
//     var varVar = "var";
// }
// console.log(constVar); // not defined
// console.log(letVar); // not defined
// console.log(varVar); // accessible
// 
// var is function scope
// function abc(){
//     {
//         var varVar = "var";
//     }
//        if(true){
//            console.log(varVar); // not block scoped
//        }
// }
// abc();
// console.log(varVar); // not defined

// -------------------------------------------------------------- 
// 
