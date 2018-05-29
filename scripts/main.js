const makeGrid = require('./templates')
console.log("hahhha")

let td = document.querySelectorAll('td')
let colorPicker = document.querySelector("#colorPicker");
let defaultColor = "#ff0000";

const changeColor = (event) => {
  event.target.style.backgroundColor = colorPicker.value
}

Array.from(td).forEach(element => element.addEventListener('click', changeColor))
