const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//list of employees
const employees = []

const mangerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Manager Name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name for the manager');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "Manager's ID",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter a ID for the manager');
                return false;
            }
        }
    },
]

const addEmployeeQuestions = [
    {
        type: 'list',
        name: 'choices',
        message: 'Would you like to add another employee',
        choices: ['Engineer', 'Intern', 'Complete Profile'],
    },
]

//to use await, the function needs to be async
//this makes sure to wait till all prompts are there before continueing
async function managerPrompts() {
    //construction a new object using inquirer
    const manager = await inquirer.prompt(mangerQuestions)
    const newManager = new Manager(manager.name, manager.id)
    //takes newManager and pushes it to employees array
    employees.push(newManager)

}

async function addEmployee() {
    const choices = await inquirer.prompt(addEmployeeQuestions)
    //.choices is a place holder for the time being
    //add employee prompt
    switch (choices.choices) {
        //switch is looking for a matching string in choices
        case 'Engineer':

    }
}
