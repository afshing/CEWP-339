
function findBeer() {

  let city = getCityName();
  let name = getName();

  let urlStr = createURL(city, name);
  sendRequest(urlStr);
}

function getCityName() {
  let city = document.querySelector('#city').value;
  return city;
}

function getName() {
  let name = document.querySelector('#name').value;
  return name;
}


function createURL(city, name) {
  return `https://api.openbrewerydb.org/breweries?by_city=${city}&by_name=${name}`;
}

function reqListener () {
  let list = JSON.parse(this.responseText);
  showResult(list);
}

function showResult(list) {
  let result = '';
  list.forEach((item) => {
    result += `<li>
      <a href="${item.website_url}">${item.name}</a>
    </li>`
    // result += '<li>' + item.name + '</li>';
  });
  console.log(result);
  document.getElementById('beers').innerHTML = result;
}

function sendRequest(urlStr) {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", urlStr);
  oReq.send();

}








//
// function reqListener () {
//   console.log(this.responseText);
// }
//
// function submit() {
//   var req = new XMLHttpRequest();
//   //req.addEventListener("load", reqListener);
//
//   req.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(JSON.parse(this.responseText));
//     }
//   };
//
//   req.open("GET", "https://www.googleapis.com/books/v1/volumes?q=harry");
//   req.send();
// }
