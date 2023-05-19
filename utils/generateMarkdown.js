// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'unlicense') {
    return '';
  } else if (license === 'MIT') {
    return `![License](https://img.shields.io/badge/License-${license}-green)`;
  } else if (license === 'GPL3.0')
    return `![License](https://img.shields.io/badge/License-${license}-blue)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'unlicense') {
    return '';
  } else if (license === 'MIT' || license === 'GPL3.0') {
    return `[License](#license)`;
  };
};

// function renderCreditsLink(collab, thirdPartyAssets) {
//   if (collab === true || thirdPartyAssets === true) {
//     return `[Credits](#credits)`;
//   } else {
//     return '';
//   };
// };
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderInstallationSection(install, intstallInstructions) {
  if (install === true) {
    return intstallInstructions;
  } else {
    return 'N/A';
  };
};

function renderCreditsSection(collab, teammates, thirdPartyAssets, attributions) {
  if (collab === true && thirdPartyAssets === true) {
    return `
  ## Credits

  Collaborators: ${teammates}
  Attributions: ${attributions}
  `;
  } else if (collab === true && thirdPartyAssets === false) {
    return `
  ## Credits

  Collaborators: ${teammates}
  `;
  } else if (collab === false && thirdPartyAssets === true) {
    return `
  ## Credits

  Attributions: ${attributions}
  `;
  } else {
    return `
  ## Credits
  
  N/A`;
  };
};

function renderLicenseSection(license, year, name) {
  if (license === 'unlicense') {
    return '';
  } else if (license === 'MIT') {
    return `
  ## License
    
  Copyright (C) ${year} ${name}
    
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
  associated documentation files (the "Software"), to deal in the Software without restriction, 
  including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do 
  so, subject to the following conditions:
    
  The above copyright notice and this permission notice shall be included in all copies or substantial
  portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
  OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  `
  } else if (license === 'GPL3.0') {
    return `
  ## License
    
  Copyright (C) ${year} ${name}

  This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
    
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
    
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
  `;
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  This project was created because ${data.motivation}.
  What this does is ${data.projectUse}.
  What I learned from project was ${data.lesson}.

  ## Table of Contents

  [Installation](#installation)

  [Usage](#usage)
  
  [Credits](#credits)

  ${renderLicenseLink(data.license)}

  [Badge](#badge)

  [Contribute](#contribute)

  [Test](#test)

  [Questions](#questions)

  ## Installation

  ${renderInstallationSection(data.install, data.intstallInstructions)}

  ## Usage

  ${data.usage}

${renderCreditsSection(data.collab, data.teammates, data.thirdPartyAssets, data.attributions)}
${renderLicenseSection(data.license, data.year, data.name)}

  ## Badge

${renderLicenseBadge(data.license)}

  ## Contribute

  ${data.contributionInstructions}

  ## Test

  ${data.testInstructions}

  ##Questions

  If you have any questions you can reach me at ${data.email} or my Github account, ${data.userName}
`;
}

module.exports = generateMarkdown;
