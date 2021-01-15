console.log(">>>>>>> VAR LET & CONST")
    // Declare varaibles with var or let. Prefer let over var
    var myVar;
    let myLet;
    // Variables are undefined if declared but not yet assigned a value.
    console.log("\tValue of myVar before assignment", myVar);
    console.log("\tValue of myLet before assignment", myLet);

    //Assign with the = (assignment operator)
    myVar = 42;
    myLet = "42";
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
    console.log("\tValue of myUndefinedVariable\t", myUndefinedVariable); // Outputs 'undefined'
    console.log("\tType of myUndefinedVariable\t", typeof myUndefinedVariable); // Outputs 'undefined'

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
    console.log("\tOutput of function with no return type\t", myUndefined2); // Outputs 'undefined'

    //undefined is also assignable, but doing this is not recommended. 
    let explicitUndefined = undefined;
    console.log("\tValue of explicit undefined", explicitUndefined, "\n\ttype of explicitUndefined", explicitUndefined);

// null
console.log("\n>>>>>>> Special Type: null");
    let myNullVariable = null;
    console.log("\tType of myNullVariable", myNullVariable);
    // null is a useful type when it is advantageous to unassign a value from memory but retain the variable. 

// NaN
console.log("\n>>>>>>> Special Value: NaN");
    // NaN stands for Not A Number. NaN has a type of number
    // NaN can appear when a non numeric value is parsed
    let notANumberString = "I'm a string!";
    let aNumberString = "42";
    let explicitNaN = NaN; //NaN is a reserved keyword. Doing this is not recommended. 
    console.log("\taNumberString parses to ", parseInt(aNumberString), "type =", typeof parseInt(aNumberString));
    console.log("\tnotANumberString parses to ", parseInt(notANumberString), "type =", typeof parseInt(notANumberString));
    console.log("\texplicitNaN value:", explicitNaN, "explicitNaN type:", typeof explicitNaN);
    console.log("\tSquare root of -1?\t", Math.sqrt(-1));
    console.log("\taNumberString divided by notANumberString also gives us", aNumberString/notANumberString);

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

    console.log("\n    OPERATORS!");
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
    console.log("\n\tIncrementing and decrementing with ++ and --");
    let incrementVar = 0;
    console.log("\tincrementVar++ will output the original value of incrementVar, then increment it.", incrementVar++);
    console.log("\tPrinting the variable again will show its updated value.", incrementVar);
    console.log("\t++incrementVar will increment the value firts, then output the new value.", ++incrementVar);
    
    console.log("\n\tincrementVar-- will output the original value of incrementVar, then decrement it.", incrementVar--);
    console.log("\tPrinting the variable again will show its updated value.", incrementVar);
    console.log("\t--incrementVar will decrement the value first, then output the new value.", --incrementVar);

    // Infinity and -Infinity
    console.log("\n\tSpecial Values: Infinity & -Infinity");
    const divideByZero = 42/0;
    console.log("\tCan we divide by zero?", divideByZero);
    console.log("\tCan we divide by zero if it's negative?", -divideByZero);
    console.log("\tType of Infinity?", typeof divideByZero);
    console.log("\tType of Infinity?", typeof -divideByZero);

    // Fun Javascript quirk. The value of the divideByZero variable is Infinity, the type is number.
    // However, wehen we run the typeof 1/0, it displays the type a little differently.
    console.log("\n\tLet's get weird");
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
    console.log("\tdivided by a number resolves to", soCrazy);
    
// Booleans & Truthyness/Falsyness
console.log("\n>>>>>>> Booleans, Truthyness, Comparisons, and Logical Operators!");
    console.log("\tLiteral booleans just use the keywords true and false.", true, false, typeof true, typeof false);
    console.log("\tValues can be compared with >, <, <=, >=");
    console.log("\t1 > 0", 1 > 0);
    console.log("\t1 < 0", 1 < 0);
    console.log("\t1 >= 0", 1 >= 0);
    console.log("\t1 <= 0", 1 <= 0);

    console.log("\tComparisons can also be used on strings.");
    console.log("\t'a' < 'b' resolves to", 'a' < 'b');
    console.log("\t'a' > 'b' resolves to", 'a' > 'b');
    console.log("\tThis is just an alphabetical order comparsion. Aardvark < Abstract evaluates", 'Aardvark' < 'Abstract');
    console.log("\tIt is case sensitive however. 'a' > 'A' resolves", 'a' > 'A', "while 'a' < 'A' resolves", 'a' < 'A');
    // https://javascript.info/comparison For mor info on how this works. 

    console.log("\n\tThis is where it gets fun! Equality Comparisons have 2 operators. == and ===");
    console.log("\tThe string '1' and the number 1 will reolsve true with '1' == 1", '1' == 1);
    console.log("\tHowever, when we use ===, the strict equality operator, it resolves to false.");
    console.log("\t'1' === 1 resolves to", '1' === 1);
    console.log("\t== only compares the values, and will parse strings to numbers");
    console.log("\t=== compares the values AND the type.");
    console.log("\n\tBest practice is to ALWAYS use strict equality (===) for comparisons and cast values to the appropriate type as necessary.");
    console.log("\tParsing a string of a number to a number type and comparing, such as parseInt('1') === 1 resolves to", parseInt('1') === 1);

    console.log("\n\tNow lets look at some falsy values. 0, '' (empty string), undefined, NaN, and null are all falsy values.");
    console.log("\tAlthough they are not equal to false, certain JS comparisons evaluate them to false.\n");
    // 0
    if( 0 ) { console.log("\t0 evaluated true?"); } 
    else { console.log("\t0 evaluated false! 0 == false evaluates to", 0 == false, "but 0 === false evaluates to", 0 === false); }
    // ''
    if( '' ) { console.log("\t'' evaluated true?"); } 
    else { console.log("\t'' evaluated false! '' == false will evaluate to", '' == false, "but '' === false evaluates to", 0 === false); }
    // undefined
    if( undefined ) { console.log("\tundefined evaluated true?"); } 
    else { console.log("\tundefined evaluated false! Even though undefined == false resolves to", undefined == false); }
    // NaN
    if( NaN ) { console.log("\tNaN evaluated true?"); } 
    else { console.log("\tNaN evaluated false! Even though NaN == false resolves to", NaN == false); }
    // null
    if( null ) { console.log("\tnull evaluated true?"); } 
    else { console.log("\tnull evaluated false! Even though null == false resolves to", null == false); }

//Strings!
console.log("\n>>>>>>> Strings and string operations");
    let doubleQuotedString1 = "Double quoted string literal containing unescaped 'single quotes'";
    let doubleQuotedString2 = "Double quoted string literal containing escaped \"double quotes\"";
    let doubleQuotedString3 = "Double quoted string literal containing unescaped `backticks`";
    console.log("\n\t", doubleQuotedString1); 
    console.log("\t", doubleQuotedString2);
    console.log("\t", doubleQuotedString3);

    let singleQuotedString1 = 'Single quoted string literal containing unescaped "double quotes"';
    let singleQuotedString2 = 'Single quoted string literal containing escaped \'single quotes\'';
    let singleQuotedString3 = 'Single quoted string literal containing unescaped `backticks`';
    console.log("\n\t", singleQuotedString1); 
    console.log("\t", singleQuotedString2);
    console.log("\t", singleQuotedString3);

    let backtickQuotedString1 = `Backtick quoted string literal with unescaped "double quotes"`;
    let backtickQuotedString2 = `Backtick quoted string literal with unescaped 'single quotes'`;
    let backtickQuotedString3 = `Backtick quoted string literal with escaped \`backticks\``;
    let backtickQuotedString4 = `Backtick quoted string literal with embedded variable ${myLet}`;
    console.log("\n\t", backtickQuotedString1); 
    console.log("\t", backtickQuotedString2);
    console.log("\t", backtickQuotedString3);
    console.log("\t", backtickQuotedString4);

    let concatString = "+ String concatenation with double quotes, " + 'single quotes,' + ` and backticks`;
    console.log("\n\t", concatString);

    let addOnString = "Part 1";
    addOnString += " and Part 2";
    console.log("\t String conatenation with +=", addOnString);

    let mySubstring = doubleQuotedString1.substring(0, 20);
    console.log("\n\t Substring from position 0 to 20 of doubleQuotedString1 is", mySubstring);
    console.log("\t", "'" + mySubstring + "'", "has a length of", mySubstring.length);
    // String methods can also be applied directly to string literals. 
    console.log("\n\t 'string'.toUpperCase() will capitalize all characters like so,", 'string'.toUpperCase());
    console.log("\t 'STRING'.toLowerCase() will de-capitalize all characters like so,", 'STRING'.toLowerCase());

    let myXMarkedString = "Where is the X at?";
    console.log("\n\t The X character in the string", `'${myXMarkedString}' is at position`, myXMarkedString.indexOf('X'));
    console.log("\t So I can use the charAt function to pull it out like so:", myXMarkedString.charAt(13));

    //Arrays
    console.log("\n>>>>>>> Arrays and array operations");
    // Define arrays with the literal array syntax as a best practice. 
    let myLiteralArray = [];
    //Push items onto an array by specifying the index
    myLiteralArray[0] = "EARTH!";
    // The array length does not need to be predefined. You can add elements down the line with blank spaces in between
    // If we add the fifth element, like so:
    myLiteralArray[4] = "The spiritual Self!";
    // Then the 2nd, 3rd, and 4th elements are undefined.
    console.log("\tWe added elements at indices 0 and 4, what about 1,2, & 3?", myLiteralArray);
    // They should show as empty items! Specifically, like any other declared but not yet assigned variable, the value is 
    // undefined.
    console.log("\tYou for real undefined at index 1, array?", ( !myLiteralArray[1] ? "Yup" : "Nope" ), myLiteralArray[1]);
    // Arrays also have some helpful built in methods.
    console.log(
        "\tThe .push(value) method will push the defined value on the end of the array and return the new length, which is: ",
        myLiteralArray.push("Index 5!!")
    );
    console.log("\tThe .pop() method will remove the last index of the array and return the value. Our last value is: ",
        myLiteralArray.pop()
    );
    console.log(
        "\tThe .pop() method does change the array. Index 5!! has now been removed, and the array length is now ",
        myLiteralArray.length
    );
    // Leaving undefined indices in an array can be confusing and should be avoided. 
    // Just because Javascript allows something doesnt mean its a good practice.
    // So let's fill in our JS array's undefined fields with a familiar for loop
    for (let i = 0; i < myLiteralArray.length; i++) {
        if (myLiteralArray[i] == undefined) {
            console.log("\t\tCaught an undefined! Adding a plceholder string!");
            myLiteralArray[i] = "Placeholder String";
        } else {
            console.log(`\t\t${myLiteralArray[i]} isn't undefined!`);
        }
    }
    // There is another way to loop through arrays, and that uses the built in method forEach(callBack)
    // The forEach method loops through the array and performs a callback function on each element. 
    // (More on callbacks in the functions section)

    console.log("\n\tOur array no longer has undefined middle indices\n", myLiteralArray);
    console.log("\tWe can use the forEach to read each value, like so");
    myLiteralArray.forEach((value, index) => {
        //value is the current value at each pass in the loop, starting with index 0 and ending with index length-1.
        console.warn(`\t\tindex ${index} has the value ${value}`);
    });

    console.log("\tThe forEach method is similar to the for loop, and the example above is functionally similar to:",
    "\n\t\tfor(let index = 0; index < myLiteralArray.length; index++) {",
        "\n\t\t\tlet value = myLiteralArray[index];",
        "\n\t\t\tconsole.warn(`\\t\\tindex ${index} has the value ${value}`);",
    "\n\t\t}"
    );
    



    //Objects
    // Control structures
    
    //Functions