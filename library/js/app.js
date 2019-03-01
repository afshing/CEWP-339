// the logic to transform data and to create object

// books is defined in bookData.js
let myBooks = [];
books.forEach(function(item) {
  // Book constructor is in book.js
  let temp = new Book(item.volumeInfo.authors,
                      item.volumeInfo.title,
                      item.volumeInfo.pageCount,
                      item.volumeInfo.averageRating);
  myBooks.push(temp);
});

let concordiaLibrary = new Library(myBooks);
concordiaLibrary.printTitles();
console.log(myBooks[2].title);
