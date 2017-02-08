console.log("First line in JavaScript file");
console.log(Date.now());

function executeThisCodeAfterFileIsLoaded () {
  console.log("executeThisCodeAfterFileIsLoaded");
  console.log(Date.now())
  console.log("this.responseText", this.responseText);
  var data = JSON.parse(this.responseText);
  console.log("data", data);
  var contentEl = document.getElementById("all-my-cars") 
  var carData = "";

 for (var i = 0; i < data.cars.length; i++) {
  currentCar = data.cars[i];

    carData += "<div class='car-block'>";
    carData += `<h1>${currentCar.make}</h1>`;
    carData += "<div class='model'>Model: ";
    carData += currentCar.model;
    carData += "</div>";
    carData += "<div class='trim'>Trim: ";
    carData += currentCar.trim;
    carData += "</div>";
    carData += "</div>"
 }

console.log(carData);
contentEl.innerHTML = carData;

}

function executeThisCodeIfXHRFails (xhrEvent) {
  console.log("An error occurred while transferring the data");
}

function executeThisCodeChunksArrive (xhrEvent) {

}


var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myRequest.addEventListener("progress", executeThisCodeChunksArrive);

myRequest.open("GET", "cars.json");
myRequest.send();






console.log("Last line in JavaScript file");
console.log(Date.now());
