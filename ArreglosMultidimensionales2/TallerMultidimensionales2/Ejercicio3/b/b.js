function Arreglo3B() {
const arreglo = [[2, 8, 9], [30, 71, 77], [11, 990, 41]];
let suma = 0;

for (let i = 0; i < arreglo.length; i++) {
  for (let j = 0; j < arreglo[i].length; j++) {
    suma += arreglo[i][j];
  }
}

console.log('La suma de los elementos más internos es:', suma);

}
Arreglo3B();