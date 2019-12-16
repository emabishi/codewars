// https://www.codewars.com/kata/array-helpers/train/javascript

/*
square() must
return a copy of the array, containing all values squared
cube() must
return a copy of the array, containing all values cubed
average() must
return the average of all array values;
on an empty array must
return NaN(note: the empty array is not tested in Ruby!)
sum() must
return the sum of all array values
even() must
return an array of all even numbers
odd() must
return an array of all odd numbers

*/

Array.prototype.square = function () {
  return this.map(el => Math.pow(el, 2));
}

Array.prototype.cube = function () {
  return this.map(el => Math.pow(el, 3));
}

Array.prototype.average = function () {
  return this.length ? this.reduce((result, el) => result + el, 0) / this.length : NaN;
}

Array.prototype.average = function () {
  return this.length ? this.sum() / this.length : NaN;
}

Array.prototype.sum = function() {
  return this.length ? this.reduce((result, values) => result + values, 0) : NaN;
}

Array.prototype.even = function() {
  return this.length ? this.filter(el => el % 2 === 0) : NaN;
}

Array.prototype.odd = function() {
  return this.length ? this.filter(el => el % 2 !== 0) : NaN;
}
