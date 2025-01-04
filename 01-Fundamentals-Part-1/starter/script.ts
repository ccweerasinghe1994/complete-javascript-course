let myName: string = "Sai";
console.log(myName);
console.log("this is added ny thr browser");
let age = 23; // Error: Cannot start with a number
let userName = "Sai"; // Renamed to avoid reserved keyword and redeclaration

console.log(userName);
let PI = 3.14; // Error: Cannot use reserved keyword

// when creating a variable, we can use the following rules:

// 1. Use camelCase for naming variables
// 2. Cannot start with a number
// 3. Cannot use reserved keywords
// 4. Cannot use special characters except for $ and _
// 5. Should be meaningful
// 6. Cannot redeclare variables with the same name
// 7. Cannot use reserved keywords

// good examples

let firstName = "Sai";
let lastName = "Kiran";
let country = "India";

// bad examples

let first_name = "Sai";
// let last-name = "Kiran"; // Error: Cannot use special characters
//  let 1country = "India"; // Error: Cannot start with a number
// let let = "Hello"; // Error: Cannot use reserved keywords
// let var = "Hello"; // Error: Cannot use reserved keywords
// let break = "Hello"; // Error: Cannot use reserved keywords
// let function = "Hello"; // Error: Cannot use reserved keywords

// these are valid variables
let $name = "Sai";
let _name = "Sai";
