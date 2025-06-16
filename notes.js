/*  History of Javascript:

It's original Name is Mocha, then renamed to LiveScript and finaly javascript.
Created by Brendan Eich in 1995.

It is interpreted Language, Executed line by line.
It is a high level dynamic programming language used for creating interactive effects with in web browsers, enables interactivity.
Responds to the user, Fetches and Sends Data into server.



Applications:

React: A library for building User Interfaces.
Angular: A platfrom for building mobile and desktop web application
Many more............

Node.JS: Run the server
....

Mobile application:React Native,Ionic,NativeScripts.....

BuildTools: Webpack, Parcel...

Desktop: Electron, NW.js...

3D Programming: ThreeJS



Runtime Environment:

For Chrome V8: V8 is a tool in chrome which runs JS
For FireFox SpiderMonkey
For Edge Chakra


*/

// Sample codes:

// to print

console.log("hello");

// to create a pop up alert 

alert("this is a alert")

// DOM manupulation 

function myclick() {
            document.getElementById("para").innerHTML='Text Changed'; // DOM 
            document.body.style.backgroundColor='black';
        }

// Arithmetic Operator:
// +,-,*,*,%

// Variable: Used to Store Data

var a ="hello";
let b=9;
let sms="welcome";

//to print a variable

console.log(a);

// opretion with variable:

let num=20;

console.log(num+2)  // 22

num = num+5 //25  by considering initial value of num !!!

//shorthand 

num *=2  //40
num-= 5 //15
num++; // +1


/*  var, let, const

1. var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.

2.let: Declares variables with block scope, allowing updates but not re-declaration within the same block.

3.const: Declares block-scoped variables that cannot be reassigned after their initial assignment.
*/

/* Datatypes in JS:

2 type : Primitive & Non Primitive

Primitive: String, Number, Boolean, Null, Undefined.
--> Primitive type in Js is the basic Data types that are not objects and have no methods. and they are immutable, means we cannot change their value.

I. Number:  Integer (Negative no, whole num), Float (3.14)
NonPrimitive: Object, Array, Function.





*/
/*
String: 
-->It Holds textual data, anything from a single chracter to a paragraph.
--> Can Be Defined using Single or double quotes or backticks ``.
--> We can concatenate Strings using Operator: 
    eg. "Hello" + "World"= "Hello World"
*/

// Lets declaree a String:

let str1="hello";
let str2=' world';
let str3=`!!`;

console.log(str1+str2+str3); // hello world!!

let nolike=100;
let str4=`this is liked by ${nolike} people`; 

console.log(str4);// this is liked by 100 people. for this we use `` this symbol. with "" or '' it is not possible.

// Booleans : True / false

let doihavemoney= true; // if we write "true" then its a string.

