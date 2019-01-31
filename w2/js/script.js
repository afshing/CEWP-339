'use strict'


function calculate() {
  let salaryStr = document.getElementById('salary').value;
  let salary = Number(salaryStr);
  calculateTax(salary);

}
function calculateTax (salary) {
  return 0;
}

// console.log('foo bar');
// let salary = 65000;
// let abc = 'test';
// Define a function called isWorkingDay
// where for a given day
// of the week (e.g. 'sunday'),
// it returns true if it is working
// day and false if it is weekend
// function isWorkingDay (day) {
//   switch (day) {
//     case 'saturday':
//     case 'sunday':
//       return false;
//     default:
//       return true;
//
//   }
// }
//
// // console.log(isWorkingDay('saturday'));
// // console.log(isWorkingDay('tuesday'));
// //
// // if (isWorkingDay('sunday')) {
// //   console.log('arggg');
// // } else {
// //   console.log('yayay')
// // }
//
// function isWorkingDay2 (day) {
//   return (day === 'saturday' || day === 'sunday')
//       ? false : true;
// }
//
// function isWorkingDay3 (day) {
//   return (day !== 'saturday' && day !== 'sunday');
// }
//
//
// function average (n1, n2, n3) {
//   console.log('this is the value of n3: ' ,n3)
//
//   if (n3 === undefined) {
//     n3 = 0;
//   }
//   return (n1 + n2 + n3) / 3;
// }
//
// function average2 (n1 = 0 , n2 = 1, n3 = 0) {
//   return (n1 + n2 + n3) / 3;
// }
// let average3 = function (n1, n2, n3) {
//   return (n1 + n2 + n3) / 3;
// }
// let average4 = (n1, n2, n3) => {
//   return (n1 + n2 + n3) / 3;
// }
//
// const avg = average2();
//
// console.log(avg);
//



// function calculateTax (salary) {

//     console.log(abc);
//     if (salary < 42000){
//       return 0;
//     } else {
//       return salary * 0.2;
//     }
// }
//
// let tax = calculateTax(salary - 10000);
// console.log(salary - tax);
