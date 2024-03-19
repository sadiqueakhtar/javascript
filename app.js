// const student={
//     fullname :"sadique akhtar",
//     marks : 82,
//     printMarks : function(){
//         console.log("marks =",this.marks);
//     }
// };


// const employee = {
//     calcTax(){
//         console.log("Tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary : 50000,
// };

// karanArjun.__proto__ = employee;


// class
class Toyotacar {
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setbrand(brand){
        this.brandname = brand;
    }
}

let fortuner = new Toyotacar();
fortuner.setbrand("fortuner");
let lexus = new Toyotacar();
fortuner.setbrand("lexus");