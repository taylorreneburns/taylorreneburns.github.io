/*Operators take action on some given value
Operators are classified by what they do and how many operands they require
operatands are the values the operators act on
Unary requies 1, binary requires 2, and ternary require 3 

The types of operators are: 
Assignment - check
Arithmetic - check
Comparison - check
Logical - check
Binary (!, typeOf, -) - check
Turnary (a ? b : c) = conditional - check

string - check
unary - check


Comparison operations compare two values (two operands) and evaluates their relationship to a boolean value of true or false
*/

console.log(1 > 2); // prints false
console.log(1 < 2); // prints true

//here we compare two numbers, evaluate the comparison using a logical operator, and return true or false respectively 


console.log(2 === '2'); // prints false
console.log(2 === 2); // prints true


/*here we compare two numbers, evaluate the comparison using a strict equality symobol (which happens to be composed of 3 characters), and return true or false respectively 
strict comparisons take into account value and type

Unary operators require one value
examples are =, typeof, !, var, if
*/
var i = 1; // = assigns value of 1 to i 
console.log(i); // 

console.log(typeof 1); // prints "number" as the data type of 1
console.log(!true); // prints false
console.log(!null); // prints defined? 

var contact;
console.log(contact); // prints the latest value of the variable contact as it was assigned before the given console.log to be printed 

if (contact) {
    console.log('we have contact');
} // prints the value stored under the variable contact if there is a variable has been declared

/*Logical operators are &&, ||, and !

&& is the AND (binary, ternary?) operator, thus it compares two values and both (or more?) conditions must resolve to true in order to execute the code block that follows
*/

console.log(1 < 2 && 1 > 0); // both are true, so code block would execute


//|| is the OR (bunary, ternary?) operator, thus it compares two values and at least one condiiton must resolve to true in order to excute the following code block
console.log(2 < 2 || 1 > 0); // first evalutes to false, but second evaluates to true, so code block would execute
console.log(2 === 2 || 1 > 0); // first evaluates to true, so executes and does not compare the second

//! is the bang operator, thus if flips the truthiness of the value

console.log(2 !== 2); // prints false
console.log(2 !== '2'); // prints true
console.log(!true); // prints false
console.log(!false); // prints true

//!! doubly flips the truthiness of the value 

console.log(true); // prints true
console.log(!true); // prints false
console.log(!!true); // prints true

/*Arithmetic operators are +, -, *, /, and %,
they allow one to perform the expected arithmetic operations on numbers
% returns the quotient, the remainder of two numbers divided 
*/

console.log(5 + 5); // prints 10
console.log(5 - 5); // prints 0
console.log(5 * 5); // prints 25
console.log(5 / 5); // prints 1

console.log(i++); // passes in 1, then adds 1 to it, and prints 2
console.log(++i); // adds 1 to i then prints 2
console.log(i--); // subtracts 1 from i
console.log(-i); // prints -1

/* String operators are comparison operators that can be used on string values
and strings also work with the concatentation operator (+)
concantentation takes two strings values and returns a string that joins the operand strings
*/

var a = 'Lil Uzi';
var b = 'Vert!';
console.log(a + ' ' + b); // prints 'Lil Uzi Vert!'

//same as 

var message1 = "Lil";
message1 += " Boat"; // is an assignment operator 
console.log(message1); // prints "Lil Boat!"

/* Assignment operators assign value while maybe performing a function 
are =, +=, -=, *=, /=, %=, 
and <<=, >>=, >>>=, &=, ^=, |=, **=


the ternary operator takes three commands and is frequently used as a shortcut for an if statement 
syntax is condition ? expression1 : expression2
if the condition is true the, operator returns the value of expression1 
if the condition is not true, it returns the value of of expression2
*/

var age = 24;
var canDrinkAlcohol = (age > 21);

function inebriate(age) {
    return (canDrinkAlcohol ? "True, over 21" : "False, under 21");
}

//above one returns the determination of whether or not var can drink alcohol as weighed by their age using the ternary operator 

console.log(inebriate(canDrinkAlcohol)); // "True, over 21"

// then one prints the determintation of that function 