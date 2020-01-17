// Declare varaibles with var or let. Prefer let over var
console.log(">>>>>>> VAR LET & CONST")
    var myVar;
    let myLet;

//Assign with the = (assignment operator)
    myVar = 42;
    myLet = "42";

// Use console.log to display console output. Similar to System.out.println() in Java
console.log("\tValue of myVar", myVar);
console.log("\tValue of myLet", myLet);

// Declare and assign constants in the same expression.
    const myConstant = {}; //Initialized as empty object 

// Declaring a constant without an assignment will cause an error. 
// Specifically, this error:
// SyntaxError: Missing initializer in const declaration
// Beacuse this is a syntax error, even a try catch block will not manage it. 
// The error will be thrown and execution of your code will halt.

//Constants are not immutable, they can be altered. 
myConstant.newObjectField = 'I\'m joining a const!';
console.log("\tValue of myConstant\t", myConstant); // outputs { newObjectField: 'I\'m joining a const!' }

// But constants cannot be reassigned.
    try {
        myConstant = 3.14; //This will cause an error. 
    } catch (err) {
        // Expected Error: TypeError: Assignment to constant variable.
        console.warn("\tThe expected error occurred but we're gonna catch it and move on!\n\n", err);
    }

//Special types
// undefined
    console.log("\n>>>>>>> Special Type: Undefined");
    // The undefined type is assigned to all variables that are declared but not yet assigned. 
    // This includes empty and out of bound array indices. 
    // This also includes object fields that dont exist
    // Functions that don't have a return type will also return undefined. 

    // unassigned variables
    let myUndefinedVariable;
    console.log("\tValue of myUndefinedVariable\t", typeof myUndefinedVariable); // Outputs 'undefined'

    // Out of bounds array indices. 
    let myArray = ["Index 0"];
    console.log("\tOut of bounds index\t", myArray[1]); // Outputs 'undefined'

    // Objects with non-existant fields
    let myObject = {
        fieldThatExists: "I'm Defined!"
    };
    console.log("\tDefined object field\t", myObject.fieldThatExists); //Outputs 'I'm Defined!'
    console.log("\tUndefined object field\t", myObject.fieldThatDoesNotExists); //Outputs 'undefined'

    // Funtions with no return value;
    function myFunction() {
        //This function does nothing;
    }
    let myUndefined2 = myFunction();
    console.log("\tOutput of function with no return type\t", typeof myUndefined2); // Outputs 'undefined'

    //undefined is also assignable, but doing this is not recommended. 
    let explicitUndefined = undefined;
    console.log("\tValue of explicit undefined", explicitUndefined, "type of explicitUndefined", explicitUndefined);

// NaN
    console.log("\n>>>>>>> Special Type: NaN");
    // NaN stands for Not A Number. NaN has a type of number
    // NaN can appear when a non numeric value is parsed
    let notANumberString = "I'm a string!";
    let aNumberString = "42";
    let explicitNaN = NaN; //NaN is a reserved keyword. Doing this is not recommended. 
    console.log("\taNumberString parses to ", parseInt(aNumberString), "type =", typeof parseInt(aNumberString));
    console.log("\tnotANumberString parses to ", parseInt(notANumberString), "type =", typeof parseInt(notANumberString));
    console.log("\texplicitNaN value:", explicitNaN, "explicitNaN type:", typeof explicitNaN);
    console.log("\tSquare root of -1?\t", Math.sqrt(-1));
// Infinity and -Infinity
console.log("\n>>>>>>> Special Type: Infinity & -Infinity");
    const divideByZero = 42/0;
    console.log("\tCan we divide by zero?", divideByZero);
    console.log("\tCan we divide by zero if it's negative?", -divideByZero);
    console.log("\tType of Infinity?", typeof divideByZero);
    console.log("\tType of Infinity?", typeof -divideByZero);

    // Fun Javascript quirk. The value of the divideByZero variable is Infinity, the type is number.
    // However, wehen we run the typeof 1/0, it displays the type a little differently.
    console.log("Let's get weird");
    console.log("\ttypeof 1/0 is:", typeof 1/0, "<-- Whaaaaaaat?");
    console.log("\ttypeof (1/0) is:", typeof (1/0), "<-- Whaaaaaaat X2?");
    // This is a simple order of operations mixup. 
    // When we run `typeof 1/0`, what is happening is JS evaluates the expression from left to right. 
    // typeof is technically an operator and has higher precedence than the division operator. 
    // But lower precedence than the parentheses operator. 
    // So to trace typeof 1/0, JS is evaluating `typeof 1` first, which outputs the string 'number'
    // Then, the string 'number' is divided by zero, and the string/number division results in NaN
    // Neat, right? Let's prove it. 
    let jsYouCrazy = typeof 1;
    let soCrazy = jsYouCrazy/0;
    console.log("\ttypeof 1 is:", jsYouCrazy, "\tand it has type of:", typeof jsYouCrazy);
    console.log("\tdivided by a number", soCrazy);

// null
console.log("\n>>>>>>> Special Type: null");
    let myNullVariable = null;
    console.log("\tType of myNullVariable", myNullVariable);
    // null is a useful type when it is advantageous to unassign a value from memory but retain the variable. 

// Numbers in Javascript are all of type number (with the exception of a few special types covered later.)
// The number type is a 64 bit double precision floating point number.
console.log("\n>>>>>>> Numbers & Math!");
    // Numbers can be represented as decimal, binary, hexadecimal, and octal. 
    let myInt = 42;
    console.log("\tmyInt is of type:", typeof myInt, "with a value of", myInt);
    let myFloat = 0.42;
    console.log("\tmyfloat is of type:", typeof myFloat, "with a value of", myFloat);
    let myHexadecimal = 0x2A; //For hex values, prefix with 0x
    console.log("\tmyHexadecimal is of type:", typeof myHexadecimal, "with a value of", myHexadecimal);
    let myBinary = 0b101010; //For binary values, prefix with 0b
    console.log("\tmyBinary is of type:", typeof myBinary, "with a value of", myBinary);
    let myOctal = 052; //For octal values, prefix with 0
    console.log("\tmyOctal is of type:", typeof myOctal, "with a value of", myOctal);

    // There is another numeric type in javascript, BigInt. 
    let myBigInt = 42000000000000000n;
    console.log("\n\tmyBigInt is of type:", typeof myBigInt, "with a value of", myBigInt);
    try{
        myBigInt + 0.1;
    } catch(err) {
        console.log("\n\tBigInts are limited to INT values. Cannot add myBigInt + 0.1\n", err, "\n");
    }
    
    //The biggest safe number in Javascript can be accessed with the Number object.
    console.log("\tThe biggest safe integer of type number is:", Number.MAX_SAFE_INTEGER);
    //Same with the minimum safe number
    console.log("\tThe smallest safe integer of type number is:", Number.MIN_SAFE_INTEGER);
    // Large numbers are displayed in exponential notation
    console.log("\tThe MAX number value is:", Number.MAX_VALUE);
    console.log("\tThe MIN number value is:", Number.MIN_VALUE);
    console.log("\tYou can also use E Notation in literal number values:", 4.2e42, typeof 42e42);
    //By default, Javascript converts any floating-point value with at least six zeros after the decimal point into e-notation.
    console.log("\tValues with < 6 decimal places output like this:", 0.000001, "or", 1e-6);
    console.log("\tValues with > 6 decimal places output like this:", 0.0000001);

    console.log("OPERATORS!");
    let myOperatorVar;
    //Operators return their values after the operation is complete. 
    console.log("\t= is the assignment operator.", myOperatorVar = 42);
    console.log("\t+ is the addition operator", 42 + 13);
    console.log("\t- is the subtraction operator", 42 - 13);
    console.log("\t* is the multiplication operator", 42 * 13);
    console.log("\t** is the exponent operator", 42 ** 2);
    console.log("\t/ is the division operator", 42 / 13);
    console.log("\t% is the modulus operator", 42 % 13, "note modulus outputs an 'integer' like value");
    console.log("\t() can be used to group expressions and enforce order of operations", (1+2) * 14);
    // All operator precedence https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

    // You can also combine math and assignment operators. 
    console.log("\n\t+= combined will add and assign.", "original value:", myOperatorVar, "after += operation:", myOperatorVar += 1);
    console.log("\t-= combined will subtract and assign.", "original value:", myOperatorVar, "after -= operation:", myOperatorVar -= 1);
    console.log("\t*= combined will multiply and assign.", "original value:", myOperatorVar, "after *= operation:", myOperatorVar *= 2);
    console.log("\t/= combined will divide and assign.", "original value:", myOperatorVar, "after /= operation:", myOperatorVar /= 2);
    console.log("\t%= combined will perform modulus division and assign.", "original value:", myOperatorVar, "after %= operation:", myOperatorVar %= 5);

    // There are also operators for incrementing and decrementing variables. 
    let incrementVar = 0;
    console.log("\n\tincrementVar++ will output the original value of incrementVar, then increment it.", incrementVar++);
    console.log("\tPrinting the variable again will show its updated value.", incrementVar);
    console.log("\t++incrementVar will increment the value firts, then output the new value.", ++incrementVar);