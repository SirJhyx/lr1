<?php
//This is a single line comment
# this is also a single line comment

/*
    This is an example of a multi line comment
*/
//Variable - used to store values or contain data

$name = 'John Smith';
$email = 'johnsmith@gmail.com';

define('PI', 3.1416);
const MESSAGE = "Welcome to PHP";

//Data Types

//Strings

$state = 'New York';
$country = 'United States of America';
$address = $state .','. $country; //Concatenation via dot notation.
$addressTwo = "$state, $country"; //Concatenation via double quotes

//Integers

$age = 31;
$headcount = 26;

//Floats
$grade = 98.2;
$distanceInKm = 2562.23;

//Boolean 
$hasTravelledAbroad = false;
$haveSymptoms = true;

//Null
$spouse = null;
$middleName = null;

//Array
$grades = array(98.7, 92.1, 90.7, 94.6);

//Objects 
$personObj = (object) [
    'fullName' => 'John Smith',
    'isMarried' => false,
    'age' => 35,
    'address' => (object)[
        'state' => 'Washington DC',
        'county' => 'United States of America'
    ]
];

$gradesObj = (object) [

    'firstGrading' => 98.7,
    'secondGrading' => 92.1,
    'thirdGrading' => 90.7,
    'fourthGrading' => 94.6

];

//Assignment Operators
$x = 56.2;
$y = 912.6;

$isLegalAge = true;
$isRegistered = false;

?>