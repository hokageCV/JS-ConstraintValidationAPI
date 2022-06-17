const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');

const pswd1 = document.getElementById('pswd');
const pswd2 = document.getElementById('pswdcon');

email.addEventListener('input', checkEmail);

pswd2.addEventListener('input', checkPswd );

form.addEventListener('submit', function(event){
    if(form.checkValidity()==false){
        event.preventDefault();
        event.stopPropagation();
    }
});

function checkEmail(){
    if (email.validity.valid){
        email.setCustomValidity("");
        email.classList.add("success");
    }
    else if(email.validity.valueMissing){
        email.setCustomValidity(" email likho");
        email.reportValidity();
        email.classList.add("error");
    }
    else if(email.validity.typeMismatch){
        email.setCustomValidity("email format galat hai");
        email.reportValidity();
        email.classList.add("error");
    }
    else if(email.validity.tooShort){
        email.setCustomValidity(`Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`);
        email.reportValidity();
        email.classList.add("error");
    }   
}

function checkPswd(){
    if( pswd1.value != pswd2.value ){
        pswd2.setCustomValidity("password match nahi kar raha");
        pswd2.reportValidity();

        pswd1.classList.add("error");
        pswd2.classList.add("error");
    }
    else if (form.checkValidity() == false){
        pswd2.setCustomValidity("kuch toh gadbad hai ");
        pswd2.reportValidity();

        pswd1.classList.add("error");
        pswd2.classList.add("error");
    }
    // passwords are matching
    else{
        pswd1.classList.add("success");
        pswd2.classList.add("success");
    }
}