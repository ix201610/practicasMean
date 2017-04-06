let express = require("express");
let app = express();

app.listen(8000, function(){
    console.log("Servidor iniciado...");
})

//Peticiones para obtener recursos estáticos
//Buscará tales recursos en la carpeta 'html'
app.use(express.static('html_05'));

// Peticiones a nuestro 'servicio'
app.get("/", function(request, response){
    response.send("Hola que tal");
});

//Recogiendo información de la petición//////////////
//Parámetros después de la ? (Query param)
//Parámetros incluidos en la url (Path param)
//Datos contenidos en el body de la petición
//Cookies


app.get("/sumar", function(request, response){ // get sumar?s1=1&s2=2
    console.log(request.query.s1); 
    console.log(request.query.s2);
    let s1 = parseInt(request.query.s1);
    let s2 = parseInt(request.query.s2);
    let suma = s1+s2;
    response.send("resultado:"+suma);
});

app.get("/peliculas/director/:director/genero/:genero", function(request, response){ // get peliculas/director/genero/cifi
    let director = request.params.director;
    let genero = request.params.genero;
    console.log("Buscar pelis por director y genero");
    console.log(director);
    console.log(genero);
    response.send("Lista de pelis ("+director+","+genero+").....bla..bla bla..");
});

//Accediendo al body para ercoger un JSON
let bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/coches", function(request, response){
    console.log("=================================="); 
    console.log("Insertar coche");
    let coche = request.body;
    console.log("Marca:"+ coche.marca); 
    response.sendStatus(204);
});

//Respondiendo con un json
app.get("/coches/:id", function(request, response){
    console.log("=================================="); 
    let id = request.params.id;
    console.log("Buscar coche:"+id);
    let coche ={'marca' : 'Renault',
                'modelo' : '8',
                'potencia' : 45};
    response.json(coche);
});



app.get("/buscarCliente", function(request, response){ //buscarCliente?nombre=nombre
    console.log(request.query.nombre); 
    let nombre = request.query.nombre;
    response.send("HArry");  
});



