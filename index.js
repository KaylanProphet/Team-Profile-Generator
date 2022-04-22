const fs = require('fs')
const inquirer = require('inquirer');
const { mainModule } = require('process');
const generateHTML = require ('./Develop/Assets/js/generateHTML');

//const for data?


//array for questions
const questions = [

    //collect input team managers name
    {
        type: 'input'
        name: 'mangersName'
        message: 'What is the team manager's name?'
        validate: managersNameInput => {
            if (managersNameInput) {
                return true;
            } else {
                console.log('Please provide the team manager's name to continue.');
                return false;
            }
        }
    },
    
    //collect input managers employee ID
    {
        type: 'input'
        name: 'managersId'
        message: 'What is the team manager's employee ID?'
        validate: managersIdInput => {
            if (managersIdInput) {
                return true;
            } else {
                console.log('Please provide the team manager's employee ID to continue.');
                return false;
            }
        }
    },

    //collect input managers email address
    {
        type: 'input'
        name: 'managersEmail'
        message: 'What is the team manager's e-mail address?'
        validate: managersEmailInput=> {
            if (managersEmailInput) {
                return true;
            } else {
                console.log('Please provide the team manager's e-mail address to continue.');
                return false;
            }
        }
    },

    //collect input managers office number
    {
        type: 'input'
        name: 'managersOfficeNumber'
        message: 'What is the team manager's office number?'
        validate: managersOfficeNumberInput => {
            if (managersOfficeNumberInput) {
                return true;
            } else {
                console.log('Please provide the team manager's office number to continue.');
                return false;
            }
        }
    },


    //collect input engineer name

    //collect input engineer id

    //collect input engineer email

    //collect input github username


    //collect input intern name

    //collect input intern id

    //collect input intern email

    //collet input intern school


     //list option engineer/intern/finish






]