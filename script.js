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



// OPERADOR SPREAD => esparcir ...


const someNumbers = [ 1, 20, 100, 40 ];


console.log( Math.max(...someNumbers) )

console.log( ...someNumbers )

const students = [ "Mercedes", "Rubén", "Uriel" ];
const staff = [ "Pedro", "Antonio", "Ruth" ];

const todos = [ ...students, ...staff, "Dani" ]
console.log(todos)


const somePeople = [
  {
    name: "Dani",
    candy: 10,
  },
  {
    name: "Anna",
    candy: 5,
  },
  {
    name: "Omar",
    candy: 12,
  },

]

console.log( ...somePeople )


// OPERADOR REST => el resto de ...

const hobbies = ["surfear", "escalar", "ver pelis", "gaming", "hechar codigo"];


const [ hobby1, ...restOfHobbies ] = hobbies
console.log(hobby1)
console.log(restOfHobbies)

function esMayorADiez(...allArguments) {

  let sum = allArguments.reduce((acc, elem) => acc + elem, 0)

  if (sum >= 10) {
    console.log("Llego a 10")
  } else {
    console.log("aun no es 10 :(")
  }

}

esMayorADiez(1, 1, 1, 1, 6)



// JS Asincrono

function pedirUnLibro(bookId, callback, callbackError) {
  // let bookId = 0;

  // let callback = function a invocar cuando esté la data
  // ir a una biblioteca, buscar un libro y devolverlo al usuario
  // let libroAEnviar;
  setTimeout(() => {
    const library = [
      "1. La comunidad del anillo",
      "2. Las dos Torres",
      "3. El retorn del Rey"
    ]
    let libroAEnviar = library[bookId]
    if (libroAEnviar === undefined) {
      callbackError("El libro no existe")
    } else {
      callback(libroAEnviar) // en este momento, ya tengo el libro.
    }
  }, Math.random() * 3000) // 0 - 3s

  // return libroAEnviar;
}
// let libroPedido = pedirUnLibro(0)
// console.log(libroPedido)

// function recibirData(laData) {
//   // de forma asincrona, recibir la informacion
//   console.log("recibiendo la data", laData)
// }

// pedirUnLibro(1, 2, 3)

// pedirUnLibro(0, (laData) => {
//   console.log("recibiendo la data", laData)
// }, (error) => {
//   console.log("ocurrio un error :(", error)
// })

// pedirUnLibro(1, (laData) => {
//   console.log("recibiendo la data", laData)
// }, (error) => {
//   console.log("ocurrio un error :(", error)
// })

// pedirUnLibro(2, (laData) => {
//   console.log("recibiendo la data", laData)
// }, (error) => {
//   console.log("ocurrio un error :(", error)
// })

// pedirUnLibro(3, (laData) => {
//   console.log("recibiendo la data", laData)
// }, (error) => {
//   console.log("ocurrio un error :(", error)
// })


// organizados con la piramide del doom!

// pedirUnLibro(0, (laData) => {
//   console.log("recibiendo la data", laData)
//   pedirUnLibro(1, (laData) => {
//     console.log("recibiendo la data", laData)
//     pedirUnLibro(2, (laData) => {
//       console.log("recibiendo la data", laData)
//       pedirUnLibro(3, (laData) => {
//         console.log("recibiendo la data", laData)
//       }, (error) => {
//         console.log("ocurrio un error :(", error)
//       })
//     }, (error) => {
//       console.log("ocurrio un error :(", error)
//     })
//   }, (error) => {
//     console.log("ocurrio un error :(", error)
//   })
// }, (error) => {
//   console.log("ocurrio un error :(", error)
// })







// PROMESAS

function pedirUnLibro(bookId) {

  let thePromise = new Promise((resolve, reject) => {


    setTimeout(() => {
      const library = [
        "1. La comunidad del anillo",
        "2. Las dos Torres",
        "3. El retorn del Rey"
      ]
      let libroAEnviar = library[bookId]
      if (libroAEnviar === undefined) {
        reject("El libro no existe")
      } else {
        resolve(libroAEnviar)
      }
    }, Math.random() * 3000) // 0 - 3s

  })

  return thePromise;

}

// Esta es la PARTE IMPORTANTE

// const algo = pedirUnLibro(0)
// console.log(algo)

// const laPromesa = pedirUnLibro(5)

// pedirUnLibro(0)
// .then((response) => {
//   console.log("recibiendo y leyendo:", response)
//   // en este momento, yo quiero pedir otra cosa
//   return pedirUnLibro(10)
// })
// .then((response) => {
//   console.log("recibiendo y leyendo:", response)
//   return pedirUnLibro(2)
// })
// .then((response) => {
//   console.log("recibiendo y leyendo:", response)
//   // ya tengo todos los libros
// })
// .catch((error) => {
//   console.log("error", error)
//   // return pedirUnLibro(0)
// })
// .then((response) => {
//   console.log("despues del catch", response)
// })

// pedirUnLibro(1)
// .then((response) => {
//   console.log("recibiendo y leyendo:", response)
// })
// .catch((error) => {
//   console.log("error", error)
// })

// pedirUnLibro(2)
// .then((response) => {
//   console.log("recibiendo y leyendo:", response)
// })
// .catch((error) => {
//   console.log("error", error)
// })


// Promise.All & Promise.allSettled

// reciben un array de promesas y retornas una nueva promesa

// Si una de las promesas falla, TODO falla
// Promise.all([
//   pedirUnLibro(0), // promesa1
//   pedirUnLibro(10), // promesa2
//   pedirUnLibro(2) // promesa3
// ])
// .then((response) => {
//   console.log(response)
// })
// .catch((error) => {
//   console.log(error)
// })


// Nunca falla, siempre da estado y razon de cada una de las promesas
// Promise.allSettled([
//   pedirUnLibro(1), // promesa1
//   pedirUnLibro(10), // promesa2
//   pedirUnLibro(2) // promesa3
// ])
// .then((response) => {
//   console.log(response)
// })



// async await. try/catch
// creamos una funcion tipo asincrona

async function getData() {
// la funcion tendrá comportamientos asincronos a resolver

  try {
    // voy a intentar hacer esto...

    const response = await pedirUnLibro(0)
    // JS ESPERA resolver la promesa de arriba, antes de continuar acá
    console.log("desde async/await", response)
  
    const response2 = await pedirUnLibro(10)
    console.log(response2)
  
    const response3 = await pedirUnLibro(2)
    console.log(response3)
  } catch(error) {
    // .. si algo no logré hacerlo, entonces...
    console.log(error)
  }

}

getData()

// TEST CONSOLE:LOG:
console.log("test!")