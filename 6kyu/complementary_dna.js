const assert = require('assert');

function DNAStrand(dna) {
  //your code here
  // for A, return T, for T return A
  // for C return G, for G return C
  function complement (base) {
    switch (base) {
      case 'A':
        return 'T'
      case 'T':
        return 'A'
      case 'C':
        return 'G'
      case 'G':
        return 'C'
      default:
        return base;
    }
  }
  const complements = Array.from(dna).map(base => complement(base))
  console.log(complements)
  // or return complements.toString().replace(/,/g, '')
  return complements.join('');
}

// const pairs = {
//   'A': 'T',
//   'T': 'A',
//   'C': 'G',
//   'G': 'C'
// };

// const DNAStrand = (dna) => dna.split('').map(base => pairs[base]).join('');


console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
assert(DNAStrand("AAAA"), "TTTT", "String AAAA is");
assert(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
assert(DNAStrand("GTAT"), "CATA", "String GTAT is");