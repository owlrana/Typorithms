/**
 * Generic Array class implementation.
 * This class provides basic functionalities like adding, removing,
 * retrieving elements, and checking the size of the array.
 *
 * @template T - The type of elements stored in the array.
 */
export class Array<T> {
    // Private array to hold the items of type T
    private items: T[] = [];

    /**
     * Adds an item to the array.
     *
     * @param item - The item of type T to be added to the array.
     */
    add(item: T): void {
        this.items.push(item); // Adds the item to the end of the array
    }

    /**
     * Removes the last item from the array.
     *
     * @returns The removed item of type T, or undefined if the array is empty.
     */
    remove(): T | undefined {
        return this.items.pop(); // Removes and returns the last item
    }

    /**
     * Retrieves an item from the array at a specific index.
     *
     * @param index - The position of the item in the array (0-based index).
     * @returns The item at the specified index, or undefined if the index is out of bounds.
     */
    get(index: number): T | undefined {
        return this.items[index]; // Accesses the item at the given index
    }

    /**
     * Returns the number of items in the array.
     *
     * @returns The length of the array.
     */
    size(): number {
        return this.items.length; // Returns the total number of items in the array
    }
}
