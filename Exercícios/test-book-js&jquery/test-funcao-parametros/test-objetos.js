
/*
// OBJETOS DE NOTAÇÃO LITERARIA
var hotel = {
   nome: 'Quay',
   quartos: 40,
   quartoCheio: 25,
   vazio: true,
   tipoDeQuartos: ['com suite', 'sem suite'], //é possível ter arrays dentro de objetos tambem
   checkHotel: function(){ // pode receber funões tambem
      return this.quartos - this.quartoCheio;
   }
}
//Os objetos da variavel podem ser acessados usando '.' (ponto)
console.log('Aqui, no ' + hotel.nome + ', nos temos um total de '+ hotel.quartos+ ' quartos. Sendo 25 '+ hotel.tipoDeQuartos[0]+ ' e 15 '+ hotel.tipoDeQuartos[1]);
console.log(`Checando quartos disponíveis...`);
console.log(`Há ${hotel.quartoCheio} quartos ocupados`);
console.log('Temos '+ hotel.checkHotel()+' quartos disponíveis');
console.log(hotel.quartoCheio);
//Podem ser acessadas por '[]' (pag 102)
console.log(hotel['quartos']);
*/

var hot = {
   nome: 'Palace Hotel',
   quartos: 50,
   quartosOcup: [],
   quartosDisp: function(){
      this.quartosOcup.sort();
      return this.quartos - this.quartosOcup[1];
   }
}
hot.quartosOcup.push(3, 8)
console.log('No '+ hot.nome +' temos '+ hot.quartosDisp() +' quartos disponíveis' );




