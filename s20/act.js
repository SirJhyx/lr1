console.log("connected");

//Creating or adding items
let addButton = document.querySelector("#addButton");

//Get access to the ul tag - parent tag of li tag
let todoWrapper = document.querySelector(".todo-wrapper");

//onSubmit, add new task to the document object model
addButton.addEventListener("click",()=>{
    //Get user input
    let userInput = document.querySelector("#userInput").value;

    if(userInput.length > 5){
        //creating the element of list items
        let li = document.createElement("li");
        let text = document.getElementById("userInput");

        //create the className for the list items
        li.className = "todo";

        //creation of checkbox element
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id="todo-list";

        //appending checkbox to the list items
        li.appendChild(checkbox);

        //create a text node
        li.appendChild(document.createTextNode(text.value));

        //append the list items to the parent ul
        todoWrapper.appendChild(li);

        //to clear the input from the textbox
        document.querySelector("#userInput").value = "";

    }

    else {
        alert("It must be greater than 5 characters");
    }
}); 

//DELETING ITEMS
function deleteItems(){
    let i;

    let ul = document.getElementById("listings");

    let items = ul.getElementsByTagName("li");

    for (i=0; i<items.length; i++){
        if(items[i].firstChild.checked)
        {
            ul.removeChild(items[i]);
            i=i-1;
        }
    }
}