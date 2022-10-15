//object oriented programing(OOP)
//concept or an idea that advocates programming based on real world objects
//concepts: classes vs objects
//class is a blue print of an object
//object is an instance of a class
//objects have properties
//x-tics of objects; 
//inheritance- ability of an object to take on some/all properties and methods of super class, 
//Abstraction- level of representaion/hierarchy of a class
//polymophism- objects of the class taking on many forms
//Encapsulation- ability of objects/classes to group their methods(data hide)
//variables in oop are properties
let dance = {
    style: "rhythm",
    temple : 5,
    name : "butterfly",
    music : "rnb",
    age: 30,
    type : "cultural"
}
//log() is a function that belongs to console class
// console.log(dance.name);
// console.log(dance.style);

let school = {
    teachers: 15,
    students: 30,
    subjects: 4,
    buldings: 3,
    name: "green hill",

    //functions in oop are methods
    
    performance: () => {
        console.log("we always pass our students in first class");
    },
    sports: function(){
        console.log("we are the current champions of kampala");
    }
}
//objects have behaviours and methods
//methods - define what an object does to it self or others
//behaviours - are found in the methods
// console.log(school.performance());
// console.log(school.sports());

// classes-a blue print for creating objects

class Person{

    constructor(name, email, id, gender, weight, color, age){
        this.name = name,
        this.email = email,
        this.id = id,
        this.gender = gender,
        this.weight = weight,
        this.color = color,
        this.age = age

    }
    getName(){
     if(this.weight == 50){
        console.log("your are really heavy");
     } else {
        console.log("your need to gain more weight");
     }
    }

    myAge = () => {
        return this.age
    }

    get personalColor(){
        return this.color
    }

    set personalWeight(weight1){
        return this.weight = weight1
    }
}

let person1 = new Person("Ronald", "info@mico.com", "GH329IKD3", "male", 60, "white", 24)
console.log(person1.myAge());

console.log(person1.personalColor);
person1.personalWeight = 44
console.log(person1.weight);
console.log(typeof Person);


// function Person(name, email, id, gender, weight, color, age){
//     this.name = name,
//     this.email = email,
//     this.id = id,
//     this.gender = gender,
//     this.weight = weight,
//     this.color = color,
//     this.age = age

//     this.getMyAge = () => {
//         if(this.age < 18){
//             console.log(`${this.name} your stil young`);
//         }else if(this.getMyAge >= 18){
//             console.log(`${this.name} your starting to grow`);
//         }else if(this.age >= 45){
//             console.log(`${this.name} you are a youth`);
//         }else{
//             console.log(`${this.name} you are an old man`);
//         }
//     }

// }
// let person2 = new Person("Ronald", "info@mico.com", "GH329IKD3", "male", 60, "white", 18)

// console.log(person2.getMyAge());

let sum = () => {
    
}