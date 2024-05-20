#!usr/bin/env/node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
      message:"Enter a first number",
      type:"number",
      name:"firstNumber",  
    },
    {
        message:"Enter a second number",
        type:"number",
        name:"secondNumber",  
      },
      {
        message:"select one of the opretor you want to perform",
        type:"list",
        name:"operator", 
        choices:["addition","substraction","multiply","divide"] ,
      }, 
      
]);

if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiply") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "divide") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select valid opretor");
}