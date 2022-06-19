AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

# Team Profile Generator
This Team Profile Generator is an application ran through the command line that allows users to build an HTML page displaying team members/employees. 

## Installation
This application must be obtained through the Team Profile Generator [repository](https://github.com/KaylanProphet/Team-Profile-Generator). 

## Usage
1. In the command line, navigate to the appropiate directory where the application is
2. Invoke the application with `Node Index.js`
3. The application will begin to prompt the user with questions regarding the employees on the team. The user will type in their respose and use the enter key to complete each question
4. Once the user has entered in all the employees, they will select "Complete Profile"
5. The application will then generate a HTML file based on the users input

## Demo

<mark>==Walk through video will go here==</mark>

* insert walkthrough, and screenshots of application
* Sample html

## Repository

[Team Profile Generator](https://github.com/KaylanProphet/Team-Profile-Generator) by Kaylan Prophet
