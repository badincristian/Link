class Person {
    constructor(nume, age, height) {
        this.nume = nume;
        this.age = age;
        this.height = height;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, height, course) {
            // super.constructor(name, age, height);
            //sunt identice sus = jos
            //----apelam conrtuctorul parntelui--------
            super(name, age, height);
            //------adaugam proprietatile parintelui------
            this.course = course;
        }
        //-----suprascrierea metodelor----------
    sayHello() {
        console.log(`Hello my name is ${this.name} and I like ${this.course}`);
    }
}

var radu = new Person("Radu", 33, 170);
var andrea = new Student("Andrea", 26, 168, "Java Script");

radu.sayHello();
andrea.sayHello();