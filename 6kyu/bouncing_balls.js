// https://www.codewars.com/kata/bouncing-balls/train/javascript
/*
function bouncingBall(h, bounce, window) {
  if (window >= h || h <= 0 || bounce <= 0 || bounce >= 1 ) return -1;
  const initial_bounce = 1;
  let bounce_height = bounce * h; console.log(bounce_height)
  let bounces = (Math.floor(bounce_height / window)) + 1; console.log(bounces)
  let times_seen = bounces + initial_bounce;
  return times_seen;
}

*/

function bouncingBall(h, bounce, window) {
  if (window >= h || h <= 0 || bounce <= 0 || bounce >= 1 ) return -1;
   // initial bounce up

  let bounce_height = h * bounce;

  // If ball didn't bounce, return 1;
  if (bounce_height <= window) return 1;

  // Ball bounced at least once, that means mother saw it twice when it bounced and once when it fell to the ground the first time
  let times_seen = 3;
  
  // Continue as long as the ball bounces higher than the window
  while (bounce_height > window) {
    // Decrease bounce_height, new h becomes previous bounce height
    console.log(bounce_height);
    bounce_height = bounce * bounce_height;
    console.log(bounce_height)
    h = bounce_height;
    console.log(h);
    if (h > window) {
      times_seen = times_seen+2;
    }
  }
  return times_seen;
}

console.log(bouncingBall(3.0, 0.66, 1.5)) //3

console.log(bouncingBall(30.0, 0.66, 1.5)) // 15