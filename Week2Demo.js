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

// Strings

// Booleans/Truthy/Falsy

// Arrays

// Control Structures

// Functions

// Objects

// Async
