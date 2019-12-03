function getCount(str) {
  const vowels = new RegExp('[aeiou]', 'ig');
  const letters = str.replace(/\s/ig, '').split('');
  const hash = {};

  for (let i = 0; i < letters.length; i++) {
    if (vowels.test(letters[i])) {
      hash[letters[i]] = (hash[letters[i]] || 0) + 1
    } else {
      // pass
    }
  }
  console.log(hash);
  return Object.values(hash).reduce((a,b) => a + b, 0);
}


function getCount(str) {
  const vowels = new RegExp('[aeiou]', 'ig');
  const letters = str.replace(/\s/ig, '').split('');
  const hash = {};

  letters.forEach(function(letter) {
    if (vowels.test(letter)) {
      hash[letter] = (hash[letter] || 0) + 1
    } else {
      // pass
    }
  })
  console.log(hash);
  // add all values for vowels
  return Object.values(hash).reduce((a,b) => a + b, 0);
}


function getCount(str) {
  const vowels = new RegExp('[aeiou]', 'ig');
  const letters = str.replace(/\s/ig, '').split('');

  let count = 0;
  letters.forEach(function(letter) {
    if (vowels.test(letter)) {
      count += 1;
    } else {
      // pass
    }
  })
  return count;
}

function getCount(str) {
  const letters = str.replace(/\s/ig, '').split('');
  let count = 0;
  letters.forEach(letter => {
    if (/[aeiou]/ig.test(letter)) {
      count += 1;
    } else {
      // pass
    }
  })
  return count;
}

function getCount(str) {
  console.log(str.replace(/[^aeiou]/gi, ''))
  return str.replace(/[^aeiou]/gi, '').length;
}

function getCount(str) {
  console.log(str.match(/[aeiou]/gi, ''))
  return (str.match(/[aeiou]/gi) || []).length;
}


console.log(getCount("abracadabra"))