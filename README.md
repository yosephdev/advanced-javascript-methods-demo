# Advanced JavaScript Methods Demo

Welcome to the Advanced JavaScript Methods Demo repository!

In this repository, you'll find examples and explanations of three essential methods in JavaScript: `map()`, `filter()`, and `reduce()`. These methods are frequently used by advanced JavaScript developers for various data manipulation tasks.

## Table of Contents

1. [Introduction](#introduction)
2. [Map Method](#map-method)
3. [Filter Method](#filter-method)
4. [Reduce Method](#reduce-method)
5. [Running the Examples](#running-the-examples)

## Introduction

JavaScript provides powerful array methods like `map()`, `filter()`, and `reduce()` that allow developers to perform complex operations on arrays efficiently. Understanding how to use these methods is essential for writing clean, concise, and maintainable code.

## Map Method

The `map()` method creates a new array by applying a function to each element of the original array. It's commonly used for transforming array elements.

Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

## Filter Method

The filter() method creates a new array with all elements that pass the test implemented by the provided function. It's useful for selecting elements based on specific criteria.

Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

## Reduce Method

The reduce() method executes a reducer function on each element of the array, resulting in a single output value. It's often used for aggregating data or performing calculations on arrays.

Example:
```javascript
```