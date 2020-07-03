const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const phoneNum = document.getElementById('phone');
const ccNum = document.getElementById('credit_card');
const expDate = document.getElementById('exp_date');

form.addEventListener('input', preSubmit);
form.addEventListener('change', displayTotal);

function preSubmit() {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let phoneValue = phoneNum.value.trim();
    let ccNumValue = ccNum.value.trim();
    let expDateValue = expDate.value.trim();
    let phoneFormat = /^\d{3}-\d{3}-\d{4}$/;
    let nameFormat = /^[A-Za-z]+$/;
    let ccFormat = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    let expFormat = /^\s*([0]{0,1}[1-9]|[1][0-2])\/((201[8-9])|(20[2-9]\d)|([3-9]\d{3})|\d{5,})\s*$/;

    if(firstNameValue === "") {
        setErrorFor(firstName, 'First name Required')
    } else if (!firstNameValue.match(nameFormat)) {
        setErrorFor(firstName, 'Can only contain letters')
    } else {
        setSuccessFor(firstName);
    }

    if(lastNameValue === "") {
        setErrorFor(lastName, 'Last name required')
    } else if (!lastNameValue.match(nameFormat)) {
        setErrorFor(lastName, 'Can only contain letters')
    } else {
        setSuccessFor(lastName);
    }

    if(phoneValue === "") {
        setErrorFor(phoneNum, 'Phone required')
    } else if (!phoneValue.match(phoneFormat)) {
        setErrorFor(phoneNum, 'Required Format: XXX-XXX-XXXX')
    } else {
        setSuccessFor(phoneNum);
    }

    if(ccNumValue === "") {
        setErrorFor(ccNum, 'CreditCard# required')
    } else if (!ccNumValue.match(ccFormat)) {
        setErrorFor(ccNum, 'Must be 16 digits. Required Format: XXXX XXXX XXXX XXXX')
    } else {
        setSuccessFor(ccNum);
    }

    if(expDateValue === "") {
        setErrorFor(expDate, 'Card Expiry required')
    } else if (!expDateValue.match(expFormat)) {
        setErrorFor(expDate, 'Required Format: mm/yyyy(Year later than 2020)')
    } else {
        setSuccessFor(expDate);
    }
}

function checkInputs() {
    // get the values of the inputs
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let phoneValue = phoneNum.value.trim();
    let ccNumValue = ccNum.value.trim();
    let expDateValue = expDate.value.trim();
    let nameFormat = /^[A-Za-z]+$/;
    let phoneFormat = /^\d{3}-\d{3}-\d{4}$/;
    let ccFormat = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    let expFormat = /^\s*([0]{0,1}[1-9]|[1][0-2])\/((201[8-9])|(20[2-9]\d)|([3-9]\d{3})|\d{5,})\s*$/;

    if(firstNameValue === "") {
        setErrorFor(firstName, 'First name cannot be blank')
        firstName.focus()
        return false;
    } else if (!firstNameValue.match(nameFormat)) {
        setErrorFor(firstName, 'Can only contain letters')
        firstName.focus()
    } else {
        setSuccessFor(firstName);
    }

    if(lastNameValue === "") {
        setErrorFor(lastName, 'Last name cannot be blank')
        lastName.focus()
        return false;
    } else if (!lastNameValue.match(nameFormat)) {
        setErrorFor(lastName, 'Can only contain letters')
        lastName.focus()
    } else {
        setSuccessFor(lastName);
    }


    if(phoneValue === "") {
        setErrorFor(phoneNum, 'Phone cannot be blank')
        phoneNum.focus()
        return false;
    } else if (!phoneValue.match(phoneFormat)) {
        setErrorFor(phoneNum, 'Invalid Format: Must be XXX-XXX-XXXX')
        phoneNum.focus()
    } else {
        setSuccessFor(phoneNum);
    }

    if(ccNumValue === "") {
        setErrorFor(ccNum, 'Please enter credit card number')
        ccNum.focus()
        return false;
    } else if (!ccNumValue.match(ccFormat)) {
        setErrorFor(ccNum, 'Required Format: XXXX XXXX XXXX XXXX')
        ccNum.focus()
    } else {
        setSuccessFor(ccNum);
    }

    if(expDateValue === "") {
        setErrorFor(expDate, 'Please enter card expiration date')
        expDate.focus()
        return false;
    } else if (!expDateValue.match(expFormat)) {
        setErrorFor(expDate, 'Required Format: mm/yyyy(Year later than 2020)')
        expDate.focus()
    } else {
        setSuccessFor(expDate);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function clearForm(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
}

function displayTotal() {
    let item0 = parseFloat(document.getElementById('item_0').value);
    let item1 = parseFloat(document.getElementById('item_1').value);
    let item2 = parseFloat(document.getElementById('item_2').value);
    let item3 = parseFloat(document.getElementById('item_3').value);
    let item4 = parseFloat(document.getElementById('item_4').value);
    let item5 = parseFloat(document.getElementById('item_5').value);
    let total = (item0*3.00) + (item1*3.00) + (item2*2.50) + (item3*10.00) + (item4*12.00) + (item5*14.00);
    total = total.toFixed(2);

    // Display total
    document.getElementById('total').value = total;
}

function onReset() {
    firstName.focus();
    clearForm(firstName);
}