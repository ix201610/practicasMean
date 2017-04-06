//Importamos http
//Los require los guardamos en una variable
//Usando esa variable accedemos a las funciones
let http = require("http");
let contador=0;

//Creamos un servidor
http.createServer( function(request, response){
    console.log("Peticion recibida");
    //Configuramos la cabecers
    response.writeHead(200, {'Content-type': 'text/plain'});
    //Añadimos el body
    contador++;
    response.end("Hola mundo. Peticiones procesadas:"+contador);

}).listen(8000);

console.log("Hola mundo");
console.log("Esperando peticiones...");