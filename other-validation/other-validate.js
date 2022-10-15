// const userName =document.registration.userName;
// const telephone= document.registration.telephone;
// const country = document.registration.country;
// const sex1 = document.registration.sex;
// const language = document.registration.language;
// const luganda = document.registration.luganda;
// const english = document.registration.english;
// const date = document.registration.date;
// const password = document.registration.password;

const form =document.getElementById('signup');
const userName =document.getElementById('username');
const telephone= document.getElementById('telephone');
const country = document.getElementById('country');
const sex1 = document.getElementById('sex')
const luganda = document.getElementById('luganda');
const english = document.getElementById('english');
const date = document.getElementById('date')
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password')
const las = document.getElementById('last');
const p = document.getElementById('phone');
const email2 = document.getElementById('email2');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const confirm = document.getElementById('confirm');





form.addEventListener('submit', (event) =>{
    event.preventDefault();

    validateInput();
})
// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }


// const setError = (input, message) =>{                           
//     const formFields = input.parentElement;
//     const errorM = formFields.querySelector('.error')

//     errorM.innerText = message;
//     formFields.classList.add('error');
//     formFields.classList.remove('success')
// }

// const setSuccess = (input) =>{
//     const formFields = input.parentElement;
//     const errorM = document.querySelector('.error')

//     errorM.innerText = '';
//     formFields.classList.add('success')
//     formFields.classList.remove('error')
// }

//function to check phone number
function validatePhoneNumber(input_str) {
    // var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    let validatePhone1 = /^\d{10}$/;
  
    return validatePhone1.test(input_str);
  }


//   function to check email
function isValidEmail(emailV){
    const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return validateEmail.test(emailV)
}

// function to check password
function isValidPassword(pass_word){
    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return validatePassword.test(pass_word);
}


// validating all inputs
function validateInput(){

    let validatePhone1 = /^\d{10}$/;

    if(userName.value.trim() === ''){
        userName.style.border = '2px solid red'
        las.lastElementChild.innerText = 'user name can not be empty'
        userName.focus()
    }else{
        las.lastElementChild.innerText = ''
        userName.style.border = '2px solid green'
        telephone.focus();
    }

    if(telephone.value.trim() ===''){
        telephone.style.border = '2px solid red'
        p.lastElementChild.innerText = 'phone number can not be empty';
        telephone.focus();
        // return false
    }else if(!validatePhoneNumber(telephone.value.trim())){
        telephone.style.border = '2px solid red';
        p.lastElementChild.innerText = 'Enter a valid phone number';
        telephone.focus();
        // return false
    }else{
        p.lastElementChild.innerText = '';
        telephone.style.border = '2px solid green';
        email.focus();
        // return true
    }

    if(email.value.trim() === ''){
        email.style.border = '2px solid red';
        email2.lastElementChild.innerText = 'Email is required';
        email.focus();
        // return false
    }else if(!isValidEmail(email.value.trim())){
        email.style.border = '2px solid red';
        email2.lastElementChild.innerText = 'Enter a valid email';
        email.focus();
        // return false
    }else{
        email.style.border = '2px solid green';
        email2.lastElementChild.innerText = '';
        password.focus();
    }
    
    if(password.value.trim() ===''){
        password.style.border = '2px solid red';
        pass.lastElementChild.innerText = 'Password is required';
        password.focus();
    }else if(password.value.trim().length < 8 ){
        password.style.border = '2px solid red';
        pass.lastElementChild.innerText = 'Password has to be 8 characters and above';
        password.focus();
    }else if(!isValidPassword(password.value.trim())){
        password.style.border = '2px solid red';
        pass.lastElementChild.innerText = 'password should contain atleast one number and one special character';
        password.focus();
    }else{
        password.style.border = '2px solid green';
        pass.lastElementChild.innerText = '';
        confirm_password.focus();
    }
}


// if(telephone.value.match(validatePhone1)){
        //     telephone.style.border = '2px solid red';
        //     p.lastElementChild.innerText = 'Enter a valid phone number';
        //     telephone.focus();
        // }else{
        //     telephone.style.border = '2px solid green';
        //     date.focus();
        // }

// function checkPhone(){

//     let validatePhone1 = /^\d{10}$/
//     let phoneValidate = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

//     if(telephone.value === ''){
//         telephone.style.border = '2px solid red';
//         telephone.focus();

//         if(telephone.value.match(validatePhone1)){
//             // checking of the telephone number value has only letters
//         telephone.style.border = '2px solid green';
//         telephone.focus();
//         }else{
//             telephone.style.border = '2px solid green';
//             date.focus();
//         }
//     }
// }

// function checkPassword(){
//     let passwordCheck = /^[A-Za-z]\w{7,14}$/
//     let passwordCheck2 = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/
//     let passwordCheck3 = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/
    
//     if(password.value === ""){
//         password.style.border = '2px solid red'
//         alert('fill out')
//     }

//     if(password.value.match(passwordCheck2)){
//         password.style.border = '2px solid red'
//     }else{
//         password.style.border = '2px solid green'
//         country.focus()
//     }
    
// }