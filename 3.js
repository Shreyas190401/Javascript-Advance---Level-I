class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); 
        this.grade = grade;
    }

    getDetails() {
        return `${super.getDetails()}, Grade: ${this.grade}`;
    }
}

let person = new Person("Alice", 30);
console.log(person.getDetails()); 

let student = new Student("Bob", 20, "A");
console.log(student.getDetails());
