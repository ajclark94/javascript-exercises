const convertToCelsius = function(temp) {
  let degc = (temp - 32) * (5 / 9);
  if (degc % 1 != 0) {
    return Number(degc.toFixed(1));
  } else {
    return degc;
  }
  
}; 


const convertToFahrenheit = function(temp) {
  let degf = (temp * (9 / 5)) + 32;
  if (degf % 1 != 0) {
    return Number(degf.toFixed(1));
  } else {
    return degf;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
