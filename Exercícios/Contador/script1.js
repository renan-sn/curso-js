// function ver(a) {
//    let inicio = document.getElementById('inicio');
//    let fim = document.getElementById('fim');
//    let passo = document.getElementById('passo');
//    let msg = document.getElementById('msg');

//    if (inicio.value.length == a || passo.value.length == a || fim.value.length == a) {
//       alert('[ERRO] Insira um valor numérico válido');
//    } else {
//       let i = Number(inicio.value);
//       let f = Number(fim.value);
//       let p = Number(passo.value);
//       msg.innerText = '';
//       if (i < f) {
//          for (let a = i; a <= f; a += p) {
//             msg.innerHTML += `${a}, `;
//          };
//       } else if ( i > f) {
//          for ( let b = i; b >= f; b -= p) {
//             msg.innerHTML += `${b}, `;
//          };
//          msg.innerHTML += 'fim!';
//       };
//    };
// };
// var verificar = document.getElementById('verificar');
// if( verificar.addEventListener){
//    verificar.addEventListener('click', function(){ver(0)}, false);
// } else {
//    verificar.attachEvent('click', function(){ver(0)});
// }

// function ver(e) {
//    let inicio = document.getElementById('inicio');
//    let fim = document.getElementById('fim');
//    let passo = document.getElementById('passo');
//    let msg = document.getElementById('msg');
//    var teste = e.type; // ver pág 262
//    alert(teste)
//    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
//       alert('[ERRO] Insira um valor numérico válido');
//    } else {
//       let i = Number(inicio.value);
//       let f = Number(fim.value);
//       let p = Number(passo.value);
//       msg.innerText = '';
//       if (i < f) {
//          for (let a = i; a <= f; a += p) {
//             msg.innerHTML += `${a}, `;
//          };
//       } else if ( i > f) {
//          for ( let b = i; b >= f; b -= p) {
//             msg.innerHTML += `${b}, `;
//          };
//          msg.innerHTML += 'fim!';
//       };
//    };
   
// };
// let verificar = document.getElementById('verificar');
//    verificar.addEventListener('click', ver, false);



// function alertTest(e, rec) {
//    alert('Ok');
//    var a = e.target; // ver pag 262
//    a.addEventListener('mousemove', mouseIn, false);
//    a.addEventListener('mouseout', mouseOut, false);
// }

// function mouseIn() {
//     alert('Dentro')
// }
// function mouseOut() {
//    alert('Fora')
// }


//    let teste = document.getElementById('verificar');
//    teste.addEventListener('click', function(e){
//       alertTest(e, 2)}, false);
   


// function setup() {
//    let foc = document.getElementById('email');
//    foc.focus();
// }

// window.addEventListener('load', setup, false);


// EVENTOS "focus" E "blur"
//  function checkUsername(e){
//    let username = el.value;
//    if(username.length < 5) {
//       alert('Insira um nome maior')
//       e.target.value;
//       alert(e)
//    }
// }

// function tipUsername() {
//    el.focus();
// }

// var el = document.getElementById('name');



// el.addEventListener('blur', checkUsername, false);
// window.addEventListener('load', tipUsername, false);