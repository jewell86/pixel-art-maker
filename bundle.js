(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const makeGrid = require('./templates')

let td = document.querySelectorAll('td')
let colorPicker = document.querySelector("#colorPicker");
let defaultColor = "#ff0000";

const changeColor = (event) => {
  event.target.style.backgroundColor = colorPicker.value
}

Array.from(td).forEach(element => element.addEventListener('click', changeColor))

},{"./templates":2}],2:[function(require,module,exports){

function makeGrid(num){
  let table = document.querySelector('table')
  for(let j = 0; j < num; j ++){
    let row = document.createElement('tr')
    table.append(row)
      for(let k = 0; k < num * 2; k ++){
        let col = document.createElement('td')
        row.append(col)
      }
  }
}

makeGrid(30)

module.exports = makeGrid

},{}]},{},[1]);
