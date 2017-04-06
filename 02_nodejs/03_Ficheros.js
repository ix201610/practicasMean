let fs = require("fs");

console.log("//Inicio////////////////");

let data = fs.readFileSync("texto.txt");
console.log(data.toString());

console.log("//UNO////////////////");

//Las funciones que reciben por parámetro una función de callback son asíncrona
// y generalmente VOID (por lo que no lleva let)
var datos = "vacio";
fs.readFile("texto.txt",function(error, data){
    datos = data.toString();
    console.log(data.toString());
});
// Este codigo se ejecuta mientras se lee el fichero
//
//while (datos=='vacio'){
//    //Realizamos una espera activa hasta que se lea el fichero
//}
console.log(datos);

console.log("//FIN////////////////");

