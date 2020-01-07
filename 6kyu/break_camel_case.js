// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function breakCamelCase(string) {
  // Add a space after each capital letter
  // replace capital letter with space and capital letter
  const capitals = new RegExp('[A-Z]', 'gm');
  
  const replacer = (match) => ` ${match}`;

  return string.replace(capitals, replacer);

}

function breakCamelCase(string) {
  // Add a space after each capital letter
  // replace capital letter with space and capital letter
  const capitals = new RegExp('[A-Z]', 'gm');
  // Enclose first capturing group in () brackets
  return string.replace(/([A-Z])/gm, ' $1');

}



console.log(breakCamelCase('camelCasing')); // camel Casing