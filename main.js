const readlineSync = require('readline-sync');

// Task 1: Write functions for each operation listed using the Math module

function absoluteValueOf(num) {
    return Math.abs(num);
}

function raiseToPower(num, power) {
    return Math.pow(num, power);
}

function sqrtFinder(num) {
    return Math.sqrt(num);
}

function findMaxAndMin(nums) {
    let maxNum = Math.max(...nums);
    let minNum = Math.min(...nums);

    return {"max": maxNum, "min": minNum };
}

function randomNumberGenerator(min, max) {
    /*
    Explaination for the one line of code in this function:

    (max - min + 1)                     --> Shift the max value down by min value. +1 to include max, not exclude

    Math.random() * (max - min + 1))    --> Multiply the rand() value between 0...1 by our shifted max.
                                            This creates a range from 0...(shifted max)

    Floor() the result so it's an integer.
    
    Add the minimum value to the result so the old range of 0...(shifted max) becomes min...max (inclusive)
    */

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function customRounding(num, numDecimals) {
    let multipleOfTenNeeded = Math.pow(10, numDecimals); // Figure out what multi of 10 we need
    let deciShiftedNum, roundedShiftedNum, finalNum;

    // Multiply to keep decimals we want
    deciShiftedNum = num * multipleOfTenNeeded;

    // Round to get rid of decimals we DON'T want
    roundedShiftedNum = Math.round(deciShiftedNum);

    // Divide to shift the decimals we want back into their proper place
    finalNum = roundedShiftedNum / multipleOfTenNeeded;

    return finalNum;

    // Written as a single line (less readable)
    // return Math.round(num * Math.pow(10, numDecimals)) / Math.pow(10, numDecimals);
}

// Task 2: Test Functions
let num1 = 2;
let num2 = 16;
let negativeNum = -33;
let testNumList = [ 3, -1, 13, 9, 10, 7, 1 ];
let randomNumber = null;
let numberToBeRounded = -4.734095038451;

// Absolute value
console.log(`The absolute value of ${negativeNum} is:`, absoluteValueOf(negativeNum));

// Number to a power
console.log(`${num1} to the power of ${num2} is:`, raiseToPower(num1, num2));

// Square root
console.log(`The square root of ${num2} is:`, sqrtFinder(num2));

// Find Max & Min
console.log(`The Max & Min of [ ${testNumList} ] is:`, findMaxAndMin(testNumList));

// Random Number
console.log(`Generating a random number between ${num1} and ${num2} is:`, randomNumberGenerator(num1, num2));

// Custom rounding
console.log(`The number ${numberToBeRounded} rounded to ${num1} decimal places is:`, customRounding(numberToBeRounded, num1));

// Task 3: Combine functions into a single "calculator" program
let userOperationChoice = null;
let isRunning = true;

const welcomeMessage = `\nWelcome to Eric Vaughn's Math module calculator application!`
const userOptionsMessage =
    `\nPlease select one of the following options:
    1: Get the absolute value of a number
    2: Raise a number by a power
    3: Take the square root of a number
    4: Find the maximum and minimum numbers in a given list
    5: Generate a random number within a given range
    6: Round a given number to a given number of decimal places
    7: Exit program
    
    Input the number you wish to select: `;

const findMaxAndMinMessage = `
    \nWhat is the list of numbers you want to find the maximum and minimum of? 
    Please seperate the numbers of your list by a single space, like this:
    
    # # # # # # #
    
    Your list: `;


// Greet the user
console.log(welcomeMessage);

// Will always run until the user wants to end the program
while (isRunning) {
    // Aquire user's choice
    userOperationChoice = readlineSync.questionInt(userOptionsMessage);

    // Absolute value
    if (userOperationChoice === 1) {
        const absValue = readlineSync.questionInt(`\nWhat number do you want the absolute value of?: `);

        // Give the abs val of the number the user gave
        console.log(`\nThe absolute value of ${absValue} is:`, absoluteValueOf(absValue));

    // Raise to power
    } else if (userOperationChoice === 2) {
        const num = readlineSync.questionInt(`\nWhat number do you want to raise to a power?: `);
        const pow = readlineSync.questionInt(`To what power?: `);

        // Give user's num^pow
        console.log(`${num} to the ${pow} power is:`, raiseToPower(num, pow));

    // Square root
    } else if (userOperationChoice === 3) {
        const num = readlineSync.questionInt(`\nWhat number do you want to take the square root of?: `);

        // Give the square root of user's number
        console.log(`\nThe square root of ${num} is:`, sqrtFinder(num));

    // Find Max & Min numbers from a given list
    } else if (userOperationChoice === 4) {
        const numberListAsString = readlineSync.question(findMaxAndMinMessage);

        // Convert string of numbers to list of numbers as strings --> "5 3 8" => [ "5", "3", "8" ]
        const listOfStringsButTheyAreNumbers = numberListAsString.split(" ");

        // Retrieve the string-numbers as numbers
        let numbers = [];
        for (string of listOfStringsButTheyAreNumbers) {
            numbers.push(Number(string));
        }

        // Give the max & min numbers to the user
        console.log(`\nThe maximum and mininmum numbers in the list are:`, findMaxAndMin(numbers));
    
    // Generate a random number within a given range
    } else if (userOperationChoice === 5) {
        const min = readlineSync.questionInt(`\nWhat should be the minimum value?: `);
        const max = readlineSync.questionInt(`What should be the maximum value?: `);

        // Make sure the user's range is possible
        if (min > max) {
            console.log(`\nYour minimum value, ${min}, is larger than you maximum value, ${max}.`);
            continue; // Move on / go back to the start of the loop
        }

        console.log(`\nGenerating a number within the range, ${min} to ${max}:`, randomNumberGenerator(min, max));
    
    // Round a given number to a given number of decimal places
    } else if (userOperationChoice === 6) {
        const num = readlineSync.questionFloat(`\nWhat decimal number do you want to round?: `);
        const numDecimals = readlineSync.questionFloat(`\nHow many decimal places do you want to round to?: `);

        console.log(`\nThe number ${num} rounded to ${numDecimals} decimal places is:`, customRounding(num, numDecimals));

    // Terminate
    } else if (userOperationChoice === 7) {
        isRunning = false;
    }
}

// Task 4: Test the calculator
const absoluteValueNum = -45.67;
const numToPow = 5, powToPow = 3;
const sqrtNum = 144;
const findMinAndMaxNumbersList = [ 3, 78, -12, 0.5, 27 ];
const genNumberMin = 1; genNumberMax = 50;
const roundThisNum = 23.67891; roundThisManyDeci = 2;

console.log(`\n
    **************************************
    This is Task 4: Testing the Calculator
    **************************************`);

console.log(`\nThe absolute value of ${absoluteValueNum} is:`, absoluteValueOf(absoluteValueNum));
console.log(`${numToPow} to the ${powToPow} power is:`, raiseToPower(numToPow, powToPow));
console.log(`\nThe square root of ${sqrtNum} is:`, sqrtFinder(sqrtNum));
console.log(`\nThe maximum and mininmum numbers in the list are:`, findMaxAndMin(findMinAndMaxNumbersList));
console.log(`\nGenerating a number within the range, ${genNumberMin} to ${genNumberMax}:`, randomNumberGenerator(genNumberMin, genNumberMax));
console.log(`\nThe number ${roundThisNum} rounded to ${roundThisManyDeci} decimal places is:`, customRounding(roundThisNum, roundThisManyDeci));
