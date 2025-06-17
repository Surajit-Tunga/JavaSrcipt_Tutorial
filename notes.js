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

// to take input:

prompt('Please Enter Your Name:');

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

// Null: defined that value is null; its type is object 


// undefined:
var username; // this variable has undefined value, no value is assigned.

// typeof Operator: tells about the datatype 
//syntex


typeof 2  // number

/* Comparison Operator: 
== Checks value equality.

eg. console.log(4==4);  -----true.

=== checks value and type equality both.

!= Checks value inequality.
!== checks value and type equality both.

Other: >, <, <=, >=..
*/

// if-else syntex:

let age = 18;

if (age>=18) {  // condition (.......)
    console.log ("You are an Adult");  // statement {......}
} else {
     console.log ("You are not an Adult");
}

// Logical Operator:
// AND (&&): all condition must be true for output true

let agee=25 ;
let hasDrivenLisence= true;

if (age>=18 && hasDrivenLisence) {
    console.log("Can Drive");
} else {
    console.log ("cant Drive");
}
//  OR (||): only one condiation must be true for true output

let day="Saturday";
if (day==="Saturday" || day==="Sunday") {
    console.log("weekend");
} else {
    console.log("Week Day");
}
//  NOT (!): Inverts the boolean value of condition

console.log(!true); // false


// Functions: Blocks of reusable code.

// Function Defination:
function myfunctionName() {
    //------statement 
}

// function call:

myfunctionName();


// we can define function with parameters
function sum(a,b) {
    console.log(a+b);
}
sum(5,10); // 15

// return:

function getsum(a,b) {
    return(a+b);
    // statement after return will never execute
}
let ans=getsum(5,10);
console.log(ans);  // 15

// loops: Code that runs multiple time based on condition

// while loop: Repeating a block of code while a condition is true.

while (condition) {
    // statement
}

let count=0; // initialization 
while (count<10) {  // condition
    console.log(count); //satement
    count=count+1; //update
}

// For Loop:

for(initialization; condition; update) {
    // satement
}

for (let c=0; c<10; c++){
    console.log(`${c+1}`)
}


// Callback: It is Function passed as an argument to another function, which is then invoked inside the outer function to complete some action.
//Syntax:

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

// Anonymous Function: Functions without name. Used as argument to other funvtion or assign to a variable.

// Syntex:
(function(){
    //body
})

// Objects:  Group of multple values together in key-value pairs.
// Syntex:

let product ={
    company: 'Apple',  // key: value,
    item: 'Phone',
    price: 10000
};   // ; is must here.


console.log(product)  // gives the full object
// to access:
//dot notation:
console.log(product.company)  // Apple
// using []:
console.log(product['company']) // Apple
console.log(product)  // gives the full object
 