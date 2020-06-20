//Número de columnas y filas que tendrá elarregloo bidimensional
var col = 4;
var row = 2;

//Declarar variables
var a = 1;
var b = 0;
var c = 0;
var fibonacci = [];
var array = [];
var limit = 0;
var number = 0;
var container = col * row;
//Secuencia de Fibonacci
while (number < container) {
  number++;
  fibonacci.push(c);
  c = a + b;
  a = b;
  b = c;
}

//Arreglo por fila
for (var i = 0; i < row; i++) {
  array.push([]);
}

//Validación al terminar una fila, por el número de columnas
while (fibonacci.length != 0) {
  var y = limit;
  //Arriba
  for (var x = limit; x < col - limit; x++) {
    array[y][x] = fibonacci.shift();
  }
  //Derecha
  if (fibonacci.length != 0) {
    for (y = limit + 1; y < row - limit; y++) {
      x = col - limit - 1;
      array[y][x] = fibonacci.shift();
    }
    //Abajo
    if (fibonacci.length != 0) {
      for (x = col - limit - 2; x >= limit; x--) {
        y = row - limit - 1;
        array[y][x] = fibonacci.shift();
      }
      //Izquierda
      if (fibonacci.length != 0) {
        for (y = row - limit - 2; y > limit ; y--) {
          x = limit;
          array[y][x] = fibonacci.shift();
        }
      }
    }
  }
  limit++;
}
//Imprimir arreglo en la consola.
console.log(array);