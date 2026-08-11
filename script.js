
console.clear();

// Task 1 - Student Details

const coll = "SRM";
var age = 23;
let Stu = "Rahul";

console.log("College Name : "+ coll);
console.log("Student Age : "+ age);
console.log("Student Name : "+ Stu);


// Task 2 - Mobile Price

let Price =25000;

Price = 27000;

console.log(Price);



// Task 3 - Company Name

// const company ="Stackly";
// company ="TCS";
// console.log(company);

// Assignment to constant variable ERROR

// Task 4 - Console Practice

console.log("Login Successful");
console.warn("Password is Weak");
console.error("Network Error");

// Task 5 - Data Types

let a = "Ragul Akilan";
let b= 24;
let c = true;
let value;

console.log("My Name : "+a);
console.log(typeof a);

console.log("My Age : "+b);
console.log(typeof b);

console.log("Are you a developer : "+c);
console.log(typeof c);

console.log(value);
console.log(typeof value);

// Task 6 - Shopping Cart Array

let cart =[ "Laptop", "Mouse","Keyboard","Headset","Monitor" ];

console.log(cart[0]);
console.log(cart[2]);
console.log(cart[cart.length-1]);

// Task 7 - Favorite Movies

let movie = ["Ok kanmani","Spider man","lucky basker","Jananayagan","Iron man","karupu"]

console.log(movie[1]);
console.log(movie[4]);
console.log(movie[movie.length-1]);


// Task 8 - Employee Object

let Employee ={
    name: "Ragul Akilan",
    age:24 ,
    department : "Software Developer" ,
    skills : ["HTML and CSS", "java", "Testing"],
    salary :25000

};
console.log(Employee.name);
console.log(Employee.department);
console.log(Employee.skills[0]);
console.log(Employee.salary);


// Task 9 - Product Details

let Product ={
    productname: "Bike",
    brand:"KTM" ,
    price : 350000 ,
    colors : ["Red", "White", "Orange","Black"],
  

};
console.log(Product.brand);
console.log(Product.price);
console.log(Product.colors[1]);


// Task 10 - Arithmetic Calculator

let z = 20;
let y = 5 ;

console.log("Addition:", z + y);
console.log("Subtraction:", z - y);
console.log("Multiplication:", z * y);
console.log("Division:", z / y);
console.log("Modulus:", z % y);
console.log("Exponent:", z ** y);


// Task 11 - Increment Practice

let r = 5;
r++;
console.log(r);

++r;
console.log(r);

r--;
console.log(r);

--r;
console.log(r);


// Task 12 - Predict the Output

let t = 10;

let o = t++;

let w = ++o;

console.log(t);
console.log(o);
console.log(w);

// output
// 11
// 11
// 11



// Task 13 - Predict the Output
let q = 7;

let v = --q;

let d = v++;

console.log(q);
console.log(v);
console.log(d);

// output
// 6
// 7
// 6


// Task 14 - School Object
let School ={
    schoolname: "SDA",
    principal:"Vijay" ,
    totalstudents : 3500 ,
    classes : ["1st", "2nd", "3rd","4th","5th","6th"],
  

};
console.log(School.schoolname);
console.log(School.principal);
console.log(School.classes[School.classes.length-1]);


// Task 15 - Grocery List


let Grocery =[ "Milk", "Curd","Chicken","Chips","Vegetables","Fruits","Soap","Eggs"];

console.log(Grocery[0]);
console.log(Grocery[3]);
console.log(Grocery[Grocery.length-1]);


// Task 16 - User Profile

let username = "Ragul Akilan";
let email = "ragul@gmail.com";
let ages = 24;
let isPremium = true;

console.log(username);
console.log(typeof username);

console.log(email);
console.log(typeof email);

console.log(ages);
console.log(typeof ages);

console.log(isPremium);
console.log(typeof isPremium);

// Task 17 - Variable Rules

var u =10;
let e =19;
// const l = 20; error

// Reassign all

u=12;
e=17;
l=21;

// Redeclare all
var u=100;
// let e=500; error
// const l=200;error


console.log(u);
console.log(e);
console.log();

// Task 18 - Marks Calculation


let tamil = 85;
let english = 90;
let maths = 95;

let total = tamil + english + maths;
let Average = total / 3;

console.log("Total:"+total);
console.log("Average:"+Average);



// Task 19 - Company Database
let company ={
    Employee:["Rahul","Nila","Hema"],
    location:"chennai",
    year : 2000,
    CEO : "Akilan"

}
console.log(company.CEO);
console.log(company.location);
console.log(company.Employee[0]);



// Task 20 - Mini Profile

let profile = {
    name: "Ragul",
    city: "Chennai",
    hobbies: ["Football", "Movies", "Driving"],
    age: 25
};

console.log(profile.name);
console.log(profile.hobbies[1]);
console.log(profile.age);

















































