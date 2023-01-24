// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache license 2.0':
      badge = `[![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-yellowgreen?style=for-the-badge)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 2-clause "Simplified" license':
      badge = `[![BSD 2-clause Simplified](https://img.shields.io/badge/License-BSD_2--clause_Simplified-orange?style=for-the-badge)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-clause "New" or "Revised: license':
      badge = `[![BSD 3-clause](https://img.shields.io/badge/License-BSD_3--clause_clear-lightgrey?style=for-the-badge)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Common Development and Distribution License 1.0':
      badge = `[![CDDL-1.0](https://img.shields.io/badge/License-Common_Development_and_Distribution_1.0-purple?style=for-the-badge)](https://opensource.org/licenses/CDDL-1.0)`;
      break;
    case 'Eclipse Public License 2.0':
      badge = `[![Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse_Public_2.0-red?style=for-the-badge)](https://opensource.org/licenses/EPL-2.0)`;
      break;
    case 'GNU General Public License v2.0':
      badge = `[![GNU General Public License v2.0](https://img.shields.io/badge/License-GNU_General_Public_v2.0-blue?style=for-the-badge)](https://opensource.org/licenses/GPL-2.0)`;
      break;
    case 'GNU GPLv3':
      badge = `[![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU_General_Public_v3.0-blue?style=for-the-badge)](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case 'MIT License':
      badge = `[![MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla Public License 2.0':
      badge = `[![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_Public_2.0-brightgreen?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)`;
      break;      
    case 'No License':
      badge = "";
      break;      
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache license 2.0':
      link = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'BSD 2-clause "Simplified" license':
      link = `https://opensource.org/licenses/BSD-2-Clause`;
      break;
      case 'BSD 3-clause "New" or "Revised: license':
      link = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    case 'Common Development and Distribution License 1.0':
      link = `https://opensource.org/licenses/CDDL-1.0`;
      break;
    case 'Eclipse Public License 2.0':
      link = `https://opensource.org/licenses/EPL-2.0`;
      break;
    case 'GNU General Public License v2.0':
      link = `https://opensource.org/licenses/GPL-2.0`;
      break;
    case 'GNU General Public License v3.0':
      link = `https://opensource.org/licenses/GPL-3.0`;
      break;
    case 'MIT':
      link = `https://opensource.org/licenses/MIT`;
      break;
    case 'Mozilla Public License 2.0':
      link = `https://opensource.org/licenses/MPL-2.0`;
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributions}
  ## Tests
  ${data.testing}
  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.username}  
  Email: ${data.email}
  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;
