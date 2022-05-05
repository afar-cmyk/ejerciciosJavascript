function Reversa(str) {
  let texto = str;
  const enArray = texto.split("");
  const primera = enArray.reverse();
  const unirReversa = primera.join("");

  return unirReversa;
}
