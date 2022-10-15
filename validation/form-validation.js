const userName =document.querySelector('#username');
const email =document.querySelector('#email');
const password =document.querySelector('#password');
const confirmPassword =document.querySelector('#confirm-password');
const form =document.querySelector('#signup');
const firstname = document.querySelector('#firstname')
const tele = document.querySelector('tele')
let min = 3;
let max = 25;

//alphabet
// let alphabet = /^[A-Za-z]+$/

//numbers
// let number = /^[0-9]+$/

//email
// let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


// let valid = false;
    

const checkUserName = () =>{
    
  let user_name = userName.value.trim();
  let alpoNumeric = /^[0-9a-zA-Z]+$/;

  if(user_name == ""){
    alert('user name is empty')
    userName.style.border = '1px solid gold';
    return false;
  }
  // console.log(user_name);

  if(user_name.length < min || user_name.length > max){
    alert('user name not in range')
    userName.style.border = '2px solid red';
    return false;
  }

  if(user_name.match(alpoNumeric)){
    firstname.focus();
    return true;
    
  }else{
    userName.style.border = '2px solid red';
    alert('your name is not valid')
  }
};

const checkFirstName = () =>{
  let first_name = firstname.value.trim();
  let alpbet1 = /^[A-Za-z]+$/;

  if(first_name.match(alpoNumeric)){
    tele.focus();
    return true;
  }else{
    firstname.style.border = '3px solid red';
    alert('first name is incorrect')
  }
}

const checkPassword = () =>{
  let pass_word = password.value;
  let confirm_password = confirm.value

  if(pass_word == '' || confirm_password == ''){
    alert('password is empty')
    password.style.border = '2px solid red'
    confirm_password.style.border = '2px solid red'
    return false
  }

  if(pass_word != confirm_password){
    alert('password not matching')
    confirm_password.style.border = '2px solid red'
  }


 }

// const showSuccess = (input) => {
//     // get the form-field element
//     const formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     const error = formField.querySelector('small');
//     error.textContent = '';
// }

// const showError = (input, message) => {
//     // get the form-field element
//     const formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     const error = formField.querySelector('small');
//     error.textContent = message;
// };


// if (!isRequired(user_name)) {
//     showError(userName, 'Username cannot be blank.');
// } else if (!isBetween(user_name.length, min, max)) {
//     showError(userName, `Username must be between ${min} and ${max} characters.`)
// } else {
//     showSuccess(userName);
//     valid = true;
// }
// return valid;


// const checkPasswd = () => {
// 	let pass_wrd = password.value;
// 	let confirm_pwd = confirmPwd.value;

// 	if (pass_wrd == "" || confirm_pwd == "") {
// 		alert("Password cannot be empty");
// 		password.style.border = "3px solid red";
// 		confirmPwd.style.border = "3px solid red";
// 		return false;
// 	}

// 	if (pass_wrd != confirm_pwd) {
// 		alert("Passwords do not match!!");
// 		password.style.border = "3px solid red";
// 		confirmPwd.style.border = "3px solid red";

// 		return false;
// 	}
// }
