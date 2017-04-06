let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.listen(8000, function(){
    console.log("Servidor iniciado...");
})


app.use(express.static('html_07'));
app.use(bodyParser.json());

//Coche ////////////////////////////////////////////////
function Coche(id, marca, modelo , potencia){
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
}
Coche.prototype.imprimirConsola = function(){
    console.log(this.id+","+this.marca+","+this.modelo+","+this.potencia);
};
/*
c = new Coche();
c = new Coche("m","m",0);
c = new Coche("m","m",0,1);*/

/*
let Coche = {    'id'           : null,
                 'marca'        : null,
                 'modelo'       : null,
                 'potencia'     : null }

Coche.inicializar = function(id, marca, modelo, potencia){
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
}   */             

//Variable global para el id de los coches
let contadorCoches = 4;
//Array para guardar coches
let coches = [];
coches.push(new Coche(1,"Marca1","Modelo1",11));
coches.push(new Coche(2,"Marca2","Modelo2",22));
coches.push(new Coche(3,"Marca3","Modelo3",33));

let idCocheSel = null;

//Api REST ///////////////////////////////////////////////

//Raiz
app.get("/", function(request, response){
    response.send("Hola que tal RAIZ");
});

//Listar todos
app.get("/coches", function(request, response){
    response.json(coches);
});

//Buscar
app.get("/coches/:id", function(request, response){
    idCocheSel = request.params.id;
    //let coche =buscarCoche(idCocheSel);

    for (let a=0;a<coches.length;a++){
        let coche = coches[a];
        if (coches.id == idCocheSel){
            response.json(coche);
            return;
        }
    }    
    response.send(404);
});

//Insertar
app.post("/coches", function(request, response){
    let coche = request.body;
    
    //var coche = Object.create(Coche);
    //coche.inicializar(contadorCoches++, datosCoche.marca, datosCoche.modelo, datosCoche.potencia);
    coches.id = contadorCoches;
    contadorCoches++;
    coches.push(coche);  //Grabacion del coche
    
    response.sendStatus(200);  // O .end
});

//Modificar
app.put("/coches", function(request, response){
    let coche = request.body;
    for (let a=0;a<coches.length;a++){
        if (coches[a].id == coche.id){
            coches[a] = coche;
            response.sendStatus(200);
            return;
        }
    }     
    response.sendStatus(418);
});

//Borrar
app.delete("/coches/:id", function(request, response){
    let id = request.params.id;
    //borrarCoche();
    for(let a=0;a<coches.length;a++){
        if(coches[a].id ==id){
            delete coches[a];
            response.sendStatus(200);
            return;
        }
    }
    response.sendStatus(404);
});



function buscarCoche(id){
    let coche = null;
    for (let a=0;a<coches.length;a++){
        let c = coches[a];
        if (c.id == id){
            coche = c;
            break;
        }
    }
    return coche;
}

function borrarCoche(){
    var posicion;
    for(posicion=0;posicion<coches.length;posicion++){
        if(coches[posicion].id ==idCocheSel){
            break;
        }
    }
    //

    coches[posicion]=null;
    for(let a=posicion;a<coches.length;a++){
        coches[a] = coches[a+1];
    }
    //Viva la Pepa:
    coches.length = coches.length - 1;
}
