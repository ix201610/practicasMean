
console.log("Empezando");
if (typeof localStorage === "undefined" || localStorage === null) {
    var MiLocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new MiLocalStorage("./dir_datos");
}
// localStorage.setItem("Mi clave primera", "Un valor primero");
// localStorage.setItem("Mi clave segunda", "Un valor segundo");

var item1 = localStorage.getItem("Mi clave primera");
var item2 = localStorage.getItem("Mi clave segunda");
console.log("Items: " + item1 + ". item2: " + item2);