// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, school){
        this.name = name;
        this.school = school;
    }

    getSchool() {}

    getRole() {};
}

module.exports = Intern