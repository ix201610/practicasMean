
f1 = function(){
    console.log("f1");
}

//Coche
Coche = function(id, marca, modelo, potencia){
    this.id       = id;
    this.marca    = marca;
    this.modelo   = modelo;
    this.potencia = potencia; 
}
Coche.prototype.imprimirConsola = function(){
    console.log(this.id+","+this.marca+","+this.modelo+","+this.potencia);
}

if(typeof exports != 'undefined'){
    exports.f1 = f1;
    exports.Coche = Coche;
}
