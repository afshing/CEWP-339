$(document).ready(function(){
	$("#search-submit").click(function(){
		$("#result").empty();
		let text = $("#search-text").val();
		let URL = `https://www.googleapis.com/books/v1/volumes?q=${text}`
		$.get(URL, (data, status) => {
			data.items.forEach((book) => {
				addBookToResult(book);
			});
			
		});

	});
});


function addBookToResult (book) {
	$("#result").append(`<li>${book.volumeInfo.title}</li>`);
}