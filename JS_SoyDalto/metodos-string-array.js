////////////////////		METODOS STRING 		///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

let cadena1 = "  cadena de prueva"
let cadena2 = "prueva"

// COMPARISONS  (case sensitive) 
resultado = cadena1.endsWith(cadena2); 	// true, must end with 
resultado = cadena1.includes(cadena2); 	// true, must contain  
resultado = cadena1.indexOf(cadena2);  	//  10 , first leter   (-1 not present)
resultado = cadena1.startsWith(cadena2);// true, must start with 


// PADDING (relleno)
resultado = cadena2.padStart(8,"1234");	// 12341234prueva
resultado = cadena2.padEnd(8,"1234");	// prueva12341234


// SEPARATION
resultado = cadena1.split(" ");			// ["cadena","de","prueva"]
resultado = cadena1.substring(0,5);		// "  cad"
resultado = cadena1.trim();				// cadena de prueva (si espacion en extremos)
resultado = cadena1.trimEnd();
resultado = cadena1.trimStart();
document.write(resultado.length + "  ");// 16
document.write(cadena1.length + "<br>");// 18 (2 spaces at start)


/*
//CASE CHANGE
resultado = cadena1.toUpperCase();		// CADENA DE PRUEVA
resultado = resultado.toLowerCase();	// cadena de prueva


//NUMERICOS
let numero = 10
resultado = numero.toString();
resultado = parseInt(resultado);
resultado = resultado + 10

document.write(resultado+ "<br>");
//document.write(cadena2 + "<br>" ) ; //


*/

////////////////////		METODOS ARRAY 		///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

let nombres = ["carl","pepe", "lolo"];
resultado = nombres.pop()				// saca el ultimo elemento
document.write(resultado + "<br>");		// lolo
resultado = nombres.shift()				// saca el primero
document.write(resultado + "<br>");		// carl
document.write(nombres + "<br>");		// pepe (el unico que quedo)
resultado = nombres.push("maria")		// mete elemeto al final y devuelve num elemeos
document.write(resultado + "<br>");		// 2
document.write(nombres + "<br>");		// pepe,maria

let numeros = [1,5,2,4,3,5];
let letras  = ['a','r','i','e','l'];
numeros.sort();   letras.sort();
document.write(numeros + "<br>");		// 1,2,3,4,5,5
document.write(letras + "<br>");		// a,e,i,l,r
numeros.splice(2,1,'a','b','c')			// saca 1 elem. desde posic. 2 e inserta
document.write(numeros + "<br>");		// 1,2, a,b,c ,4,5,5



// METODOS ACCESORES
numeros = [1,5,2,4,3,5];
letras  = ['a','r','i','e','l'];
resultado = letras.join();					// "a,r,i,e,l" simil toString()
resultado = letras.join("-");				// "a-r-i-e-l"
resultado = letras.slice(0,3);				// a,r,i
resultado = letras.slice(1,-1);				//   r,i,e,l
document.write(resultado + "<br>");			// a
 
 // 6:00:00
resultado = numeros.filter( (numero)=>		// for(numero of numeros)
	{	document.write(numero + "<br>"); 
		if(numero == 5) { return `alala`;}  // returns 5  :/
	} 										// 1  5  2  4  3  5    resu =5,5
)											// foeEach() es igual pero retorna undef.

let cosas = ["pan", "mano", "hogar", "tejado", "hoguera" ];
resultado = cosas.filter( cos => cos.length > 4)	// (cosas con + d 4 letras)
document.write( resultado + "<br>");       			//  "hogar", "tejado", "hoguera"



//document.write(cadena1.toUpperCase());