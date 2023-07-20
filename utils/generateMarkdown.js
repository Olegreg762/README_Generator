// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const license_badges ={
  "MIT":"https://img.shields.io/badge/License-MIT-yellow.svg", 
  "GPL":"https://img.shields.io/badge/License-GPLv3-blue.svg", 
  "Apache 2.0":"https://img.shields.io/badge/License-Apache_2.0-blue.svg", 
  "LGPL":"https://img.shields.io/badge/License-LGPL_v3-blue.svg", 
  "BSD 3-Clause":"https://img.shields.io/badge/License-BSD_3--Clause-blue.svg", 
  "MPL 2.0":"https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg", 
  "AGPL":"https://img.shields.io/badge/License-AGPL_v3-blue.svg", 
  "Eclipse Public License":"https://img.shields.io/badge/License-EPL_1.0-red.svg",
  };
  return license_badges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const license_links ={
    "MIT":"https://opensource.org/licenses/MIT", 
    "GPL":"https://www.gnu.org/licenses/gpl-3.0", 
    "Apache 2.0":"https://opensource.org/licenses/Apache-2.0", 
    "LGPL":"https://www.gnu.org/licenses/lgpl-3.0", 
    "BSD 3-Clause":"https://opensource.org/licenses/BSD-3-Clause", 
    "MPL 2.0":"https://opensource.org/licenses/MPL-2.0", 
    "AGPL":"https://www.gnu.org/licenses/agpl-3.0", 
    "Eclipse Public License":"https://opensource.org/licenses/EPL-1.0",
    };
    return license_links[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const license_section = `This Project is licensed under [${license}](${renderLicenseLink(license)}`
  if(license == ""){
    license_section = ""
  }
  // const license_section ={
  //   "MIT":"", 
  //   "GPL":"", 
  //   "Apache 2.0":"", 
  //   "LGPL":"", 
  //   "BSD 3-Clause":"", 
  //   "MPL 2.0":"", 
  //   "AGPL":"", 
  //   "Eclipse Public License":"",
  //   };

  //   return license_section[license] || "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
