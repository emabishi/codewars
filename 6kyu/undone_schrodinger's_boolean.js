// https://www.codewars.com/kata/schrodingers-boolean/train/javascript
// https://www.sitepoint.com/javascript-truthy-falsy/
// http://es5.github.io/#x11.9.3 JS == ABSTRACT EQUALITY COMPARISONS


const assert = require('assert');

/*
Define omniBool so that it returns true
for the following:
omniBool == true && omniBool == false
*/

const omnibool = 3 == true;


console.log(omnibool == true)
console.log(omnibool == false)

// assert(omnibool == true); // true
// assert(omnibool == false); // true


// boolean
// number
// null
// undefined
// string