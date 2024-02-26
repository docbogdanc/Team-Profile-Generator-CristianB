const inquirer = require("inquirer");

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

// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
        inquirer.prompt(questions1)
        .then((answers1) => {
            return `${answers1.name}`
         })
    }

    getID() {
        inquirer.prompt(questions1)
        .then((answers1) => {
            return `${answers1.id}`
         })
    }
    
    getEmail() {
        inquirer.prompt(questions1)
        .then((answers1) => {
            return `${answers1.email}`
         })
    }
    
    getRole() {
         return "Employee"
    }
  }


  module.exports = Employee;
