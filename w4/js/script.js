'use strict'
let myArray = [];
function push() {
  let value = document
    .querySelector('#myId')
    .value;
  myArray.push(value);
  showArray();
}

function pop() {
  myArray.pop();
  showArray();
}

function unshift() {
  let value = document
    .querySelector('#myId')
    .value;
  myArray.unshift(value);
  showArray();
}

function shift() {
  myArray.shift();
  showArray();
}

function reverse() {
  myArray.reverse();
  showArray();
}

function sort() {
  myArray.sort(compareNumbers);
  showArray();
}

function slice () {
  let secondArray = myArray.slice(1, myArray.length - 1);
  showSecondArray(secondArray);
}

function showSecondArray(input) {
  document.querySelector('#mySubArray')
    .innerHTML =
    '[' + input.join(',') + ']';
}
function showArray() {
    showFancyArray();
    document.querySelector('#myList')
      .innerHTML =
      '[' + myArray.join(',') + ']';
}

function showFancyArray1() {
    // let text = '<li>Hello</li>\n<li>Bye</li>\n'
    let text = '';
    for (let i = 0; i < myArray.length; i++) {
      text += '<li>' + myArray[i] + '</li>\n'
      console.log(text);
    }

    document.querySelector('#myFancyList')
      .innerHTML = text;
}

function showFancyArray() {
  let text = '';

  myArray.forEach(function(item) {
      text += '<li>' + item + '</li>\n'
  });
  document.querySelector('#myFancyList')
    .innerHTML = text;

}


function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  }
  if (b < a) {
    return 1;
  }
  return 0;
}

showArray();
showFancyArray();
