let express = require("express");
let app = express();
let bodyParser = require("body-parser");

//Usando nuetras librerias
let libreria = require("./html_07/Entidades.js");
let negocioCoches = require("./07_Negocio_Coches.js");
libreria.f1();

console.log("Iniciando...");
app.listen(8000, function(){
    console.log("Servidor iniciado...");
});

app.use(express.static('html_07'));
app.use(bodyParser.json());


//Api REST
app.get("/coches", function( request, response){
    response.json(negocioCoches.listarCoches());
});

app.get("/coches/:id", function( request, response){
    let id = request.params.id;
    let coche = negocioCoches.buscarCoche(id);
    if(coche !=null){
        response.json(coche);
    }else{
        response.sendStatus(404);
    }
});

app.post("/coches", function( request, response){
    let coche = request.body;
    negocioCoches.insertarCoche(coche);
    response.sendStatus(200);
});

app.put("/coches", function( request, response){
    let coche = request.body;
    if(negocioCoches.modificarCoche(coche)){
        response.sendStatus(200);
    }else{
        response.sendStatus(418);
    }
});

app.delete("/coches/:id", function( request, response){
    let id = request.params.id;
    if(negocioCoches.borrarCoche(id) == true){
        response.sendStatus(200);
    }else{
        response.sendStatus(404);
    }
   
});