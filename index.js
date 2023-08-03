// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown_gen = require("./utils/generateMarkdown")
// Function that validates that the input wasn't empty
function validate_input(input){
        if(input == ""){
            return console.log("Cannot be Blank")
        }
        return true
    };
// Questions to be asked to generate the README
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "description",
        message: "Description of your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "installation",
        message: "Installations needed for your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "usage",
        message: "What is the use case of your project",
        validate: validate_input
    },
    {
        type: "list",
        name: "license",
        message: "Chose a License for your project",
        choices: ["MIT", "GPL", "Apache 2.0", "LGPL", "BSD 3 Clause", "MPL 2.0", "AGPL", "Eclipse Public License", ""]
    },
    {
        type: "input",
        name: "contribute",
        message: "How to Contribute to your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "test",
        message: "How to Test your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "questions",
        message: "How to contact you with Questions of your project",
        validate: validate_input
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your Github username",
        validate: validate_input
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successful README Generation")
)};

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
        writeToFile("generated_README.md", markdown_gen(data))
    })
}

// Function call to initialize app
init();
