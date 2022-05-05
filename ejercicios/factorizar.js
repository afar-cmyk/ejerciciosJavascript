// Funcion que factoriza un numero ingresado
//
//First Factorial
//take the num parameter being passed and return the factorial of it.
//For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.

function factorialize(num) {
  var resultado = num;
  if (num <= 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    resultado *= num;
  }
  return resultado;
}

console.log(factorialize(5));
