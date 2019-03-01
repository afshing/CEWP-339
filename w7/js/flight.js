function Flight(airline,
                depTime,
                arrTime,
                stops,
                priceInUSD,
                from,
                to,
                fligtClass) {
  this.airline = airline;
  this.depTime = depTime;
  this.arrTime = arrTime;
  this.stops = stops;
  this.priceInUSD = priceInUSD;
  this.from = from;
  this.to = to;
  this.fligtClass = fligtClass;

  this.numberOfStops = function() {
    return this.stops.length;
  }

  this.priceInCAD = function (rate) {
    return this.priceInUSD * rate;
  }

  this.duration = () => {
    return (this.arrTime - this.depTime)/(1000 * 60 * 60);
  }

  this.numberOfOvernights = function() {
    return (this.arrTime.getDate() - this.depTime.getDate());
  }
}
//console.log(myFancyFlight.numberOfStops());


let torAirport = new Airport('Peterson', 'Toronto', 'YYZ');

let myFancyFlight = new Flight('Air Canada',
        new Date("2019-03-17T22:24:00"),
        new Date("2019-03-17T03:24:00"),
        [torAirport],
        8500.58,
        mtlAirport,
        lndAirport,
        'First Class'
        );
console.log(myFancyFlight);
console.log(myFancyFlight.priceInUSD);
console.log(myFancyFlight.stops[0].name);
console.log(myFancyFlight.arrTime);
console.log(myFancyFlight.numberOfStops());
console.log(myFancyFlight.priceInCAD(1.3));
console.log(myFancyFlight.arrTime.getHours());
console.log(myFancyFlight.duration());
console.log(myFancyFlight.numberOfOvernights());
