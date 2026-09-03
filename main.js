const readline = require('node:readline');

// Task 1: Write functions for each operation listed using the Math module

function absoluteValueOf(num) {
    return Math.abs(num);
}

function pow(num, power) {
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
    let multipleOfTenNeeded = 10 * numDecimals; // Figure out what multi of 10 we need
    let deciShiftedNum, roundedShiftedNum, finalNum;

    // Multiply to keep decimals we want
    deciShiftedNum = num * multipleOfTenNeeded;

    // Round to get rid of decimals we DON'T want
    roundedShiftedNum = Math.round(deciShiftedNum);

    // Divide to shift the decimals we want back into their proper place
    finalNum = roundedShiftedNum / multipleOfTenNeeded;

    return finalNum;

    // Written as a single line (less readable)
    // return Math.round(num * (10 * numDecimals)) / (10 * numDecimals);
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
console.log(`${num1} to the power of ${num2} is:`, pow(num1, num2));

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
let userInput = null;
let isRunning = true;

const welcomeMessage = `Welcome to Eric Vaughn's Math module calculator application!`
const userOptionsMessage =
    `Please select one of the following options:
    1: Get the absolute value of a number
    2: Take raise a number by a power
    3: Take the square root of a number
    4: Find the maximum and minimum numbers in a given list
    5: Generate a random number within a given range
    6: Round a given number to a given number of decimal places
    7: Exit program
    
    Input the number you wish to select: `;


// Greet the user
console.log(welcomeMessage);

// Will always run until the user wants to end the program
while (isRunning) {

    // Terminate
    if (userOperationChoice === 7) {
        isRunning = false;
    }
}

// Task 4: Test the calculator