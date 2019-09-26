function clicar() {
  var inicio = document.getElementById('inicio') 
  var fim = document.getElementById('fim')
  var passo = document.getElementById('passo')
  var msg = document.getElementById('msg')

  if (inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0) {
    msg.innerHTML = 'impossivel contar'
  } else {
    msg.innerHTML = 'Contando: </br>'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p == 0) {
      alert('[ERRO] Considerando passo 1')
      p = 1;
    }
    if(i < f) {
      for(a = i; a <= f; a += p) {
        msg.innerHTML += ` ${a}\u{1F449}`
      } 
    } else if(i > f) {
      for(a = i; a >= f; a -= p) {
        msg.innerHTML += ` ${a}\u{1F449}`
      }
    }
    msg.innerHTML += `\u{26A0}`
  }
}

