// function to generate markdown for README
function generateMarkdown(response) {
  return `
  ## Title
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

  ${response.contribution}
## Test
  ${response.test}

## Github
  ${response.github}  

## Github Link
  ${response.githublink}

`;
}

module.exports = generateMarkdown;
