// function to generate markdown for README
function generateMarkdown(response) {
  return `## Title

${response.title}

## Description

${response.description}

## Table of Contants

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Licens](#License)
* [Contributing](#Contribution)
* [Test](#Test)
* [Questions](#Questions)

## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Contributions

${response.contributors}

## Test

${response.tests}

## Github

${response.github}  
    
## Github Link

${response.githubLink}

## Questions

 If you have any question about this application or the functionality.
 Please contact me at my email ${response.email} or my GitHub page ${response.githubLink}.
 Thank you for usig my application.

`;
}

module.exports = generateMarkdown;
