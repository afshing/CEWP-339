//constructor for the library
function Library (books) {
  this.books = books;

  this.printTitles = function() {
    this.books.forEach((book) => {
      console.log(book.title);
    });
  }
}
