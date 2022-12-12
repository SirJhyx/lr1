//Read Operation
//Query Operators

//Comparison Operators

//greater than
db.users.find(
    {
        age: {$gt:50}
    }
);

//greater than or equal to
db.users.find(
    {
       age: {$gte: 50}
    }
);

//Equal to
db.users.find(
    {
        age: {$eq: 65}
    }
);

//without the eq keyword
db.users.find(
    {
        age:65
    }
);

//less than
db.users.find(
    {
        age: {$lt: 65}
    }
);

//less than or equal
db.users.find(
    {
        age: {$lte: 65}
    }
);

//not equal
db.users.find(
    {
        age: {$ne: 65}
    }
);

//using in keyword
db.users.find(
    {
        lastName:{
            $in: ["Hawking", "Doe"]
        }
    }
);

//Exercise 4: Search courses with HTML and React using in keyword
db.users.find(
    {
        courses: {
            $in: ["HTML", "React"]
        }
    }
);

//Logical Operators
//$or
db.users.find(
    {
        $or: [
            {firstName: "Neil"}
        ]
    }
);

//How about if we add another criteria? Yes, this is possible, as long as it is separated by objects. 
db.users.find(
    {
        $or: [
            {firstName: "Neil"},
            {age: 25},
            {age: {$gte:50}}
        ]
    }
);

//$and operator
//age not equal to 82 and 76
//phone number is 123456789
db.users.find(
    {
        $and: [
            {age: {$ne:82}},
            {age: {$ne:76}},
            {"contact.phone": "123456789"}
        ]
    }
);

//Can we omit $and operator, will it still work?
//Yes, it will still work. Please use the code structure below as an example.
db.users.find({
    age: {$ne:82},
    age: {$ne:76},
    "contact.phone": "123456789"
});

/*Field Projection*/

//inclusion
db.users.find(
    {firstName: "Jane"},
    {firstName: 1, _id:0}
);

//find document of Jane and return only the fields first name, last name and phone number
db.users.find(
    {firstName: "Jane"},
    {
        _id: 0, 
        firstName: 1, 
        lastName: 1,
        "contact.phone":1
    }
);

//Query Operator
    //$regex
db.users.find(
    {
        firstName: {$regex: 'N', $options:'1'}
    }
);

//Exercise 5:

/*
    Find users with letter "S" in their firstname and letter "D" in their lastname.
    This is not case sensitive
    show only the first and last name and hide the id field

    please submit this on Monday

    CLUE: change the value in $options keyword

*/