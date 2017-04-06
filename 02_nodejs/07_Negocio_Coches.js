  
let entidades = require("./html_07/Entidades.js");

let coches = []; 
coches.push(new entidades.Coche(1,"Renault","14",65));
coches.push(new entidades.Coche(2,"Talbot","Samba",45));
coches.push(new entidades.Coche(3,"Citroën","Ami6",40)); 
let contador = 3;

exports.insertarCoche = function(coche){
    contador++;
    coche.id = contador;
    coches.push(coche);
}

exports.modificarCoche = function(coche){
    for(let a=0; a<coches.length; a++){
        if(coches[a].id == coche.id){
            coches[a] =coche;
            return true;
        }
    }
    return false;
}

exports.borrarCoche = function(id){
    for(let a=0; a<coches.length; a++){
        if(coches[a].id == id){
            coches.splice(a,1);
            return true;
        }
    }
    return false;
}

exports.listarCoches = function(){
    return(coches);
}

exports.buscarCoche = function(id){
    for(let a=0; a<coches.length; a++){
        if(coches[a].id == id){
            return coches[a];
        }
    }
    return null;
}
