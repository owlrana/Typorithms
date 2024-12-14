// Reverses the elements of an array in place.
function reverseArray<T>(arr: T[]): T[] {
    let start = 0;
    let end = arr.length - 1;

    /**
     * an ez solution is to just create a new arr
     * and then start from either start or end
     * and place elements in the oppostite end of new arr
     * 
     * BUT we want to reduce the memory cost 
     * so let's optimise the solution a bit
     * without taking extra memory
     */

    while (start < end) {
        // Swap elements at start and end
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // Move towards the middle
        start++;
        end--;
    }

    return arr;
}

// exanple
const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers)); // Output: [5, 4, 3, 2, 1]

const strings = ['a', 'b', 'c'];
console.log(reverseArray(strings)); // Output: ['c', 'b', 'a']
