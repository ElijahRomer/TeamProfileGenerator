const Inquirer = require(`inquirer`);
const fs = require(`fs`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const generateHtml = require(`./src/generateHtml`);

const employeePrompts = [
  {
    type: "input",
    name: "name",
    message: "Please enter employee name.",
    default: "Elijah",
    validate: input => input.length > 0 ? true : "Please enter a minimum of 1 character for employee Name."
  },
  {
    type: "input",
    name: "id",
    message: "Please enter employee id.",
    default: "12345",
    validate: input => input.length > 0 ? true : "Please enter a minimum of 1 character for employee ID."
  },
  {
    type: "input",
    name: "email",
    message: "Please enter employee email.",
    default: "romere88@gmail.com",
    validate: input => /\w+@\w+.\w+/ig.test(input) ? true : "Please enter a valid email address."
  },
  {
    type: "list",
    name: "role",
    message: "Please select employee role.",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter the manager's office number.",
    default: "A111",
    when: (answers) => answers.role === "Manager" ? true : false
  },
  {
    type: "input",
    name: "github",
    message: "Please enter the engineer's github username.",
    default: "ElijahRomer",
    when: (answers) => answers.role === "Engineer" ? true : false
  },
  {
    type: "input",
    name: "school",
    message: "Please enter the intern's school name.",
    default: "Northwestern University",
    when: (answers) => answers.role === "Intern" ? true : false
  }
];

const next = [
  {
    type: "list",
    name: "addAdditionalTeamMember",
    message: "Would you like to add an additional team member?",
    choices: ["Yes", "No"]
  }
];


const teamMemberArray = [];

// let generatedHtml = generateHtml(teamMemberArray)

const init = () => Inquirer  
  .prompt(employeePrompts)
  .then((answers) => {
      switch (answers.role) {
        case "Manager":
          teamMemberArray.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
          console.log(`\nManager "${answers.name}" has been added.\n`)
          break;
        case "Engineer":
          teamMemberArray.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
          console.log(`\nEngineer "${answers.name}" has been added.\n`)
          break;
        case "Intern":
          teamMemberArray.push(new Intern(answers.name, answers.id, answers.email, answers.school))
          console.log(`\nIntern "${answers.name}" has been added.\n`)
          break;
      }
      Inquirer.prompt(next)
        .then(next => {
          next.addAdditionalTeamMember === "Yes" ? init() : generateHtml(teamMemberArray);
        })
        .catch(err => {
          console.log(err);
        })
    }
  )
  .catch((err) => {
    console.log(err)
  })

  init()