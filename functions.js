// function Myfun(msg){ //parameter -> input
//     console.log(msg);
// }
// Myfun("I love js"); //argument

// function sum(x, y){
//     // x and y are locl variable
//     s = x+y;
//     return s;
// }
// let val = sum(2,5);
// console.log(val);

// ARROW FUNCTION //
// const arrowSum = (a, b)=> {
//     return a + b;
// };

// const arrowMul =(a, b)=>{
//     return a*b;
// };

// const printhello = () => console.log("hello"); //we can write single line code without {}

// Practice Qs //

// function countVowel(str){
//     let count = 0;
//     for(const char of str){
//     if (char === "a" || char === "e"|| char==="i"|| char==="o" || char==="u")
//     {
//     count++
//     }
// }
//     return count;
// }

// const count = (str)=>{
//     let count = 0;
//         for(const char of str){
//         if (char === "a" || char === "e"|| char==="i"|| char==="o" || char==="u")
//         {
//         count++
//         }
//     }
//         return count;
// };

// pratice Qs 
// let nums = [2, 3, 4, 5, 6]

// nums.forEach((num)=>{
//     console.log(num*num);
// });

// or 

// let nums = [23, 44, 34]
// let calsquare = (num)=>{
//     console.log(num * num);
// };
// nums.forEach(calsquare);


// forEach loop in arrays
// arr.foreach(callbackFuntion)
// callbackFuntion : here, it is a funtion to execute for each element in the array
// a callback is a funtion passed as an argumrnt to another function
// arr.forEach((val){
    //console.log(val);
//});

// method in array
// Map method->returns new array
// syntax 
// Array.map((val)=>{
//     return val*2;
// })
// example
// let nums = [23 , 43, 44];
// let newarr = nums.map((val)=>{
//     return val*2
// });
// console.log(newarr);

// filter method

// let arr = [2 ,3, 4, 5, 6, 7, 8]
// let evenarr = arr.filter((val)=>{
//     return val %2 === 0
// });

// reduce method ex1
// const arr1 = [1,2,3,4]
// const output =  arr1.reduce((res,curr)=>{
//     return res+curr 
// });

// ex2
// let arr = [54, 66, 35, 9, 89];
// let output = arr.reduce((pre, curr)=>{
//     return pre > curr? pre: curr;
// });
// console.log(output);

// practice Qs
// let marks = [97, 64, 33, 49, 93, 86, 98];
// let topper = marks.filter((val)=>{
//     return val>90;
// });
// console.log(topper);

// practice Qs2
// let n = prompt("enter a number");
// let arr = []
// for (let i=1; i <= n; i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// let sum = arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(sum);

// let fact = arr.reduce((res,curr)=>{
//     return res*curr;
// });
// console.log(fact);