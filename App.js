

const form = document.querySelector ("#form");
const name = document.querySelector ("#name");
const email = document.querySelector ("#email");
const phone = document.querySelector ("#phone");
const password = document.querySelector ("#password");

form.addEventListener("submit",(e)=>{
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();

    if (nameValue==""){
        e.preventDefault();
        alert("Please provide the the name!");
        name.focus();
        return false;
    }

    if (!isNaN(nameValue)){
        e.preventDefault();
        alert("Please provide a valid name!");
        name.focus();
        return false;
    }
    if (emailValue==""){
        e.preventDefault();
        alert("Please provide an email!");
        email.focus();
        return false;
    }
    if (phoneValue==""){
        e.preventDefault();
        alert("Please provide the phone number!");
        phone.focus();
        return false;
    }
    if (phoneValue.lenght<10 || phoneValue.lenght>10){
        e.preventDefault();
        alert("Please provide the valid phone number!");
        phone.focus();
        return false;
    }
    if (passwordValue==""){
        e.preventDefault();
        alert("Please provide a password!");
        password.focus();
        return false;
    }
    if (passwordValue.lenght<5){
        e.preventDefault();
        alert("Password can't be less than 5 digits!");
        password.focus();
        return false;
    }
    alert ("Data saved successfully")

})