// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //console.log('hi');
  
 

 var array = [];
 if (start > end) {
     
     for (var num = start; num > end - 1; num--) {
         console.log(num, 'this is num in our first loop');
         array.push(num);
     } 
 } else if (start < end) {
     console.log(start, 'this is start')
     console.log(end, 'this is end');
     for (var num2 = start; num2 < end + 1; num2++) {
         console.log(num2, 'this is num in our secondloop');
         array.push(num2);
     }
 }
 return array;
 
 /*
 i want to create an array
 then i want to see if start is greater than end
 then i want to loop from start
 */
 
 
/* if (start > end) {
  for (var num = end; num > start - 1; num--) {
      array.unshift(num);
  }
  }
  return array;
*/

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}