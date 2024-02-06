// ------------------------------------------ ways to clone an array
// 
// const arr = new Array("adi", "verma");
// const arr2 = arr.slice(0);
// const arr2 = arr.concat([]); //or [].concat(arr)
// const arr2 = [...arr]
// console.log(arr2);

// ------------------------------------------ in,of for-loops in arrays 
// 
// const arr = ["adi", "kumar", "verma"];
// for(let element of arr){console.log(element);}
// for(let index in arr){console.log(arr[index]);}

// ------------------------------------------ array destructuring
// 
// const arr = ["value1", "value2", "value3", "value4", "value5"];
// const [var1, var2, , ...newArr] = [...arr]; // value3 is skipped, newArr contains rest elements, all variables created will be of const
// console.log(var1, var2, newArr);

// ------------------------------------------ 