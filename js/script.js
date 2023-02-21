/*
   Uwaguosa Aluyi-Osa
   assignment 4
*/

const content = document.getElementById('content');

$(function () {
  let x = document.getElementById("locationhere");

let div1 = document.createElement('div');
let newlocation = content.appendChild(div1);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    x.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;

    checkLocation(position);
  }

  function checkLocation(position) {
    let lat = localStorage.getItem("latitude");
    let long = localStorage.getItem("longitude");
    // var welcome = document.getElementById("welcome");
    let h2 = document.createElement('h2');
    let welcome = content.appendChild(h2);
    // var distance = document.getElementById("distance");
    let div2 = document.createElement('div');
    let distance =content.appendChild(div2);

    if (lat) {
      let distanceTraveled = calcDistanceBetweenPoints(
        lat,
        long,
        position.coords.latitude,
        position.coords.longitude
      );
      newlocation.innerHTML = "Latitude: " + lat + "<br>Longitude: " + long;
      welcome.innerHTML = "Welcome Back Good Sire";
      distance.innerHTML = "you travelled this much since last time " + distanceTraveled;
    } else {
      welcome.innerHTML = "Welcome for the first time";
      localStorage.setItem("latitude", position.coords.latitude);
      localStorage.setItem("longitude", position.coords.longitude);
    }
  }

  getLocation();

  // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
  // function to calculate the distance in metres between two lat/long pairs on Earth
  // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
  // Aren't those cool variable names? Yah gotta love JavaScript
  function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    var toRadians = function (num) {
      return (num * Math.PI) / 180;
    };
    var R = 6371000; // radius of Earth in metres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2 - lat1);
    var Δλ = toRadians(lon2 - lon1);

    var a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }
});
