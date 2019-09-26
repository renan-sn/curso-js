function Casa(sala, quarto, cozinha, banheiro) {
   this.sala = sala;
   this.quarto = quarto;
   this.cozinha = cozinha;
   this.banheiro = banheiro;
   this.chekDisp = function() {
      return this.sala + this.quarto + this.cozinha + this.banheiro;
   }
}

let casaDePedro = new Casa(2, 3, 1, 4); // Esse método é conhecido como instancias
let casaDeAna = new Casa(3, 4, 2, 5); // Esse método é conhecido como instancias

let maiorCasa = (function(){
   if(casaDePedro.chekDisp() > casaDeAna.chekDisp()) {
      return 'Pedro';
   } else {
      return 'Ana';
   }
}());

/** OBJETO DE NOTAÇÃO LIERAL */
let casaMaisCara = {
   ana: 'Ana',
   pedro: 'Pedro',
   quartos: [],
   verd: 5
};
casaMaisCara.quartos.push(1,3,5);

console.log(casaMaisCara.quartos[1] - casaMaisCara.verd);
console.log(`A casa de Pedro tem ${casaDePedro.chekDisp()} vãos`);
console.log(`A casa de Ana tem ${casaDeAna.chekDisp()} vãos`);
console.log(`Considerando a casa com mais vãos, a maior casa é a de ${maiorCasa}`);


