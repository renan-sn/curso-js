// (ready) VERIFICA SE A PAG ESTÁ PRONTA PARA SER TRABALHADA
$(document).ready(function () {
    alert('Hello, world!') 
    let $exibe = $('body').html(); // var usada no final do script
 //   $('li').html('Help') //Todos os elemntos 'li' recebem novo texto$('li').hide();

    let $a = $('ul').html(); // Pega o conteudo do elemento
    let $b = $('li').text(); // Pega o texto do elemento
    $('ul').append($a); // "append()" adiciona ao DOM
    $('ul').append('<p>' + $b + '</p>'); // Adiciona o texto da var "$b" como parágrafo

    // $(function () {
    //     $('li').hide()
    //     .delay(1000)
    //     .fadeIn(2000)
    //     .slideUp(3000);
    // });
// Livro pag 317
    $(function () {
        $('li:contains("test")').text('Renan'); // ":contains" seleciona todos os itens que tem a palavra passada por parametro dentro dele
        $('li.help').html(function () {
            return '<em>' + $(this).text() + '</em>';
        });
        $('li#find').remove(3000)
            .delay(500)
            .slideUp(1000);
    });

    $(function () {
        $('button').on('click', function () { // Ouvinte de eventos
            return $(this).text('Valor'); // Altera a palavra para "Valor" e this retorna isso ao elemento "button"
        });
    });

// MAIS OUVINTES DE EVENTOS
    // $(function () {
    //     $('button').on('mousemove', function () { 
    //         return $(this).text('Click 2x'); 
    //     });

    //     $('button').on('mouseout', function () {
    //         return $(this).text('Teste');
    //     });
        
    //     $('button').on('dblclick', function () {
    //         alert('Fim');
    //     });
        
    // });
        
// MÉTODO MAIS PRÁTICO DE MOVER O MOUSE SOBRE UM ELEMENTO 
    $('button').hover(
        function () { 
            return $(this).text('Clique para fechar');
    },
        function () {
            return $(this).text('Fora');
        }
    );

// OCULTA OS ELEMENTOS QUANDO CLICA
    $('button').on('click', 
        function () {
            $('ul').hide(600);
            $(this).hide(100);
            $('div').slideUp(500);
        }
    );

// "toogle" ALTERNA ENTRE MOSTRAR E ESCONDER
    $('button.ver').on('click', 
        function () {
            $('body').html($exibe); // var coletada no inicio do código
            $(this).remove();
        }
    );
    
});

