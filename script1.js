// day 2 task
console.clear();


// 1. Variables – Student Details

let studentName = "Ragul Akilan";
const age=26;
var course = "B.Tech";
let mark = 98;
console.log("Student Name:",studentName);
console.log("Student Age:",age);
console .log("Course:",course);
console.log("Mark:",mark);


// 2. User Input

// let Name = prompt("Enter your Name");
// let age1=prompt("Enter your age");

// console.log("Name:",Name);
// alert("Age:"+ age1);



// 3. Data Types

let var1 = "Rahul";

let var2 = 20;
let var3 = true;
let var4 ;
let var5 = null ;

console.log(var1, typeof var1);

console.log(var2, typeof var2);

console.log(var3, typeof var3);
console.log(var4, typeof var4);
console.log(var5, typeof var5);

// 4. Array – Shopping List

let products =["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"]

console.log("First product:",products[0]);
console.log("Third product:",products[2]);
console.log("Last product:",products[5]);
console.log("Complete array:",products);


// 5. Object – Employee Details

let employee = {
 namess :"Rahul",
 age2:23,
 role : "Software Developer",
 salary : 25000
};

console.log(employee.namess);
console.log(employee.age2);
console.log(employee.role);
console.log(employee.salary);


// 6. Arithmetic Operator – Bill Calculator

 let product = 500;
 let quantity = 3;

 let totalPrice = product * quantity;
 let Discount =100;
 let finalAmount =totalPrice-Discount;

 console.log("totalPrice:", totalPrice);
 console.log("discount:", Discount);
 console.log("final Amount:" , finalAmount);

//  console.log(product + quantity);
//   console.log(product - quantity);
//    console.log(product * quantity);
//     console.log(product / quantity);
 
 
//  7. Comparison Operators
console.log(25 > 20);       // true
console.log(15 < 10);       // false
console.log(50 == "50");    // true
console.log(50 === "50");   // false
console.log(100 != "100");  // false
console.log(100 !== "100"); // true



// 8. Logical Operators

console.log(10 > 5 && 20 > 15 || 5 > 10);   //true

console.log(10 < 5 || 20 >= 20 && 5 == "5");  //true

console.log(15 === "15" || 10 > 5 && 8 < 3); //false

console.log(20 >= 20 && 5 !== "5" || 10 < 5); //true

console.log(25 < 20 || 30 == "30" && 10 >= 10); // true


// 9. Ternary Operator – Login

let passwordCorrect = false;

console.log(
    passwordCorrect? "Login Successful" : "InValid Password"
);


// 10. Type Casting – Marks

 let mark1 = "80";
 let mark2 = "70";

 let total = Number(mark1)+ Number(mark2);

 console.log(total);
 


// 11. Voting Eligibility

let age3 = 12;

if (age3>=18) {
    console.log("You can vote");
     
}else{
    console.log("You cannot vote");
    
}

// 12. Student Grade

let studentMark = 93;

if (studentMark > 100 || studentMark < 0) {
    console.log("INVAILD MARK");
        
}
else if (studentMark >= 90) {
    console.log("Its A Grade");
} 
else if (studentMark >= 75) {

    console.log("Its B Grade");
  }
else if (studentMark >= 50) {

    console.log("Its C Grade");
  }    
else 
    {
        console.log("Your are fail");
        
    }

// 13. Time Greeting

let time =15;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");  
}else if(time >= 7 && time <= 12)
{
    console.log("Good Morning");
}
else if(time >= 13 && time <= 15)
{
    console.log("Good Afternoon");

}else if((time >= 16 && time <= 19))
{
    console.log("Good Evening");

}else if((time >= 20 && time <= 24)){
    console.log("Good Night");
    
}
else{
    console.log("Invalid Time");
    
}


// 14. Nested If – Job Eligibility

let age4 = 24;
let height = 170;
let weight = 70;

if (age4 > 21)
    {
      if(height>=170)
        {
            if (weight >=70) {
                console.log("Candidate is eligible");
                
            } 
            else 
                {
                console.log("Not eligible: Weight should be 70 kg or above");
                
                
                }

        }else{
            console.log("Not eligible: height should be 170 cm or above");
            
        }
    
    } else
        {
            console.log("Not eligible: Age should be 21 or above");
            

    }



//     15. Switch – Traffic Light/

 let trafficLight = "green";

 switch (trafficLight) 
 {
    case "red":
        console.log("Stop the vehicle");
        break;
    case "yellow":
        console.log("Start the vehicle");
        break;   
    case "green":
        console.log("Go");
        break;
    default:
        console.log( "Invalid traffic light");
    
        break;
 }




 

 



