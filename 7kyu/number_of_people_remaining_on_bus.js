/*
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list(or array) of integer arrays(or tuples).Each integer array has two items which represent number of people get into bus(The first item) and number of people get off the bus(The second item) in a bus stop.

Your task is to
return number of people who are still in the bus after the last bus station(after the last array).Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there: D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the
return integer can 't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.

*/
const assert = require('assert');

// const number = function (busStops) {
//   // Transform initial object with reduce to // { on: [x,y,z], alighted: [x,y,z] }  
//   // Add all people who got on (reduce)
//   // Subtract all people who got off (reduce)

//   // { on: [x,y,z], alighted: [x,y,z] }  
//   const map = { on: [], off: []};

//   busStops.reduce(function (result, [on, off]) {
//     console.log('result', result, 'stop', on, off);
//     map['on'].push(on);
//     map['off'].push(off);
//   }, {})

//   console.log(map)

//   const passengers = map.on.reduce((result, number) => result + number, 0);
//   const alighted = map.off.reduce((result, number) => result + number, 0);

//   return passengers - alighted;
// }

// const number = busStops => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

const number = (busStops) => busStops.reduce(function (result, [on, off]) {
  console.log('result', result, 'result+on-off', result + on - off)
  return result + on - off;
}, 0)

console.log(number([[10,0],[3,5],[5,8]]));

// assert(number([[10,0],[3,5],[5,8]]),5);
// assert(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
// assert(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);