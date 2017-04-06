let express = require("express");
let app = express();
let bodyParser = require("body-parser");

//////////////////////////////////////////////////////
function Avion(id, fabricante, modelo, year){
    this.id = id;
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.year = year;
}

let aviones = [];
aviones.push(new Avion(1,"F1","M1",1901));
aviones.push(new Avion(2,"F2","M2",1902));
aviones.push(new Avion(3,"F3","M3",1903));
aviones.push(new Avion(4,"F4","M4",1903));
let contador = 4;

Avion.prototype.fabricante="XXX";
//////////////////////////////////////////////////////

console.log("Iniciando...");
app.listen(8000, function(){
    console.log("Servidor iniciado...");
});


app.use(bodyParser.json());
app.use(function(request, response, next){
    console.log("Añadiendo movidas a la cabecera");
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    response.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    //response.send("RESPUESTA");
    next(); //sigue adelante

});


//Api REST
app.get("/aviones", function( request, response){
    response.json(aviones);
});

app.get("/aviones/:id", function( request, response){
    let id = request.params.id;
    let avion = null;
    for(let a=0;a<aviones.length;a++){
        if(aviones[a].id ==id){
            avion = aviones[a];
            break;
        };
    }
    if(avion !=null){
        response.json(avion);
    }else{
        response.sendStatus(404);
    }
});

app.post("/aviones", function( request, response){
    console.log("POST");
    let avion = request.body;
    contador++;
    avion.id = contador;
    aviones.push(avion);
    response.sendStatus(200);
});


app.put("/aviones", function( request, response){
    console.log("PUT");
    let avion = request.body;
    for (let a=0; a<aviones.length; a++){
        if(aviones[a].id == avion.id){
            aviones[a] =avion;
            response.sendStatus(200);
            return;
        }
    }
    //Soy una tetera
    response.sendStatus(418);
});


app.delete("/aviones/:id", function( request, response){
    console.log("DELETE");
    let id = request.params.id;
    for(let a=0; a<aviones.length; a++){
        if(aviones[a].id == id){
            aviones.splice(a,1);
            response.sendStatus(200);
            return;
        }
    }
    response.sendStatus(404);
   
});