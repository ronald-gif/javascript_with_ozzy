//operators are things or characters or symbols that tells a computer what to do with an operand
//Arithmetic operators
var num1 = 10;
var num2 = 40;

var num3 = 60, num4 = 200;
//adition operator
console.log(num1 + num2);

//subtraction operator
console.log(num4 - num3);

//multiplication
console.log(num1 * num2);

//division
console.log(num2 / num1);

//remainder/modulus
console.log(num4 % num3);

//escape characters \n, \b, \t
//concatenating operator (+)
var firstName = "Ronald\n";
var lastName = "Biyinzika";

console.log(firstName + lastName);

//Assignment operators
var length = 8;
var width = 3;
//length = length + 10
console.log(length +=10);
console.log(length -=2);
console.log(length *=2);

//logical operators
var number1 = 1
var number2 = 3;

//logical not
console.log(number2 != number2 );

//logical add &&
console.log((number1 < number2) && (number2 > number1));
console.log((number1 < number2) && (number2 < number1));

//logical or ||
console.log((number1 < number2) || (number2 > number1));

console.log((number1 > number2) || (number2 < number1));

//comparison operators

var salary1 = 100;
var salary2 = "100";
var gender1 = "female";
console.log(salary1 == salary2);
console.log(salary1 == gender1);
console.log(salary1 == salary2);
//strick equal operator 
console.log(salary1 === salary2);
console.log(salary1 >= salary2);
console.log(salary1 <= salary2);
console.log(salary1 != salary2);
console.log(salary1 > salary2);
console.log(salary1 < salary2);

//ternary operator
var A = 10, B = 5;
var C = A > B? A:B; // c equals a if the condition (a > ) otherwise  ? its true
console.log(C);

