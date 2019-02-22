function Person(theName) {
  this.name = theName;
  this.greeting = function() {
    console.log('Hi, I\'m ' + this.name);
  }
}

let p3 = new Person('bob')
let p4 = new Person('mary')
p3.greeting = function() {
  console.log('Hi I am the new method');
}
p3.greeting();
p4.greeting();


function Human(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

let rand = new Human('Rand McKinnon', 33, 'M');
let car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
console.log(car1);











// function createNewPerson(theName) {
//   let obj = {};
//   obj.name = theName;
//   obj.greeting = function() {
//     console.log('Hi, I\'m ' + theName);
//   }
//   return obj;
// }
//
// let p1 = createNewPerson('sarah');
// p1.greeting();
// console.log(p1);
// console.log(typeof p1);
