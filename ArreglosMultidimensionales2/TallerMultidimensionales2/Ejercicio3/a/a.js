function Arreglo3A() {
let contador= 0;
let arreglo=[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo[i].length; j++) {
            if (!(arreglo[i][j] % 2 == 0)){
                contador++
            }
        }
        
    }
        console.log("Hay " + contador + " impares");

}
Arreglo3A();