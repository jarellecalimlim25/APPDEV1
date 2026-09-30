class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hi, I am " + this.name);
    }
}

class Student extends Person {
    study() {
        console.log(this.name + " is learning JavaScript Refresher..");
    }
}

const student = new Student("John");

student.sayHello();
student.study();