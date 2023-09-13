const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo-agilent-technologies-transparent.png") {
    myImage.setAttribute("src", "images/Microsoft_Edge_logo_(2019).png");
  } else {
    myImage.setAttribute("src", "images/logo-agilent-technologies-transparent.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello is cool, ${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
  