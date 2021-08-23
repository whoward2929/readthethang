var fs = require('fs');
const prompt = require('prompt-sync')()

const MITLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
const apacheLicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
const GNULicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
const BSDLicense = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`

const title = prompt('What is your project title? ')
const description = prompt('What is the project description? ')
const installationInstructions = prompt('What are the project installation instructions? ')
const usageInfo = prompt('What is the project usage information? ')
const contributionGuide = prompt('What are the project contribution guidelines? ')
const testInstructions = prompt('What are the project test instructions? ')
const license = prompt('What license do you use for your project? \n1.MIT \n2.Apache \n3.BSD \n4.GNU \n')
const username = prompt('What is your github username? ')
const email = prompt('What is your email? ')


function getLicenseString() {
  switch(license) {
    case '1':
      return MITLicense
    case '2':
      return apacheLicense
    case '3':
      return BSDLicense
    case '4':
      return GNULicense
    default:
      return ''
  }
}

const tocString = "#### Table of Contents\n\n1. [Description](#description)\n  2. [Installation Instructions](#installation-instructions)\n  3. [Usage Information](#usage-info)\n  4. [Contribution Guideline](#contribution-guide)\n  5. [Test Instructions](#test-instructions)\n  6. [License](#license)\n  7. [Questions](#questions)\n"

const markdownContent = `# ${title}\n${tocString}\n---\n## Description\n${description}\n---\n## Installation Instructions\n${installationInstructions}\n---\n## Usage Info\n${usageInfo}\n---\n## Constribution Guide\n${contributionGuide}\n---\n## Test Instructions\n${testInstructions}\n---\n## License\n${getLicenseString()}\n---\n## Questions\nReach out to me for additional questions\n\ngithub: [${username}](https://github.com/${username})\nemail: [${email}](mailto:${email})\n`

fs.writeFile('readme.md', markdownContent, {}, (err) => {
  if (err) {
   console.log('oopsie')
  }
  console.log('done')
})