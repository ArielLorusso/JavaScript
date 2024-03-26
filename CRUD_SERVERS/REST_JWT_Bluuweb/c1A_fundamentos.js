//  https://bluuweb.github.io/javascript/fundamentos/#var-vs-let-vs-const
//  https://bluuweb.dev/00-started/
//  https://www.youtube.com/watch?v=Z4TuS0HEJP8

//  https://javascript.info/
//  https://codesandbox.io/s/?utm_source=landingpage

/////////////////////   Objetos     ////////////////////////////////////////
const mascota = {
  nombre: 'Tom',
  edad: 10,
  vivo: true,
  razas: ['peludo', 'negro']
}

console.log(mascota.nombre)
console.log(mascota.razas[1])

//////////////////////   Destructuring Objects    https://wesbos.com/destructuring-objects
const nombreMascota = mascota.nombre
console.log(nombreMascota)

const {nombre} = mascota
console.log(nombre)

//////////////////////   FETCH     ///////////////////////////////
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// Nos permite consumir API en nuestro codigo
// en este caso la de la pag https://pokeapi.co/ 
// que es libre y no requiere API-key
console.log("CON FETCH")
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res  =>  res.json() )
    .then( data =>  {
        //   console.log(data.results);
        data.results.forEach(element => {
        //    console.log(element.name)
        });
    } )
    .catch( error => console.log(error))

/////////////////////   ASYNC AWAIT ///////////////////////////

///  await : va dentro de async
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#description
//   async() devuelve un elemento Promise que resolverá con el valor devuelto.
//   Si promise rechaza async puede contener una expresión await,
//   que pausa la ejecución de la función asíncrona  y espera resolución de Promise

console.log("CON ASINC + AWAIT ")
obtenerPokemons = async() => {
  try { 
    const res  = await fetch('https://pokeapi.co/api/v2/pokemon/') 
    const data = await res.json() // await calls function
    console.log(data.results)
  } 
  catch (error) { console.log(error) }
}

obtenerPokemons()

/////////////////   ARRAY.PROTOTYPE.MAP()   ///////////////////////////////////
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

console.log("CON ARRAY + PUSH ")
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res  =>  res.json() )
    .then( data =>  {
        arrayNombres = []
        data.results.forEach(element => {
           console.log(element.name)
        arrayNombres.push(element.name)
        });
        console.log(arrayNombres)
    } )
    .catch( error => console.log(error))


console.log("CON ARRAY.MAP() ")
obtenerPokemons = async() => {
  try { 
    const res  = await fetch('https://pokeapi.co/api/v2/pokemon/') 
    const data = await res.json() // await calls function
    console.log(data.results)
    data.results.map(poke => {console.log(poke)})
  } 
  catch (error) { console.log(error) }
}
obtenerPokemons()

/////////////////   ARRAY.PROTOTYPE.FILTER()   ///////////////////////////////////
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

console.log("CON FILTER ")
obtenerPokemons = async() => {
  try { 
    const res  = await fetch('https://pokeapi.co/api/v2/pokemon/') 
    const data = await res.json() 
    // poke.poder es un ejemplo pero no existe
    arrayNombres = data.results.filter(poke => poke.name == "bulbasaur" )
    console.log(arrayNombres)
  } 
  catch (error) { console.log(error) }
}
obtenerPokemons()