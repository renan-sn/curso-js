/* 
function intIn(a, c=0) {
   if((a*c)%2 == 0) {
      return 'par'
   } else {
      return 'ímpar'
   }
}
let b = intIn(2, 11)
console.log(b)
*/
/*
let s = 4
let n = 7
function sn(s, n){
   if(s+n == 10) {
      return true
   } else {
      return false
   }
}
let r = sn(s,n)
console.log(r)
 */
/*
 function getArea(width, heigth, volume) {
   let area = width*heigth
   let volum = width*heigth*volume
   let total = [area, volum]
   return total
 }
 let ar = getArea(2, 4, 3)[0]
 let ar2 = getArea(3, 8, 2)[1]

 console.log(ar, ar2) */

 var a = (function() {
    var x = 3;
    var y = 5;
    return x + y;
 }()); // Os parenteses sem nada informam ao interpretador para chamar a funão imdiatamente(ver livro pag 97)
 console.log(a) 
 
 