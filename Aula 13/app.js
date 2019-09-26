

function clicar() {
    var i = document.getElementById('inicio').value;
    var f = document.getElementById('fim').value;
    var p = document.getElementById('passo').value;
    var res = document.getElementById('msg');
        
    while (i <= f) {
        res.innerText = i;
        i += p;
    };
};
