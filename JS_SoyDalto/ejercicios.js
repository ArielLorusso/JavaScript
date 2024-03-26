///// EJERCICIO 1A ///////////////////// 
/*
 nombre = "ariel";
frase = `hola ${nombre} como estas`;
document.write(frase +"<br>");

let num1=11, num2=22
document.write(num1>num2+"<br>");
*/


///// EJERCICIO 2A ///////////////////// 3:38:52

let free = false; // pasa a tru si la enrada gratis fue usada

const validarCliente = (time)=>
{
    let edad = prompt("tu edad?");

    if ( edad < 18 ) 
        {   alert("No pasas, sos meor"); return;}
    if ( time<2 || time >=7 ) 
        {   alert(`No pasas, esta cerrado
            habrimos de 2 a 7 y son las ${time}` );return;}
    else{ 
        if (!free)  { alert("pasas gratis"); free = true;}
        else        { alert("pasas pagando");}
    }
}

// validarCliente(1); validarCliente(2); validarCliente(3);

///// EJERCICIO 2B ///////////////////// 3:42:13
/*

let cantidad = prompt(`cuantosalumnos son ?`)
let alumnosTotales = [];

for (i=0; i<cantidad; i++){     // crear alumnos
    alumnosTotales[i] = [prompt("Nombre de alumno:"),0];  
} //  alumnosTotales[i] = [nombre, asistencias=0 ]
// alumnosTotales[i][0] = nombre
// alumnosTotales[i][1] = asistencias

const tomarAsistencia = (nombre,p) => { //incrementa asistencia d alumno
    let presencia = prompt(nombre);
    if ( presencia == "p" ||presencia ==  "P" ){
        alumnosTotales[p][1]++;
    }
}

for (i=0; i<3; i++){    //revisar asistencia 5 dias x cada alumno
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
}

for (alumno in alumnosTotales){
    let resultado = `<b>${alumnosTotales[alumno][0]}  </b> 
    __asistencias:   <b> ${alumnosTotales[alumno][1]} </b> `
    if (  alumnosTotales[alumno][1] < 3 - 1 ){ // falto 1S vez?
        resultado += `<b style='color:red'> REPROBADO </b> <br>` 
    }
    resultado += `<br>`     
    document.write(resultado);
}
*/

///// EJERCICIO 2C ///////////////////// 4:00:13
/*
const sumar = (num1,num2)=> { return parseInt(num1) + parseInt(num2);}
const restar = (num1,num2)=> { return parseInt(num1) - parseInt(num2);}
const multiplicar = (num1,num2)=> {return parseInt(num1) * parseInt(num2);}
const dividir = (num1,num2)=> {    return parseInt(num1) / parseInt(num2);}

alert("introdusca operacion a realizar");
let operacion = prompt("op: 1+, 2-, 3*, 4/ ");
let num1 = prompt("primer numero");
let num2 = prompt("segundo numero");
let res = 0;

while ( parseInt(operacion)  < 5 ) {    
    switch (operacion) {
        case "1":            
            res = sumar(num1,num2);
            alert(`resultado ${num1} + ${num2} = ${res}`); break;
        case "2":
            res = restar(num1,num2);
            alert(`resultado ${num1} + ${num2} = ${res}`); break;
        case "3":
            res = dividir(num1,num2);
            alert(`resultado ${num1} + ${num2} = ${res}`); break;
        case "4":
            res = multiplicar(num1,num2);
            alert(`resultado ${num1} + ${num2} = ${res}`); break;
        default:
            alert(`operacion invalida`); break;
    }
    operacion = prompt("op: 1+, 2-, 3*, 4/ ");
    num1 = prompt("primer numero");
    num2 = prompt("segundo numero");
}
*/
    
///// EJERCICIO 3A ///////////////////// 4:41:30
// comparar telefonos segun
// color  peso  resolucion-pantalla/camara mem-ram
// extender la clase celular con alta gama y mostrar info
/*
class Celular {
    constructor(color,peso,res_pant,res_cam,ram){
        this.color = color;
        this.peso = peso;
        this.res_pant = res_pant;
        this.res_cam = res_cam;
        this.ram = ram;
        this.encendido = false;
        this.foto = 0;
    }
    prender(){
        if  (this.encendido == false) 
            {this.encendido = true; alert("celular encendido");}
        else{this.encendido = false; alert("celular apagado");}
    }
    reiniciar(){
        alert("reiniciando celular");   
        if  (this.encendido == false) {this.prender();  }
        else        {  this.prender(); this.prender();  }
    }
    tomarFoto(){
        if(this.encendido == true){
            this.foto++;
            alert(`foto num ${this.foto} tomada en resulucion ${this.res_cam}`);
        }
        else {alert("celular esta apagado");}
    }
    info(){
        return `
        color:     ${this.color} <br>
        peso:      ${this.peso} <br>
        pantalla:  ${this.res_pant} <br>
        camara:    ${this.res_cam} <br>
        ram:       ${this.ram} <br>
        encendido: ${this.encendido} <br>
        fotos:     ${this.foto} `
    }
}

class CelularAtaGama extends Celular {
    constructor(color,peso,tamanio,res_cam,res_pant,ram,res_slowmo){
        super(color,peso,tamanio,res_cam,ram);
        this.res_slowmo = res_slowmo;
    }
    grabar_slowmo(){
        alert("grabando slowmo");
    }
    reconocimFacial(){
        alert("iniciando reconocim. Facial");
    }
} 

celu1 = new Celular("rojo",  "100g","320p", "1Mp", "500MB" );
celu2 = new Celular("blanco","150g","720p", "5Mp", "1GB" );
celu3 = new CelularAtaGama("negro", "200g","1080p","30Mp","4GB" );
celulares = [celu1, celu2, celu3];

console.log(celu1);
celu1.reiniciar(); celu1.tomarFoto(); celu1.prender();
for (celu of celulares) { document.write(celu.info());   }
*/

///// EJERCICIO 3B ///////////////////// 4:41:30
// elejir 2  aplicaciones entre 7
// descargas puntuacion peso install abrir cerrar desinstalar

/*
class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if (this.instalada == true)
        {
            if (this.iniciada == false){
                this.iniciada = true;
                alert("app abierta");}
            else {alert("app ya estaba abierta")}
        }
        else {alert("no se puede abrir sin instalar")}
    }
    cerrar(){
        if (this.instalada == true)
        {
            if (this.iniciada == true){
                this.iniciada = false;
                alert("app de cierra");}
            else {alert("app ya estaba cerrada")}
        }
        else {alert("no se puede cerrar sin instalar")}
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("app se instala");}
        else {alert("no se puede instalar ya lo esta")}
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("app desinstalada");}
        else {alert("no se puede desinstalar ya lo esta")}
    }
    info(){
    return `
    instalada:  ${this.instalada} <br>
    descargas:  ${this.descargas} <br>
    peso:       ${this.peso} <br>`
    }
}

app1 = new App ("16000", "5estrellas", "900mb");

document.write(app1.info()); // se muestra despues de todos los alet

app1.desinstalar(); // no se puede desinstalar ya lo esta
app1.abrir();       // no se puede abrir sin instalar
app1.instalar();    // app se instalada
app1.cerrar()       // ya estaba cerrada
app1.abrir();       // app se abre
app1.desinstalar(); // se desinstala

*/

///// EJERCICIO 4B ///////////////////// 6:28:40
// elejir 2  aplicaciones entre 7
//https://github.com/soydalto/curso-de-javascript/blob/main/capitulo%204/problema%202/codigo.js

const materias = {                                          // LITERAL OBJECT
        fisica: ["Perez","pedro","pepito","cofla","maria"], // PROPIEDADES:[ARRAY]
        programacion: ["Dalto","pedro","juan","pepito"],
        logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
        quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
    }
    
const obtenerInformacion = (materia)=>{
    
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
        Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
        `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `<b style='color:blue'>
    ${alumno}</b> esta en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
    <br><br>
    `;
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("pedro"))
