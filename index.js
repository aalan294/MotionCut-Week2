
function validateForm() {
    let name = document.forms["registrationForm"]["name"].value;
    let email = document.forms["registrationForm"]["email"].value;
    let username = document.forms["registrationForm"]["username"].value;
    let password = document.forms["registrationForm"]["password"].value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if ((name == "" || email == "" || username == "" || password == "")&&(!emailRegex.test(email))) {
       alert("Please fill out all required fields.");
       return false;
    }
    else{
        return true
    }
    
   }
   
   document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if(validateForm()){
        document.getElementById("confirmationMessage").style.display = "block";
    }
    
   });