// const times = "01|15|59, 01|47|16, 01|17|20, 01|32|34"
// const times = "01|15|59, 01|47|16, 01|17|20, 01|32|34, 2|17|17"
const times = "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41";
const formattedTimes = times.split(',').map((time, idx) => time.replace(/\|/ig, ','))
console.log(formattedTimes)
console.log(formattedTimes.map((time, idx) => time.split(',')))


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
    const hrs = time['h']*3600;
    const mins = time['m']*60;
    const seconds = time['s']

    return hrs+mins+seconds;
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


  const mins = (hrs - Math.floor(hrs))*60
  const tmins = mins - Math.floor(mins)
  console.log(mins);
  console.log(tmins);
  console.log(Math.floor(mins))
  console.log(`${Math.floor(mins)}`.length)

  const tsecs = Math.floor(tmins * 60)
  console.log(tsecs);
  console.log(`${tsecs}`.length)

  // If hrs/mins/seconds has one digit append a 0 at the start
  return `${`${Math.floor(hrs)}`.length === 2 ? Math.floor(hrs) : `0${Math.floor(hrs)}` }|${`${Math.floor(mins)}`.length === 2 ? Math.floor(mins) : `0${Math.floor(mins)}`}|${`${tsecs}`.length === 2 ? tsecs : `0${tsecs}` }`
}

function getAverage(seconds) {
  // Average seconds
  // Convert back into hrs seconds mins
  const avg = seconds.reduce((result, el) => result + el, 0) / seconds.length
  return avg
}

function getMedian(seconds) {
  console.log(seconds)
  // Arrange seconds from lowest to highest
  const ascendingSeconds = seconds.sort((a, b) => a - b);
  console.log(ascendingSeconds);

  let medianSeconds;

  if (ascendingSeconds.length % 2 !== 0) {
    medianSeconds = ascendingSeconds[Math.floor(ascendingSeconds.length / 2)]
  } else {
    // Median seconds  = 
    medianSeconds = (ascendingSeconds[Math.floor(ascendingSeconds.length / 2)] + ascendingSeconds[Math.floor(ascendingSeconds.length / 2) - 1]) /2
  }
  console.log(medianSeconds)
  return medianSeconds

}

console.log(convertToTimeObjects(times));
console.log(getSeconds(convertToTimeObjects(times)));
console.log(getRange(getSeconds(convertToTimeObjects(times))));
console.log(getTime(getRange(getSeconds(convertToTimeObjects(times)))));

console.log(getTime(getAverage(getSeconds(convertToTimeObjects(times)))))
console.log(getMedian(getSeconds(convertToTimeObjects(times))))
console.log(getTime(getMedian(getSeconds(convertToTimeObjects(times)))))
