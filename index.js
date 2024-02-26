const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const questions1 = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Name of your Employee ?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of your Employee ?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Email of your Employee ?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Office Number of your Employee ?',
    },
    {
        type: 'list',
        name: 'options',
        choices: ['Add an engineer', 'Add an intern', 'Finish buiding the team'],
        message: 'Please select an option : ',
    }
]

const questions2 = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the Name of your Engineer ?',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the ID of your Engineer ?',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the Email of your Engineer ?',
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the GitHub username of your Engineer ?',
    },
]

const questions3 = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the Name of your Intern ?',
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is the ID of your Intern ?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the Email of your Intern ?',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What is the School of your Intern ?',
    }
]