console.log("probando")



// cuando la funcion tiene unicamente una linea de codigo
// - quitamos las llaves que envuelven el codigo
// - el return es implicito (no hace falta ponerlo)

const sayHello = (name) => `Hola ${name}`


console.log( sayHello("Pedro") )
console.log( sayHello("Antonio") )



let namesArr = ["sarah", "anna", "antonio", "tomas", "alfonso", "angel"]

let someNames = namesArr
.filter((eachName) => eachName[0] === "a")
.map((eachName) => eachName.toUpperCase())
.forEach(() => {
  // multiples lineas de alguna manipulacion de DOM
})

console.log(someNames)





// Objetos

let username = "Jorge";
let age = 38;



// const user = {
//   username: username,
//   age: age,
// }

// cuando el valor de la propiedad tiene el mismo nombre que la variable de donde viene el valor
// entonces solo lo colocamos una vez

const user = {
  username,
  age,
  joinedDate: "31/07/2023"
}

console.log(user)



const unPerrito = {
  name: "Phantom",
  color: "negro",
  age: 7
}



// console.log( `${unPerrito.name} es un perrito de color ${unPerrito.color} y tiene ${unPerrito.age} añitos de edad` )
// console.log( `${unPerrito.name} es el mejor perrito del mundo! 10/10`)

// Destructuracion es la tecnica que nos permite extraer las propiedades del objeto para su facil uso

// syntaxis es:
// const { propiedadesAExtraer } = objetoDeDondeLasExtraemos
const { name, color, age: dogAge } = unPerrito

// JS literalmente crea variables con los valores de las propiedades

// console.log( `${name} es un perrito de color ${color} y tiene ${dogAge} añitos de edad` )
// console.log( `${name} es el mejor perrito del mundo! 10/10`)


const otroPerrito = {
  name: "Buddy",
  color: "gris",
  age: 5
}


function describeDog( { name, age, color } ) {
  // const { name, age, color } = perrito

  console.log( `${name} es un perrito de color ${color} y tiene ${age} añitos de edad` )
  console.log( `${name} es el mejor perrito del mundo! 10/10`)
}

describeDog(unPerrito)
describeDog(otroPerrito)


// Destructuracion en arrays


const misLibrosFavoritosDelMundo = [ "Dragonlance", "Señor de los anillos", "el Hobbit", "MundoDisco", "Cancion de Fuego y Hielo", "Harry Potter" ]


// console.log( `Mis libros favoritos son: ${misLibrosFavoritosDelMundo[0]}, ${misLibrosFavoritosDelMundo[1]}, ${misLibrosFavoritosDelMundo[2]} ` )

const [ libro1, libro2, libro3, libro4, libro5, libro6 = "valor predeterminado" ] = misLibrosFavoritosDelMundo

console.log( `Mis libros favoritos son: ${libro1}, ${libro2}, ${libro3}, ${libro4} y ${libro5} ` )

console.log(libro6)

// asignar un valor predeterminado



// Ejemplo de destructuracion compleja


const person = {
  firstName: "Elon",
  lastName: "Musk",
  job: "X CEO",
  other: {
    about: {
      hobby: "Viajar a Marte",
      companies: ["Tesla", "X", "Starlink"]
    }
  }
}

// como puedo destructurar el hobby de Elon

const { other: { about: { hobby } } } = person;

console.log(hobby)

// console.log(person.other.about.hobby)

const { other: { about: { companies: [ , , h3 ] } } } = person

console.log(h3)