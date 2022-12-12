//step 1: create a variable.
const preloadWrap = document.querySelector('.preloader-wrapper');
//const - constant, means that a variable cannot be assigned.
//preloadWrap is a user-defined variable.

//querySelector - it returns the first element that matches a CSS Selector,

//Step 2: Create an event Listener - it attaches an event handler to the document.
window.addEventListener('load', function () {
    preloadWrap.classList.add('fade-out-animation');

});

//classlist - HTML DOM (Document Object Model) Element
//Classlist is a programming API for HTML and XML
//Classlist is also a logical structure of the document in the way a document is accessed and manipulated.

//SYNTAX on how to create an event listener
/*                        e.g load, function ()
    window.addEventListener (event, function () {
        content;

        event - it eliminates the "on" prefix
        onload - load

        function to run when an event occurs.
    });
*/