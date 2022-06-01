


const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const fs = require('fs')
const inquirer = require('inquirer')

const htmlGen = require('./src/htmlGen')

const employeearray = []

const createtmanager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the manager's name",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's id"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the manager's office number"
        }
    
    ])
    .then(mangerDetails => {
        const {name, id, email, officeNumber} = mangerDetails
        //console.log(mangerdetails)
        const manager = new Manager (name, id, email, officeNumber)
        //console.log(manager)
        employeearray.push(manager)
        //console.log(employeearray)
        return employeearray
    })
}


const createEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please choose the employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: "input",
            name: "name",
            message: "Please enter the employee's name"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employees's id"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email"
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the interns's school",
            when: (input) => input.role === "Intern"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's github username",
            when: (input) => input.role === "Engineer"
        },
        {
            type: "confirm",
            name: "confirm",
            message: "Would you like to add another employee?"
        }
    
    ])
    .then(employeeDetails => {
        const {name, id, email, role, github, school, confirm} = employeeDetails
        //console.log(confirm)
        if (role === "Engineer"){
            const engineer = new Engineer (name, id, email, github)
            //console.log(engineer.getGithub())
            employeearray.push(engineer)
        }else{
            const intern = new Intern (name, id, email, school)
            employeearray.push(intern)
        }
        if (confirm){
            return createEmployee()
        }else{
            //console.log(employeearray)
            return employeearray
        }
    })
}


const writefile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err){
            console.log("There was an error writing your file")
            console.log(err)
            return
        }else{
            console.log('Your team page has been successfully created. You will find your file in the dist folder named "index.html"')
        }
    })
}

createtmanager()
    .then(createEmployee)
    .then(employeearray => {
        return htmlGen(employeearray)
    })
    .then( employeehtml => {
        return writefile(employeehtml)
    })
    .catch(err => {
        console.log(err)
    })