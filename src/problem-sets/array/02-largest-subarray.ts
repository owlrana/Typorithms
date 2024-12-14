/**
 * 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/description/
 * 
 * Maximum sum of a subarray given any array
 * @param nums - An array of integers.
 * @returns The maximum sum of a subarray.
 * 
 * PS: we have 3 solutions for this
 */

/**
 * Solution 1: Brute Force
 * This is the brute force solution and although it works
 * it takes such a long time that you cannot use it irl
 */
function maxSubArrayBruteForce(nums: number[]): number {
    let maxSum = Number.MIN_SAFE_INTEGER; // Initialize with the smallest possible number

    // Outer loop to set the start of the subarray
    for (let start = 0; start < nums.length; start++) {
        let currentSum = 0; // Holds the sum of the current subarray

        // Inner loop to expand the subarray
        for (let end = start; end < nums.length; end++) {
            currentSum += nums[end]; // Add the current element to the subarray sum
            maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is greater
        }
    }

    return maxSum; // Return the largest sum found
}

// Example usage
console.log(maxSubArrayBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArrayBruteForce([1])); // Output: 1
console.log(maxSubArrayBruteForce([5, 4, -1, 7, 8])); // Output: 23

/**
 * Solution 2: Kadanes Algorithm
 * This is a famous algorithm called Kadane's Algorithm
 * well-known to find the maxi sum of a subarray in O(n) time complexity
 */
function maxSubArrayKadane(nums: number[]): number {
    let maxSum = nums[0]; // Initialize `maxSum` with the first element of the array.
    let currentSum = 0;   // Initialize `currentSum` to store the running sum of the current subarray.

    for (const num of nums) {
        currentSum = Math.max(num, currentSum + num); // Update `currentSum`.
        maxSum = Math.max(maxSum, currentSum);       // Update `maxSum` if `currentSum` is greater.
    }

    return maxSum; // Return the largest sum found.
}

// Example usage
console.log(maxSubArrayKadane([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArrayKadane([1])); // Output: 1
console.log(maxSubArrayKadane([5, 4, -1, 7, 8])); // Output: 23

/**
 * Solution 3: Divide and Conquer
 * 
 * This approach divides the problem into subproblems (left and right halves),
 * computes the maximum subarray in each half, and combines the results.
 * 
 * We will come back to this and learn later.
 */