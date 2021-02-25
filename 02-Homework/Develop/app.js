const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employees = [];

//function manager
//f intern
//f engineer
//make one to build the team
getManager()
async function getManager(){
    var managerInfo = await inquirer.prompt([ 
        {   
            message: "What is the name of the manager?",
            type: 'input',
            name:'name', 
        },{
            message: "What is the manager's ID?",
            type: 'input',
            name:'id',
        },{
            message: "Enter the managers email.",
            type: 'input',
            name:'email',
        },{
            message: "Enter the managers office number.",
            type: 'input',
            name:'office',
        },{
            message:"What do you want to do next?",
            type:"list",
            name:"next",
            choices:["Add engineer", "Add intern", "Finish building my team"]
        }
     ])
     employees.push(new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.office))
     
     if(managerInfo.next === "Add engineer"){
        getEngineer()
     } else if(managerInfo.next === "Add intern"){
         getIntern()
     } else{
         finishTeam()
     }
}

async function getEngineer(){
    var engineerInfo = await inquirer.prompt([ 
        {   
            message: "What is the name of the engineer?",
            type: 'input',
            name:'name', 
        },{
            message: "What is the engineer's ID?",
            type: 'input',
            name:'id',
        },{
            message: "Enter the engineer's email.",
            type: 'input',
            name:'email',
        },{
            message: "Enter the engineer's github username.",
            type: 'input',
            name:'github',
        },{
            message:"What do you want to do next?",
            type:"list",
            name:"next",
            choices:["Add engineer", "Add intern", "Finish building my team"]
        }
     ])
     employees.push(new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github))
     
     if(engineerInfo.next === "Add engineer"){
        getEngineer()
     } else if(engineerInfo.next === "Add intern"){
         getIntern()
     }else{
         finishTeam()
     }
}

async function getIntern(){
    var internInfo = await inquirer.prompt([ 
        {   
            message: "What is the intern's name?",
            type: 'input',
            name:'name', 
        },{
            message: "What is the intern's ID?",
            type: 'input',
            name:'id',
        },{
            message: "Enter the intern's email.",
            type: 'input',
            name:'email',
        },{
            message: "Enter the intern's school.",
            type: 'input',
            name:'school',
        },{
            message:"What do you want to do next?",
            type:"list",
            name:"next",
            choices:["Add engineer", "Add intern", "Finish building my team"]
        }
     ])
     employees.push(new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school))
     
     if(internInfo.next === "Add engineer"){
        getEngineer()
     } else if(internInfo.next === "Add intern"){
         getIntern()
     }else{
         finishTeam()
     }
}

function finishTeam(){
    test = render(employees)
    fs.writeFileSync(outputPath, test)
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
