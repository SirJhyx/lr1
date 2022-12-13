import React from 'react';
import ReactDOM from 'react-dom';

//How to render an element
//Step1: Create a root that will pass to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//   </React.StrictMode>,
//   document.getElementById('root')

// );


// const name = "John Smith"
// //Step 2: Pass the element to render 
// const element = <h1>Hello, {name}</h1>
// //JSX - JavaScript XML
// //it allows us to write HTML inside the JS
// //place them inside the DOM (Document Object Model) without using createElement() appendChild()

// //Step 3: Rendering the elements
// ReactDOM.render(
//   element, document.getElementById('root')
// );

/*
    EXERCISE
    Create an object which contains properties firstName and lastName.

    Using a function, join the firstName and lastName together and display it in the browser using ReactDOM.render().

*/

const user = {
  firstName: "Jaden",
  lastName: "Smith"
}

function fullName (user) {
  return `${user.firstName} ${user.lastName}`
}

const element = <h1>Hello, {fullName(user)}</h1>

ReactDOM.render(
  element, document.getElementById('root')
);
  
