// const text = 'This is a test!';
// console.log(Array.from(text))
// let evens = Array.from(text).filter((char, idx, self) => (idx + 1) % 2 === 0);
// let odds = Array.from(text).filter((char, idx, self) => (idx + 1) % 2 !== 0);
// console.log(evens)
// console.log(odds)
// console.log(evens.concat(odds).join(''))


// console.log(typeof (''))
// const a = '';
// console.log(a.length === 0);
// console.log(typeof (a) === 'string');
// console.log(!!a)



const e = ' enAPn';
const len = e.length;
let arr = new Array(len);
let boundary = Math.floor(len / 2);

// split string at boundary to make 2 string
let evens = e.substring(0, boundary - 1);
let odds = e.substring(boundary);
console.log(evens);
console.log(odds);

// Put all the evens into the even numbered (index + 1) positions of the array
arr.splice(1, 1, evens[0]);
arr.splice(3,1, evens[1]);

console.log('Array after evens are placed', arr);

// Put all the odds into the odd numbered index+1
arr.splice(0,1,odds[0]);
arr.splice(2,1,odds[1]);
arr.splice(4,1,odds[2]);

console.log('Array after evens and odds are placed', arr)

console.log(len);
console.log(arr);
console.log(boundary);



