"use strict"

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

console.log("32°F to Celsius:", fahrenheitToCelsius(32));
console.log("100°F to Celsius:", fahrenheitToCelsius(100).toFixed(2));

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

console.log("0°C to Fahrenheit:", celsiusToFahrenheit(0));
console.log("37.78°C to Fahrenheit:", celsiusToFahrenheit(37.78).toFixed(2));
