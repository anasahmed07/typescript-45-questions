// Task 24
// Tests for equality and inequality with strings
console.log('apple' === 'apple'); // true
console.log('apple' === 'apple'); // false

// Tests using the lower case function
console.log('HELLO'.toLowerCase() === 'hello'); // true
console.log('hello'.toLowerCase() === 'HELLO'); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 === 5); // true
console.log(5 !== 5); // false
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true

// Tests using "and" and "or" operators
const num = 5;
console.log(num > 0 && num < 10); // true
console.log(num < 0 || num > 10); // false

// Test whether an item is in a array
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('apple')); // true
console.log(fruits.includes('grape')); // false

// Test whether an item is not in a array
console.log(!fruits.includes('grape')); // true
console.log(!fruits.includes('apple')); // false