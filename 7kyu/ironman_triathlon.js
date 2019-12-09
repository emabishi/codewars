// https://www.codewars.com/kata/ironman-triathlon/train/javascript

const assert = require('assert');

function iTri(dist) {
  //its gonna be a long day!
  const triathlon = { swim: 2.4, bicycle: 112, marathon: 26.2 };

  const totalDist = triathlon.swim + triathlon.bicycle + triathlon.marathon; // 2.4+112+26.2
  const remainingDist = (totalDist - dist).toFixed(2);

  if (dist === 0) return `Starting Line... Good Luck!`;
  if (dist >= totalDist) return `You're done! Stop running!`
  if (dist < triathlon.swim && dist > 0) {
    return { 
      Swim: `${remainingDist} to go!`
    }
  }
  if (dist > triathlon.swim && dist < (triathlon.bicycle + triathlon.swim)) {
    return {
      Bike: `${remainingDist} to go!` 
    }
  }
  // Running + More than 10 miles to go
  if (dist > (triathlon.swim + triathlon.bicycle) && remainingDist > 10) {
    return {
      Run: `${remainingDist} to go!`
    }
  }
  // Running + less than 10 miles to go
  if (dist > (triathlon.swim + triathlon.bicycle) && remainingDist < 10) {
    return {
      Run: 'Nearly there!'
    }
  }
}

assert(iTri(36),{'Bike':'104.60 to go!'});
assert(iTri(103.5),{'Bike':'37.10 to go!'});
assert(iTri(2),{'Swim':'138.60 to go!'});