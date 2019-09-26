
var getNumber = [];
var somaNumber = 0;
function adicionar() {
   
   //Alertar erro se o usuário não digitar um valor
  let numero = document.getElementById('numero');
   if (numero.value.length == 0 || numero.value > 100) {
      alert('[ERRO] Valor invalido')
   } else {
      // Adiciona um valor no elemento select
      let addnum = Number(numero.value);
      let addselect1 = document.getElementById('selval');
      let newEl = document.createElement('option'); // cria um elemento option para o pai select
         newEl.innerText = `valor ${addnum} adicionado`;
         addselect1.appendChild(newEl);
         getNumber.push(addnum); // Adiciona os valores digitados sequencialmente na var getNumber
         getNumber.sort(); // Ordena os valores de forma crescente
         somaNumber += addnum; // var somaNumber recebe um valor somado ao ultimo armazenado nela cada vez que ele é adicionado no select
   }
}

function finalizar() {
   //Alertar erro se nada for adicionado no campo select
   let addselect = document.getElementById('selval');
   if(addselect.length == 0) {
      alert(`[ERRO] Ipossivel finalizar`)
   } else {
      let registerNum = getNumber.length; // recebe a quantidade de valores adicionados no select
      let down = document.getElementById('down'); // Local onde aparecerão os resultados finalizados
      let lastNum = Number(getNumber.length); // recebe o valor de getNumber convertido em numero
         down.innerHTML = `Ao todo temos ${registerNum} números cadastrados</br>`;
         down.innerHTML += `O maior valor informado foi ${getNumber[lastNum-1]}</br>`;
         down.innerHTML += `O menor valor informado foi ${getNumber[(lastNum/lastNum)-1]}</br>`;
         down.innerHTML += `Somando todos os valores, temos ${somaNumber}</br>`;
         down.innerHTML += `A média dos valores digitados são ${somaNumber/lastNum}`;
   }
}