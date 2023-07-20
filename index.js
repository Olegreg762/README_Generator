// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

function validate_input(input){
        if(input == ""){
            return console.log("Cannot be Blank")
        }
        return true
    };

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "Description",
        message: "Description of your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "Installation",
        message: "Installations needed for your project",
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the use case of your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "License",
        message: "Name Licenses for your project(if no press enter)",
    },
    {
        type: "input",
        name: "Contribute",
        message: "How to Contribute to your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "Test",
        message: "How to Test your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "Questions",
        message: "How to contact you with Questions of your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "Github",
        message: "Please enter your Github username",
        validate: validate_input
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successful README Generation")
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile("generated_README.md",)
    })
}

// Function call to initialize app
init();
