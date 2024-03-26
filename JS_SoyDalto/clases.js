class Animal {
	constructor(especie,edad,color){
		this.especie = especie; 
		this.edad = edad;
		this.color = color;
		this.info = `soy ${this.especie}
					, tengo ${this.edad} anios
					y soy color ${this.color}`
	}

	ladrar = ()=>{ 
		if (this.especie == 'perro')
		{	document.write("wow");}
		else {	document.write("no soy perro >:( ");}
	}
	show = ()=>{ alert(this.info)}
}

class Perro extends Animal {
	constructor(especie,edad,color,raza){ // perro extiende a animal con raza
		super(especie,edad,color); 	// super():herencia de atributos y metodos
		this.raza = null;			// agrego metodo para nuevo atributo..
	}
	set setRaza(name) {this.raza = name;}
	get getRaza (){return this.raza;}
	
	static 	ladrar(){
		alert("WOWW")
	}
}



let perro  = new Perro("perro",5,"marron","doberman");
console.log(perro); // muestra raza pepe dado que se ve el ultimo estado
perro.setRaza ="pepe";
let gato   = new Animal("gato",2,"negro");
perro.show();
perro.ladrar();
gato.ladrar();
document.write(perro.getRaza);