/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "giraffe";
animal["name"] = "Geoff";
animal.noises = []; // gave my animal object an array for storing noises
//console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "rawr";
noises.push("shh");
noises.unshift("huh");
noises[noises.length] = "ugh"; 
//console.log(noises.length); // prints 4
//console.log(noises[noises.length - 1]); // prints ugh
//console.log(noises); // prints all




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
//console.log(animal.noises);
noises.push('pew');
//console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
            
            dot notation, bracket notation 
    
 * 2. What are the different ways of accessing elements on arrays?
 
            bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
//console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
//console.log(animals);

var porcupine = {
    species: 'pokey',
    name: 'Pierre',
    noises: ['bah', 'mermer'],
};

var ostrich = {
    species: 'tall-y',
    name: 'Oiseau',
    noises: ['*crickets*', 'meepmeep',],
};

animals.push(porcupine);
animals.push(ostrich);

//console.log(animals); // prints the entire animal obejct, with the four animal objects inside, and their sounds 


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


var friends = [];
function getRandom() {
   return Math.floor(animal.length * Math.random());
}

friends.push(animals[getRandom()].name);
console.log(friends);
animal.friends = friends;


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
