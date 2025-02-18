// Functional demonstration of arrays in TypeScript

// Declare and initialize arrays
const createArray = (
    size: number,
    initialValue: number | undefined = undefined
): number[] => new Array(size).fill(initialValue);

const arr = createArray(10); // uninitialized array with undefined
const n = 10;
const array = createArray(n); // another uninitialized array
const arr2 = createArray(10, 0); // initialized with 0
const arr3 = [5, 5, ...createArray(8, 0)]; // first two elements as 5, rest as 0, using spread operator

// Array utility functions
const printArray = (arr: number[], label: string) => {
    console.log(`${label}:`);
    console.log(arr);
};

const logWithIndices = (arr: number[], label: string) => {
    console.log(`${label}:`);
    arr.forEach((value, index) => console.log(`Index ${index}: ${value}`));
};

// Print arrays
printArray(arr, 'Uninitialized array (undefined values)');
printArray(arr2, 'Array initialized with 0');
printArray(arr3, 'Custom initialized array');

// Iteration examples
// 1. Traditional for loop
const iterateWithForLoop = (arr: number[]) => {
    console.log('Using for loop:');
    return arr.map((value, index) => {
        console.log(`Index ${index}: ${value}`);
        return value; // for demonstration, just return the value
    });
};
iterateWithForLoop(arr3);

// 2. Using for...of loop
console.log('Using for...of loop:');
for (const value of arr3) {
    console.log(value);
}

// 3. Using map for transformation
const transformedArray = arr3.map((value) => value * 2);
printArray(transformedArray, 'Array after transformation (doubling values)');

// 4. Using filter for filtering
const positiveArray = arr3.filter((value) => value > 0);
printArray(positiveArray, 'Filtered array with positive values');

// 5. Using reduce for aggregation
const sum = arr3.reduce((acc, value) => acc + value, 0);
console.log('Sum of array elements:', sum);

// 6. Use every and some for conditional checks
const allPositive = arr3.every((value) => value >= 0);
console.log('Are all elements positive?', allPositive);

const hasNegative = arr3.some((value) => value < 0);
console.log('Does the array have negative values?', hasNegative);

// 7. Using forEach for side effects (logging values)
logWithIndices(arr3, 'Array with indices using forEach');

// 8. Chaining methods
const result = arr3
    .filter((value) => value > 0) // Filter positive values
    .map((value) => value * 3) // Triple the values
    .reduce((acc, value) => acc + value, 0); // Sum the resulting values
console.log('Result of chained operations (filter -> map -> reduce):', result);

// Generalized function for do-while emulation
const doWhileEmulation = (
    arr: number[],
    action: (value: number, index: number) => void
) => {
    let i = 0;
    do {
        action(arr[i], i);
        i++;
    } while (i < arr.length);
};
console.log('Using do-while emulation:');
doWhileEmulation(arr3, (value, index) =>
    console.log(`Index ${index}: ${value}`)
);
