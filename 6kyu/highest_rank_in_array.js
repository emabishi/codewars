// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

function highestRank(arr) {
  // Return most frequent
  // If tie, return largest

  // { el: count, el: count ...}
  // return [] with el with highest Object.values. If [].length > 1, return Math.max(array)

  let map = {};
  arr.forEach(el => map[el] = map[el] + 1 || 0);
  console.log(map)
  const maxCount = Math.max(...Object.values(map));
  console.log(maxCount);

  // Find keys that belong to max count value
  const mostFrequent = Object.keys(map).filter(key => map[key] === maxCount);
  console.log(mostFrequent);
  return Math.max(...mostFrequent)
  
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));