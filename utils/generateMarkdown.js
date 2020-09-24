// function to generate markdown for README
function generateMarkdown(data) {
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
  ${response.license}
[License Badge](http://img.shields.io/badge/License-${response.license}-blue.svg)
For information about the License visit this link: [License](https://opensource.org/licenses/${response.license})
## Contribution
  ${response.contribution}
## Test
  ${response.test}

`;
}

module.exports = generateMarkdown;
