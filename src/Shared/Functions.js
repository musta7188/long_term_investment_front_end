



export const  roundTo = (value, places) => {
  var power = Math.pow(10, places);
  return Math.round(value * power) / power;
}
