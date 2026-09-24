// complete this js code
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old.`
    );
};


function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}
Object.setPrototypeOf(Employee.prototype,Person.prototype);

Employee.prototype.jobGreet = function() {
    console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
};

// Creating an instance of Person
const person = new Person("Alice", 25);
person.greet();
// Expected Output: Hello, my name is Alice, I am 25 years old.

// Creating an instance of Employee
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();
// Expected Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
