// for loop = repeat code using an index

    for(let i = 10; i > 0; i-=1){   // "10,9,8,7,6, ,4,3,2,1"
        if(i==5) { continue; }      // skips 5... break would end
        console.log(i);
    }                 

// for (ELEMENTS) = perform action foe each element

let animals = ["gato", "perro", "vaca"];
animals.edad = 11;

// FOR IN
    for (animal in animals)	{ 	// "0,1,2,edad"    INDICE y atributos
        document.write(animal + "<br>");  }
// FOR of
    for (animal of animals)	{ 	// "gato, perro, vaca"  ELEMENTO
        document.write(animal + "<br>");  }