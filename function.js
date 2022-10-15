//functions are named block of codes that perform a specific task
//values with the function cannot be accessed outside the function
function add(){
    let num1 = 7;
    let num2 = 10;
    let ans = num1 + num2;
    return ans; // helps a function to expose something outside 
}
// add();
//function call/ invacation
console.log(add());
 

function evenNumbers(){
    for(let num = 0; num <= 100; num += 10){
        if(num % 2 == 0){
            console.log(num);
        }
    }
}
// evenNumbers();


function netPay(){
    let grossSalary = 1000000;
    let taxi = 1000000 * 0.3;
    let finalPay = grossSalary - taxi;
    return finalPay;
}
// console.log(netPay());

function welfare(){
    let welFare = 50000;
    let takeHome = netPay() - welFare
    console.log(takeHome);
}
welfare();