// Task 1
// In this task, we create a function that uses the `Array.from` method to create an array from a list of users in a database.

/**
 * The `getUsersFromDatabase` function retrieves user data and uses the `Array.from` method to create an array of users from the list.
 * array - The input array
 * Returns: An array of users.
 */
function getUsersFromDatabase(array) {
  let users = Array.from(array, (record) => {
    return {
      id: record.id,
      firstName: record.name.toUpperCase(),
      years: record.age,
    };
  });
  return users;
}

// Example usage of the getUsersFromDatabase function
const userRecords = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 28 },
  { id: 3, name: "Mike", age: 32 },
];
console.log("Task 1 ==============================");

console.log(getUsersFromDatabase(userRecords));
// Output:
// [
//   { id: 1, firstName: 'JOHN', years: 30 },
//   { id: 2, firstName: 'JANE', years: 28 },
//   { id: 3, firstName: 'MIKE', years: 32 }
// ]

// Task 2 - Removing the last element from an array

/**
 * The `removeLastElement` function removes the last element from the array using the `pop` method.
 * If the array is empty, it returns `undefined`.
 *  arr - The input array from which the last element will be removed.
 * Returns: The removed last element or `undefined` if the array is empty.
 */
function removeLastElement(arr) {
  if (arr.length === 0) {
    console.log("The array is empty");
    return undefined;
  }
  arr.pop();
  return arr;
}

// Example usage of the removeLastElement function
console.log("Task 2 ==============================");

console.log(removeLastElement([1, 2, 3, 4, 5])); // Outputs [1, 2, 3, 4]

// Task 3 - Filtering an array by a specific condition

/**
 * The `filterByCondition` function filters the input array by a specific condition using the `filter` method.
 *  arr - The input array to be filtered.
 * condition - A condition function that determines whether an element meets the condition.
 * Returns: A new array containing elements that meet the condition.
 */
function filterByCondition(arr, condition) {
  return arr.filter((item) => condition(item));
}

// Example usage of the filterByCondition function

let condition = (item) => item % 2 === 0; // Filter even numbers
console.log("Task 3 ==============================");
console.log(filterByCondition([1, 2, 3, 4, 5], condition)); // Outputs [2, 4]

// Task 4

/**
 * The `checkArray` function checks if the input object is an array using the `Array.isArray` method.
 *  obj - The input object to be checked.
 * Returns: `true` if the object is an array, `false` otherwise.
 */
function checkArray(obj) {
  if (obj === null || obj === undefined) {
    console.log(`The input object is null or undefined`);
  } else {
    return Array.isArray(obj);
  }
}

// Example usage of the checkArray function
console.log("Task 4 ==============================");
console.log(checkArray([1, 2, 3, 4, 5])); // Outputs true
console.log(checkArray('Smth')); // Outputs false

// Task 5 - Creating a new array from the passed elements

/**
 * The `createArray` function creates a new array from the passed elements using the `Array.of` method.
 * elements - The elements from which the new array will be created.
 * Returns: A new array of the passed elements.
 */
function createArray(...elements) {
  if (elements.length > 0) {
    return Array.of(...elements);
  } else {
    console.log("The number of elements is insufficient to create an array");
    return [];
  }
}

// Example usage of the createArray function
console.log("Task 5 ==============================");
console.log(createArray(1, 2, 3, 4, 5)); // Outputs [1, 2, 3, 4, 5]

// Task 6 - Getting an array element by a given index

/**
 * The `getElementAtIndex` function retrieves an element from the array by the given index using the `at` method.
 *  arr - The input array.
 *  index - The index of the element to retrieve.
 * Returns: The element from the array by the given index or `undefined` if the index is out of bounds.
 */
function getElementAtIndex(arr, index) {
  if (arr.length === 0) {
    return undefined;
  } else if (index >= 0 && index < arr.length) {
    return arr.at(index);
  }
}

// Example usage of the getElementAtIndex function
console.log("Task 6 ==============================");

console.log(getElementAtIndex([1, 2, 3, 4, 5], 2)); // Outputs 3

// Task 7

/**
 * Combines two arrays, reverses the result, and returns a new array.
 *  arr1 - The first array.
 *  arr2 - The second array.
 * Returns: The combined and reversed array.
 */
function combineAndReverseArrays(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    let newArr = arr1.concat(arr2);
    return newArr.reverse();
  } else {
    return [];
  }
}

// Example usage of the combineAndReverseArrays function
console.log("Task 7 ==============================");

console.log(combineAndReverseArrays([1, 2, 3], [4, 5, 6])); // Outputs [ 6, 5, 4, 3, 2, 1 ]

// Task 8

/**
 * Checks if the array contains a specified element and returns its index(es).
 *  arr - The input array.
 *  element - The element to search for.
 * Returns: An array of indexes where the element is found, or an empty array if the element is not found.
 */
function findElementIndexes(arr, element) {
  if (Array.isArray(arr)) {
    let firstIndex = arr.indexOf(element);
    let lastIndex = arr.lastIndexOf(element);
    let arrNew = [];
    if (firstIndex !== -1) {
      arrNew.push(firstIndex);
    }
    if (lastIndex !== firstIndex) {
      arrNew.push(lastIndex);
    }
    return arrNew;
  } else {
    return [];
  }
}

// Example usage of the findElementIndexes function
console.log("Task 8 ==============================");

console.log(findElementIndexes([1, 2, 3, 4, 5, 2], 2)); // Outputs [ 1, 5 ]

// Task 9

/**
 * Copies and swaps a specified number of elements from the array to a new location using the `copyWithin` method.
 *  arr - The input array from which elements will be copied.
 *  target - The index at which to place the copied elements.
 *  start - The index at which to start copying elements.
 *  end - The index at which to end copying elements (not included).
 * Returns: The modified array with copied and swapped elements.
 */
function copyAndSwapElements(arr, target, start, end) {
  if (
    start < 0 ||
    start >= arr.length ||
    end < 0 ||
    end > arr.length ||
    target < 0 ||
    target >= arr.length
  ) {
    console.log("Invalid indexes");
    return arr;
  } else {
    return arr.copyWithin(target, start, end);
  }
}

// Example usage of the copyAndSwapElements function

console.log("Task 9 ==============================");

console.log(copyAndSwapElements([1, 2, 3, 4, 5], 0, 2, 4)); // Outputs [3, 4, 3, 4, 5]


// Task: 10
// In this task, we will create a function that uses the `sort` method to sort an array of objects by a specific key.

/**
 * The `sortByKey` function sorts an input array of objects using the `sort` method and a specified key.
 *  arr - The input array of objects.
 * Returns: The key by which the objects should be sorted.
 * Returns: The sorted array of objects.
 */
function sortByKey(arr, key) {
  arr.sort((a, b) => { 
    if(a[key] < b[key]) { return -1;}
    else if(a[key] > b[key]) { return 1;}
    else { return 0; }
  });
  return arr;
}

console.log("Task: 10 ==============================");

let unsortedArray = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 20 },
];
console.log(sortByKey(unsortedArray, "age"));
// Output:
// [
//   { name: 'Mike', age: 20 },
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 }
// ]

// Task: 11

/**
 * The `customEvery` function checks whether all elements in an array satisfy a given condition using the `every` method.
 *  arr - The input array to be checked.
 * condition - The condition function that will be applied to each element of the array.
 * Returns: The result of the check.
 */
function customEvery(arr, condition) {
  if (!Array.isArray(arr)){ return false; }
  if (typeof(condition) !== "function"){ return false; }
  return arr.every(condition);
}

const numbers = [2, 4, 6, 8, 10];

console.log("Task: 11 ==============================");
console.log(customEvery(numbers, (num) => num % 2 === 0)); // Output: true

// Task: 12

/**
 * The `customFill` function fills a specified range of elements in an array with a given value using the `fill` method.
 *  arr - The input array to be filled.
 * value - The value that will fill the array elements.
 *  start - The starting index for filling (inclusive).
 *  end - The ending index for filling (exclusive).
 * Returns: The filled array.
 */
function customFill(arr, value, start = 0, end = arr.length) {
  if (!Array.isArray(arr)) { return false; }
  if (start < 0 || end >= arr.length || start > end) { return false; }
  return arr.fill(value, start, end);
}

// Example usage of the customFill function
console.log("Task: 12 ==============================");
console.log(customFill([1, 2, 3, 4, 5], 0, 1, 4)); // Output: [ 1, 0, 0, 0, 5 ]

// Task: 13

/**
 * The `customShift` function removes the first element from an array using the `shift` method.
 * arr - The input array from which the first element will be removed.
 * Returns - The removed element and the updated array, or undefined if the array is empty.
 */
function customShift(arr) {
  if (!Array.isArray(arr)) { return undefined; };
  if (arr.length === 0){ return undefined; };
  let shiftedElement = arr.shift();
  return {shiftedElement, arr};
}

// Example usage of the customShift function

console.log("Task: 13 ==============================");

console.log(customShift([1, 2, 3, 4, 5])); // Output: { shiftedElement: 1, arr: [ 2, 3, 4, 5 ] }

// Task: 14

/**
 * The `customUnshift` function adds one or more elements to the beginning of an array using the `unshift` method.
 *  arr - The input array to which elements will be added.
 *  elements - The elements to be added to the beginning of the array.
 *  Returns: The new length of the array after the elements have been added.
 */
function customUnshift(arr, ...elements) {
  if (Array.isArray(arr)){
    let initialLength = arr.length;
    for(let i = elements.length-1; i >= 0; i--){
      arr.unshift(elements[i]);
    }
    const newLength = arr.length;
  return { initialLength, newLength, arr };
  } else { return; }
}

console.log("Task: 14 ==============================");

console.log(customUnshift([2, 3, 4, 5], 1, 0)); // Output: { initialLength: 4, newLength: 6, arr: [ 1, 0, 2, 3, 4, 5 ] }

//--------------------------------------

// Task: 15

/**
 * The `customSome` function checks whether at least one element in an array satisfies a given condition using the `some` method.
 *  arr - The input array to be checked.
 * condition - The condition function that will be applied to each element of the array.
 * Returns: The result of the check.
 */
function customSome(arr, condition) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (typeof condition !== "function") {
    return false;
  }
  return arr.some(condition);
}
console.log("Task: 15 ==============================");

const isEven = (number) => number % 2 === 0;
console.log(customSome([1, 2, 3, 4, 5], isEven));
// Output: true

// Task: 16

/**

The customAt function returns an element of an array at a given index.
 arr - The input array from which the element will be retrieved.
 index - The index of the element to be retrieved.
Returns - The element of the array or undefined if the index is out of bounds.
*/
function customAt(arr, index) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (index < 0 || index > arr.length) {
    return undefined;
  }
  let element = arr.at(index);
  if (typeof (element) === "string") {
    console.log("The element is a string.");
  } else if (typeof(element) === "object") {
    console.log("The element is an object.");
  } else if (typeof(element) === "number") {
    console.log("The element is a number.");
  }
  return element;
}

console.log("Task: 16 ==============================");
console.log(customAt([1, 2, 3, 4, 5], 2));
// Output:
// The element is a number.
// 3

//--------------------------------------

// Task: 17

/**
  The customIncludes function checks whether an array contains a given element using the includes method.
   arr - The input array to be checked.
   element - The element to check for presence in the array.
  Returns: The result of the check.
  */
function customIncludes(arr, element) {
  if (!Array.isArray(arr)) {
    console.log("Error: The input parameter must be an array.");
    return false;
  }
  let elementIn = arr.includes(element);
  let count = arr.filter((item) => item === element).length;
  console.log(count);
  return elementIn;
}

console.log("Task: 17 ==============================");
console.log(customIncludes(["apple", "banana", "orange", "apple"], "banana"));
// Output:
// 1
// true
