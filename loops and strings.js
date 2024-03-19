// for loop //
// let sum = 0;
// let n = prompt("enter a number");
// for(let i = 1; i<=n; i++){
//     sum = sum + i;
// }
// console.log("sum=", sum);
// console.log("loop ended");

// while loop//
// let i = 1;
// while (i<=10){
//     console.log(i);
//     i++;
// }

// do while loop//
// let i = 20;
// do{
//     console.log("sadique")
// }while(i<=10);

// for-of loop //
// let str = "sadiqueakhtar"
// size = 0;
// for(let i of str){
//     console.log("i",i);
//     size++;
// }
// console.log(size);

// for in  loop //
// let student = {
//     name : "sadique",
//     age : 24,
//     cgpa : 7.72,
//     ispass : true,
// };
// for(let key in student){
//     console.log("key", key,"value=",student[key]);
// }

// practice Qs1
// for (let num = 0;num<=100; num++){
//     if (num % 2 !== 0){
//         console.log(num)
//     }
// }

// pratice Qs2
// let gameNum = 25;
// let UserNum = prompt("Guess the game number");

// while(UserNum != gameNum){
//     UserNum = prompt("You enterd a wrong number.Guess again:");
// }
// console.log("congratulation,you entered the right number");


// STRINGS IN JAVASCRIPTS //
// let str = "sadique";
// console.log(typeof(str));
// console.log(str.length);
// console.log(str[4]);

// Template literals //
// let specialstring = `This is a template literal`
// console.log(typeof(specialstring));

// [example of temp literal using backticks ]//
// let obj = {
//     item : "pen",
//     price: 10
// }
// let output = `the cost of ${obj.item} is ${obj.price} rupee`;
// console.log(output);
// console.log("The coust of",obj.item, "is", obj.price,"rupee")

// String methods //
// let str = "Apna collage"
// let str1 = " Oriental"
// console.log(str.toUpperCase());
// console.log(str.indexOf("e"));
// console.log(str.toLowerCase());
// console.log(str.slice(2,7));
// console.log(str.trim());//to remove white space
// console.log((str.replace("n","m")));
// console.log(str.concat(str1));

//  practice Qs //
// let fullName = prompt("Enter your full name")

// let UserName = "@" + fullName +fullName.length;
// console.log(UserName);
