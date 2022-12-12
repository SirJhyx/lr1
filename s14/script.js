console.log("connected");

//If Statement
// conditional branching statement
// condition is true, a group of statement is executed
// condition is false, the statement is skipped.

/*
    Syntax:
    if (condition)
    {
        statement 1
        statement 2
    }
*/

// if (20 <= 30)
// {
//     console.log("You are not allowed to enter");
// }

// let age = prompt ("Enter your age");

// function getAge (age) {

//     if (age<=30) {
//         console.log("You are not allowed to enter");
//     }

//     return (age);
// }

// getAge(age);

//if-else statement
// 2 way decision statement
// it is used to make decisions and execute the command conditionally.

/*
    if (condition)
    {
        statement 1
    }
    else if (condition)
    {
        statement 2
    }
    else {
        statement 3
    }
*/

// let myAge = 30;
// if (myAge == "30")
// {
//     alert("hello from the code block");
// }
// else {
//     console.log("haller from my block");
// }

/*
Exercise 1: If-Else Statement

Assign a variable that lets the user input a height in centimeter. Ensure that the word centimeter is indicated for proper reference.
Create an If-Else Statement using the following conditions:

If the height is below 150cm, display "Did not pass the minimum height requirement“.
If the height is above 150, display "Pass the minimum height requirement“.

Put the conditional statement inside the function.
Ensure that the proper NAMING STANDARD is followed.

*/

// let height = prompt ("Enter your height in cm");

// function humanHeight (height) {
//     if (height >= 150)
//     {
//         console.log("Pass the minimum height requirements");
//     }
//     else {
//         console.log("Did not pass the minimum height requirement");
//     }
// }
// humanHeight(height);

//Else if
// 2 or more possible outcomes

// let price = prompt (`Price:`);

// if (price<50) {
//     console.log(`affordable`);
// } else if (price <=75) {
//     console.log (`pricey`);
// } else if (price <= 90){
//     console.log(`benta ko muna ang isang atay ko`);
// } else {
//     console.log(`out of the budget, puritang tunay`);
// }

/*

Exercise 2: Else If Statement Enclosed in Function

Determine the typhoon intensity with the following data:

	Windspeed of 30, not a typhoon
	61 tropical depression is detected
	61-88 tropical storm is detected
	89-117 severe tropical is detected
	others, typhoon detected

Put the conditional statement inside the function.
Ensure that the proper NAMING STANDARD is followed.

*/

// let intensity = prompt ("Enter typhoon intensity");

// function tIntensity (intensity){
//     if (intensity <=30) {
//         console.log("not a typhoon");
//     }else if (intensity <= 61)
//     {
//         console.log("Tropical Depression is detected");
//     } else if ((intensity >= 61)&& (intensity <= 88))
//     {
//         console.log("Tropical Storm is detected");
//     } else if ((intensity >= 89) && (intensity <= 117))
//     {
//         console.log("severe tropical is detected");
//     } else {
//         console.log("Typhoon Detected");
//     }
// }

// tIntensity(intensity);

//Switch Statement
//it performs different actions on different conditions
//compares the same expression to several different values.

/*

RULE OF THUMB:
    YOU CAN USE THIS STATEMENT WHEN YOU ARE COMPARING A LIST OF VALUES AGAINST A SINGLE VARIABLE
*/

/*
    SYNTAX:
    switch (expression)
    {
        case condition 1:
            statements
            break;
            - breaks out the switch block
            - stops the execution inside the switch block.
        case condition 2:
            statements
            break;
        default:
            - specifies the code tp run if there is no match
            statement
    }
*/

// let day = prompt ("Enter a number between 1 to 7");

// switch (day)
// {
//     case (day = "1"):
//     console.log("Monday");
//     break;

//     case (day = "2"):
//     console.log("Tuesday");
//     break;

//     case (day = "3"):
//     console.log("Wednesday");
//     break;

//     case (day = "4"):
//     console.log("Thursday");
//     break;

//     case (day = "5"):
//     console.log("Friday");
//     break;

//     case (day = "6"):
//     console.log("Saturday");
//     break;

//     case (day = "7"):
//     console.log("Sunday");
//     break;

//     default: 
//     console.log ("Invalid number for the week");
// }

/*
    Exercise 3: Switch Statement
    
    Create a Switch Statement that accepts the colors: Black, Violet and Pink.
    Lowercase and Uppercase letters must be accepted

    Put the conditional statement inside the function.
    Ensure that the proper NAMING STANDARD is followed.

*/
// let color = prompt ("Enter the color Black, Violet and Pink");

// function inputColor (color) {
//     switch (color) {
//         case (color = "Black"):
//             console.log("The color is " + color);
//             break;
//         case (color = "BLACK"):
//             console.log("The color is " + color);
//             break;       
//         case (color = "Pink"):
//             console.log("The color is " + color);
//             break;
//         case (color = "PINK"):
//             console.log("The color is " + color);
//                 break;
//         case (color = "Violet"):
//             console.log("The color is " + color);
//             break;
//         case (color = "VIOLET"):
//             console.log("The color is " + color);
//                 break;
    
//         default:
//             console.log("Error: invalid color");
            
//     }
    
// }

// inputColor(color);

let name = "Jelly Lumactud";
console.log(name.length); //14
//counts the number of characters that includes the spaces.

//Arrays and Objects
let numbers = [1,54,58,60,75,90,99]; //7
console.log(numbers.length);
//it displays the number of elements inside the array.

//Objects inside the Array

let grades = [
    {first: 90},
    {second: 92},
    {third: 75},
    {fourth: 74}
];

console.log(grades.length);
//It counts the properties inside the object.
//properties are also known as "key value pair"

if (numbers.length == 7 && grades.length >= 4) {
    console.log("From our Codeblock")
}
else {
    console.log("hindi siya belong. outcast siya");
}

//BONUS: Ternary operator

/*

TERNARY OPERATOR
? - if
: - else

    condition ? <statement>
    :statement

*/

let legalAge = 25;
(legalAge >= 18 && legalAge <= 59)?console.log("legal pero hindi senior")
:console.log("minor pa po siya")