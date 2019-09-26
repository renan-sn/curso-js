function ver() {
   let valtab = document.getElementById('tabuada');
   let th3 = document.getElementById('th3');
   let areatbd = document.querySelector('select.areatbd');
   if (valtab.value.length == 0) {
      alert('[ERRO] Valor inválido!');
   } else {
      areatbd.innerHTML = '';
      let v = Number(valtab.value);
      let tbd = document.getElementById('tbd');
      for (a = 1; a <= 10; a++) {
         let tbda = document.createElement('option');
         tbda.innerHTML = `${v} x ${a} = ${v*a}`;
         tbd.appendChild(tbda);
      };
      th3.innerHTML = `Tabuada numérica de: ${v} `;
      let sn = document.getElementById('sn');
      sn.innerHTML = 'Developed by - Renan SN';
      sn.style.textAlign = 'center';
   };
};