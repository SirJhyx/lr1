console.log("connected to my lesson as always");
/*
What is an Array?
- ORDERED collection of values.
- Why is it ordered? because of the index
*/

//BASIC Structure
//elements - these are the values in a square brackets called "Array Literals"

//How to create JavaScript arrays?
//1. Declaring and initializing an array
let array = [];

//2. using new keyword and then the array
let arr = new Array();

let months = ["Jan", "Feb", "March", "April", "May"];

/*
    How to access array elements?
    - via index
    - index starts with zero

    how to count the elements in the array?
    using the .length property;
*/

console.log(months[0]);
//display Jan

console.log(months[1]);
//display Feb

console.log(months);
//display the months declared in the array

console.log(months.length);
//counts the number of elements inside the array

//Array Manipulation

//OLD METHOD: Using the assignment operator(=)
let count = ["one", "two", "three", "four"];
console.log(count[4]); //underfined because we do not have elements inside the index 4.

count[4] = "five";
console.log(count[4]);
//already included the word five when we get the index 4

console.log(count);
//already included the word "five"

//Mutator Methods - these are the methods that modify the original array

//1. Push method
// adds an element at the end of an array

count.push("six");
console.log(count);

//push method inside the function

function addElement(element)
{
    count.push(element);
    console.log(count);
}

addElement("seven");

//2. Push Method
// removes an element at the end of an array;

count.pop();
console.log(count);

//pop inside the function
function removeElement(){
    count.pop();
    console.log(count);
}
removeElement();

//Unshift Method - adds an elements at the beginning of an array
count.unshift("zero");
console.log(count);



//Shift method - removes the first element

count.shift();
console.log(count);

//Accessor Method

//Sort method - sorts the elements of an array according to conditions

let nums = [15,32,61,130,230,13,34];
nums.sort();
console.log(nums);
//sorts based on the first digit

nums.sort(
    function (a,b)
    {
        //ascending order
        // return a-b;

        //descending order
        return b-a;
    }
);
console.log(nums);

//reverse method
nums.reverse();
console.log(nums);

//splice method - Mutator Method
// returns an array containing deleted elements
//first parameter  - where an index start omitting an element
//second parameter - number of elements to be omitted
//third parameter - elements to be added or inserted.
console.log(count);

let newSplice = count.splice(2);
//deletes all elements from index 2
console.log(newSplice);

//Slice Method - accessor method
// returns new array
//start - removes all elements before the element specified by the index syntax.
//syntax: slice(<start>, <end>)
let animals = ["dog", "cat", "hamster", "crocodile", "lovebird"];
console.log(animals);

let newSlice = animals.slice(2);
console.log(newSlice);
//deletes all elements before the specified index.

console.log(animals);

let newSlice1 = animals.slice(1,2);
//deletes specified number of elements from index 1, then return the remaining elements in the new array called newSlice1
console.log(newSlice1); //cat

//concat method
//enables us to merge two or more arrays

console.log(animals);
console.log(count);
let newConcat = animals.concat(count);
console.log(newConcat);

//join method
let meal = ["Tapsilog", "Noodles", "Burger Steak"];
let newJoin = meal.join();
console.log(newJoin);

newJoin = meal.join("");
console.log(newJoin);

newJoin = meal.join("-");
console.log(newJoin);

newJoin = meal.join(" ");
console.log(newJoin);

newJoin = meal.join("  ");
console.log(newJoin);

//toString Method

let elements = ["b", "a", "d", 8, 5, "e"];
console.log(elements);
console.log(typeof elements[0]);//string
console.log(typeof elements[3]);//number
console.log(typeof elements[4]);//number

let newString = elements.toString();
console.log(newString);
console.log(typeof newString); //it confirms that all elements converts into string.

//Array Accessor Methods 
//methods that return a new value of representation.
//indexOf()
//lastIndexOf()

let countries=["US", "PH", "CAN", "TAI", "PH", "SG", "HK", "PH"];

//indexOf() - finds the index of a given element where it is "first" found.

let index = countries.indexOf("PH");
console.log(index);

//lastIndexOf() - find the index of a given element where it is "last" found.

let lastIndex = countries.lastIndexOf("PH");
console.log(lastIndex);

//Iterators - defines a sequence and potentially a return value upon its termination.
//forEach()

/*
    Syntax:
    forEach(function(){

    });

*/

let bigData = [
    {
        fn:"Joshua", ln:"Garcia"
    },

    {
        fn:"Dingdong", ln:"Dantes"
    },

    {
        fn:"Christopher", ln:"De Leon"
    }
];

let result = bigData.forEach(
    function(element)
    {
        console.log(element);
        return element
    }
);
console.log(result); //undefined return

//Q: How to create a copy of an array from the original array?

let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

//Step 1: map() - iterates each element in an array and returns a new array with same elements (or different values depending on the result of the function operation)
//does not modify the original array

let mapNewDays = days.map(
    function (day){
        return day;
    }
);
console.log(mapNewDays);

//Step 2: Create a copy of a new array using forEach()
let newDays = [];
console.log(newDays);
days.forEach(function (day){
    newDays.push(day);
});
console.log(newDays);

//filter - it filters out the elements based on the conditions
//returns an array that contains elements which passes a given condition.

let digits = [1,2,3,4,5];
let newFilter = digits.filter(
    function (element) {
        return element < 3
    }
);

console.log(newFilter);

//includes()
//When checking array elements it is case sensitive
//returning true or false as appropriate, it returns true if a string contains a SPECIFIED string, otherwise it will return false.
//it determines whether an array includes a certain value among its entries.


let pets = ["Shih Tzu", "Hedgehog", "Squirrel", "Rats"];

let newIncludes = pets.includes("Squirrel");

console.log(newIncludes); //true - boolean

//Exercise using include method

function checkTheWord (word)
{
    if (pets.includes(word) == true)
    {
        return word
    }

    else {
        return `${word} not found`
    }
}

console.log(checkTheWord("Squirrel"));
console.log(checkTheWord("dogs"));

//every() - checks if "all elements" passes a given condition.

console.log(digits);

//returns true if all elements passed the given condition.

let newEvery = digits.every(
    function (element) {
        return element > 1
    }
);

console.log(newEvery); //false - returns a boolean

//some() - checks if "at least one element" passes a given condition.
//returns true even if only some of the elements passed the given condition.

let newSome = digits.some(
    function (element){
        //element parameter represents the index in the array.
        return element > 2
    }
);

console.log(newSome); //true - Boolean

//reduce() - evaluates elements from left to right  and returns a "single value"

let newReduce = digits.reduce(
    function (a, b){
        let total = a + b;
        return total;
    }
);

console.log(newReduce);
// 15 - it adds all the elements in an array

console.log(newReduce/digits.length); //3 - it divides the total number of an array and the elements

//Exercise 2: Using reduce method
let numeric = [5, 11, 30, 118, 634];

//Get the average of the elements in the array and display the average to your browser's console using reduce method.
let numba = numeric.reduce(
    function (a,b){
        return a + b
    }
);
console.log(numba); //798
console.log(numba/numeric.length); //159.6

//Stretch Goal
/*
    Get the average of the elements in the array and display the average to your browser's console using for loop.

*/

let total = 0;

for (let m = 0; m < numeric.length; m++)
{
    total = total + numeric[m];
}

console.log(total);
console.log(total/numeric.length);