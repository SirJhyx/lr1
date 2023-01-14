<?php 

//Repetition Control Structure

// while loop
//do-while
//for loop

//while loop

function whileLoop() {
    $count = 5;
    
    while($count !== 0){
        echo $count.'<br/>';
        $count--;
    }
}

//do-while loop

function doWhileLoop(){
    $count = 20;

    do {
        echo $count.'<br/>';
        $count--;
    }
    while ($count>0);
}

//For Loop

function forLoop(){
    for ($count = 0; $count < 20; $count++) {
        echo $count.'<br/>';
    }
}

//Continue and break statement

function modifiedForLoop(){
    for($count = 0; $count <=20; $count++) {
        if ($count % 2 === 0)
        {
            continue;
        }

        echo $count.'<br/>';

        if($count>10) {
            break;
        }
    }
}

//Array Manipulation

//Before PHP 5.4
$studentNumbers = array('2004-0001', '2004-0002', '2004-0003', '2004-0004', '2004-0005');

//Introduce on PHP 5.4
$studentNumbers = ['2004-0001', '2004-0002', '2004-0003', '2004-0004', '2004-0005'];

//Simple Arrays
$grades = [98.5, 94.3, 89.2, 90.1];

$computerBrands = ['Acer', 'Asus', 'Lenovo','Neo', 'Redfox', 'HP', 'Toshiba', 'Fujitsu'];

//Associative Array

$gradePeriods = [
    'firstGrading' => 98.5, 
    'secondGrading' => 94.3, 
    'thirdGrading' => 89.2, 
    'fourthGrading' => 90.1
];

//Two dimensional array

$heroes = [
    ['iron man', 'thor', 'hulk'], //outer array: 0
    //inner array: 0, 1, 2
    ['wolverine', 'cyclops', 'storm'], //outer array: 1
    ['Darna', 'Captain Barbel', 'Lastikman'] //outer array: 2
];

//Two dimensional associative array
$ironManPowers = [
    'regular' => ['repulsor blast', 'photon canon'],
    'signature' => ['unibeam', 'nanite shield']
];

//Array Sorting
$sortedBrands = $computerBrands;
$reverseSortedBrands = $computerBrands;

//sort arrays
sort($sortedBrands);
rsort($reverseSortedBrands);

//Other Array Functions
//in_array - searches what is inside the array
 function searchBrand($brands, $brand) {
    return (in_array($brand, $brands)) ? "$brand is in the array" : "$brand is not in the array.";
}

$reversedGradePeriods = array_reverse($gradePeriods);

function divLoop() {
    for ($count = 0; $count <= 1000; $count++) {
        if ($count % 5 !== 0) {
            continue;
        }

        echo $count.',';

        if ($count > 1000){
            break;
        }

    }
}

?>