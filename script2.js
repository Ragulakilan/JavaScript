console.clear();


//  Task 1 — Employee Eligibility

let employeeName =prompt("Enter Your Name");
let age = prompt("Enter Your Age");
let experience = prompt("Enter your Experience")
let salary = prompt("Enter Your Salary")

if (age >= 21 && experience >= 1 && salary >=20000) {
    console.log("Employee is eligible");
} else{
        if (age < 21) {
             console.log("Not eligible: Age must be 21 or above");
        }
}
if (experience < 1) {
    
    console.log("Not eligible: Experience must be at least 1 year");
    
}
if (salary < 20000) {
    console.log("Not eligible: Salary must be ₹20,000 or above");
}





// Task 2 — ATM Withdrawal

let balance =10000
let Withdraw = Number(prompt("Enter withdrawal amount"))


if (Withdraw <= 0) {
    console.log("Invalid amount");
    
} else if (Withdraw > balance) {
    console.log("Insufficient Balance");
}

else if (Withdraw % 100 !==0) {
    console.log("Amount must be a multiple of 100");
         
}    
        
 else {
    amount = balance-Withdraw;

       console.log("Withdrawal successful");
            console.log("Remaining Balance: "+ amount);
    
}



//  Task 3 — Login System with 3 Attempts

let userName = "admin";
let  crtpassword ="12345";

let attempt = 0;
let login =false;

while (attempt< 3) {
    let user =prompt("Enter username:");
    let password = prompt("Enter password");

    attempt++;

    if (user===userName && password===crtpassword){
        console.log("Login Successful");
        login =true;
        break; 
    }else{
        console.log("Wrong username or password");
        
    }
    
}
if (login === false) {
    console.log("Account Locked");
    
}



// Task 4 — Student Grade System

let maths = Number(prompt("Enter your maths mark:"))
let english = Number(prompt("Enter your english mark:"))
let science = Number(prompt("Enter your science mark:"))
let social = Number(prompt("Enter your social mark:"))
let computer = Number(prompt("Enter your computer mark:"))


let total = maths +english+ science+ social+computer;
let Average = total/5;
let Grade ;

 if (Average >= 90) {
   Grade = "A";
} 
else if ( Average >= 80) {

    Grade = "B";
  }
else if (Average >= 70) {

    Grade = "C";
  } 
  else if (Average >= 60) {

    Grade = "D";
  }

else 
    {
        Grade = "F";
        
    }

console.log("Total = "+ total);
console.log("Average = "+ Average);
console.log("Grade = "+ Grade);




//  Task 5 — Number Pattern

for (i=1; i<=5; i++ )
{
    console.log(i);
    
}

let j=5
while (j>=1) {
    console.log(j);

    j--
    
}

let z = 1;
let result = "";

do {
    result = result + z + " ";
    z++;
} while (z <= 5);

console.log(result);


// Task 6 — Shopping Cart

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

let prices = [50000, 1000, 2000, 15000];

let total = 0;

for (let i = 0; i < products.length; i++) {
    console.log(products[i] + "=" + prices[i]);

    total = total + prices[i];
}

console.log("Total = " + total);


// Task 7 — Employee Object

 let employee = {
        name: "Arun",
        empId: "STK-101",
        role: "Software Engineer",
        salary: 45000
 };

for( let key in employee){
    console.log(key + ":"+employee[key]);
    
}
function Bonus() {
    if (employee.salary>=40000) {
        return 5000
        
    }else{
        return 3000
    }
    
}
console.log("Bonus = "+ Bonus());




// Task 8 — Bank Account Functions


function deposit(balance, amount) {
    return balance + amount;
}

function withdraw(balance, amount) {
    return balance - amount;
}

function checkBalance(balance) {
    return balance;
}

let balance = 10000;

balance = deposit(balance, 5000);
console.log("Deposited: 5000");

balance = withdraw(balance, 2000);
console.log("Withdrawn: 2000");

console.log("Current Balance: " + checkBalance(balance));



// Task 9 — Callback Calculator

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculate(callback, a, b) {
    return callback(a, b);
}

console.log(calculate(add, 20, 10));
console.log(calculate(sub, 20, 10));
console.log(calculate(mul, 20, 10));
console.log(calculate(div, 20, 10));











