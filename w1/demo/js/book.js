window.addEventListener("load", function(event) {
    document.querySelector('#search-submit').addEventListener("click", submit);
});

function submit() {
    document.querySelector('#result').innerHTML = '';
    let text = document.querySelector("#search-text").value;
    sendGetRequest(text);

}

function sendGetRequest(text) {
    let URL = `https://www.googleapis.com/books/v1/volumes?q=${text}`
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            processResponse(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();

}

function processResponse(data) {
	let result = '';
	console.log(data);
    data.items.forEach((book) => {
        result += `<li>${book.volumeInfo.title}</li>`;
    });
    document.querySelector('#result').innerHTML = result;
}