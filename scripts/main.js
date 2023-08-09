// var myHeading = document.querySelector("h2");
// myHeading.textContent = "Hello world!";
// alert("hello!");

// document.querySelector("html").onclick = function () {
//     alert("Ouch! Stop poking me!");
//   };

var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/img.jpg") {
    myImage.setAttribute("src", "images/img2.jpg");
  } else {
    myImage.setAttribute("src", "images/img.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h2");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "【Original Intention】 by " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "【Original Intention】 by " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
