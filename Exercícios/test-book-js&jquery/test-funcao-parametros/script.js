/** function carregar() {
   let nomeFocus = document.getElementById('nome');
   nomeFocus.focus()
}

function valor() {
   let nome = document.getElementById('nome');
   let msgerro = document.querySelector('span.span');
   let res = document.getElementById('res');
   let resNome = document.getElementById('resNome');
   if (nome.value.length <= 0) {
      msgerro.style.display = 'inline';
      nome.focus()
   } else {
      resNome.innerHTML = `<p style="">${nome.value.toUpperCase()}</p>`;
      res.innerHTML = `Olá, ${nome.value}!</br> Seu nome tem: ${(nome.value).length} letras </br> Total a pagar: R$${(nome.value).length*5},00`; 
      res.style.border = '1px solid red';
      res.style.borderRadius = '10px';
      res.style.color = 'white';
      res.style.background = 'black';
      res.style.textAlign = 'center';
      res.style.padding = '10px';
      res.style.transition = '0.2s';
      let volt = document.querySelector('input.volt');
      volt.style.display = 'block';
   }
}
function voltar() {
   window.location.reload();
   
}
*/

// USO DO innerHTML e textContent
// function chamar(){
//    let test = document.getElementById('test').textContent;// coleta apenas o texto
//    let test1 = document.getElementById('test').innerHTML;// coleta todo o conteúdo (inclusive tags que tiver dentro do conteúdo)
//       alert('textContet: ' + test + 'innerHTML: ' + test1)
// }


// CRIANDO ELEMENTOS E ADICIONADO NA ÁRVORE DOM
// function chamar() {
//    let test = document.getElementById('test');
//    let newElement = document.createElement('a')
//    let newText = document.createTextNode('AQUI')
//       newElement.appendChild(newText)
//       test.appendChild(newElement)
// }


//REMOVENDO ELEMENTOS COM removeChild()
// function chamar() {
//    let test = document.getElementsByTagName('p')[0]; // seleciona o elemento "0" na lista de tags
//    let elementPai = test.parentNode; // (isso é obrigatório, para evitar erros) sleciona o pai do elemento da variável test
//    elementPai.removeChild(test); //remove o elemento test do seu elemento pai
// }


//NÓS DE ATRIBUTO (pág 232...)
// function chamar() {
//    let test = document.getElementById('test')
//    if (test.hasAttribute('id')) { // verifica se o elemento da var test tem um atributo "id"
//       var a = test.getAttribute('id') // adiciona o conteudo do "id" na var "a"   
//          alert(a)
//    }
//    let b = test.setAttribute('id', 'mudou') // altera o valor do ID do elemento "test"
//    let bb = test.getAttribute('id') // adiciona o conteudo do "id" com novo valor na var "bb" 
//    alert(bb)

//    let c = test.removeAttribute('id') // remove o atributo de "test"
//    alert(c)
// }


// var quartoTotal = 100;
// function Hotel(quartoSolteiro, quartoCasal) {
//    this.quartoSolteiro = quartoSolteiro;
//    this.quartoCasal = quartoCasal;
//    this.verifDisp = function() {
//       return (this.quartoSolteiro + this.quartoCasal) - quartoTotal;
//    }
// }
// let quartoNumber = new Hotel(67, 33);
 
