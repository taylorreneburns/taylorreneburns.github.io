// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
if (Array.isArray(value)) {
return true;

} else { return false;
    
}
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //

if (Array.isArray(value)) return false;
if (value === null) return false;
if (value instanceof Date) return false;
if (typeof value === "object") return true;

else return false;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
if (Array.isArray(value)) return true;
if (value === null) return false;
if (value instanceof Date) return false;
if (typeof value === "object") return true;

else return false;
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //

/*typeof value;
console.log(typeof value);
//if (value instanceof Array) return typeof value;
//if (typeof value === []) return value;
//if (Array.isArray) return Array.isArray(value);
//if (value instanceof Array) return value;

if (value === null) { 
    return typeof value
};
if (typeof value === undefined) return typeof value;
if (typeof value === "number") return typeof value;
if (typeof value === "boolean") return typeof value;
if (typeof value === "number") return typeof value;
if (typeof value === "function") return typeof value;
if (value instanceof Date) return typeof value;
//if (typeof value === {}) return typeof value;

//Affected
//if (value === Object(value)) return typeof value;
//if (Object.getPrototypeOf)  return typeOf value;

//not affected
//if (typeof value === 'object' && value.constructor === Object) return typeof value;
//if (Array.isArray(value)) return typeof value;
*/

if (Array.isArray(value)) {
    return "array";
} if (value === null) {
    return "null";
} if (value instanceof Date) {
    return "date";
} if (typeof value === "object") {
    return "object";
}  if (typeof value === "number") {
    return "number";
} if (typeof value == "string") {
    return "string";
} if (typeof value === "function") {
    return "function";
} if (typeof value === "boolean") {
    return "boolean";
} if (typeof value === "undefined") {
    return "undefined";
}
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
