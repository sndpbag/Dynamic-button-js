# Dynamic Button Generator

## Overview

This project is a simple front-end application that demonstrates how to dynamically create and insert a styled button into different HTML pages based on the current page's URL. It uses vanilla JavaScript and ES6 modules to organize the code.

## File Structure

The project contains the following files:

* **`home.html`**: An HTML page that includes a container (`<div id="btn">`) intended for the "Home" button.
* **`login.html`**: An HTML page that includes a container (`<div id="button">`) intended for the "Login" button.
* **`about.html`**: An HTML page that loads the main script but does not have a target container, so no button will be rendered.
* **`main.js`**: The main JavaScript file. It checks the current URL path and calls the `createDynamicButton` function with specific parameters if the page is `home.html` or `login.html`.
* **`utility.js`**: A JavaScript module that exports the `createDynamicButton` helper function. This function is responsible for creating the button element, applying styles, and appending it to a specified container element.

## How It Works

1.  A user opens one of the `.html` files (`home.html`, `login.html`, or `about.html`) in their browser.
2.  Each HTML file loads `main.js` as a module (`<script type="module" src="./main.js"></script>`).
3.  `main.js` executes. It imports the `createDynamicButton` function from `utility.js`.
4.  It gets the current page's path using `window.location.pathname`.
5.  It then checks the path:
    * If the path includes `home.html`, it calls `createDynamicButton("home", "red", "btn")`. The `utility.js` function then creates a red button with the text "home" and inserts it into the `<div id="btn">` in `home.html`.
    * If the path includes `login.html`, it calls `createDynamicButton("Login", "green", "button")`. The `utility.js` function creates a green button with the text "Login" and inserts it into the `<div id="button">` in `login.html`.
    * If the page is `about.html`, neither condition is met, and no button is created. The script simply logs the path to the console.

## How to Use

To run this project, you do not need a web server. Simply open any of the following files directly in your web browser:

* `home.html` (will show a red "home" button)
* `login.html` (will show a green "Login" button)
* `about.html` (will show no button)

## Known Issues

The provided code has a few minor typos that should be corrected:

1.  **In `utility.js`**:
    * `retun;` should be `return;`
    * The error message has typos: `Errror:` should be `Error:` and `no found` should be `not found`.
    * The error log `console.log(\`Errror: Container with Id' ${container} no found.\`);` incorrectly uses the `container` variable (which is `null`) instead of `ContainerId`. It should be: `console.log(\`Error: Container with ID '${ContainerId}' not found.\`);`

2.  **In `main.js`**:
    * There is an extra, unmatched closing curly brace `}` at the very end of the file which will cause a syntax error.