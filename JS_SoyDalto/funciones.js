function saludar (){
	respuesta = prompt("Hola, como estas ?");  
	if (respuesta == "bien") {alert("me alegro");}
	if (respuesta == "mal")  {alert("que pena ");}
	else					 {alert("no entiendo");}
	return respuesta;
}

function suma(num1,num2){
	document.write(num1+num2)
}


let resp = saludar();
alert(`tu respuesta fue ${resp}`);

let	num1=11,num2=12;
suma(num1,num2);

/////		FUNCIONES FLECHA (LAMBDAS)  //////////////// 

//cosnst saludar = () => {



saludo = (name) => {
	let frase = `Hola ${name}, como estas?`	// func lambda
	return frase;
}

salu2 = name => `Hola ${name}, como estas?`  // en linea unica retorna por defecto

document.write(saludo("pepe"));
document.write(salu2 ("pedro"));