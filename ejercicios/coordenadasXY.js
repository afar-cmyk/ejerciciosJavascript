// Genera coordenadas X y Y partiendo de un arreglo ingresado
// input = ["(1 1)", "(1 3)", "(3 1)", "(3 3)"]
// output = [ { x: 1, y: 1 }, { x: 1, y: 3 }, { x: 3, y: 1 }, { x: 3, y: 3 } ]

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

  // Funcion que utiliza los datos limpios para devolver un arreglo de coordenadas X y Y
  function crearCoordenadas(objeto) {
    let coordenadas = [];
    let u = 0;
    while (u < objeto.length) {
      coordenadas.push({
        x: parseInt(objeto[u][0]),
        y: parseInt(objeto[u][1]),
      });
      u++;
    }
    return coordenadas;
  }

  return crearCoordenadas(inputLimpio);
}

console.log(generarCoordenadas(entrada));
