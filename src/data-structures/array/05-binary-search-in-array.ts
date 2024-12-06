import * as readline from 'readline';

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Helper function to get user input as a promise
const getInput = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

// Binary search function
const binarySearch = (arr: number[], key: number): number => {
    let start = 0; // Initialize the starting point
    let end = arr.length - 1; // Initialize the ending point

    while (start <= end) {
        // Initialize the mid-point
        const mid = Math.floor((start + end) / 2);

        // If key is found at mid
        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] > key) {
            // If the mid element is greater than the key, shrink the end
            end = mid - 1;
        } else {
            // If the mid element is less than the key, shrink the start
            start = mid + 1;
        }
    }

    return -1; // If the key is not found
};

// Main function
const main = async () => {
    // Get the size of the array from the user
    const n = parseInt(
        await getInput('Enter the size of the array you want: '),
        10
    );

    if (isNaN(n) || n <= 0) {
        console.log('Please enter a valid size for the array.');
        rl.close();
        return;
    }

    // Get the array elements
    console.log(
        'Input the elements (separated by space, sorted in ascending order):'
    );
    const inputElements = await getInput('');
    const arr = inputElements.split(' ').map(Number);

    if (arr.length < n) {
        console.log(`You entered less than ${n} elements. Please try again.`);
        rl.close();
        return;
    }

    // Get the key to search for
    const key = parseInt(
        await getInput('Enter the element you want to search for: '),
        10
    );

    if (isNaN(key)) {
        console.log('Please enter a valid number to search for.');
        rl.close();
        return;
    }

    // Call the binary search function
    const result = binarySearch(arr, key);

    if (result === -1) {
        console.log('The element was not found...');
    } else {
        console.log(`The element was found at index: ${result}`);
    }

    // Close the readline interface
    rl.close();
};

main();
