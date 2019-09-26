/*
let a = [2,3,4,5,6,7,8,9]
for (let p = 0; p < a.length; p++) {
   console.log(a[p]);
} // acesso a todos os elementos da variavel com um loop
*/
let c = ["renan", "caio", "roberto"];

for(let f in c) {
   c.push('pedro');
   console.log(`O valor de ${c[f]}`);
}
c.sort();
console.log('Procurando o caio na variavel c...');
if(c.indexOf('caio') == -1) {
   console.log(`O caio não foi encontrado`);
} else {
   console.log(`O caio está na casa: ${c.indexOf('caio')}`)
}
console.log(c[0].length*5);
