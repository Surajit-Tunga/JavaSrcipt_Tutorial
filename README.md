<!-- # JavaSrcipt_Tutorial

This Repository may help you to a quick rivision of JavaScript or to learn Basic Concepts of JS. -->

# JavaScript Tutorial

## History of JavaScript

- **Original Name:** Mocha  
- **Renamed to:** LiveScript  
- **Final Name:** JavaScript  
- **Created by:** Brendan Eich in 1995

JavaScript is an **interpreted language**, executed line by line. It is a high-level, dynamic programming language used for creating interactive effects within web browsers and enables interactivity by responding to the user, fetching, and sending data to the server.

---

## Applications of JavaScript

- **Frontend Libraries/Frameworks:**
  - **React:** A library for building user interfaces.
  - **Angular:** A platform for building mobile and desktop web applications.
  - **Many more...**

- **Backend:**
  - **Node.js:** Allows JavaScript to run on the server.

- **Mobile Application Development:**
  - **React Native**
  - **Ionic**
  - **NativeScript**

- **Build Tools:**
  - **Webpack**
  - **Parcel**

- **Desktop Applications:**
  - **Electron**
  - **NW.js**

- **3D Programming:**
  - **Three.js**

---

## JavaScript Runtime Environments

- **Chrome:** V8 (JavaScript engine)
- **Firefox:** SpiderMonkey
- **Edge:** Chakra

---

## Sample Code

### Printing to Console

```js
console.log("hello");
```

### Creating a Popup Alert

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

---

## Operators

- Arithmetic: `+`, `-`, `*`, `/`, `%`

---

## Variables

Variables are used to store data.

```js
var a = "hello";
let b = 9;
let sms = "welcome";
```

### Printing a Variable

```js
console.log(a);
```

### Operations with Variables

```js
let num = 20;

console.log(num + 2); // 22

num = num + 5; // 25

// Shorthand
num *= 2; // 50
num -= 5; // 45
num++;    // 46
```

---

### `var`, `let`, and `const`

- **var:** Declares variables with function or global scope and allows re-declaration and updates within the same scope.
- **let:** Declares variables with block scope, allows updates but not re-declaration within the same block.
- **const:** Declares block-scoped variables that cannot be reassigned after their initial assignment.

---

## Data Types in JavaScript

JavaScript has two main types: **Primitive** and **Non-Primitive**

### Primitive Types

- **String**
- **Number** (Integer, Float)
- **Boolean**
- **Null**
- **Undefined**

_Primitive types in JS are the basic data types that are not objects and have no methods. They are immutable, meaning their value cannot be changed._

### Non-Primitive Types

- **Object**
- **Array**
- **Function**

---

#### Example Numbers

```js
let integerNumber = 23;
let floatNumber = 3.14;
```

---

## Further Reading

Explore the code samples and explanations above to start learning JavaScript!