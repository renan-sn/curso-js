let width = 500;
let heigth = 340;

// Aqui a função grava o valor de "width" para a pagina (usando o método "write()" do objeto "document")
var getWidth = function() {
   document.write(this.width); // "this" faz referência a var global "width"
}

/*---------------------------------------------------------------------------------------------*/
var check = {
   width: 530,
   heigth: 450,
   getArea: function() {
      return this.width * this.heigth; // "this" faz referência ao objeto check, ou seja,
                                       // seria o mesmo que escrever "return check.width * check.heigth;"
   }
}
console.log(check.getArea());

/*---------------------------------------------------------------------------------------------*/
var width = 700;
var shape = { width: 300};

var showWidth = function() {
   document.write(this.width); // Aqui "this" refere-se ao objeto "shape" e não a var "width"
}