'use strict'
// this JS file is for the logic and should be
// added after the books.js in the index.html

function printTitles() {
  // your code goes here
  // console.log(books[0].volumeInfo.title);
  // console.log(books[0]['volumeInfo']['title']);

  books.forEach(function(book) {
    console.log(book.volumeInfo.title);
  });

}

// printTitles();




function printAuthors() {
  books.forEach(function(book) {
    // if (book.volumeInfo.authors !== undefined) {
    if (book.volumeInfo.authors) {
      console.log(book.volumeInfo.authors.join('\n'));
    }
  });
}

// printAuthors();


function findShortest() {
    // your code goes here
    return 'TITLE OF THE BOOK';
}

function aboveThree() {
  let result = [];
  console.log(books[0]);

  return result;
}

function findAuthors () {
  let result = {};
  /* {
    "Females and Harry Potter" : ["Ruthann Mayes-Elma"],
    "Harry Potter and International Relations":  ["Daniel H. Nexon", "Iver B. Neumann"],
  }*/
  return result;
}


function Book(authors, title, pageCount, averageRating){
  this.authors = authors;
  this.title = title;
  this.pageCount = pageCount;
  this.averageRating = averageRating;
  this.isPopular = () => {
    if (this.averageRating >= 3) {
      return true;
    }
    return false;
    // return this.averageRating >= 3
  }

  this.numberOfAuthors = function() {
      // if (this.authors) {
      //   return this.authors.length;
      // } else {
      //   return 0;
      // }
      return this.authors ? this.authors.length : 0;

  }
}

let b1 = new Book(['JK Rowling'], 'harry potter', 345, 5);
console.log(b1.isPopular());
let myBooks = [];

// input => books (array of fancy complex objects from API)
// result => myBooks (array of simple light
//           objects prototyped by Book constructor)

books.forEach(function(item) {
  let temp = new Book(item.volumeInfo.authors,
                      item.volumeInfo.title,
                      item.volumeInfo.pageCount,
                      item.volumeInfo.averageRating);
  myBooks.push(temp);
});

console.log(myBooks);
myBooks.forEach(function(book) {
 console.log(book.numberOfAuthors());
});
