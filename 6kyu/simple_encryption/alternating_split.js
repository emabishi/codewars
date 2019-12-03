// For building the encrypted string:
//   Take every 2n d char from the string, then the other chars, that are not every 2n d char, and concat them as new String.
// Do this n times!

// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

const assert = require('assert');

function encrypt(text, n) {
  // split string into array
  // Take every even index + 1 letter and put it in a string
  // Take every odd index + 1 letter and concatenate it to the string before
  // Do this n times
  
  if ((text && text.length === 0) || !text) {
    return text;
  }

  let count = 0;
  while (count < n) {
    let evens = Array.from(text).filter((letter, idx, self) => (idx + 1) % 2 === 0);
    let odds = Array.from(text).filter((letter, idx, self) => (idx + 1) % 2 !== 0);
    console.log(evens)
    console.log(odds)
    count ++;
    text = evens.concat(odds).join('')
  }
  return text;
}

function decrypt(encryptedText, n) {
  if ((encryptedText && encryptedText.length === 0) || !encryptedText) {
    return encryptedText;
  }
  let count = 0;
  let len = encryptedText.length;
  while (count < n) {
    let text = new Array(len);


    count++
  }
}

/*
function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;

  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
      console.log(ans[i])
      console.log(encryptedText[j++])
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}
*/
console.log(decrypt(' eAPn', '1'))

// console.log(encrypt("This is a test!", 0));
// console.log(encrypt("This is a test!", 1));
// console.log(encrypt(null, 1));
// console.log(encrypt("", 1));

// assert(encrypt("This is a test!", 0), "This is a test!");
// assert(encrypt("This is a test!", 1), "hsi  etTi sats!");
// assert(encrypt("This is a test!", 2), "s eT ashi tist!");
// assert(encrypt("This is a test!", 3), " Tah itse sits!");
// assert(encrypt("This is a test!", 4), "This is a test!");
// assert(encrypt("This is a test!", -1), "This is a test!");
// assert(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");