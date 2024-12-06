import * as readline from 'readline';

// Function to create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Helper function to get user input as a promise
const getInput = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

// Function to find the largest and smallest elements in an array
const findLargestAndSmallest = async (): Promise<void> => {
    // Get the number of elements
    const n = parseInt(
        await getInput('Enter the number of elements you want in the array: '),
        10
    );

    if (isNaN(n) || n <= 0) {
        console.log('Please enter a valid number of elements.');
        rl.close();
        return;
    }

    // Get the array elements
    console.log('Enter the array elements separated by space:');
    const inputElements = await getInput('');
    const array = inputElements.split(' ').map(Number);

    if (array.length < n) {
        console.log(`You entered less than ${n} elements. Please try again.`);
        rl.close();
        return;
    }

    // Initialize the largest and smallest numbers
    let largest = Number.MIN_SAFE_INTEGER; // Equivalent to INT_MIN
    let smallest = Number.MAX_SAFE_INTEGER; // Equivalent to INT_MAX

    // Traverse the array
    for (let i = 0; i < n; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }

    // Output results
    console.log(`The smallest element is: ${smallest}`);
    console.log(`The largest element is: ${largest}`);

    // Using built-in functions to find the smallest and largest
    largest = array.reduce(
        (max, current) => Math.max(max, current),
        Number.MIN_SAFE_INTEGER
    );
    smallest = array.reduce(
        (min, current) => Math.min(min, current),
        Number.MAX_SAFE_INTEGER
    );

    // Output results again
    console.log(`(Using built-in functions)`);
    console.log(`The smallest element is: ${smallest}`);
    console.log(`The largest element is: ${largest}`);

    // Close the readline interface
    rl.close();
};

// Run the function
findLargestAndSmallest();
