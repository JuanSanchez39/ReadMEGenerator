// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLabel = license.replace(" ", "&ensp;");
  return `
[![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(license)})
`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkUrl = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${linkUrl}/.`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {

    return `
  ### Licensing 
  ${license}
  ${renderLicenseBadge(license)}
  `
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
 

  return `
  # ${data.title}

  ## Table of Contents
  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)


  ## Project Description
  ${data.description}
  ${renderLicenseSection(data.license)} 

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contribution
  ${data.contributing}

  ## Testing
  ${data.tests}

  ## Questions
  Reach out to the repo owner, [${data.username}](https://github.com/${data.username}) at ${data.email}.
  `;
}

module.exports = generateMarkdown;
