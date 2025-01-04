import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

process.on('exit', () => rl.close());
process.on('SIGINT', () => {
    rl.close();
    process.exit();
});

/**
 * A simple, reusable function to get user input as a string.
 * @param query The prompt shown to the user.
 * @returns A Promise that resolves to the user input as a string.
 */
export const getInput = (query: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(query, (input) => {
            resolve(input.trim());
        });
    });
};

export const closeInput = () => {
    rl.close();
};
