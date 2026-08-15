console.clear();

// Level 1 — Variables & Operators

// 1. Salary Calculator

let salary = 30000;
let bonus = 5000;
let tax = 2000;

let final = salary + bonus - tax ;

console.log("Final Salary = ", final);


// 2. Predict the Output

let a = 10;
let b = a++;
let c = ++a;

console.log(a); //12
console.log(b); //10
console.log(c); //12


// 3. Logical Operators

// Without running the code, predict the output:


console.log(10 > 5 && 20 < 10 || 5 === "5"); //false
console.log(10 < 5 || 20 >= 20 && 5 == "5"); //true
console.log(!(10 > 5));//false



//  Level 2 — Conditions

// 4. ATM Withdrawal

let balance = 10000;
let withdrawal = 2500;
let amount = balance - withdrawal ;

if (withdrawal > 0 && withdrawal <= balance) {
    if (withdrawal % 100 == 0) {
        console.log("withdrawal Successful");
        console.log("Your Balance = " ,amount );
 
    }else{
        console.log("withdrawal Failed");
        
    }
}else {
    console.log("Transaction Failed");
    
}


// 5. Student Grade

let mark = 78;

if (mark >100 || mark < 0) {
    console.log("Please Enter The Correct Mark");
}
else if (mark >=90) {
    console.log("A Grade");
 } else if ( mark >= 80){
    console.log("B Grade");
    }else if ( mark >= 70){
    console.log("C Grade");
    }else if ( mark >= 60){
    console.log("D Grade");
    }
    else{
        console.log("Fail");
        
    }


// 6. Nested Login


let username = "admin";
let password = 1234;
let otp = 5555;

if (username == username ) {
    if (password == password) {
        if (otp == otp) {
            console.log("Login Successful");
             
        }else{
            console.log("Enter your Correct OTP");
            
        }
        
    }else{
    console.log("Enter your Correct Password");
    }
    
} else {
    console.log("Enter your Correct UserName");
   
    
    
}



//  Level 3 — Loops

// 7. Number Pattern

// Using a for loop:
for(i=1; i<=10; i++)
    console.log(i);
    

// 8. Multiplication Table

let num = 7;
for(j=1; j<=10; j++)
    console.log("7 x " +j+ " = "+ num*j);


// 9. Reverse Countdown
// Using while:


let z=10;
while (z>=0) {
    
console.log(z);
    
 z-- ;  
}

// 10. OTP System

// let correctOTP = 1234;
// let attempts = 0;

// while (attempts < 3) {
//     let userOTP = Number(prompt("Enter OTP:"));

//     if (userOTP === correctOTP) {
//         console.log("Login Successful");
//         break;
//     } else {
//         attempts++;
        
//         if (attempts === 3) {
//             console.log("Account blocked");
//         } else {
//             console.log("Login Unsuccessful");
//         }
//     }
// }


//  Level 4 — Arrays & Objects

// 11. Array Search

let fruits = ["apple", "banana", "orange", "grapes", "mango"];

for (let i = 0; i < fruits.length; i++) {
    
    console.log(fruits[i]);
    
}
console.log("First fruit : " +fruits[0]);
console.log("Last fruit : " +fruits[fruits.length-1]);



// 12. Object Details

let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};

for (let key in employee) {
   console.log(key +" : "+ employee[key]);
   
}



//  Level 5 — Functions

// 13. Calculator Function

function calculator(a, b, operator) {
    if (operator === "+") {
        return a + b;
    }
    else if(operator === "-"){
        return a - b;
    }
    else if (operator === "*") {
        return a * b;
    } 
    else if (operator === "/") {
        return a / b;
    } 
    else if (operator === "%") {
        return a % b;
    } 
    else {
        return "Invalid operator";
    }
}

console.log(calculator(20, 5, "+"));
console.log(calculator(20, 5, "*"));
console.log(calculator(20, 5, "%"));




// 14. Employee Salary

function salaryDetails(salary, bonus) {

    return salary + bonus;
    
    
};
console.log(salaryDetails(40000, 5000));


// 15. Function With Default Parameter


 function employees(name, role = "Trainee") {
    console.log("Name: " + name);
    console.log("Role: " + role);
}

employees("Arun");
employees("Kamal", "Developer");


//  Level 6 — Advanced Functions

// 16. Callback Task

function calculate(a,b,callback) {
    let result =a+b;
    return callback(result);

}
    function add(result) {
    return result;
}

    function sub(result) {
    return result ;
}

    function mul(result) {
    return result ;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, sub));
console.log(calculate(10, 5, mul));



// 17. Generator Task

function* rewards() {
    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";
}

let reward = rewards();

console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);

// Level 7 — Spread / Rest / Destructuring
// 18. Spread Operator

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];

let fullStack =[...frontend,...backend]
console.log(fullStack);


// 19. Array Destructuring

let student = ["Arun", "ECE", 8.5, "Developer"];

let [a1,a2,a3,a4]=student;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);



// 20. Nested Object Destructuring



let companyss = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salarys: 50000
    }
};

let {
    employee: {
        name: empName,
        role,
        salarys
    }
} = companyss;

console.log(empName);
console.log(role);
console.log(salarys);


//  Final Challenge — Mini Project
// Build a Student Management Console Program using only the concepts in your notes.

let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];

function printallstudent() {
    console.log("All Student :");
    for (let student of students) {
        let{name, department ,mark}=student;
        console.log(name , department ,mark);
          
    }
    
}
function printEceStudent() {
    console.log("ECE Students :");
    for (let student of students) {
        let{name ,department, mark}=student;
        if (department==="ECE") {
            console.log(name,mark);
            
        }
        
    }
    
    
}
function scored() {
        console.log("Scored Above 80 Mark :");
    for (let student of students) {
        let{name ,department, mark}=student;
        if (mark>=80) {
            console.log(name,department,mark);   
        }  
    } 
}
function totalMarks() {
    let total = 0;

    for (let student of students) {
        total = total + student.mark;
    }

    return total;
    
}
function average() {
       let total =totalMarks();
       return total/students.length;

}
function hl() {
    let high = students[0].mark;
    let low = students[0].mark;

    for (let student of students) {
        if (student.mark > high) {
            high = student.mark;
        }

        if (student.mark < low) {
            low = student.mark;
        }
    }

    console.log("Highest Mark:", high);
    console.log("Lowest Mark:", low);
}

printallstudent();
printEceStudent();
scored();
console.log("Total Marks:", totalMarks());
console.log("Average Marks:", average());
hl();










// Your program should:
// Print all students
// Print only ECE students
// Find students who scored above 80
// Calculate total marks
// Calculate average
// Display highest mark
// Display lowest mark
// Use for...of
// Use functions
// Use object destructuring






