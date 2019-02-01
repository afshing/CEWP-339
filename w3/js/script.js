'use strict'
function isPalindromic2(userInput) {
  return (userInput
    .toLowerCase()
    .split('')
    .reverse()
    .join('') === userInput.toLowerCase());
}
let min = 'baz bar';
function generateRandom (min = 0, max= 1000) {
  let testScope= 'foo bar';
  console.log('inside', min);

  let anotherFunction = function() {
    console.log('inside anotherFunction');
  }
  console.log(typeof anotherFunction);
}
generateRandom();

// console.log('outside', testScope);

function isPalindromic(userInput) {
  let spaceFree = userInput.split(' ').join('');
  let userInputArray = spaceFree.toLowerCase().split('');
  userInputArray.reverse();
  let reverseInput = userInputArray.join('');
  return (spaceFree.toLowerCase() === reverseInput);
}

function submitForm() {
  document
  .querySelector('.hide')
  .style = 'display: block';



  alert(isPalindromic(text));
}

// console.log(isPalindromic2('Mom'));
// console.log(isPalindromic('concordia'));
//
// let test = 'Mon';
// if (isPalindromic(test)) {
//
// }
