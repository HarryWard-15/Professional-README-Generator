// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = ["Please Enter a Project Title", "Please enter a description of your project", "Please enter an Installation Guide", "Please provide usage information", "Please provide contribution guidelines", "Please provide test instructions", "Please choose your license","Please enter your GitHub Username","Please enter your email address"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
    }
    console.log("Your README file has successfully created!");
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log("Starting app...");
}

// Function call to initialize app
init();
