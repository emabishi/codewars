// https://www.codewars.com/kata/title-case/train/javascript


function titleCase(string, minorWords) {

  const reg = new RegExp(/\b\w+/, 'ig'); // const reg = new RegExp (/\b[a-z]+/, 'ig');
  // Uppercase all first word letters & Lower case all letters that are not the first letter in the word
  let titleCased = string.replace(reg, (match) => match[0].toUpperCase() + match.slice(1).toLowerCase());

  // ID if there are minor words in string
  // Lower case minor words
  if (minorWords) {
    let exceptions = minorWords.replace(reg, (match) => match.toLowerCase());
    const minor = exceptions.split(' ');
    console.log(minor);

    console.log(titleCased)

    // Lowercase all exceptions in the string 
    // unless at the beginning of the sentence
    minor.forEach(element => {
      console.log(element);
      const z = new RegExp("\\b" + element, 'gi');
      const r = new RegExp("^" + element, 'gi');
      console.log(titleCased.match(z));
      console.log(titleCased.match(r));

      // Word that's not at the beginning of the sentence
      // Not at the beginning of the sentence
      const e = new RegExp(/\b\w+/, 'img');
      if (titleCased.match(z) && !titleCased.match(e)) {
        // lowercase the element
        const q = new RegExp(element, 'gi');
        console.log(q);

        titleCased = titleCased.replace(q, element.toLowerCase())

        console.log(titleCased);
      }
    });
  }

  console.log(titleCased);
  return titleCased

}

// console.log(titleCase('')) // ''
console.log(titleCase('a clash of KINGS', 'a an the of')) // 'A Clash of Kings
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')) // 'The Quick Brown Fox