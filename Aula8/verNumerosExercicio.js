let numerosPrimos =[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
let numeros=[...numerosPrimos]


function maiorNumero(){
    return Math.min(...numerosPrimos)
}
console.log(maiorNumero())