const assert = require('assert');

function disemvowel(str) {
  const vowels = new RegExp('[aeiou]', 'ig');
  return str.replace(vowels, '')
}

assert((disemvowel("This website is for losers LOL!"),"Ths wbst s fr lsrs LL!"))