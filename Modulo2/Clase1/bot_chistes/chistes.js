const chistes = [
    "Queria conquistarla pero no se de Java",
    "¿Cual es la forma orientada a objetos para hacerse rico? La herencia",
    "¿Que necesita un programador para aprender a bailar? Algo-ritmo",
    "¿Cómo se disculpa un programador? Con un 'try', pero si no funciona, con un 'catch'.",
    "El software, las iglesias y las catedrales son muy parecidos: primero los construimos, luego rezamos"
]

function getRandomJoke() {
    const index = Math.floor(Math.random()*chistes.length);
    return chistes[index]
}

module.exports = {getRandomJoke}

