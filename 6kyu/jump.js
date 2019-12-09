// https://www.codewars.com/kata/jump/train/javascript

function canJump(array) {
  let winnable = false;

  if (array.length === 1) return winnable;
  let position = 0;
  let moves = array[position];
  
  while (position <= array.length - 1) {
    let tests = array[position];
    console.log(tests)
    let counter = 1;
    while (counter < tests) {
      console.log(counter);
      let nextSteps = array[position + counter];
      console.log(nextSteps);
      console.log(position);
      
      tests --
      return;
    }
    return;
  }
}



 false
console.log(canJump([2])) // false
console.log(canJump([3, 0, 2, 4])) //true 3 -> 2
