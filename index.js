const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const questions = [
   {
      type: "input",
      name: "github",
      message: "What is your gitHub user name?",


   },

   {
        type: "input",
        name: "email",
        message: "What is your email?",
   },
    

];

function createMarkdown(data){
    return `this is my github ${data.github}`;
}
function runWritefile(){
    inquirer.prompt(questions).then((responses)=>{
         writeTofile("test.md",createMarkdown({...responses}));
    });
}
function writeTofile(filename, data){
    return fs.writeFileSync (path.join(process.cwd(), filename),data);
}

runWritefile();

