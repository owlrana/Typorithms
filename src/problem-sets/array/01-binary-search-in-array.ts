/**
 * 704. Binary Search
 * https://leetcode.com/problems/binary-search/description/
 * 
 * Binary search function to find the target in a sorted array.
 * @param nums - A sorted array of integers.
 * @param target - The integer to search for.
 * @returns The index of the target if found, otherwise -1.
 */

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Target found
        }

        if (nums[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return -1; // Target not found
}

// Example usage
const nums1 = [-1, 0, 3, 5, 9, 12];
const target1 = 9;
console.log(search(nums1, target1)); // Output: 4

const nums2 = [-1, 0, 3, 5, 9, 12];
const target2 = 2;
console.log(search(nums2, target2)); // Output: -1
