"use strict"

// let name = "";

// // Add items to local storage by key/value pair
// localStorage.setItem("username", name);
// localStorage.setItem("someKey", "someValue");

// // Get stuff out of local storage by the key
// let valueFromLocalStorage = localStorage.getItem("username");

// // Remove an item from local storage
// localStorage.removeItem("someKey");

// // Check to see if an item exists in local storage and use it
// // Otherwise, display that the data doesn't exist
// if (localStorage.username) {
//     document.querySelector("#dataFromLocalStorage").innerHTML = localStorage.username;
// } else {
//     document.querySelector("#dataFromLocalStorage").innerHTML = "Data does not exist";
// }

// // Check to see if an item exists and is equal to a specific value in local storage and use it
// // Otherwise, display that the data doesn't exist
// if (localStorage.getItem("username") === "sara") {
//     document.querySelector("#dataFromLocalStorage").innerHTML += "Hi!, " + localStorage.getItem("username");
// } else {
//     document.querySelector("#dataFromLocalStorage").innerHTML += "Hello Guest";
// }

window.onload = () => {

    let userForm = document.querySelector("#userForm");
    userForm.addEventListener("submit", addToLocalStorage)
}

function addToLocalStorage(event){
event.preventDefault();

localStorage.setItem("name", event.target.name.value)
localStorage.setItem("role", event.target.role.value)

console.log("add")

location.href = "information.html";
}