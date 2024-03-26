let nombre = "Ariel";
document.write("HOLA " + nombre +"<br>");

let miArray = ["lucas",'24',"Buenos Aires"];

for(i=0 ;i<3;i++)
{
	document.write("'"+miArray[i]+"'",i);
}

//  Array Asociativo 
miArray = {
	nombre:" Carlos ",
	color: " negro ",
	juega: " basketball"
};

/*
document.write("<br> llego"+ miArray["nombre"]);
document.write("llego"+ miArray["nombre"]+", el"+ miArray["color"]);
document.write("que sabe jugar"+ miArray["juega"]);
*/


nombre     = miArray["nombre"];
let color  = miArray["color"];
let juega  = miArray["juega"];

frase = `<br>
	llego <b> ${nombre} </b>
	llego <b> ${nombre} </b> 
	, el"+ <b> ${coolor} </b>
	que sabe jugar<b> ${juega} </b>)`;

document.write(frase);  