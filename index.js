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
        name: 'install'
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
        name: 'collab'
    },
    {
        type: 'input',
        message: 'Who did you work with?',
        name: 'teammates'
        // make it so it only asks this if collab is true
    },
    {
        type: 'confirm',
        message: 'Did you use any third party assets?',
        name: 'thirdPartyAssets'
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
