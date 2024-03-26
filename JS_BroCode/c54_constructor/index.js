// constructor = a special method of a class,
//                accepts arguments and assigns properties

class Student{

    constructor(name, age, gpa){ // CONSTRUCTOR
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){                    // METHODE
        console.log(`${this.name} is studying`);
    }
}

/////////////  INSTANCES   ///////////////////////////////////////

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);

/////////////  PRINT   ///////////////////////////////////////

console.log(student1.name); // "Spongebob"
console.log(student1.age);  // 30
console.log(student1.gpa);  // 3.2
student1.study();

// for in : index    for of : value

for (atribut in student2)
    {console.log(atribut );} // "name", "age", "gpa"
student2.study();

for (atribut in student2)
    {console.log(student2[atribut] );} // "Patrick", 35, 1.5
student2.study();

for (let atribut of Object.keys(student3))
    {console.log(student3[atribut]);} // "Sandy", 27, 4.0
student3.study();


