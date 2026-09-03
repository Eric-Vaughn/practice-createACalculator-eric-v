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
    let maxNum = Math.max(nums);
    let minNum = Math.min(nums);

    return {"max": maxNum, "min": minNum }
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

// Task 3: Combine functions into a single "calculator" program

// Task 4: Test the calculator