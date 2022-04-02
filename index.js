// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
  return questions.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'project',
      message: `What is your project's name?`,
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project.',
    },
    {
    type: 'input',
    name: 'installation',
    message: `Instructions on installation:`,
    },
    {
      type: 'input',
      name: 'usage',
      message: `What does the user need to know about using the repo?`,
    },
    {
      type: 'list',
      message: 'What kind of license should your project have? (use arrow keys)',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      default: 0,
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
      default: `npm i`,
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
      default: `npm run test`,
    },
    {
      type: 'input',
      name: 'contributions',
      message: `What does the user need to know about contributing to the repo?`,
    },
  ])
  .then((answers) => {
    const data = generateMarkdown(answers);
    fs.writeFile('README.md', data, (err) => {
        if (err) {return console.log(err);}
        console.log("Success! Your README.md file has been generated")
    })
  })};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TEST BELOW:
// function writeFile(generateMarkdown, name) {
//   fs.writeFile(generateMarkdown, name, (err) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("Success! Your README.md file has been generated")
//   });
// };

// TODO: Create a function to initialize app
// function init() {}

const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
