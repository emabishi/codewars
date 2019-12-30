console.log(...['1', '2', '3'].keys())
console.log([...Array(10).keys()])
console.log(...Array(10).keys())
console.log(Array(10))
console.log(...Array(10).keys())

// http://es5.github.io/#x11.9.3 JS == ABSTRACT EQUALITY COMPARISONS

console.log(NaN == NaN);
console.log(NaN == 'together');
console.log(NaN == 1);
console.log(-1 == 1);
console.log(0 == true);
console.log(1 == true);
console.log(1 == 1);
console.log(4 == true);
console.log(4 == false);

const a = {};
const b = a;

console.log(a == b); 
console.log(a === b); 

const c = {};
console.log(a == c);
console.log(b == c);
console.log(a === c);

// Both undefined and null are coverted into booleans by the ToBoolean function into false
console.log(null == undefined);
console.log(undefined == null);
console.log(null == null);
console.log(undefined == undefined);

console.log(undefined === null);
console.log(false == null);

// Strings are false if empty
console.log(1 == '1');
console.log(1 == '');
console.log(1 == 'bananas'); // JS tries to convert bananas to a number | same as: 
console.log(1 == NaN);
console.log(1 == {})
console.log(1 == {1:1})
console.log('2' == true);
console.log('5' == false);
console.log('1' == [1]);

const d = '4';
const e = '4';
console.log(d == e)
console.log(d === e)


