let rec = {
   casaName: 'casaPedro',
   quartNumber: 30,
   salaNumber: 18,
   recFunc: function() {
      return this.quartNumber - this.salaNumber;
   }
}
console.log(rec.recFunc());
