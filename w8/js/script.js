function findBeer() {
  // 1. get the city name from input
  // 2. create a url
  // https://api.openbrewerydb.org/breweries?by_city=Washington
  // 3. send a request
  // 4. console.log the responseText


}









function reqListener () {
  console.log(this.responseText);
}

function submit() {
  var req = new XMLHttpRequest();
  //req.addEventListener("load", reqListener);

  req.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.responseText));
    }
  };

  req.open("GET", "https://www.googleapis.com/books/v1/volumes?q=harry");
  req.send();
}
