// let newBtn = document.createElement("button");
// newBtn.innerHTML= "clickme";

// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";

// document.querySelector("body").append(newBtn);

// let para = document.querySelector("p");
// para.classList.add("newcontent");

let btn1 = document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are in div");
};
