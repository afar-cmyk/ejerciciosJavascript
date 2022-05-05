// Funcion que invierte las palabras ingresadas

// First Reverse
// take the str parameter being passed and return the string in reversed order.
// For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function reversa(str) {
  let texto = str;
  const enArray = texto.split("");
  const primera = enArray.reverse();
  const unirReversa = primera.join("");

  return unirReversa;
}

console.log(reversa("Hello World and Coders"));
