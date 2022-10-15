function add(){
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
}
add()

function add2(a, b){
    let c = a + b;
    console.log(c);
}
add2(10, 20)
add2(100, 200);

function sum(x, y){
let c = x + y;
return c;
}
console.log(sum(2, 8));

//parameterized function| dynamic function
function PAYE(grossPay, taxi){
let netPay = grossPay - (grossPay * taxi);
return netPay;
}

//Arguments/actual parameters
console.log(PAYE(1000000, 0.3));

//define 3 paramerised functions that are calling one anather

function adding(){

}

function subtracting(){

}

function multiplication(){

}