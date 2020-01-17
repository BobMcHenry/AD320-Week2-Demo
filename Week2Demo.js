// var - let - const - Hoisting, Scope, & Immutability
    // declarations
    var myVar;
    let myLet;
    // Assignments
    myVar = 42;
    myLet = "Let Variable!";

    // Constant declaration and assignment
    const myConst = {};
    //myConst = "Reassign a constant? Nah, bruh.";
    //myConst.newField = "Modify a constant object? Whaaaaaat?";

    // console.log(wayDownHere);

    console.log("var iterator");
    for (var i = 0; i < 10; i++) {
        console.log('\t' + i);
    }

    console.log("let iterator");
    for (let j = 0; j < 10; j++) {
        console.log('\t' + j);
    }

    console.log(`${i}, I is still defined?`);
    console.log(`${j} is still defined?`);

    // Here we hoist
    var wayDownHere = "Whaaaaaat?";

// Numbers & Math
let myNum =42.50001;

Math.round(myNum); // Output 43 - Traditional rounding
Math.floor(myNum) // Output 42 - Basically trims decimals
Math.ceil(myNum) // Output 43 - Always rounds up. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Strings

// Booleans/Truthy/Falsy

// Arrays

// Control Structures

// Functions

// Objects

// Async
