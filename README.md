# Team Profile Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg 'Click for more information on the Massachusets Institute of Technology License (MIT)')](https://opensource.org/licenses/MIT)

## Description

This application was created as a way for a team manager to easily generate a dashboard for viewing their team and their roles, contact information, and other information. It creates cards for each input based on the response to the series of prompts, and can have more or less team members depending on the team.

### Technologies used:

- Bootstrap
- Inquirer
- Jest

  ![Screenshot of a Generated Team Profile](dist/Images/screenshot.jpg 'Screenshot of an example Team Profile')

  ***

  ## Table of Contents

1. [Installation](#installation)
1. [Usage](#usage)
1. [Contribution](#contribution)
1. [Testing](#testing)
1. [License](#license)
1. [Questions](#questions)

   ***

## Installation

To install this application, follow the steps below.

1. Download project files to your local machine in a place where you can find them.
1. If you have not already done so, install [Node.js](https://nodejs.org/en/ 'Download and Install Node.js').
1. Navigate to project directory in your terminal and run the following command to install required dependencies:

```bash
npm install
```

4. You should now be able to initialize the application by running the following command from the terminal within the project directory:

```bash
node index.js
```

---

## Usage

To use this application, navigate to the root directory of the project in your terminal, then run the command:

```bash
node index.js
```

This will initialize the prompt sequence. From there, you will be asked the name, ID, Email address, and then the role of that employee.

If the employee is a manager, it will ask you to list their office number.
If the employee is an Engineer, it will ask you to list their GitHub username.
If the employee is an intern, it will ask you to ask which school they attended.

This is meant as a template for how the different prompts could work. This project will become more dynamic and versatile as further development versions are released.

Once the questions for an individual are complete, the application will notify you that they have been added, and prompt you for whether you would like to add an additional team member.

If Yes is selected, the prompt sequence will repeat for that team member.
If No is selected, it indicates that all team members have been entered and the html will be genereated in the "dist" folder with name "index.html".

---

## Contribution

Thank you for considering contributing to this project. If you would like to contribute, feel free to fork the repository, add your functionality or bugfix, and submit a pull request. I will review the changes and contact you with any questions or concerns.

Please refer to the code for consistent and descriptive variable naming and utilize proper indentation and syntax for readability.

Please see the "Questions" section if you would like to reach me directly to discuss possible directions for the project or ideas for improvement.

---

## Testing

To run the tests for this application, after you have installed all dependencies, please navigate to the root directory in your terminal and run

```bash
npm test
```

This will run all test suites and ensure that the app is functioning correctly.

If you would like to write a test suite for this application, please use the "Jest" library. I have created some tests for the different classes but an application could always use more tests! Please follow contribution guidelines for contributing additional tests.

---

## License

This application is licensed under **The Massachusets Institute of Technology License (MIT)**.

Click the license badge below for more information and usage guidelines:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg 'Click for more information on the Massachusets Institute of Technology License (MIT)')](https://opensource.org/licenses/MIT)

Click [here](https://www.mit.edu/~amini/LICENSE.md 'MIT Full Terms and Conditions') to view the full terms and conditions text of MIT.

---

## Questions

Please do not hesitate to reach out with any questions you may have. I can be reached in the following ways:

- Email: [ElijahARomer@gmail.com](mailto:ElijahARomer@gmail.com)
- GitHub: [ElijahRomer](http://www.github.com/ElijahRomer)

Thank you for reaching out and I look forward to getting in touch with you soon!
