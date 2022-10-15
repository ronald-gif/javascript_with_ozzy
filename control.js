var height = 10;
//if statement
//a group of statement that performs a related task is called ablock of codes
if(height < 60){
console.log("your under weight to donate blood"); //block of codes
}

let salary = 700000;
let PAYE = 30;

if(salary < 300000){
    console.log("your non taxable");
} else{
    let finalSalary = 700000 * (30/100)
    console.log(`your final salary is ${finalSalary}`);
}

let price = 2000;
if(price <= 2000){
    console.log("This product is entittled to VAT");
} else{
    console.log("This product is not entittled to VAT");
}

//nested if
const number0 = -14;
if(number0 >= 0){
    if(number0 == 0){
        console.log("your number is 0");
    }
    else{
        console.log("You entered a positive number");
    } 
} 
else{
    console.log("your number is negative");
}

//if... else if

var mySalary = 700000;
var yourSalary = 600000;

if(mySalary > yourSalary){
    console.log("your are under paid");
}
else if(mySalary < yourSalary){
    console.log("your are paid good money");
} 
else if(mySalary == yourSalary){
    console.log("we are paid equal money");
}