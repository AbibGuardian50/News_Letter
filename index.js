let main = document.querySelector('main');
let success =  document.getElementById('success-subscribing');
let errorAlert = document.getElementById('error-alert');
let emailMsg = document.getElementById("email-message");
let emailInput = document.getElementById("email-field");
let success_icon= document.getElementById("success-icon-subscribing");
let dismiss_btn = document.getElementById("dismiss-btn");
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function ValidateEmail(inputText) {
    
    if (inputText.value.match(mailformat)) {
        main.style.display = 'none';
        success_icon.style.display = 'flex';
        emailMsg.textContent = emailInput.value;
    }
    else {
        errorAlert.style.display = 'block';
        emailInput.style.color = 'red';
        emailInput.style.border = '1px solid red';
    }
}

function Dismiss() {
    main.style.display = 'flex';
    success_icon.style.display = 'none';
}