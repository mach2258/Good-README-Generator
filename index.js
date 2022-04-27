// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project.",
    name: "Title"
},{
    type: "input",
    message: "What is this project? Give a description on what you created.",
    name: "Description"
},{
    type: "input",
    message: "Table of contents.",
    name: "Table of Contents"
},{
    type: "input",
    message: "what are the requirements to the run this program? Are there dependencies?",
    name: "Installation instructions"
},{
    type: "input",
    message: "How do you use this project?",
    name: "Usage Information"
},{
    type: "input",
    message: "What is the liscense being used?",
    name: "Liscense",
    choices: ['MIT', 'ISC', 'MPL', 'GPL', 'AGPL']
},{
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributing"
},{
    type: "input",
    message: "How do you test the project? What commands are needed?",
    name: "Tests"
},{
    type: "input",
    message: "Contact info for inquirers",
    name: "Contact"
},{
    type: "input",
    message: "What is your Github username?",
    name: "Username"
},{
    type: "input",
    message: "What is your email address?",
    name: "Email"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("working")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
