function clicar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var msg = document.getElementById('msg')
        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            msg.innerHTML = '[ERRO] Impossível contar'
        } else {
            msg.innerHTML = 'Contando: </br>'
            var i = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)
            if (i < f) {
                for(a = i; a <= f; a += p) {
                    msg.innerHTML += ` ${a}\u{1F449}`
                }
            } else if (i > f) {
                for(b = i; b >= f; b -= p) {
                    msg.innerHTML += ` ${b}\u{1F449}`
                }
            }
            msg.innerHTML += ` Fim!`
        }
}