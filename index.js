// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What year is it?',
        name: 'year'
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'What does this project do?',
        name: 'projectUse'
    },
    {
        type: 'input',
        message: 'What did you learn from this project?',
        name: 'lesson'
    },
    {
        type: 'confirm',
        message: 'Is installation required?',
        name: 'install',
        default: false
    },
    {
        type: 'input',
        message: 'How do you install this project?',
        name: 'intstallInstructions'
        // make it so it only asks this if install is true
    },
    {
        type: 'input',
        message: 'How do you use this project?',
        name: 'usage'
    },
    {
        type: 'confirm',
        message: 'Did you collaborate with anyone?',
        name: 'collab',
        default: false
    },
    {
        type: 'input',
        message: 'Who did you work with?',
        name: 'teammates',
        // make it so it only asks this if collab is true
    },
    {
        type: 'confirm',
        message: 'Did you use any third party assets?',
        name: 'thirdPartyAssets',
        default: false
    },
    {
        type: 'input',
        message: 'Who do you have to attribute for the third party assets?',
        name: 'attributions'
        // make it so it only asks this if thirdPartyAssets is true
    },
    {
        type: 'list',
        message: 'Choose a license',
        choices: ['MIT', 'GPL3.0', 'unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'How can someone contribute?',
        name: 'contributionInstructions',
    },
    {
        type: 'input',
        message: 'How can someone test this project?',
        name: 'testInstructions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateMarkdown(answers));
        })
}

// Function call to initialize app
init();
