// console.log('Hello');

var myName = 'afshin';
let temp = 12;
const DAYS_IN_JAN = 31;

// console.log(myName);

let a = false;
let b = '';
let sum = a ** b;
// console.log(a, b, sum);

let result = (a == b);
// console.log('result: ', result);
// console.log('type of result is ', typeof result);
result = 12;
// console.log('type of result is ', typeof result);


let contentString = document.getElementById('myAge').innerHTML.trim();
let contentNum = Number(contentString);

let ageInMonth = contentNum * 12;
document.getElementById('myAgeInMonths').innerHTML = ageInMonth;
