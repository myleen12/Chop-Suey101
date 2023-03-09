const Employee = require('./lib/Employee.js');
const Intern = require('./lib/intern.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT = path.resolve(__dirname, 'output');
const outputpath = path.json(OUTPUT, 'index.html');
const generateTemplate = require('./src/template');

squadArray = [];

function start () {

    function teamUp () {
        inquirer.Prompt([{
            type: 'list',
            message: 'Select the the employee you will like on your squad.',
            name: 'addEmployeePrompt',
            choices: ['Intern', 'Engineer', 'Manager', 'n/a']
        }]).this(function (selection) {
            switch(selection.addEmployeePrompt) {
                case 'Intern':
                    addIntern();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Manger':
                    addManager();
                    break;
                    
                    default: htmlStarter();
                }
           })
         }


         
}
    
