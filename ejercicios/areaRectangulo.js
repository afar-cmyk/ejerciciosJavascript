// Find Area of a rectangle with given X and Y coordinates
// Encuentra el area de un rectangulo con las coordenadas ingresadas
// input = ["(1 1)", "(1 3)", "(3 1)", "(3 3)"]
// output = 4
//
// input = ["(0 0)","(1 0)","(1 1)","(0 1)"]
// output = 1

let entrada = ["(0 0)", "(1 0)", "(1 1)", "(0 1)"];

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

  // Funcion que utiliza los datos limpios para calcular el area del rectangulo
  function calcularArea(objeto) {
    let x = [];
    let y = [];
    let u = 0;

    while (u < objeto.length) {
      x.push(parseInt(objeto[u][0]));
      y.push(parseInt(objeto[u][1]));
      u++;
    }

    function generarMedia(arreglo) {
      let total = 0;
      for (let valor of arreglo) {
        total += valor;
      }
      let media = total / arreglo.length;
      return media;
    }

    let mediaX = generarMedia(x);
    let mediaY = generarMedia(y);

    let areaRectangulo = parseInt(mediaX * mediaY);

    return areaRectangulo;
  }

  return calcularArea(inputLimpio);
}

console.log(generarCoordenadas(entrada));
