// function sum (a,b){
//   console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//   sumcallback (a,b);
// }
// // calculator(2,3,sum); //or
// calculator(2,3,(a,b)=>{
//   console.log(a+b);
// });

// function getData(DataId, getnextdata) {
//   setTimeout(() => {
//     console.log("data", DataId);
//     if (getnextdata) {
//       getnextdata();
//     }
//   }, 2000);
// }


// callbackhell
// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("getting data3...");
//     getData(3, () => {
//       consol.log("getting data4...");
//       getData(4);
//     });
//   });
// });

// promises''''''
/*let promise = new Promise((resolve , reject)=>{
  console.log("I am apromise");
  resolve("success");
  // reject("some error occured");
}); */

// function getData(DataId, getnextdata) {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("data", DataId);
//       // resolve("Success")
//       reject("some error")
//       if (getnextdata) {
//         getnextdata();
//       }
//     }, 2000);
//   });
// }


// promise chain example

// function asyncFun(){
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("data1");
//     resolve("succes");
//   }, 2000);
// });
// }

// console.log("fetching data1");
// let p1 = asyncFun();
// p1.then((res)=>{
//   console.log(res);
//   let p2 =asyncFun();
//   p2.then((res)=>{
//   })
// });
//     console.log(res);



//callback hell wala example using promise chain

// function getData(DataId, getnextdata) {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("data", DataId);
//       resolve("Success")
//       // reject("some error")
//     }, 2000);
//   }); 
// }

// getData(1).then((res)=>{
//   console.log(res);
//   getData(2).then((res)=>{
//     console.log(res);
//   })
// })


// or //promise chain
// getData(1)
// .then((res)=>{
//   return getData(2);
// })
// .then((res)=>{
//   return getData(3);
// })
// .then((res)=>{
//   return getData(4);
// })

// function getData(DataId){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("data",DataId);
//       resolve("success");
//     },2000);
//   });
// }

// // Async await
// async function getData(){
//   await getData(1);
//   await getData(2);
//   await getData(3);
// }