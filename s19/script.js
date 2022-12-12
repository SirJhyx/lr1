console.log("connected");
//ES6 Updates (2015)
//Exponent Operator
//before Es6, Math.pow() is being used for exponent operator.

const firstNum = Math.pow(8,2);
console.log(firstNum);

//ES6 version, you can use **;
const secondNum = 8 ** 2;
console.log(secondNum);

//Template Literals
//Allows to write strings without using the concatenation operator (+)
//greatly helps with code readability
//pre-template literal string
    //using single quotes ('') or double quotes ("")

const name = 'John';
let message = "Hello" + "" + name + "! Welcome to JavaScript Programming";

//Strings using Template Literals
    //uses backticks (``) and ${}
message = `Hello ${name}! Welcome to my house`;

console.log(`Message with template literals: ${message}`);

//Template Literals can use multi line as well
const anotherMessage =
`
    ${name} attended a math competition.
    He won it by solving the problem
    8 ** 2 with the solution of 
    ${firstNum}.

`

console.log(anotherMessage);

//Template Literals allow us to write strings with embedded JavaScript expressions
//Expressions - these are any valid unit of code that resolved to a value
//${} - used to include JS expressions in "strings" using template literals.

const interestRate = 0.5;
const principal = 1050;

console.log(`The interest on your saving's account is ${principal * interestRate}`);

//Array Destructuring
//allows to unpack elements in an arrays into distinct variables.
//allows to name array elements with variables instead of using numbers.
//helps us with code readability

/*
Syntax:
let/const [variableName, variableName] = array;
*/

const fullName = ["Juan", "Dela", "Cruz"];
const pet = ["geeko", "tarantula", "centipede"];

//pre-array destructing
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(pet[0]);
console.log(pet[1]);
console.log(pet[2]);

//convert the message using values coming from array elements.
console.log(`Hello firstname, middlename, lastname! It's nice to meet you`);

//solution:
console.log(`Hello ${fullName[0]}, ${fullName[1]}, ${fullName[2]}! It was nice to meet you!`);

//using Array Destructuring using ES6
const [firstName, middleName, lastName] = fullName;

const [pet1, pet2 , pet3] = pet;

//converted each elements into distinct variables
console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(`Hello ${firstName}, ${middleName}, ${lastName}. It's nice to meet you!`);

//using array destructuring in a function
function introduce() {
    console.log(`Hi! My name is ${firstName} ${middleName} ${lastName}`);

    console.log(`I have three pets! I have ${pet1}, ${pet2}, ${pet3}`);
}

introduce();

//using array destructuring in a function using parameters and arguments
function introduce_2(fn, mn, ln) {
    console.log(`Hi! My name is ${fn} ${mn} ${ln}`);

    console.log(`I have three pets! I have ${pet1}, ${pet2}, ${pet3}`);
}

introduce_2(firstName, middleName, lastName);

//Object Destructuring
//allows us to unpack properties of objects into distinct variables
//we cannot declare other variable name instead we use existinf properties of the object.

//Syntax: let/const {propertyName, propertyName} = object;

const person = {

    fname: "Jane",
    mname: "Dela",
    lname: "Cruz"

}

//pre-object destructuring
console.log(person.fname);
console.log(person.mname);
console.log(person.lname);

//Object Destructuring
const {fname, mname, lname, nickname} = person

console.log(fname, mname, lname);

//object in a function
function getFullName (personObject){
    console.log(personObject);
    console.log(`My name is ${personObject.fname}, ${personObject.mname}, ${personObject.lname}`);
}
getFullName(person);

//object destructuring inside the function
function getCompleteName ({fname, mname, lname})
{
    console.log(`My name is ${fname}, ${mname}, ${lname}`);
}
getCompleteName(person);

//Arrow Function
//compact alternative syntax to traditional functions.
//useful code snippets where creating functions will not be reused in any other portion of a code.
//they are adhering to the principles of "DRY (Do Not Repeat Yourself) Method"
/**SYNTAX: 
 * 
 * let/const variableName = () => {
 * 
 * function codeblock
}

**/

//arrow function with multiline codeblock 
const hello = () => {
    console.log(`Hello World`);
}

//arrow function in one-line without the return keyword and curly braces
const Hello = () => console.log("Hello");

//traditional function
function sayHello(){
    console.log(`Haller`);
}

hello();
Hello();
sayHello();

//Exercise 1: Destructure Array Elements
/*

Destructure the array elements into distinctive variables.
Use an arrow function to introduce themselves.
Display it in the console. 
Given: let students = [“John”, “Jane”, “Judy”];


*/

let students = ["John", "Jane", "Judy"];

//SOLUTION NUMBER 1:
const [student1, student2, student3] = students;
const greeting = () => {
    console.log (`My name is ${student1}`);
    console.log (`My name is ${student2}`);
    console.log (`My name is ${student3}`);
}
greeting();

//SOLUTION NUMBER 2:
const greeting_v2 = (elements) => {
    console.log(elements); //undefined
    const [s1,s2,s3] = students;

    console.log(`Hi I am ${s1}`);
    console.log(`Hi I am ${s2}`);
    console.log(`Hi I am ${s3}`);

}
greeting_v2();

//Exercise Number 2: Arrow Functions using ForEach Method
students.forEach((student) => console.log(student));
students.forEach(student => console.log(student));

//Implicit Return Statement
//these are instances when you can omit the "return" statement
//this works because even without the return statement JavaScript implicitly adds it for the result of function.

//traditional function
function product(a,b)
{
    return a * b;
}

console.log(product(5,2));

//function expression
 //anonymous function being stored in a variable
 const product_2 = function () {
    return 3 * 3;
 }
 console.log(product_2());

 //arrow function with an implicit return statement 
 //one-liner function without return and curly braces
 const product_3 = () => 2 * 2
 console.log(product_3());

 //arrow function with explicit return statement
 //multiliner function code block with curly braces and return keyword

 const product_4 = () => {
    return 2 * 9;
 }
 console.log(product_4());

 //Default Function Argument Value
    //provides a default argument value if none is provided when the function is invoked.

 const myName = (name = `User`) => {
    return `Good Morning, ${name}`
 }
 console.log(myName()); //it was set as a default
 console.log(myName("Johsan"));

 //Functions - these represent actions that object can take
 //a.k.a "methods"

 //Class Based Object Blueprints
 //allows us to create or instantiate objects using classes as blueprints

 /*
    Syntax:
    class className {
        constructor (objectPropertyA, objectPropertyB)

        //constructor - it is responsible for allocating (distributing) memory for the objects of the class.

        {
            this.objectPropertyA = objectPropertyA;
            this.objectPropertyB = objectPropertyB;
        }
    }
 
 */

//Step 1: Create a template

class Car{

    constructor (brand, name, year)
    {
        this.brand = brand;
        this.name = name;
        this.year = year;
    }
}

//Step 2: Instantiate an object using new keyword

const myCar = new Car();
console.log(myCar); //undefined

//Step 3: Using assignment operator to assign values to properties after instantiation of object.

myCar.brand="Ford";
myCar.name="Ranger Raptor";
myCar.year=2021;
console.log(myCar); //values are already declared inside the class object

//Step 4: Instantiating a new object from the car class with initialized values.
const myNewCar = new Car ("Toyota", "Vios", "2021");
console.log(myNewCar); //new values are displayed

//ANSWER to the Activity
/*

Calculate the weight based on the user input in kilograms (kg).
Create a function that displays the converted weight in pounds.
Execute the function property based on the initialized object with arguments.

*/

class Weight {
    constructor (name, kg){
        this.name = name;
        this.kilograms = kg;
        this.pounds = kg * 2.2;
        this.convertedWeight = function () {
            console.log(`${this.name}'s weight in lbs is ${this.pounds}`);
        }
    }
}

let poundsWeight = new Weight ("Jelly", 60);
poundsWeight.convertedWeight();

//Sir Reden's Answer

const funcKilogramsToPounds = (_kg = 1) => _kg * 2.20462262;

class Tao {

    constructor (_name, _kgWeight) {
        this.name = _name;
        this.kgWeight = _kgWeight;
    }

    weightInPounds() {
        return funcKilogramsToPounds(this.kgWeight);
    }

    weightMessage() {
        return `
            ${this.name}'s weighs ${this.kgWeight} kilograms (kg) 
            and is ${this.weightInPounds()} in pounds (lbs).
        `
    }
}

console.log(new Tao('Reden', 95).weightMessage());
