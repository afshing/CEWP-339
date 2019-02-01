'use strict'
function isPalindromic2(userInput) {
  return (userInput
    .split('')
    .reverse()
    .join('') === userInput);
}

function isPalindromic(userInput) {
  let userInputArray = userInput.split('');
  userInputArray.reverse();
  let reverseInput = userInputArray.join('');

return (userInput === reverseInput);
  // if (userInput === reverseInput) {
  //   return true;
  // } else {
  //   return false;
  // }

}
// let name = 'john';
// let result = name.split('');
// console.log(result);

console.log(isPalindromic('mom'));
// console.log(isPalindromic('concordia'));
//
// let test = 'Mon';
// if (isPalindromic(test)) {
//
// }
