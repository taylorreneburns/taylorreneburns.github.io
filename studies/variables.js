/* Declaration and assignment
var, let, const
Hoisting
Closure

* VARIABLES are containers for holding a value that may later change
they are reassignable
they have global scope unless they are hoisted inside a function
they are named using camelCase

to declare variables we use the keyword var followed by the name of the variable
*/

var name; // variable declared
console.log(name); // prints undefined

name = 'Taylor'; // variable assigned to a string
console.log(name); // prints the assigned string 

/* variables can point to strings, numbers, booleans, arrays, and objects
they can also be reassigned
*/

name = 'Burns';
console.log(name); // prints Burns

/* the 'name' variable has global scope of the application, so one can access it anywhere within one's appliation by referencing its name

Variables are accessed by copying said value i.e. String, Number, Boolean
or by a refernce to their location in memory i.e. the key/value pair of an Object, index of an Array

also certain keywords are reserved for variables with specific properties, such as let and constants

Constants are containers whose values can never change
they are blocked to the respective scope that they are declared and assigned in
and hoisted to the top of their block scope

Constants are created using the keyword const and must be assigned a value immediately
they cannot be unassigned or undefined
the convention, is to name constants using ALL UPPERCASE
*/

const HOMETOWN = "New Orleans";
console.log(HOMETOWN); // prints "New Orleans"

// Constants are not hoisted to the top of their enclosing block of code

function messaged(weather) {
    // message is not available here
    if(weather === 'sunny') {
        console.log(message); // throws error because it is not declared and intialized, it is scoped in the if-else blocks
        const message = 'Nice day, eh?';
        console.log(message); // prints Nice day, eh?
    } else {
        console.log(message); // throws error because it is not declared and intialized in this separate else block yet
        const message = 'Nice weather, for a duck!';
        console.log(message); // Nice weather, for a duck!
    }
    // msg not available here, because it's scoped the the if-else blocks
}

messaged(); // calls the function to print one a message about the weather based on the conditions of the weather


/* lets are containers for reassignable values are they are hoisted to their code block
they are not globally available like true variables
they are not unchangeable like constants
*/

console.log(onlyAvailableOutside); // print undefined because it is not initalized globally
console.log(onlyAvailableInside); // would print undefined because it is not initalized globally, only in block scope


const CITY = 'Chicago';
if(CITY === 'Chicago') {
    console.log(onlyAvailableInside); // prints undefined, let is hoisted to here

    var onlyAvailableOutside = 'not available';
    let onlyAvailableInside = 'available';

}
var onlyAvailableInside = "present!";


/* to review hoisting procedures
var is hoisted to global scope or  to the top of the function it is declared in
const has blocked scope and are hoisted to the top of their block
let is hoisted to the top of their code block
*/

/* Closure

enclosing a variable in a function body is a way to ensure access to it that variable in the parent scope
the body of a function can hold references to variables within its body
calling the function, will give us access to the variables of the parent scope
 */
 
 function makePerson(nameFirst, nameLast) {
  var friends = [];

  return {
    nameFirst: nameFirst,
    nameLast: nameLast,
    addFriends: function() {
      Array.prototype.push.apply(friends, Array.prototype.slice.call(arguments));
    },
    getNumFriends: function() {
      return friends.length;
    }
  };
}

makePerson();


/*above we are calling the function makePerson
which will return to us added friends and the number of friends added
it returns the friends first name and last name in an array because these arguments are accessed when calling the functions global variables
it also returns the number of friends by accessing the global varaible, which it is able to do with its properly encapsulated (by {} ) variable
*/