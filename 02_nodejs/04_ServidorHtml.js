let http = require("http");
let fs = require("fs");
let url = require("url");

http.createServer(procesarPeticion).listen(8000);

function procesarPeticion(request, response){
    //request.url incluye los parámetros y la ruta completa al recurso
    //Podemos trocear para obtener lo que necesitamos pero es más cómodo 
    //utilizar 'require("url"))'
    console.log("Peticion recibida"+request.url);
    console.log(url.parse(request.url).pathname);
    //Al path le quitamos la primera barra para poder utilizarlo como ruta relativa
    let path = url.parse(request.url).pathname;
    console.log(path);
    switch(path){
        case "/ejemplo4/buscarCliente":   
                                buscarCliente(request, response);
                                break;
        case "listarClientes":
                                break;   
        case "insertarFactura":
                                break;
        default: path="html_04 "+path;
                 leerRecursoEstatico(path, request, response);
                 break;                                                                      
    }
}

function leerRecursoEstatico(path, request, response){

    fs.readFile(path, function(error, data){
        if(error !=null){
            response.writeHead(404, {'Content-type': 'text/html'});
            response.write("<h1><font color='red'>404. No encontrado</font></h1>");
        }else{
            //cabecera
            response.writeHead(200, {'Content-type': 'text/html'});
            //body
            response.write(data.toString());    
        }
        response.end();
    });    
}

function buscarCliente(request, response){
    response.writeHead(200, {'Content-type': 'text/plain'});
    //response.end("<h2>Harry Callahan</h2>");esto ya no sería un servicio    
    response.end("Harry Callahan");
}

console.log("Esperando peticiones.....");