const assert = require('assert');


function convertToTimeObjects(times) {
  const formattedTimes = times.split(',').map((time, idx) => time.replace(/\|/ig, ','))
  const timeObjects = formattedTimes.map(time => {
    let map = {};
    time = time.split(',');
    map.h = Number(time[0]);
    map.m = Number(time[1]);
    map.s = Number(time[2]);
    console.log(time)
    return map
  })
  return timeObjects;
}

// Get seconds for everytime
function getSeconds(timeObjects) {
  // For each time object, h *3600 + m*60 + s
  const seconds = timeObjects.map(time => {
    const hrs = time['h'] * 3600;
    const mins = time['m'] * 60;
    const seconds = time['s']

    return hrs + mins + seconds;
  });
  return seconds
}

function getRange(seconds) {
  return (Math.max(...seconds) - Math.min(...seconds))
}

function getTime(seconds) {
  const hrs = seconds / 3600;
  console.log(hrs);
  const thrs = Math.floor(hrs);
  console.log(thrs)


  const mins = (hrs - Math.floor(hrs)) * 60
  const tmins = mins - Math.floor(mins)
  console.log(mins);
  console.log(tmins)

  const tsecs = Math.floor(tmins * 60)
  console.log(tsecs);

  // return `${Math.floor(hrs)}|${Math.floor(mins)}|${tsecs}`
  return `${`${Math.floor(hrs)}`.length === 2 ? Math.floor(hrs) : `0${Math.floor(hrs)}` }|${`${Math.floor(mins)}`.length === 2 ? Math.floor(mins) : `0${Math.floor(mins)}`}|${`${tsecs}`.length === 2 ? tsecs : `0${tsecs}` }`

}

function getAverage(seconds) {
  // Average seconds
  // Convert back into hrs seconds mins
  const avg = seconds.reduce((result, el) => result + el, 0) / seconds.length
  return avg
}

function getMedian(seconds) {
  // Arrange seconds from lowest to highest
  const ascendingSeconds = seconds.sort((a, b) => a - b);
  let medianSeconds;
  // odd elements
  if (ascendingSeconds.length % 2 !== 0) {
    medianSeconds = ascendingSeconds[Math.floor(ascendingSeconds.length / 2)]
  } else {
    // even elements
    medianSeconds = (
      ascendingSeconds[Math.floor(ascendingSeconds.length / 2)] +
      ascendingSeconds[Math.floor(ascendingSeconds.length / 2) - 1]
    ) / 2;
  }
  return medianSeconds;
}

function stat(times) {
  // Get range, average and median of values

  // Range
  // Convert all the times into seconds
  // Get max seconds - min seconds
  // convert result back into hts, mins, seconds
  const range = getTime(getRange(getSeconds(convertToTimeObjects(times))));
  const average = getTime(getAverage(getSeconds(convertToTimeObjects(times))))
  const median = getTime(getMedian(getSeconds(convertToTimeObjects(times))))
  return `Range: ${range} Average: ${average} Median: ${median}`;
}

console.log(stat("01|15|59, 01|47|16, 01|17|20, 01|32|34, 2|17|17"))