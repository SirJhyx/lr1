console.log("connected");

//Get Access to the button
let button = document.querySelector("#button");

//querySelector method - returns the first element that matches a CSS selector.

//Get Access to the ul tag (parent tag of li tag)
let todoWrapper = document.querySelector(".todo-wrapper");

//onSubmit Add new task to the DOM (Document Object Model)
button.addEventListener("click", () => {
    //addEventListener() - it is a method attaches an event handler to the document
    /*
        SYNTAX:
        "click" - event name
        - event is required to be declared inside the event listener
        - eliminate the use of the word "on"
        -example: instead of declaring the event name as onclick, we will just input the word "click"

        REMEMBER: ALL HTML DOM event are listed in the function 
        () - function to run when an event occurs
    */

        //Get the user input
        let userInput = document.querySelector("#userInput").value;

        //inputting tasks that is greater than 5 characters
        if(userInput.length > 5)
        {
            //create an li tag
            let li = document.createElement("li");
            //createElememt - it is a method that creates an element node. (list items)

            //add a classname of todo in li tag
            li.className="todo";
            //className - the name of the class declared in the html document.

            //create a text node from userInput
            let node = document.createTextNode(userInput);
            //createTextNode - it is a method that creates a text node with the specified text

            //append the node to the list item
            li.appendChild(node);

            //append the list items into unordered list(ul)
            todoWrapper.appendChild(li);

            //empty userInput
            document.querySelector("#userInput").value="";

        }

        else
        {
            alert("You must enter more than 5 characters");
        }
});

//DELETE LIST
document.querySelector(".todo-wrapper").addEventListener("click", (e) => {
    if (e.target.className === "todo") {
      let msg = confirm(
        `Are you sure you want to delete \n ${e.target.innerText}`
      );

      if (msg == true) {
        document.querySelector(".todo-wrapper").removeChild(e.target);
      }
    }
  });