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

// Linear Search Implementation
const linearSearch = async () => {
    // Get the size of the array
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
    console.log('Input the elements (separated by space):');
    const elements = (await getInput('')).split(' ').map(Number);

    if (elements.length < n) {
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

    // Linear search
    let found = false;
    for (let i = 0; i < n; i++) {
        if (elements[i] === key) {
            console.log(`${key} found at index ${i}!`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log(`${key} element was not found.`);
    }

    rl.close();
};

// Run the linear search function
linearSearch();
