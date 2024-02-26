// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, github){
        this.name = name;
        this.github = github;
    }

    getGithub() {};

    getRole() {};
}

module.exports = Engineer