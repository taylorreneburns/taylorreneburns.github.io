/*Number - check
String - check
Boolean - check
Array
Object
Function
undefined - check
null - null
NaN - check
Infinity and -Infinity (Google them if you don’t know!) - check
What is the difference between simple and complex data types? - check


// DATA TYPES are the various types of data that are the foundation of javascript
There are simplex and complex datatypes
    simple or complex is determined by if its immutable and how its data is refereneced
    this is because variables can have a fixed amount of memory, and they can hold primitive datatypes because their size is defined - atomic
    but they can hold only references to values of complex types because they size is dynamic over time - immutable
    
The simple or primitive data types are string, boolean, and number
    they are simple because they only not hold one value and operations on values returns new simple values, they do not alter the original value
    are also simple because they copied by value, when assigning or passing
    
    
// Numbers are data types that represent numeric data
*/

var age = 24;
console.log(age);

/* Above, one has assigned to the age variable, a value of 24, which is a Number datatype

Infinity is a numeric value that represents positive infinity.
-Infinity is a numeric value that represents negative infinity.
Infinity is a property of the global object so it is avaible in all scopes 
This value behaves mathematically like infinity
*/

console.log(1 / Infinity); // prints 0



 //Operations on primitives return NEW primatives


var firstName = 'Taylor';
var fullName = firstName + ' Burns';
console.log(firstName); // prints 'Taylor'
console.log(fullName); // prints 'Taylor Burns'

//Numbers are primitive data types that represent numeric data


var total = 0; // assigns the number 0 to the variable total
console.log(total + 10); // prints 10


//there is a series of arithmetic operations that can be performed upon them



/*Boolean datatype
these datatypes use logic to determine and represent if a value is true or false
it operates like an on and off switch
*/

var isMonday = true; // assigns true to "isMonday" variable
console.log(isMonday); // prints true

isMonday = false; // reassigns false to "isMonday" variable
console.log(isMonday);

//You can use the Boolean() function to find out if an expression (or a variable) is true:

Boolean (10 > 9); // passes in two numbers, evaluates the truthiness of the statement, and prints true




/* NaN(not-a-number)
NaN is a property of the global object.
NaN compares unequal operators ==, !=, ===, and !==
Number.isNaN() and isNaN() are methods that can be usede to most clearly determine whether a value is NaN
*/


console.log(isNaN(NaN));         // true
console.log(isNaN(9)); // prints false



/* String Datatypes are character data that must be inclosed with '' single quotes or double quotes
a string represents characters strung together
*/

var sentence = 'This is a Sting'; // assigns the variable k the value a value encolsed in single quotes

// Strings can also be accessed like an array, if you use array-syntax or bracket notation you can get individual characters from the string

console.log(sentence[0]); // prints T to the console

console.log(sentence[sentence.length - 1]); // prints g to the console


/* Undefined
is a global property that represents the primitive value of undefined
it is a primitive type
This data type has no value or the variable is uninitialized.
*/

var x;
console.log(x); // This would print to the console undefined because x is not assigned a value, thus it is given undefined as its value by default

/* null Datatype
//The value null is stored with a literal: null, which means that the variable points to neither a primitive nor a complex data type
it represents an absence
it does not act as a label or identifier 
it is its own semi-non-existent property; it exists only to express that it is not valid 
*/

function getVowels(string) {
  var exists = string.match(/[aeiou]/gi); // searches for and tries to match all vowels in one's string 
  if (exists === null) { // if no vowels exist in one's string, 
    return 0; // one wil return 0
  }
  return exists.length; // otherwise will create a new variable that is a string and return the # of all the vowels  found in that string
}

console.log(getVowels('apple')); // expected output: 2



/*The complex data types are arrays, objects, functions, undefined, null, NaN
    they are complex becaue they store the values of multiple data types, hold one value and operations on values returns new simple values, they do not alter the original value.
    are also copied by reference, when assigning or passing
*/


/*Objects use key/value pairs which define their characteristics
below is the template for creating an object literal'
are used to store multiple pieces of information about one subject
*/

var backpack = {
    color: 'blue',
    style: 'waterproof',
    dimensions: {
        height: '69cm',
        width: '45cm'
    },
    colorsAvailable: ['red', 'yellow', 'blue']
}; 
console.log(backpack.style); // prints 'waterproof' 


/* objects can contain any number of key/value pairs
and key/value pairs can also contain complex data as well such as objects and arrays
*/


/* ARRAY DATA TYPES are used to store multiple values in a single variable
below is the template for creating an array literal
*/

var cars = ['Accord', 'ModelX', 'Hurracan', '458', 'GTR'];
console.log(cars); // prints all the cars



// FUNCTIONS are a set of statements that performs a task
// created using the template below 

function square(number) {
  return number * number;
}

/* we declare its creation using 'function'
name it using 'square'
pass it a parameter to operate on later
and return the arguments, to be passed in place of the parameters later 
*/

square(10); 

/* functions can be calledby passing arguments
here we pass in 10 so that the function can perform 10 * 10 and return 100
*/

/*functions can also be created by a function expression
For example, the function square could have been defined as:
*/

var squared = function(number) { return number * number; }; // here the function is stored on a variable instead of on a function
var q = squared(4); // here we perform the squared function on 4, return the value 16, and stores the value on a variable as an expression of the function

console.log(q);

//accessing simple data types by reference 

function get(name, array) {
    var nombre = 'yours';
    var array2 = [1, 2, 3, 4];
    console.log(nombre); // prints 'yours' 
    console.log(array2);  // print [1, 2, 3, 4] 
}
get(); // calls the function


