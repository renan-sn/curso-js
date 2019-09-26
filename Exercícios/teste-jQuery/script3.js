
/* TRABALHANDO COM CADA ELEMENTO EM MA SELEÇÃO */
$(function () {
  $('button#1').on('click', function () {
    let bot = this.id; // Código JavaScript puro para obter o "id" do elemento (isso gera menos código do que se fossemos usar uma coleta por jQuery, por conta do tamanho do código e consumo de memória)
    alert(bot);
    $('li').each( function () { // "each()" significa "para cada elemento do seletor" ag 324
      alert($(this).text());
    });
  });

/* FUNÇÃO EXAMINA QUAL EVENTO FOI DISPARADO PELO USUÁRIO E RETORNA UMA RESPOSTA */
  $('button#6').on('click mouseout', function (event) { // Pode-se usar a letra "e" no parâmetro para simbolizar "event"
    var eventDisp = event.type;                         // mas essa abreviação em JS tambem significa "error"
      if (eventDisp == 'mouseout') {                    // Nesse caso é melhor usar o "event" por precaução.
        alert('Por favor, clique para prosseguir!');
      } else {
        alert('Carregando...');
      }
  });

  $('button#4').one('click', function (event) { 
      let a = event.target; 
        alert(a);
  });

/* EXAMINA SE A TECLA "ENTER" (QUE TEM VALOR NUMÉRICO "13") FOI PRESSIONADA */
  $('button#5').on('keyup', function (event) { 
    if (event.which == 13 || event.keyCode == 13) {
      alert('A tecla "ENTER" foi pressionada!')
    } else {
      alert('Tecle "ENTER"!')
    }
  });
/* "contextmenu()" SIGNIFICA "QUANDO CLICAR COM O BOTÃO DIREITO DO MOUSE" */
  $('button#2').contextmenu( function () {
    $('li#find').toggleClass('new'); // "toggleClass()" alterna entre add e remover a classe especificada
  });

  

});