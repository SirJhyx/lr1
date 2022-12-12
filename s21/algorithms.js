console.log("connected");

//recursion
/*
    Syntax:
    function recurse(){
        //function code
        recurse();
        //function code
    }
    recurse();
*/

// let countDown = function func(fromNumber) {
//     console.log(fromNumber);

//     let nextNum = fromNumber -1;

//     if(nextNum > 0){
//         func(nextNum);
//     }
//     else {
//         alert ("Happy New Year");
//     }
// }

// let newYearCountDown = countDown;
// countDown = null;
// newYearCountDown(5);

//factorial using a recursion

function factorial(x){
    //if number is 0
    if (x === 0){
        return 1
    }
    else {
        return x * factorial(x-1);
    }
}

const num = 3;

if (num > 0){
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

//Linear Search - applicable for unsorted arrays. It counts the number of index where the value belongs to.

/*

    PSEUDOCODE
    1. Create a variable list to store in an array. Then create a variable where we can search the value.

    2. Create a function that will accept two parameters/arugements for an array and a value.

    3. Inside the function create a loop through the entire array and check if the current item is equals to a value.

    4. if the value is found it will return the value otherwise it will return false

*/

//Step 1. Create a variable list to store in an array. Then create a variable where we can search the value.
let list = [9,26,6,14,3,27,21,45,111,587];
let value = 100;

//Step 2. Create a function that will accept two parameters/arguments for an array and a value.

let linearSearch = (list,value) => {
    //Step 3. Inside the function create a loop through the entire array and check if the current item is equals to a value.
    for(let i=0; i < list.length; i++){
        if(list[i] === value)
        {
            return i;
        }
    }
    return ("There is no value given."); //false statement
}

//invoke the function in the console log
console.log(linearSearch(list,value)); //element 3 is in the index 4

//linear search for grocery items
let items = ["yakult","cheese","soju","chocolate","chuckie","dishwashing liquid", "colgate", "toyo", "sardinas"];
let isFound = false;

items.forEach(function (itemValue, index){
    if(itemValue === "colgate")
    {
        console.log("Item Found: "+itemValue);
        isFound = true;
        return;
    }
});

if (!isFound){
    console.log("Item not found");
}

/*
    Binary Search - applicable when the array is sorted.

    PSEUDOCODE:
    1. Create a variable that displays an array of sorted numbers and another variable that finds the number.

    2. Create a function that accepts two arguments (a sorted array and a value).

    3. Inside the function, create a variable for left and right pointer. Left variable is for the value will be for the first item in the array and the right variable for the value will be the last item in the array. Also, create a middle point varible which can get from an average left and right.

    4. Create a loop until the mid === value

    5. If we find the value we will return the index of that value. If the value is too small, we will move the left pointer up to the previous mid point and recalculate the mid point.

    If the value is tpo large we will move the right pointer down to the mid point and so on until we find our value.

    if the value is not found we will return it as a false statement.

*/

//Step  1. Create a variable that displays an array of sorted numbers and another variable that finds the number.

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; //sorted arrays - Ex: 10 consecutive numbers
let valFound = 20; //variable that assigns a number that needs to be found inside the sorted arrays

//Step 2. Create a function that accepts two arguments (a sorted array and a value).
let binarySearch = (sortedList, value) => {
    //Step 3. Inside the function, create a variable for left and right pointer. Left variable is for the value will be for the first item in the array and the right variable for the value will be the last item in the array. Also, create a middle point varible which can get from an average left and right.

    //create a variable for left and right pointer.
    let left = 0; //represents the starting point
    let right = sortedList.length - 1; //this will identify the index.

    //create a middle point varible which can get from an average left and right.
    let mid = Math.floor((left + right)/2); //median of the array to determine where will be the index location.

    //Step 4. Create a loop until the mid === value
    while (sortedList[mid] !== value && left <= right){

        /*
            Step 5. If we find the value we will return the index of that value. If the value is too small, we will move the left pointer up to the previous mid point and recalculate the mid point.
            If the value is tpo large we will move the right pointer down to the mid point and so on until we find our value.
            if the value is not found we will return it as a false statement.
        */

        if (value < sortedList[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }

        mid = Math.floor((left + right)/2);

    }

    //check if our mid point is equal to the value we are looking for then return mid otherwise return as false
    if (sortedList [mid] === value) {
        return (`The value ${value} is found in index ${mid}.`); //midpoint of the array
    }
    else {
        return (`The value ${value} is not found.`); //item not found
    }
}

//invoke the function in the console.
console.log(binarySearch(numbers, valFound));

//SORTING ALGORITHMS

//Bubble Sorting - compares the adjacent to swap the order depending how small the sizes are

function bubbleSorting(arr){
    //nested loop procedure
    //outer loop
    for (let j = 0; j < arr.length; j++) {
        //inner loop
        for (let k = 0; k < arr.length - j- 1; k++) {
            //if statement for ascending order
            if (arr [k + 1] < arr[k]){
                //swapping procedure
                [arr [k+1], arr[k]] = [arr[k], arr[k+1]]
            }
        }
    }
    return arr;
}

//invoke the function in the console log
console.log(bubbleSorting([5,3,8,4,6]));

//Selection Sorting
function selectionSorting(arr){
    let min;
    //passes the elements - outer loop
    for (let i = 0; i < arr.length; i++)
    {
        //index of the smallest element to be the ith element
        min = i;
        //check through the rest of the array for a lesser element - inner loop
        for (let j = i + 1; j < arr.length; j++)
        {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        //compare the indexes
        if(min !== i){
            //swapping procedure
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}
//invoke the function to the console
console.log(selectionSorting([29, 72, 98, 13, 87, 66, 52, 51, 36]));

//Insertion Sorting - compares the value one at a time.
function insertSorting (array){
    //Start from the second element - outer loop
    for (let i = 1; i < array.length; i++){
        //Go through the elements - inner loop
        for (let j = i - 1; j > -1; j--)
        {
            //value comparison using ascending order
            if (array [j + 1] < array[j])
            {
                //swapping procedure
                [array [j+1], array[j]] = [array [j], array[j + 1]];
            }
        }
    }

    return array;
}
//invoke function in the console
console.log(insertSorting([23, 1, 10, 5, 2]));

//Merge sorting - divide the elements in the array and sort it until it is finalized
//merging two arrays appropriately.

function merge(array1, array2){
    //create a new empty array and have 2 value pointers
    let res = [], i =0, j=0;

    //sort the first array
    if(array1.length > 1)
    {
        let min = 0;

        for (let i = 0; i < array1.length ; i++)
        {
            if (i !== min)
            {
                if(array1[i] < array1[min])
                {
                    //swapping element procedure
                    [array1[i], array1[min]] = [array1[min], array1[i]];

                    //change the minimum
                    min = i;
                }
            }
        }
    }

    //sort the second array
    if(array2.length > 1)
    {
        let min = 0;
        for (let i = 0; i < array2.length; i++)
        {
            if (i !== min)
            {
                if (array2[i] < array2[min]){
                    //swaping element procedure
                    [array2[i], array2[min]] = [array2[min], array2[i]];
                    //change the minimum
                    min = i;
                }
            }
        }
    }

    //value comparison
    while(i< array1.length && j < array2.length)
    {
        if (array1 [i] < array2[j])
        {
            res.push(array1[i]);
            i++;
        }
        else {
            res.push(array2[j]);
            j++;
        }
    }

    //push the rest of array1
    while (i < array1.length){
        res.push(array1[i]);
        i++;
    }

    //pushing the rest of array2
    while (j <array2.length){
        res.push(array2[j]);
        j++;
    }

    return res;
}

//merge sort
function mergeSort(arr){
    if (arr.length <= 1) return arr;

    //splitting into halves
    let mid = Math.ceil(arr.length / 2);

    let array1 = arr.slice(0, mid);

    let array2 = arr.slice(mid);

    let array1_subarrays = [], sorted_array1_subarrays=[];

    let array2_subarrays = [], sorted_array2_subarrays=[];

    //loop through array 1 making subarrays of two elements
    for (let i = 0; i < array1.length; i += 2)
    {
        array1_subarrays.push(array1.slice(i, i+2));
    }

    //loop through array 2 making subarrays of two elements
    for (let i =0; i < array2.length; i += 2)
    {
        array2_subarrays.push(array2.slice(i, i + 2));
    }

    //sort each subarrays of array 1
    for (let i=0; i<array1_subarrays.length; i += 2)
    {
        let result = merge(array1_subarrays[i],array1_subarrays[i + 1]);

        result.forEach((value)=> sorted_array1_subarrays.push(value));
    }

    //sort each subarrays of array 2
    for(let i =0; i<array2_subarrays.length; i += 2)
    {
        let result = merge(array2_subarrays[i],array2_subarrays[i + 1]);

        result.forEach((value)=>sorted_array2_subarrays.push(value));
    }

    let result = merge(sorted_array1_subarrays, sorted_array2_subarrays);

    return result;
}

//invoke the function inside the console
console.log(mergeSort([70,50,30,10,20,40,60]));

//Quick Sort - divide and conquer technique

//Step 1: Create a partition
function quickSortPartition(items, left, right){

    let pivot = items[Math.floor((right + left)/2)];
    let i = left; //left pointer
    let j = right; //right pointer

    while(i <= j)
    {
        //increment left pointer if the value is less than the pivot
        while(items[i] < pivot)
        {
            i++;
        }

        //decrement right pointer if the value is more than the pivot
        while(items[j] > pivot)
        {
            j--;
        }

        //swapping procedure
        if (i <= j)
        {
            [items[i], items[j]] = [items[j], items[i]];
            i++;
            j++;
        }
    }
    //return to the left pointer
    return i;
}

//Step 2:sorting process - recursion tooks place because we call out the function to ourselves
function quickSort(items,left,right)
{
    let index;
    if(items.length > 1)
    {
        index = quickSortPartition(items, left, right); //get the left pointer returned.

        if(items.length > 1)
        {
            index = quickSortPartition(items, left, right);
        }
        
        if(left < index - 1)
        {
            //more elements on the left side
            quickSort(items,index,index-1);
        }

        if(index < right)
        {
            //more elements on the right side
            quickSort(items, index, right);
        }
    }

    return items; //this returns the sorted array
}

let items1 = [5,3,7,6,2,9];
console.log(quickSort(items1, 0, items1.length -1 ));

//String match method - built in function

/*
    Syntax:
    str.match (regexp)

    whereas:
    str = string
    match() take in
    regexp - regular expression object(Argument is implicitly converted to regular expression if it is a non regular expression)

    NOTE: if we do not give any parameters, match() returns [""]
*/

// const string = "I am learning JavaScript not Java";
// const re = /Java/;

// let result = string.match(re);
// console.log("Result of matching /Java/");
// //without using gflag - we only get the first match but with detailed information like index, input and groups
// console.log(result);

// const re1 = /Java/g;
// let result1 = string.match(re1);

// console.log("Result of matching /Java/ with a g flag:");
// //with using g flag it will return only the first match.
// console.log(result1);

//groups - an object of named capturing groups having keys as the names and values as the captured matches.
//index - index of the seach where a result was found
//input - the copy of the search string

//Matching sections in a string
const sentence = "My name is Jelly. Your name is Ivan.";

//expression matches case-sensitive name + any alphabets till period
const re = /name\sis\s[a-zA-Z]+\./gi;

let res = sentence.match(re);
console.log(res); //['name is Jelly.', 'name is Ivan.']

//using named capturing groups
const reg1 = /name\sis\s(?<name>[a-zA-Z]+)\./i;
let found = sentence.match(reg1);
console.log(found.groups); //object: {name: 'Jelly'}
//groups - property of match that is an object
//capture group names and values.

//String parse

const data =
`

Title, Author, Publication Date, Publisher
ES6 in Practice, Zsolt Nagy, 2017, Self Published
The Developer's Edge, Zsolt Nagy, 2016, Self Published
Regex Quick Syntax Reference, Zsolt Nagy, 2018, Apress

`;

console.log(data);
console.log(typeof data); //String

// const result = data.trim().split(`\n`).map(row => row.split(','));
// console.log(result);

const result = [];
const rows = data.trim().split('\n');

for (let row of rows)
{
    result.push(row.split(','));
}
console.log(result);
console.log(typeof result); //object