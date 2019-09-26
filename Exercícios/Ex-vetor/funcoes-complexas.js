/*function parouimpar(n) {
   if(n%2 == 0) {
      return 'par';
   } else {
      return 'ínpar';
   }
}
let res = parouimpar(5);
console.log(res);*/

function parouimpar(n1, n2) {
   return n1 + n2;
}
console.log(parouimpar(2, 4));
// Se caso não for passado os dois parametros para as variáveis dará erro

// para varial ter um valor se não for passado parametros faz-se assim (abaixo)
function parouimpar(n1=0, n2=0) { // variavel tem valor de '0'. Mas se for passado parametros ela recebe o valor deles
   return n1 * n2;
}
console.log(parouimpar(2));