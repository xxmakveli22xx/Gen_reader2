const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [
    {
        type: "input",
        message: "Name your project:",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Provide the steps for installation:",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide information about your application usage:",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide instructions for testing your application:",
        name: "tests"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license.",
        choices: [
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Mozilla Public License 2.0",
          "Apache License 2.0",
          "MIT License",
          "Boost Software License 1.0",
          "The Unlicense"
        ]
      },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "github"
    },
    {
        type: "input",
        message: "Provide the link to your GitHub profile:",
        name: "githubLink"
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email"
    },
    {
        type: "input",
        message: "List all authors:",
        name: "contributors"
    },


];

async function init() {
    try {
      const data = await inquirer.prompt(questions)
       fs.writeFileSync("README.md", generateMarkdown(data));
      console.log("ReadMe is Compeleted README.md");

    } catch (error) {
      console.error(error);
    }
  }

  init();




