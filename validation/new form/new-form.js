const userName =document.registration.userName;
const email =document.registration.email;
const telephone= document.registration.telephone;
const country = document.registration.country;
const sex1 = document.registration.sex;
const language = document.registration.language;
const luganda = document.registration.luganda;
const english = document.registration.english;



function checkPhone(){

    let numberRang = /^[A-Za-z]+$/
    let validatePhone1 = /^\d{10}$/
    let phoneValidate = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    if(telephone.value === ''){
        telephone.style.border = '2px solid red';
        telephone.focus();

        if(telephone.value.match(numberRang)){
            // checking of the telephone number value has only letters
        telephone.style.border = '2px solid red';
        telephone.focus();
        }else{
            email.focus();
        }
    }
}

function checkEmail(){

    // osman.buyundo@gmail.com
    // r.biyinzika@ciu.ac.ug

    let emailRang = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value === ""){
        email.style.border = '2px solid red';
        email.focus();
    }

    if(email.value.match(emailRang)){
        alert('yo email')
        country.focus();

    }else{
        email.style.border = '2px solid red'
    }
}



