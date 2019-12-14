// https://www.codewars.com/kata/title-case/train/javascript

/*
function titleCase(string, minorWords) {
  
  if (!string.length) return string;

  // Capitalise first letter unless word is in minor words
  // 1. Lowercase all the letters
  let lowerCased = string.toLowerCase();
  console.log(lowerCased)
  lowerCased = lowerCased.split(' ');
  console.log(lowerCased)
  // 2. Lowercase minor words
  // 3. Uppercase only those not in minor words
  if (!minorWords && string) {
    // Titlecase all the words
    console.log(string)
    const firstletter = new RegExp(/\b\w+/, 'igm'); // new RegExp(/\b[a-z]+/, 'igm');

    string = string.replace(firstletter, (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase());
    console.log(string)
    return string
  }

  if (minorWords) {
    minorWords = minorWords.toLowerCase().split(' ');
    console.log(minorWords);

    lowerCased = lowerCased.map((word) => {
        console.log(word);
        if (!minorWords.includes(word)) {
          // Uppercase
          const uppercaseFirstLetter = new RegExp(/\b\w+/, 'im');
          word = word.replace(uppercaseFirstLetter, (match) => match.charAt(0).toUpperCase() + match.slice(1))
        }
      return word
    })
    console.log(lowerCased);
    // Uppercase first letter of first word
    console.log(lowerCased)
    lowerCased = lowerCased.join(' ');
    console.log(lowerCased)
    lowerCased = lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1)
    console.log(lowerCased)
  }
  return lowerCased;

}
*/

function titleCase(string, minorWords) {

  if (!string.length) return string;
  // 1. Lowercase everything
  let lowerCased = string.toLowerCase();
  lowerCased = lowerCased.split(' ');
  // 2. Lowercase minor words
  // 3. Uppercase first letter of only those not in minor words

  // new RegExp(/\b[a-z]+/, 'igm');
  const uppercaseFirstLetter = (string) => string.replace(/\b\w+/igm, (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase());
  if (!minorWords && string) {
    return uppercaseFirstLetter(string);
  }

  if (minorWords && string) {
    minorWords = minorWords.toLowerCase().split(' ');

    lowerCased = lowerCased.map((word) => {
      console.log(word)
      // Uppercase all words if they are not a minor word
      if (!minorWords.includes(word)) {
        // Uppercase
        word = uppercaseFirstLetter(word);
      }
      return word
    })
    // Uppercase first letter of first word
    lowerCased = lowerCased.join(' ');
    lowerCased = lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
  }
  return lowerCased;
}

console.log(titleCase('')) // ''
console.log(titleCase('a clash of KINGS', 'a an the of')) // 'A Clash of Kings
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')) // 'The Quick Brown Fox
console.log(titleCase('aBC deF Ghi')) // 