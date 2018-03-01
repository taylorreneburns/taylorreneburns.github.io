/*Explain while, for, and for-in loops
*Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
*Loop over an Array, forwards and backwards
*Loop over an Object, forwards and backwards ( hint: keys = Object.keys(myObject); )
*/


//Explain while loops

/*while loops are initiated using the keyword while
*followed by () which one will give a condition
*/
    var count = 0;
    while (count < 6)
    
//and the block of code to execute;

                { console.log(count); 
                    count++; }
                
/*only while that condition is true will the code be executed
we have also included an exit command that will eventually make the condition false 
to avoid creating an infiinite loop

above is the complete code for a while loop that counts forward from 0 to 6

below is the code to count backward from 6 to 0
*/

    count = 6;
    while (count > 0) {
        count--;
    }









/*Explain for loops
*for loops are used to iteriate over an array []
*/

var tesla = ["Model X", "Model S"];

/*for loops are initiatied using the keyword for
*followed by () which one will give a condition with 3 statements separated by ;
*/
    var i = 0; // initialize a variable, here we initialized i to 0
    i < tesla.length; // condition to stop looping
    i++; // incrementing our variable by 1 each loop
    
    for (var i = 0; i < tesla.length; i++) // {code to execute}
    
//and the block of code to execute;

                { 
                    console.log(tesla[i]); 
                    
                }

/*this code initalizes a variable at zero, 
verifies if our condition is true, 0 < 2
and increments our variable if it is true, 1 < 2, 
and executes our block of code, prints the string Model X at position 0 in names array 
if the condition is not true, the loop stops 

above is the code to loop over an array forwards 

below is the code to loop backwards over an array
*/

    for (var i = tesla.length - 1; i > -1; i--) {
        console.log(tesla[i]);
    }









/*Explain for-in loops 
*for in loops are used to pull keys out of an object one by one
*/
    var object = {
        name: "Taylor",
        age: 24,
        aloeVeraJuice: true
    };
    
/*for in loops are initiaited using the word for and a set of () which one will refer to a key in an object
followed by a block of code to execute
*/

    for (var key in object) {
        
        console.log(object[key]);
    }

/*keys are essentially strings and it will allow one to print the value at the keys position one by one


SO above, the variable key is populated, one by one, with the keys of the person Object. We use those keys to get the values from the person Object.

objects use array-syntax, using brackets to pass a the name of a known key 
object keys are not to be used with dot-syntax

above is the code to loop forward over an object

below we will loop backwards over an object

    to be loop backwards, one must loop in the opposite direction of the forward direction
    and that forward direction must be an explicit numbered order
    well, in order to get a number ordered on on object, one must store that object on an array as arrays have built in order via index position, but objects have no such property 
*/
    var someArray = [];
    
    for (var key in object) {
        someArray.push(object[key]);
    }
    
  /*above one has created an array, pushed the object values at each key into an array one by one, and numbered those values in an index
    next one should loop over that array in reverse
    */
    
    for (var i = someArray.length -1; i > -1; i--); {
        console.log(someArray[i]);
    }
    
    /*and print the array at the index position, while counting down, to get the value as it was stored from the object key
    in reverse
*


/*Loop over an Object, forwards and backwards ( hint: keys = Object.keys(myObject); )
    
NOTE: Object.keys() is a method that returns that objects properties/keys
*/
    console.log(Object.keys(object));
    
/*it can also be used on arrays to return its values
since it is a method, a reverse method can also be chained onto it
*/

console.log(Object.keys(object).reverse());

/*
you may or may not have to pass the value into the reverse method ??


    Object.keys(object); gets the keys in an object
    Object.keys(tesla); // gets the values in an array
*/
    
