const inquirer = require("inquirer");



// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
       
        console.log("employee " + this.name);
        return this.name
    }

    getID() {
        return this.id
    }
    
    getEmail() {
        return this.email
        // inquirer.prompt(questions1)
        // .then((answers1) => {
        //     return `${answers1.email}`
        //  })
    }
    
    getRole() {
         return "Employee"
    }
  }


  module.exports = Employee;
