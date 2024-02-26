const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee.js");


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
    }
];

const questions0 = [
    {
        type: 'list',
        name: 'options',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        message: 'Please select an option : ',
    }
]


// function to write README file
function writeToFile(fileName, info) {
    fs.writeFile(fileName, info, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('file was saved as README.md');
        }
    });

}

// function to generate data for Manager
function dataQuestioning() {
    inquirer.prompt(questions1)
    .then((answers1) => {
        const employee = new Employee(answers1.name, answers1.id, answers1.email)
        const manager = new Manager(answers1.name, answers1.officeNumber)
        
        console.log(employee);
        employee.getName();
        employee.getId();
        employee.getEmail();
        employee.getRole();
        manager.getRole();

        console.log("first");
    })

    inquirer.prompt(questions0)
    .then((answers0) => {
    // create a html file and populate with the data
        switch (answers0.choice) {
            case 'Add an engineer':  
                inquirer.prompt([
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
                ])
                .then((answers2) => {
                const engineer = new Engineer(answers2.engineerName, answers2.engineerId,answers2.engineerEmail, answers2.engineerGithub )
                dataQuestioning();
                 })
            break;
        
            case 'Add an intern':  
                inquirer.prompt([
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
                ])
                .then((answers3) => {
                const intern = new Intern(answers3.internName,answers3.internId,answers3.internEmail, answers3.internSchool )
                dataQuestioning();
                })
            break
            
            case 'Finish building the team':
                writeToFile ("./index.html", render());
                console.log("building html");
            break
            }
    })
        
        
}

// function call to initialize program
dataQuestioning();

// function repeatOptions() {
//     inquirer.prompt(questions0)
//     .then((answers0) => {
//     // create a html file and populate with the data
//     if (answers0.options === 'Finish building the team') {
//         writeToFile ("./index.html", render());
//         console.log("building html");
//         return
//         }
//     if (answers0.options === 'Add an engineer') {
//         inquirer.prompt(questions2)
//         .then((answers2) => {
//             const engineer = new Engineer(answers2.engineerName, answers2.engineerId,answers2.engineerEmail, answers2.engineerGithub )
//         })
//         repeatOptions();
//     }
//     if (answers0.options === 'Add an intern') {
//         inquirer.prompt(questions3)
//         .then((answers3) => {
//             const intern = new Intern(answers3.internName,answers3.internId,answers3.internEmail, answers3.internSchool )
//             })
//         repeatOptions();
//     }
//     })

// }

// // repeatOptions()
