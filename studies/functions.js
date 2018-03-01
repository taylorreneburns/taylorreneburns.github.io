/*The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
What’s the difference between a function’s parameters and arguments PASSED to a function?
What’s the syntax for a NAMED function?
How do we assign a function to a variable?
Functions can OPTIONALLY take inputs and OPTIONALLY return a single value, how do we specify inputs, and how do we return a value?
Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
Closures: Functions form closures around the data they house. 
NOTE: Primitive (simple) values are passed to a function by copy, complex by reference. Try it!


Functions are data that store reusable code
they allow us to encapsulate a block of code, or set of instructions
and allow us to execure that code when and as long as we want

Two phases of using Functions
    first we must declare/define - creating the Function
    then we must invoke/call/execute - use the Function
    
A function's parameter is it's placeholder for specific inputs that we will pass in later, which are known as arguments
it gives the function the structure to take on a certain number or type of argument 

below is the template for creating a named function and invoking it
*/


function functionName(parameterOne, parameterTwo) { 
   // function body: code goes here, NOTE indentation!
}

functionName(); // invoked function would print undefined by default
var functionVariable = functionName(); // should pass parameter here after defining it
console.log(functionVariable); // assigns a function to a variable

/*
Before javascript runs a script, it sweeps global scope and function scope for any variables stored in memory 
then it hoists that function and any variables 

this allows functions to be called before they are declared
which categorizes them as anaonymous functions

anonymous functions are usually written while being passed into other functions
*/

function printAlteredString(string, alterString) { 
    console.log(alterString(string));  // prints 'HELLO';
}

printAlteredString();

/*above we create a function printAlteredStrings
that takes a parameter that is a string titled 'string'
and a parameter that is a function titled 'alterString'
then we pass 'string' into the function
and print the result of that function
which is the world 'hello' converted to all uppercase 

being able to pass a function into a function makes it a first class Object
*/

//Function Expresions are essentially functions stored on a variable 

console.log(add); // prints undefined
const add = function(numOne, numTwo) { // 
    return numOne + numTwo; // returns the value
    };
    
const sum = add(2, 4); // specifies inputs for numOne and numTWo, when declared, are the arguments that will be passed into the function in order to allow the function to actually generate some data
console.log(sum); // prints result of 6


/*above we assign the function add to a constant
function expressions can only be called after being assigned

being able to assign Function definitions to a variable or constant is another exmaple of a first class Object

in order to use a function, one must call it
*/

add(); // here one calls the function one created earlier

/*Scope refers to where a chosen variable or constant is accessible
The two types of scope are global scope and local
global scope is anything not inside of a Function



local scopes are local to a designated function body // closure 

when variables are enclosed in a scope, they are typically not accessible by parent scopes, including global scope
However, functions can access variables in the parent scopes

 If an object returned from the function 
 is being referenced to, in memory somewhere else,
 that closure stays ALIVE and that data can continue to exist in said function's body due to closure 
 
 
 
 // global scope is visible within the scope of doSomething() //
 */
 
let z = 26;
function doSomething() {
  z = 2;
}
console.log(z); // prints 26
doSomething();  // calls the function, which alters one's variable z
console.log(z); // prints 2




/* Nested scope 
functions can be created with other functions inside of them for the outer function to perform
*/

function doSomethingelse() {
  let a = 1;                    // loose variable declaration
  function doSomethingAgain() {
      a = 2;
  }
  doSomethingAgain();
  console.log(a); // prints 2
}
doSomethingelse(); // prints nothing because the let variable is defined inside the function and only available inside the function, not globally available

//accessing simple data types by reference 

function get(name, array) {
    var nombre = 'yours';
    var array2 = [1, 2, 3, 4];
    console.log(nombre);
    console.log(array2);
}
get(); // prints 'yours' by copying value and [1, 2, 3, 4] by referencing nombre