const assert = require('assert');
/*
function nbYear(original_population, base_growth_rate, immigrants, target_population) {
  // formula for compound growth
  // A = P(1 + r)^t
  // total rate of growth / yr = r = 2%P + 50
  // A = P(1 + (2% + 50))^t

  // target_population  = original_population(1 + (base_growth_rate/100) + immigrants)^t
  // target_population / original_population  = (1 + (base_growth_rate/100) + immigrants)^t
  // base = (1 + (base_growth_rate/100) + immigrants)
  // log base * (target_population / original_population) = t
  // Math.log(base) * (target_population / original_population) = t


  const base = (1 + (base_growth_rate / 100) + immigrants);
  console.log(base)
  const t = Math.log(base) * (target_population / original_population);
  console.log(t)
  const rounded_population =  Math.floor(t);
  console.log(rounded_population)
  return rounded_population;
}

/// ==================

function nbYear(current_population, base_growth_rate, immigrants, target_population) {
  const numerator = -1473.510690 + (1.323784 * (current_population + immigrants)) + (41244.63582 * base_growth_rate/100) - target_population;
  const t = (numerator / -152.881625);
  console.log(t);
  return Math.round(t);
}

*/

//  --------------- OR ---------------

function nbYear(original_population, base_growth_rate, immigrants, target_population) {
  let years = 0;
  let current_population = original_population;

  while (current_population < target_population) {
    current_population = current_population + immigrants + (current_population * base_growth_rate / 100);
    original_population = current_population;
    years++;
  }
  return years;
}

assert(nbYear(1500, 5, 100, 5000), 15);
assert(nbYear(1500000, 2.5, 10000, 2000000), 10);
assert(nbYear(1500000, 0.25, 1000, 2000000), 94);

console.log(nbYear(1000, 2, 50, 1200))
console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))
console.log(nbYear(1500000, 0.25, 1000, 2000000))