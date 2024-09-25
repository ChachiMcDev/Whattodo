
class Person {
    constructor(name = 'your mom', age) {
        this.name = name;
        this.age = age;

    }
    getDetails() {
        return `${this.name} is ${this.age} years old!`
    }
};

class Traveler extends Person {
    constructor(name, age, location = 'nowhere') {
        super(name, age)
        this.location = location
    }
    homeLocation() {
        let getGreeting = super.getDetails()
        return `${getGreeting} is originally from ${this.location}`
    }
}

class Student extends Person {
    constructor(name, age, classes = []) {
        //calling the main class
        super(name, age);
        this.classes = classes
    }
    getDetails() {

        return `${this.name} is ${this.age} and their classes are ${this.classes}`
    }
}

const me = new Student('chachi', 100, ['science', 'history']);
const traveler = new Traveler('johnny', undefined, 'Seattle')
const traveler2 = new Traveler('johnny')
const other = new Person()

console.log(traveler.homeLocation())
console.log(traveler2.homeLocation())
console.log(me.getDetails())
console.log(other.getDetails())