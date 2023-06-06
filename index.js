// function displaymessage() {
//     let userinput = [];
//     document.getElementById('success-subscribing');

// }

let main = document.querySelector('main');
let success =  document.getElementById('success-subscribing');
let errorAlert = document.getElementById('error-alert');
let emailMsg = document.getElementById("email-message");
let emailInput = document.getElementById("email-field");

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        main.style.display = 'none';
        success.style.display = 'block';
        emailMsg.textContent = emailInput.value;
        return true;
    }
    else {
        errorAlert.style.display = 'block';
        emailInput.style.color = 'red';
        emailInput.style.border = '1px solid red';
        return false;
    }
}