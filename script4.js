console.clear();

//  Level 1 — Basics

// Task 1: Student Details

let name = "Rahul";
let age = 24 ;
let department = "IT";
let cgpa = 7.79 ;

console.log("Name : "+ name);
console.log("Age : "+age);
console.log(`Department : ${department}`);
console.log(`Cgpa : ${cgpa}`);

// Task 2: Simple Calculator

// Create variables a = 20 and b = 10.

let a =20 ;
let b =10;
let add = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;
let mod = a%b;
let pow = a**b;
console.log("Addition : " + add);
console.log("Subtraction : "+ sub);
console.log("Multiplication : "+ mul);
console.log("Division : "+ div);
console.log("Modulus : "+ mod);
console.log("Power : "+ pow);


// Task 3: Age Checker

let age1 = prompt("Enter your Age")

if (age1 >= 18) {
    console.log("Eligible to vote ");
    
    
} else {
    console.log("Not eligible");
    
}



//  Level 2 — Conditions
// Task 4: Student Grade


let mark = prompt("Enter Your Mark");

if (mark >= 90) {
    console.log("Your Are A Grade");
} else if (mark >= 80) {
    console.log("Your Are B Grade");  
}else if (mark >= 70){
    console.log("Your Are C Grade");
}else if (mark >= 60){
    console.log("Your Are D Grade");
}
else{
    console.log("Your Are Fail");
    
}



// Task 5: Login System

let correctUsername = "admin";
let  correctPassword = "1234";

let user =prompt("Enter your username")
let Password =prompt("Enter your Password")

if (correctUsername==user && correctPassword==Password) {
    console.log("Login Successful");
    
    
} else if (correctUsername!=user && correctPassword!=Password){
    console.log("Invalid Credentials");
    
}
else if (correctUsername!=user){
console.log("Invalid UserName");

} else if(correctPassword!=Password){
console.log("Invalid Password");

}
    

// Task 6: ATM Withdrawal

let balance =10000;

let amount = Number(prompt("Enter Your Withdrawal Amount"))

let amt = balance-amount;

if (amount > 0 && amount < balance) {
   if (amount % 100 ==0) {
    console.log("Withdrawal Amount = "+amount);
    console.log("Balance Amount = "+ amt);
 
   }else{
    console.log("please Enter Multiple of 100");
    
   }
    
} else {
    console.log("Invalid Amount");
    
    
}



// Level 3 — Loops
// Task 7: Multiplication Table

let num = prompt("Enter a number");
for(i=1; i<=10; i++)
    console.log(num +" x " + i+ " = "+ num*i);


// Task 8: Reverse Number

let input =Number(prompt("Enter Your Num"));
let rev = 0;


while (input> 0) {
    let digit =input % 10;
    rev = rev * 10 + digit;
    input = Math.floor(input/10);

}
console.log(rev);


// Task 9: OTP System

let correctOTP = 1234;
let attempts = 0;

while (attempts < 3) {
    let userOTP = Number(prompt("Enter OTP:"));

    if (userOTP === correctOTP) {
        console.log("Login Successful");
        break;
    } else {
        attempts++;
        
        if (attempts === 3) {
            console.log("Account blocked");
        } else {
            console.log("Login Unsuccessful");
        }
    }
}



// Level 4 — Functions

function calculateSalary(basicSalary, bonus) {

    return basicSalary + bonus;

};
console.log(calculateSalary(30000, 5000));



// Task 11: Calculator Function

function adds(z, y) {
    return z + y;
}

function subs(z, y) {
    return z - y;
}

function mult(z, y) {
    return z * y;
}

function divs(z, y) {
    return z / y;
}

console.log(adds(20, 10));
console.log(subs(60, 10));
console.log(mult(6, 10));
console.log(divs(50, 10));



// Task 12: Eligibility Function

function check(age, height, weight) {

    if (age >= 21 && height >= 170 && weight >= 70) {
        console.log("Eligible");
    } else {
        console.log("Not eligible");
    }
}
check(24, 177, 70);



//  Level 5 — Array Practice

// Task 13: Shopping Cart

let cart = ["Laptop", "Mouse", "Keyboard"]
cart.push("Moniter")
cart.splice(1,1,)
cart.unshift("Headset");
cart.pop();
console.log(cart);



// Task 14: Find Maximum
let numbers = [10, 45, 23, 89, 12, 67];

numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers[0]);


// Task 15: Remove Duplicate Values
let number = [1, 2, 3, 2, 4, 1, 5];

let result = [];

for (let i = 0; i < number.length; i++) {

    if (!result.includes(number[i])) {
        result.push(number[i]);
    }
}

console.log(result);


// Level 6 — Higher-Order Functions


// Task 16: Employee Salary Filter

let employees = [
  {name: "Arun", salary: 30000},
  {name: "Bala", salary: 50000},
  {name: "Kumar", salary: 25000},
  {name: "Ravi", salary: 70000}
];

let empsal = employees.filter((c,i,t)=>{
    return c.salary >= 40000;
})
console.log(empsal);


// Task 17: Increase Salary

let incSalary = employees.map((c,i,t)=> {

    if (c.salary < 40000) {
        c.salary = c.salary + 5000;
    } else {
        c.salary = c.salary + 10000;
    }

    return c;
});

console.log(incSalary);


// Task 18: Total Salary

let total = employees.reduce(( acc , c ,i ,t)=>{
    return acc + c.salary
},0);
console.log(total);



// Task 19: Check Employee
// Using some():

let earhigh = employees.some((c,i,t)=>{
return c.salary >100000;
})
console.log(earhigh);

// Using every():
let earless = employees.every((c,i,t)=>{
return c.salary >= 20000;
})
console.log(earless);









// Interview Challenge
// Task 20: Employee Management Mini Program

let employees1 = [
  {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 35000
  },
  {
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 45000
  },
  {
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 60000
  }
];


// Print all employee names using forEach()
employees1.forEach((c,i,t)=>{
console.log(c.name);
})

// Get only IT employees using filter()

let empit = employees1.filter((c,i,t)=>{
    return c.department=="IT";
})
console.log(empit);


// Find employee with salary ₹45000 using find()
let find = employees1.find((c,i,t)=>{
    return c.salary ==45000;
})
console.log(find);


// Calculate total salary using reduce()

let total1 = employees1.reduce(( acc , c ,i ,t)=>{
    return acc + c.salary
},0);
console.log(total1);


// Check whether anyone earns above ₹50000 using some()

let high = employees1.some((c,i,t)=>{
return c.salary >50000;
});
console.log(high);

// Check whether everyone earns above ₹20000 using every()

let high1 = employees1.every((c,i,t)=>{
return c.salary >20000;
});
console.log(high1);


// Sort employees by salary from highest → lowest

let sort = employees1.sort((d,c)=>{
    return c.salary-d.salary;
});
console.log(sort);

// Destructure each employee's name and salary
employees1.forEach(function(employe){
    let {name,salary}=employe;
    console.log(name,salary);
    
})

// Use the spread operator to create a new employee list

let spread = [...employees1];
console.log(spread);



// Increase every salary by 10% using map()

let Sal = employees1.map((c,i,t)=> {
    c.salary=c.salary+(c.salary*10/100);
    return c;
});

console.log(Sal);