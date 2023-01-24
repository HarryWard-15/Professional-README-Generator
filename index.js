// installing the required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

//list of questions to generate the readme file
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "Please enter the title of your project.",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must provide a title.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must provide a description.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributions'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'testing'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Apache license 2.0','BSD 2-clause "Simplified" license','BSD 3-clause "New" or "Revised: license','Common Development and Distribution License 1.0','Eclipse Public License 2.0','GNU General Public License v2.0','GNU GPLv3','MIT License','Mozilla Public License 2.0','No License'],
        name: 'license'
    }
];

// this function writes the data to the file specified
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
    }
    console.log("Your new README file can be found in the tests directory");
    });
};
//this function reads all the inputs, and used them to create the readme file.
async function init() {
    console.log("Starting app...");

    try {
        const responses = await inquirer.prompt(questions); //waits for all the questions to be answered
        const generateContent = generateMarkdown(responses);//turns the responses into the markdown format specified in the generateMarkdown file

        console.log("Responses Accepted \n\nGenerating content...\n");

        await writeToFile(`./tests/${responses.title}-README.md`, generateContent); // waits for the writetofile function to complete before saying everything is complete
        console.log("Successfully generated README\n");

    } catch (err) {//catching if there is any errors and printing them if so
        console.error(err);
    }

};

init();
