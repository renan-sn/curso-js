let numero = document.querySelector('input#numero')
let selval = document.querySelector('select#selval')
let down = document.querySelector('div#down')
let getNumber = []


function inNumber(n) {
// n é analisado para que o valor esteja entre 1 e 100
   if(Number(n) >= 1 && Number(n) <= 100) {
      return true
   } else {
      return false
   }
}

function inList(n, l) {
// indexOf retorna o primeiro numero de var n e analisa se ele é diferente de (-1)
   if(l.indexOf(Number(n)) != -1) {
      return true
   } else {
      return false
   }
}

function adicionar() {
//inNumber recebe valor de "numero" e analisa se ele é diferente da lista de valores ja adicionados para então ser adicionado 
   if(inNumber(numero.value) && !inList(numero.value, getNumber)) {
      alert('Ok')
   } else {
      alert('Erro')
   }
}
