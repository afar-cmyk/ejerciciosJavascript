// Find Area of a rectangle with given X and Y coordinates
// Encuentra el area de un rectangulo con las coordenadas ingresadas
// input = ["(1 1)", "(1 3)", "(3 1)", "(3 3)"]
// output = 4
//
// input = ["(0 0)","(1 0)","(1 1)","(0 1)"]
// output = 1

let entrada = ["(1 1)", "(1 3)", "(3 1)", "(3 3)"];

function generarCoordenadas(input) {
  // Guarda los datos limpios en una variable
  let inputLimpio = organizarDatos(input);

  // Funcion que limpia los datos
  function organizarDatos(datos) {
    // Funcion para remover los parentesis
    function quitarElementos(objeto) {
      let arreglo = [];
      let i = 0;
      while (i < objeto.length) {
        arreglo.push(objeto[i].replace(/[()]/g, ""));
        i++;
      }
      return arreglo;
    }

    // Funcion para separar los datos
    function desglozarArreglo(objeto) {
      let arreglo = [];
      let k = 0;
      while (k < objeto.length) {
        arreglo.push(objeto[k].split(" "));
        k++;
      }
      return arreglo;
    }

    let limpiar = quitarElementos(datos);
    let desglozar = desglozarArreglo(limpiar);

    return desglozar;
  }

  function calcularArea(objeto) {
    // Establece la mitad del arreglo
    let mitad = Math.ceil(objeto.length / 2);

    // Establece un conjunto de arreglos denominados ancho y alto
    const ancho = objeto.slice(0, mitad);
    const alto = objeto.slice(-mitad);

    // Algoritmo que devuelve el tamaño de las coordenadas ingresadas
    function calcularTamaño([primera, segunda]) {
      return Math.sqrt(
        Math.pow(primera[0] - segunda[0], 2) +
          Math.pow(primera[1] - segunda[1], 2)
      );
    }

    let tamañoAncho = calcularTamaño(ancho);
    let tamañoAlto = calcularTamaño(alto);

    let areaRectangulo = parseInt(tamañoAncho * tamañoAlto);

    return areaRectangulo;
  }

  return calcularArea(inputLimpio);
}

console.log(generarCoordenadas(entrada));
