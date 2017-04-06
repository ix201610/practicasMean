
function cincoSegundos(){
    let inicio = new Date().getTime();  //hora del sistema
    while(new Date().getTime() < inicio + 5000){
        //
    }
    console.log("Fin de la funcion cincoSegundos");
}

console.log("============================");
console.log("Inicio");
cincoSegundos();
console.log("UNO");
// Si queremos que una funcion que tarda en ejecutarse no interrumpa el 
//flujo de la ejecución podemos usar un temporizador a cero.
setTimeout(cincoSegundos,0); //Queremos que llame ahora
console.log("FIN");