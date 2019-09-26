// ADICIONANDO NOVO CONTEUDO Pag 319
    // $(function () {
    //     let $antes = $('<p>Adicionando um elemento</p>');
    //         $('ul').before($antes); // Add elemento antes do seletor
    //         $('ul li').after($antes); // Add elemento depois do seletor
    //     }
    // );

// ...continuação
    // $(function () {
    //     $('button').on('click', 
    //         function () {
    //             let $ret = $('<h5>Adicionado com prepend()</h5>'); 
    //             $('ul').prepend($ret); // Add elemento depois da tag de abertura do elemento do seletor
    //         },
    //         function () {
    //             let $ret = $('<h5>Adicionado com append()</h5>'); 
    //             $('ul').append($ret); // Add elemento antes da tag de fechamento do elemento do seletor
    //         }
    //     );
    // });

/* ______________________________________________________ */
  // OBTENDO E CONFIGURANDO VALORES DE ATRIBUTOS Pag 320
   /*  $(function () {
        $('button#1').on('click',
        function () {
           $('li#find').attr('id', 'findNew');
        });
           let $resgAtrr =  $('li#findNew').attr('id'); // Obtem o valor de atributo do elemento do seletor
           $('button#2').on('click', 
                function () {
                    alert($resgAtrr) // Alerta o valor da var "$resgAtrr"
           });
        }
    ); */

// ...continuação
    $(function () {
        $('button#1').on('click', function () {
            $('li#find').addClass('new'); // Adiciona uma class ao elemento do seletor, disparando um estilo definido no arquivo CSS
        });

        $('button#2').on('click', function () {
            $('li.help').addClass('new');
        });

/* _______________________________________________________________ */
            /* DEFININDO E OBTENDO ESTILO COM "css()" */
        
        $('button#3').on('click', function () {
            $('li#find').removeClass('new').css('transition', '0.8s');
        });

        $('button#4').on('click', function () {
            $('li.help').removeClass('new').css('transition', '.8s');
        });

        $('button.ver').on('mouseenter', function () {
            $('div').css({ // Define mais de um valor de estilo
                'background': '#4caf50',
                'transition': '.8s',
                'borderRadius': '20px',
                'width': '30%'
            });
            $('li').css({
                'listStyle': 'none',
                'color': 'white',
                'transition': '.8s'
            });
        });

        $('button.ver').on('mouseout', function () {
            $('div').css({ // Define mais de um valor de estilo
                'background': 'rgba(128, 128, 128, 0.233)',
                'transition': '.8s',
                'borderRadius': '0px',
                'width': '60%'
            });
            $('li').css({
                'color': 'black',
                'transition': '.8s',
                'listStyle': ''
            });
        });

/* --------------------------------------------------------------- */
            // ANEXANDO VÁRIOS EVENTOS A UM ELEMENTO //
        /* -----MÉTODO 1----- */    
            $('button#5').on({
                mouseover: function () {
                    alert('mouseover');
                },  
                mouseup: function () {
                    alert('mouseup');
                }
            });
        /* -----MÉTODO 2----- */
            $('button#6').on('mouseover mouseout click', // Eventos são definidos no mesmo "aspas" separados por um espaço simples 
                function (e) { // "e" representa o OBJETO EVENT (pag 328) que tem métodos e propriedades relacionadas com o evento que ocorreu
                    let a = e.which; // var "a" recebe o tipo (type) de evento que ocorreu
                    alert(a); // Alerta o valor dessa var
            });
    });