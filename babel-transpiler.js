/*Transpilation With Babel
In the last exercise, you manually converted ES6 code to ES5.
Although manual conversion only took you a few minutes,
it is unsustainable as the size of the JavaScript file increases.

Because ES6 is predictably backwards compatible,
a collection of JavaScript programmers developed a JavaScript library
called Babel that transpiles ES6 JavaScript to ES5.

Transpilation is the process of converting one programming language to another.

In the remaining exercises of this lesson, you will learn how to use Babel to transpile
the new, easy-to-write version of JavaScript (ES6) to the old, browser-compatible version of
JavaScript (ES5).

In the instructions below, you will pass JavaScript ES6 code to Babel,
which will transpile it to ES5 and write it to a file in the lib directory.

Run below steps to compile your ES6 code to legacy code ES5 :

- npm install babel-cli
- npm install babel-preset-env
- npm run build

We install Babel with the following two commands:

$ npm install babel-cli -D
$ npm install babel-preset-env -D

In this lesson, you learned about browser compatibility and transpilation. Let's review the key concepts:

ES5 — The old JavaScript version that is supported by all modern web browsers.
ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, and addresses the source of common bugs in ES5.
caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.
npm init — A terminal command that creates a package.json file.
package.json — A file that contains information about a JavaScript project.
npm install — A command that installs Node packages.
babel-cli — A Node package that contains command line tools for Babel.
babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
.babelrc — A file that specifies the version of the JavaScript source code.
"build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
npm run build — A command that runs the build script and transpiles ES6+ code to ES5.
For future reference, here is a list of the steps needed to set up a project for transpilation:

Initialize your project using npm init and create a directory called src
Install babel dependencies by running
npm install babel-cli -D
npm install babel-preset-env -D
Create a .babelrc file inside your project and add the following code inside it:
{
  "presets": ["env"]
}
Add the following script to your scripts object in package.json:
"build": "babel src -d lib"
Run npm run build whenever you want to transpile your code from your src to lib directories.


*/
