// Basic Types
let message: string = 'Hello, TypeScript!';
let number: number = 42;
let isLearning: boolean = true;

// Function with Type Annotations
function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

// Arrow Function
const add = (a: number, b: number): number => a + b;

// Array and Object Example
let numbers: number[] = [1, 2, 3, 4, 5];
let person: { name: string; age: number } = {
  name: 'John Doe',
  age: 30,
};

// Using Everything
console.log(message);
console.log('The meaning of life is', number);
console.log('Are you learning TypeScript?', isLearning);
console.log(greet('Rahul'));
console.log('Sum of 10 and 20 is', add(10, 20));
console.log('Numbers array:', numbers);
console.log('Person object:', person);
