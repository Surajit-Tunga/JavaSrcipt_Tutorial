# JavaScript Tutorial

This repository may help you with a quick revision of JavaScript or to learn basic concepts of JS.

[Watch on YouTube](https://youtu.be/_eHc5K0zAPw?si=yOw26zs8aqjmOYiN)

---

## History of JavaScript

- Its original name was **Mocha**, then renamed to **LiveScript**, and finally **JavaScript**.
- Created by **Brendan Eich** in 1995.
- JavaScript is an **interpreted** language, executed line by line.
- It is a **high-level dynamic programming language** used for creating interactive effects within web browsers and enables interactivity.
- Responds to the user, fetches, and sends data to the server.

---

## Applications

- **React**: A library for building user interfaces.
- **Angular**: A platform for building mobile and desktop web applications.
- **Node.js**: Run JavaScript on the server.
- **Mobile Applications**: React Native, Ionic, NativeScript, etc.
- **Build Tools**: Webpack, Parcel, etc.
- **Desktop**: Electron, NW.js, etc.
- **3D Programming**: Three.js

---

## Runtime Environments

- **Chrome**: V8 Engine
- **Firefox**: SpiderMonkey
- **Edge**: Chakra

---

## Sample Codes

### Print to Console

```js
console.log("hello");
```

### Take Input

```js
prompt('Please Enter Your Name:');
```

### Create a Popup Alert

```js
alert("this is an alert");
```

### DOM Manipulation

```js
function myclick() {
    document.getElementById("para").innerHTML = 'Text Changed'; // DOM
    document.body.style.backgroundColor = 'black';
}
```

### Arithmetic Operators

```js
// +, -, *, /, %
```

---

## Variables

Used to store data.

```js
var a = "hello";
let b = 9;
let sms = "welcome";
console.log(a); // print variable

let num = 20;
console.log(num + 2); // 22

num = num + 5; // 25
num *= 2;      // 50 (shorthand)
num -= 5;      // 45
num++;         // 46
```

### `var`, `let`, `const`

1. **var**: Function or global scope. Allows re-declaration and updates within the same scope.
2. **let**: Block scope. Allows updates but not re-declaration within the same block.
3. **const**: Block-scoped variables that cannot be reassigned after their initial assignment.

---

## Data Types in JS

Two types: **Primitive** & **Non-Primitive**

### Primitive

- String
- Number (Integer, Float)
- Boolean
- Null (type: object)
- Undefined

_Primitive types are basic and immutable (cannot change their value)._

### Non-Primitive

- Object
- Array
- Function

---

## String

- Holds textual data, from a single character to a paragraph.
- Defined using single `'`, double `"`, or backticks `` ` ``.
- Concatenate using `+`.

```js
let str1 = "hello";
let str2 = ' world';
let str3 = `!!`;

console.log(str1 + str2 + str3); // hello world!!

let nolike = 100;
let str4 = `this is liked by ${nolike} people`;

console.log(str4); // this is liked by 100 people
```

---

## Booleans

```js
let doihavemoney = true; // if "true" (string), then it's a string
```

---

## Null & Undefined

```js
let x = null; // value is null
var username; // undefined (no value assigned)
```

---

## Typeof Operator

Tells about the data type.

```js
typeof 2; // "number"
```

---

## Comparison Operators

- `==` Checks value equality.
- `===` Checks value and type equality.
- `!=` Checks value inequality.
- `!==` Checks value and type inequality.
- Other: `>`, `<`, `<=`, `>=`

```js
console.log(4 == 4); // true
```

---

## If-Else Syntax

```js
let age = 18;

if (age>=18) {  // condition (.......)
    console.log ("You are an Adult");  // statement {......}
} else {
     console.log ("You are not an Adult");
}
```

---

## Logical Operators

- **AND** (`&&`): All conditions must be true.
- **OR** (`||`): Any one condition must be true.
- **NOT** (`!`): Inverts the boolean value.

```js
let agee = 25;
let hasDrivenLicense = true;

if (agee >= 18 && hasDrivenLicense) {
    console.log("Can Drive");
} else {
    console.log("Can't Drive");
}

let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
} else {
    console.log("Week Day");
}

console.log(!true); // false
```

---

## Functions

Blocks of reusable code.

```js
// Function Definition
function myFunctionName() {
    // statements
}

// Function Call
myFunctionName();

// With parameters
function sum(a, b) {
    console.log(a + b);
}
sum(5, 10); // 15

// Return statement
function getSum(a, b) {
    return a + b;
}
let ans = getSum(5, 10);
console.log(ans); // 15
```

---

## Loops

Run code multiple times based on condition.

### While Loop

```js
while (condition) {
    // statement
}

let count=0; // initialization 
while (count<10) {  // condition
    console.log(count); //satement
    count=count+1; //update
}
```

### For Loop

```js
for(initialization; condition; update) {
    // satement
}

for (let c=0; c<10; c++){
    console.log(`${c+1}`)
}
```

---

## Callbacks

A function passed as an argument to another function, invoked inside the outer function.

```js
function greeting(name) {
    console.log('hello '+name);
}

// Function that takes callbacks:

function userinput(Callback) {
    var name= prompt('Please Enter Your Name:');
    Callback(name);
}

// cal the function with callback:

userinput(greeting);
```

---

## Anonymous Functions

Functions without a name. Used as arguments to other functions or assigned to a variable.

```js
(function () {
    // body
})();
```

---

## Objects

Objects are used to group multiple values together in key-value pairs.

### Syntax

```javascript
let product = {
    company: 'Apple',  // key: value,
    item: 'Phone',
    price: 10000
}; // ; is must here.
```

### Accessing Object Properties

- **Dot notation:**
  ```javascript
  console.log(product.company);  // Output: Apple
  ```
- **Bracket notation:**
  ```javascript
  console.log(product['company']); // Output: Apple
  ```

- **Full object:**
  ```javascript
  console.log(product);  // Displays the full object
  ```

### Modifying Objects

- **Delete a property:**
  ```javascript
  delete product.price; // Deletes the price property
  ```
- **Add a property:**
  ```javascript
  product.cost = 20000; // Adds 'cost' property to the object
  ```

---

## Arrays

Arrays are lists of values. They start with a 0 index and can hold any type of value.

> The type of an array in JavaScript is `object`.

### Syntax

```javascript
let myarr = [1, 'a', null, true, { company: 'Apple' }];
console.log(typeof(myarr)); // Output: object
```

### Accessing Array Elements

- **Access by index:**
  ```javascript
  console.log(myarr[0]); // Output: 1
  console.log(myarr[4].company); // Output: Apple
  ```

---

## For-Each Loop

You can use the `forEach` loop to iterate over arrays.

```javascript
myarr.forEach(function(element, index) {
    console.log(index, element);
});

// example:
let foods = ['rice', 'dal', 'chiken'];

 // if we want to print every element of food:

 foods.forEach(function(food){
    console.log(food);
 })
```

# JavaScript Array Methods & Arrow Functions

## Array Methods

- **push**: Adds elements to the end of the array.
- **pop**: Removes the last element from the array.
- **shift**: Removes the first element from the array.
- **unshift**: Adds elements to the front of the array.
- **splice**: Adds or removes elements at a specific index.
- **toString**: Converts the array to a string.

...many more array methods exist!

### Example Usage

```javascript
let arr = [1, 2, 3];
arr.push(4);      // [1, 2, 3, 4]
arr.pop();        // [1, 2, 3]
arr.shift();      // [2, 3]
arr.unshift(0);   // [0, 2, 3]
arr.splice(1, 1); // [0, 3]
arr.toString();   // "0,3"
```

## Arrow Functions

A concise way to write anonymous functions.

```javascript
let sum = (a, b) => {
  return a + b;
}

let sum2 = (a, b) => a + b;

let sqr = num => num * num;
```

Arrow functions are especially useful for short callbacks and functional programming.

---

For more information, read the [JavaScript documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript).