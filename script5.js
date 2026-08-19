

console.clear();



let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {


        id: 102,
        name: "Raja",
        department: "EEE",
        salary: 35000,
        experience: 1,
        skills: ["C++", "Python", "HTML"]

    },
    {    

        id: 103,
        name: "Hema",
        department: "IT",
        salary: 50000,
        experience: 3,
        skills: ["HTML", "CSS", "Python","TypeScript"]

    },
    {    

        id: 104,
        name: "Ragul",
        department: "IT",
        salary: 60000,
        experience: 1,
        skills: ["HTML", "CSS", "JavaScript","Java","Selenium"]

    },
    {    

        id: 105,
        name: "Nila",
        department: "ECE",
        salary: 25000,
        experience: 3,
        skills: ["C", "C++", "Python"]

    },
    {

        id: 106,
        name: "Ravi",
        department: "HR",
        salary: 50000,
        experience: 4,
        skills: ["HTML", "CSS"]

    },
    {

        id: 107,
        name: "Kavina",
        department: "HR",
        salary: 50000,
        experience: 4,
        skills: ["HTML", "CSS"]
    },
    {    

        id: 108,
        name: "Vizhi",
        department: "EEE",
        salary: 10000,
        experience: 1,
        skills: ["SQL", "ReactJs", "JavaScript"]


    }
];




// Use forEach().

employees.forEach((c)=>{
console.log(c);
})



// Use filter().
let filter = employees.filter((c)=>{
    return c.salary > 40000;

})
console.log(filter);




// Use find().

let find = employees.find((employee)=>{
    return employee.id == 104;

})
console.log(find);




// Use reduce().

let total = employees.reduce(( acc , employee)=>{
    return acc + employee.salary
},0);
console.log(total);



// Use some().

let high = employees.some((employee)=>{
return employee.salary >100000;
});
console.log(high);


// Use every().

let every = employees.every((employee)=>{
return employee.experience>=1;
});
console.log(every);

// Sort employees

let sort = employees.sort((a,b)=>{
    return b.salary-a.salary;
});
console.log(sort);


// Array manipulation

let push = employees.push({ 
        id: 109,
        name: "Vishwa",
        department: "HR",
        salary: 70000,
        experience: 5,
        skills: ["SQL", "Java", "JavaScript"]
});
console.log(push);

let pop = employees.pop();
console.log(pop);

let unshift = employees.unshift({
        id: 100,
        name: "Akilan",
        department: "CPO",
        salary: 80000,
        experience: 3,
        skills: [ "Java", "JavaScript"]
});
console.log(unshift);

let shift = employees.shift();
console.log(shift);


// Destructuring

let employee = employees[0];

let {name,department,salary,skills} = employee;

let [skill1,skill2,skill3]=skills;

console.log(name);
console.log(department);
console.log(salary);

console.log(skill1);
console.log(skill2);
console.log(skill3);



// Spread operator

let newEmployees = [...employees];

newEmployees.push({
    id: 109,
    name: "Karthik",
    department: "IT",
    salary: 40000,
    experience: 2,
    skills: ["HTML", "CSS"]
});

console.log(newEmployees);
console.log(employees);



// Rest operator

function employeesSkills(name, ...skills) {
    console.log("Employee : ", name);
    console.log("Skills : ",skills);
    
}
employeesSkills("Hema","HTML","CSS","Python","TypeScript")

// Functions

// Add employee
function addEmployee(employee) {
    employees.push(employee);
}


// Delete employee
function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
}


// Search employee
function searchEmployee(id) {
    return employees.find(employee => employee.id === id);
}


// Calculate total salary
function calculateTotalSalary() {
    return employees.reduce((acc, employee) => {
        return acc + employee.salary;
    }, 0);
}


function displayEmployees() {
    console.log(employees);
}
addEmployee({
    id: 109,
    name: "Karthik",
    department: "IT",
    salary: 40000,
    experience: 2,
    skills: ["HTML", "CSS"]
});

console.log(searchEmployee(103));

console.log(calculateTotalSalary());

displayEmployees();

deleteEmployee(109);

displayEmployees();

// Conditional statements


employees.forEach((employee)=>{

if (employee.salary <= 30000) {
    console.log(`${employee.name} Junior`);
    
} else if (employee.salary<=60000) {
    console.log(`${employee.name} Mid Level`);
    
    
} else{
    console.log(`${employee.name} Senior`);
    
    
}
    
});



// Date

let date = new Date("2024-06-15");

employees.forEach((employee) => {
    employee.joiningDate = date;

    console.log(employee.name);
    console.log("Year:", employee.joiningDate.getFullYear());
    console.log("Month:", employee.joiningDate.getMonth() + 1);
});




// User Input


let user = Number(prompt("Enter Your Id Number"));

let input = employees.find((hi)=>{
    return hi.id ===user;

});
console.log(input);


// console.clear();


// Bonus Task 
let employees2 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 60000
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 75000
    }
];

function displayEmployees1() {
    employees2.forEach(employee => {
        console.log(employee);
    });
}

displayEmployees1();



function adep() {

    let newEmployee1 = {
        id: 104,
        name: "Ravi",
        department: "Sales",
        salary: 40000
    };

   let e =  employees2.push(newEmployee1);

    console.log(e);
}
adep();

function searchEmployee1() {

    let id = 102;

    let employee = employees2.find(employee => employee.id === id);

    console.log(employee);
}

searchEmployee1();

function highSalaryEmployees() {

    let result = employees2.filter(employee => employee.salary > 50000);

    console.log(result);
}

highSalaryEmployees();


function totalSalary() {

    let total = employees2.reduce((acc, employee) => {
        return acc + employee.salary;
    }, 0);

    console.log(total);
}

totalSalary();

function sortBySalary() {

    employees2.sort((c, d) => d.salary - c.salary);

    console.log(employees2);
}

sortBySalary();

function deleteEmployee1() {

    let id = 102;

     let del = employees2.filter(employee => employee.id !== id);

    console.log(del);
}

deleteEmployee1();

function exitProgram() {
    console.log("Employee Management System Closed");
}

exitProgram();






