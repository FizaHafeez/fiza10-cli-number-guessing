#! /usr/bin/env node 

import inquirer from "inquirer";

// 1) Computer will generate a random number   

// 2) User input for guessing number

// 3) Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1 );


const anwers = await inquirer.prompt([
    {
    type: "number",
    name: "userGuessnumber",
    message: "please guess a number between 1-6:",
},
]);


if (anwers.userGuessnumber === randomNumber ) {
    console.log("congtratulations! you guessed right number.");
} else {
    console.log("you gussed wrong number");
}
