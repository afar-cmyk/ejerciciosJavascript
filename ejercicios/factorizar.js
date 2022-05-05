function factorialize(num) {
  var resultado = num;
  if (num <= 0 || num === 1) return 1;
  while (num > 1) {
    console.log(num);
    num--;
    resultado *= num;
  }
  return resultado;
}
