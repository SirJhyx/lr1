console.log("connected");

let login_attempts = 3;
//sets the number of login attempts

function validate_form(){
    let emailAdd = document.getElementById("emailAdd").value;

    let pass = document.getElementById("pass").value;

    //document.getElementbyId - returns an element object representing the element whose id property matches the specified string.
    //elementID - they are required to be unique if specified to get access to a specic element quickly

    //.value - sets or returns the value of an attribute.

    if(emailAdd == "student@mail.com" && pass=="discovery")
    {
        alert("Successfully Logged In");
        document.getElementById("emailAdd").value="";
        document.getElementById("pass").value="";
    }
    else {
        if(login_attempts == 0)
        {
            alert ("No Login Attempts Available");
        }
        else {
            login_attempts = login_attempts - 1;
            alert ("Login Failed. You have only " + login_attempts + "login attempts available");
            
            if(login_attempts == 0)
            {
                document.getElementById("emailAdd").disabled = true;
                document.getElementById("pass").disabled=true;
                document.getElementById("form1").disabled=true;

                //disables the form
            }
        }
    }

    return false
    //during form submission, if a particular entry is unfilled, return false is used to prevent the submission.
}