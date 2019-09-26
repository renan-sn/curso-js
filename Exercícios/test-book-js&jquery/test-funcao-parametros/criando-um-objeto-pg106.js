/*
var hotel = new Object(); // cria um novo objeto
hotel.name = 'Hotel Palace'; // atribui valores ao objeto
hotel['rooms'] = 40; // "['']" tambem pode ser usado 
hotel.booked = 25;

hotel.avaliationCkeck = function() { // 'avaliationCkeck' passa a ser uma função
   return this.rooms - this.booked; // 'this' funciona como um tipo de "fazendo referência a..." / 'return' retorna o cálculo para a função
};
console.log(hotel.avaliationCkeck());
*/


/** CRIANDO VÁRIOS OBJETOS pg 108 */
function Hotel(name, rooms, booked) { // Geralmente funcção de construtos começa em letra maiúsculas
   this.name = name;                  // Isso à cima é usado por dev para diferenciar função de notação de construtor
   this.rooms = rooms;                // com funções normais
   this.booked = booked;
   this.avaliationCkeck = function() {
      return this.rooms - this.booked;
   }
}
// Instâncias
var hotelUm = new Hotel('Palace Hotel', 40, 25); //
var hotelDois = new Hotel('Hotel Star', 60, 35);

console.log(hotelUm.name); // Resultado ('Palace Hotel') que é o "name" de "hotelUm" que recebeu "new Hotel" com ligação ao código a cima
console.log(hotelUm.avaliationCkeck()); // Exibiu resultado da função



