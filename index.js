const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require('./src/generateHTML')
//list of employees
const employees = {
    managers: [],
    engineers: [],
    interns: []
}

//Prompts for manager input
const mangerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Manager's Name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name for the team manager');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "Manager's ID:",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter a ID for the team manager');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "Manager's email:",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email for the team manager');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: "Manager's office number:",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter the office number for the team manager');
                return false;
            }
        }
    },
]

//Prompts for engineer input
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Engineer's Name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name for the team engineer');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "Engineer's ID:",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter a ID for the team engineer');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "Engineer's email:",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email for the team engineer');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: "Engineer's github username:",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter the github user name for the team engineer');
                return false;
            }
        }
    },
]

//Prompts for intern input
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Interns's Name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name for the team intern');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "Intern's ID:",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter a ID for the team intern');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "Intern's email:",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email for the team intern');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'school',
        message: "Intern's school:",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter the school for the team intern');
                return false;
            }
        }
    },
]


const addEmployeeQuestions = [
    {
        type: 'list',
        name: 'choice',
        message: 'Would you like to add another employee?',
        choices: ['Engineer', 'Intern', 'Complete Profile'],
    },
]

//to use await, the function needs to be async
//this makes sure to wait till all prompts are there before continueing
async function managerPrompts() {
    //construction a new object using inquirer
    const manager = await inquirer.prompt(mangerQuestions)
    const newManager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
    //takes newManager and pushes it to employees array
    employees.managers.push(newManager)
    addEmployee()
}

async function engineerPrompts() {
    const engineer = await inquirer.prompt(engineerQuestions)
    const newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
    employees.engineers.push(newEngineer)
    addEmployee()
}

async function internPrompts() {
    const intern = await inquirer.prompt(internQuestions)
    const newIntern = new Intern(intern.name, intern.id, intern.email, intern.school)
    employees.interns.push(newIntern)
    addEmployee()
}


async function addEmployee() {
    const choices = await inquirer.prompt(addEmployeeQuestions)
    //.choices is a place holder for the time being
    //add employee prompt
    switch (choices.choice) {
        //switch is looking for a matching string in choices
        case 'Engineer':
            await engineerPrompts()
            break;
        case 'Intern':
            await internPrompts()
            break;
        case 'Complete Profile':
            console.log(employees);
            const htmlString = render(employees);
            console.log(htmlString)
            // write html string to file
            fs.writeFileSync('./dist/MyTeam.html', htmlString,)
            break
    }
}

managerPrompts()