//jQuery Scripts

// MOSTRAR LISTA ABAIXO DAS OPÇÕES DE MENU
// $(function () {
//    $('a.item').hover( 
//       function () {
//          $('ol.filho').slideDown(300);
//       },
//       function () {
//          $('ol.filho').slideUp(300);
//       }
//    );
   // Incompleto...
// });


// Função para diminuir e aumentar tamanho do menu quando rolar a pagina
function scrollGet() {
   let roleGet = window.pageYOffset;
   let navHeight = document.querySelector('nav.menu')
   let titleOpacity = document.querySelector('h1.titleOpacity')
   //Quando rolar para baixo
   if(roleGet >= 402) {
      navHeight.style.transition = '0.3s';
      navHeight.style.background = '#001638';
      navHeight.style.paddingTop = '0px';
   }
   //Quando rolar para cima
   if (roleGet < 402) {
      navHeight.style.transition = '.5s';
      navHeight.style.background = 'rgba(0, 0, 0, 0)';
      navHeight.style.paddingTop = '1.5%';
   }
}

//** FUNC PARA ATUALIZAÇÃO DA DATA DE POSTAGEM */

function lastAtual(){
   let last_atual = document.querySelector('h5.last_atual');
   let getLastAtual =  new Date(document.lastModified);
   let local_date = getLastAtual.toLocaleDateString() +` às `+ getLastAtual.toLocaleTimeString();
   
   last_atual.innerHTML = `Atualizado em ` + local_date + ` (Horário de Brasília)`;
}

