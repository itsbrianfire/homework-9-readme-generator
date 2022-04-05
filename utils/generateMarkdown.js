// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],

function renderLicenseBadge(license) {
  const licenses = {
    'MIT': ['![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'],
    'APACHE 2.0': ['![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'],
    'GPL 3.0': ['![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'],
    'BSD 3': ['![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'],
    'None': [' ']
  }
  return licenses [license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = {
    'MIT': ['https://opensource.org/licenses/MIT'],
    'APACHE 2.0': ['https://opensource.org/licenses/Apache-2.0'],
    'GPL 3.0': ['https://www.gnu.org/licenses/gpl-3.0'],
    'BSD 3': ['https://opensource.org/licenses/BSD-3-Clause'],
    'None': [' ']
  }
  return licenses [license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenses = {
    'MIT': ['The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.'],
    'APACHE 2.0': ['The Apache License 2.0 outlines what users are allowed to do with the licensed code. Under this license, users can: Use the code commercially: Companies can include the licensed code in proprietary software that they then sell to customers.'],
    'GPL 3.0': [`Like the GPL v2, GPL 3 is a strong copyleft license, meaning that any copy or modification of the original code must also be released under the GPL v3. In other words, you can take the GPL 3'd code, add to it or make major changes, then distribute your version.`],
    'BSD 3': ['BSD licenses are a low restriction type of license for open source software that does not put requirements on redistribution. As a low restriction and requirement license type, Berkeley Source Distribution (BSD) licenses are used for the distribution of many freeware, shareware and open source software.'],
    'None': [' ']
  }
  return licenses [license];
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(answers) {}

const generateMarkdown = (answers) =>
  `
  # ${answers.project}
  ### ${answers.description} 
  
  # Table of Contents  
  ### [Installation](#installation)
  ### [Usage](#usage) 
  ### [License](#license) 
  ### [Contributions](#contributions) 
  ### [Questions](#questions) 
  
  ## Installation
  ##### ${answers.installation}
  
  ## Usage
  ##### ${answers.usage}

  ## License
  ##### ${answers.license}

  ${renderLicenseBadge(answers.license)}
  ### ${renderLicenseLink(answers.license)}
  #####  ${renderLicenseSection(answers.license)}

  ---
  
  ## Contributions
  ##### ${answers.contributions}
  
  ## Questions
  ##### Questions or comments about the project? You can reach me at my GitHub *${answers.username}* — [GitHub Profile](https://www.github.com/${answers.username})
  ##### or contact me at ${answers.email}.

  ##### Happy Coding!
  `;

module.exports = generateMarkdown;
