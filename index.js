const fs = require('fs')
const inquirer = require('inquirer');
const { mainModule } = require('process');
const generateHTML = require ('./Develop/Assets/js/generateHTML');

//const for data?


//array for questions
const questions = [
//MANAGER QUESTIONS
    //collect input team managers name
    {
        type: 'input',
        name: 'mangersName',
        message: 'What is the team manager\'s name?',
        validate: managersNameInput => {
            if (managersNameInput) {
                return true;
            } else {
                console.log('Please provide the team manager\'s name to continue.');
                return false;
            }
        }
    },
    
    //collect input managers employee ID
    {
        type: 'input',
        name: 'managersId',
        message: 'What is the team manager\'s employee ID?',
        validate: managersIdInput => {
            if (managersIdInput) {
                return true;
            } else {
                console.log('Please provide the team manager\'s employee ID to continue.');
                return false;
            }
        }
    },

    //collect input managers email address
    {
        type: 'input',
        name: 'managersEmail',
        message: 'What is the team manager\'s e-mail address?',
        validate: managersEmailInput=> {
            if (managersEmailInput) {
                return true;
            } else {
                console.log('Please provide the team manager\'s e-mail address to continue.');
                return false;
            }
        }
    },

    //collect input managers office number
    {
        type: 'input',
        name: 'managersOfficeNumber',
        message: 'What is the team manager\'s office number?',
        validate: managersOfficeNumberInput => {
            if (managersOfficeNumberInput) {
                return true;
            } else {
                console.log('Please provide the team manager\'s office number to continue.');
                return false;
            }
        }
    },


//ENGINEER QUESTIONS
    //collect input engineer name
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineer\'s name?',
        validate: engineerNameInput=> {
            if (engineerNameInput) {
                return true;
            } else {
                console.log('Please provide the engineer\'s name to continue.');
                return false;
            }
        }
    },

    //collect input engineer id
    {
        type: 'input',
        name: 'engineerEmployeeId',
        message: 'What is the engineer\'s employee ID?',
        validate: engineerEmployeeIdInput=> {
            if (engineerEmployeeIdInput) {
                return true;
            } else {
                console.log('Please provide the engineer\'s employee ID to continue.');
                return false;
            }
        }
    },

    //collect input engineer email
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineer\'s e-mail address?',
        validate: engineerEmailInput=> {
            if (engineerEmailInput) {
                return true;
            } else {
                console.log('Please provide the engineer\'s E-mail address to continue.');
                return false;
            }
        }
    },

    //collect input engineer's github username
    {
        type: 'input',
        name: 'engineerGitHub',
        message: 'What is the engineer\'s GitHub username?',
        validate: engineerGitHUbInput=> {
            if (engineerGitHubInput) {
                return true;
            } else {
                console.log('Please provide the engineer\'s GitHub username to continue.');
                return false;
            }
        }
    },

//INTERN QUESTIONS
    //collect input intern name
    {
        type: 'input',
        name: 'internName',
        message: 'What is the intern\'s name?',
        validate: internNameInput=> {
            if (internNameInput) {
                return true;
            } else {
                console.log('Please provide the intern\'s name to continue.');
                return false;
            }
        }
    },

    //collect input intern id
    {
        type: 'input',
        name: 'internEmployeeId',
        message: 'What is the intern\'s employee ID?',
        validate: internEmployeeIdInput=> {
            if (internEmployeeIdInput) {
                return true;
            } else {
                console.log('Please provide the intern\'s employee ID to continue.');
                return false;
            }
        }
    },

    //collect input intern email
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the intern\'s E-mail address?',
        validate: internEmailInput=> {
            if (internEmailInput) {
                return true;
            } else {
                console.log('Please provide the intern\'s E-mail address to continue.');
                return false;
            }
        }
    },

    //collet input intern school
    {
        type: 'input',
        name: 'internSchool',
        message: 'What is the intern\'s school?',
        validate: internSchoolInput=> {
            if (internSchoolInput) {
                return true;
            } else {
                console.log('Please provide the intern\'s school to continue.');
                return false;
            }
        }
    },


     //list option engineer/intern/finish
     {
        type: 'list',
        name: 'menuOptions',
        message: 'Add another profile',
        choices: ['Team Manager', 'Engineer', 'Intern', 'I\'m finished building my team',]
    },

];

//Prompts user
const promptUser = async() => {
    return await inquirer.prompt(questions);
};

//Function to write an html file
function writeToFile(fileName, data) {
    //returns a promise
    fs.promises.writeFile(fileName, data)
}

//Function to initialize the app
async function init() {
    //wait till the promise from prompt usr is resolved, store in var answers
    var answers = await promptUser();
    var html = generateHTML(answers);
    //UNSURE ABOUT THIS WRITE TO FILE
    writeToFile('generated-html/Team Profile Generator', html)
}

//Function call to initalize the app
init();