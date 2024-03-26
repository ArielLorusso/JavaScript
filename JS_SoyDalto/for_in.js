document.write("a"+"<br>");
let i = 20;
// let i = 0;	// error... no es valida la redeclaracion

for (let i=6; i>=0;i--)	{ 	// es valido dado que la variable i es local a el for
	if (i==1){continue;}
	document.write(i+"<br>");
}
document.write(i+"<br>"); // vuelve a valer 20  dado que es otra i


let animals = ["gato", "perro", "vaca"];
animals.edad = 11;

for (animal in animals)	{ 	// "0,1,2,edad"    INDICE y atributos
	document.write(animal + "<br>"); 
}
for (animal of animals)	{ 	// "gato, perro, vaca"  ELEMENTO
	document.write(animal + "<br>");//
}
	document.write(animals.edad + "<br>");

/*
*/