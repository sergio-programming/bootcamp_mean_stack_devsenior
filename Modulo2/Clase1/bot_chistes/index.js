const {getRandomJoke} = require("./chistes.js");

console.log("Bienvenidos a la comedia de viernes por la noche de programadores");

//Mostrar un chiste cada tres segundos

setInterval( () => {
    console.log(`Este es un chiste: ${getRandomJoke()}`);   
}, 3000);
