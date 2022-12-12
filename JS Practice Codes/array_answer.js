console.log("connected");

let students = [];
function addStudent(name)
{
    students.push(name);
    console.log(`${name} is added to the student's list.`);
}
addStudent("John");
addStudent("Jane");
addStudent("Joe");

function countStudents(){
    return `There are total number of ${students.length}`
}
console.log(countStudents());
// console.log(students);

function printStudents(){
    students.sort();
    students.forEach(function (student){
        console.log(student);
    });
}
printStudents();

function findStudent(keyword){
    let match = students.filter(function (element){
        return element.toLowerCase().includes(keyword.toLowerCase())
    })

    // console.log(match);

    if (match.length == 1){
        console.log(`${match} is an enrollee`);
    }

    else if (match.length > 1) {
        console.log(`${match} are enrollees`);
    }
    else {
        console.log(`No student found with name ${match}`);
    }
}

findStudent("Joe");

let studentSection = [];
function addSection(section){
    studentSection = students.map (function (student){
        return `${student} - section ${section}`
    })
}

console.log(addSection("A"));
console.log(studentSection);

function removeStudent(name){
    let firstLetter = name.slice(0,1).toUpperCase();
    let remainingLetters = name.slice(1, name.length);
    let capitalizedName = firstLetter + remainingLetters;
    let studentIndex = students.indexOf(capitalizedName);

    if(studentIndex >= 0){
        students.splice(studentIndex, 1);
    }

    console.log(`${name} was removed from the student's list`);
}

removeStudent("Joe");
console.log(students);