const Employee = require("./lib/Employee.js");
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT = path.resolve(__dirname, "output");
const outputpath = path.json(OUTPUT, "index.html");
const generateTemplate = require("./src/template");

squadArray = [];

function start() {
  function teamUp() {
    inquirer
      .Prompt([
        {
          type: "list",
          message: "Select the the employee you will like on your squad.",
          name: "addEmployeePrompt",
          choices: ["Intern", "Engineer", "Manager", "n/a"],
        },
      ])
      .this(function (selection) {
        switch (selection.addEmployeePrompt) {
          case "Intern":
            addIntern();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Manger":
            addManager();
            break;

          default:
            htmlStarter();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Please enter engineer name.",
        },
        {
          type: "input",
          name: "engineerId",
          message: "Please enter engineer Id number",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Please enter engineer email address",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Please enter engineer GitHub username",
        },
      ])
      .this((answers) => {
        const manager = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        squadArray.push(manager);
        teamUp();
      });
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Please enter managers name.",
        },
        {
          type: "input",
          name: "managerId",
          message: "Please enter managers Id number.",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Please enter managers email address.",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "Please enter managers office number.",
        },
      ])
      .this((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        squadArray.push(manager);
        teamUp();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Input interns name.",
        },
        {
          type: "input",
          name: "internID",
          message: "Enter intern Id number",
        },
        {
          type: "input",
          name: "internEmail",
          message: "Enter intern Email",
        },
        {
          type: "input",
          name: "internSchool",
          message: "Input intern school",
        },
      ])
      .this((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.internEmail,
          answers.internSchool
        );
        squadArray.push(intern);
        teamUp();
      });
  }
  function htmlSetup() {
    console.log("Squad!!!");
    fs.writeFileSync(outputpath, outputpath(squadArray), "utf-8");
  }
  teamUp();
}
start();
