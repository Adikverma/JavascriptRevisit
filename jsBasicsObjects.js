// ------------------------------------------ objects basics
// 
//// create:
// let key1 = "someKey";
// let value1 = "someValue";
// const obj = {
//     name:"adi",
//     "age":22, //same thing
//     [key1]:value1, //computed values
// };

// ------------------------------------------ difference b/w . and [] notations
// 
// const obj = {
//     name : "adi",
//     age : 22,
//     "college name" : "AIT", //1. these keys also possible and use [] notations to access only
// }
// let newKey = "email";
// obj[newKey] = "adikv@gmail.com"; //2. obj["key"]
// console.log(obj);

// ------------------------------------------ iterate over objects
// 
// const obj = {
//     name : "adi",
//     age : 22,
//     email : "adikv@gmai.com",
// }
// 1. using for-in
// for(let key in obj){console.log(obj[key])} //here key is the "keyName"
// 2. using Object.keys
// for(let key of Object.keys(obj)){console.log(obj[key])}
// 3. using Object.values for values
// for(let value of Object.values(obj)){console.log(value);}.
// 4. using Object.entries for pairs
// for(let pair of Object.entries(obj)){console.log(pair[0], pair[1]);}

// ------------------------------------------- spread operator in objects
// 
// const obj1 = {
//     key1:"val1",
//     key2:"val2",
// }
// const obj2 = {
//     key1:"newVal1",
//     key3:"val3",
// }
// const obj3 = {...obj1, ...obj2} //same keys in later objects overwrite
// const obj3 = {...obj1, ...obj2, key4:"val4", key2:"newVal2"};
// const obj3 = {..."abcdefghijklmnopqrstuvwxyz"} //could be used in problem solving
// console.log(obj3);

// ---------------------------------------------- object destructuring
// 
// const obj = {
//     k1:"val1",
//     k2:"val2",
//     k3:"val3",
//     k4:"val4",
// }
// const {k1:var1, k3, ...restProps} = obj;
// console.log(var1, k3, restProps);

// ---------------------------------------------- nested destructuring
//
// const arr = [
//     {name:"adi", age:22, gender:"male"},
//     {name:"lokesh", age:22, gender:"female"},
//     {name:"sourabh", age:21, gender:"female"},
//     {name:"karan", age:21, gender:"male"},
// ]
// const [ {name:userName1, age:userAge1}, user2Obj , {gender:userGender3}, ...restUsers ] = arr;
// console.log(userName1, user2Obj, userGender3, restUsers);

