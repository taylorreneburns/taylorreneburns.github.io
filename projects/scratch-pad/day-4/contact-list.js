// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    let contact = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    };
    return contact;
} 

makeContact();

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts= [];
    

// = String(thing); returns whatever as a string 

// see closure on greenlight
//see functions also
//functions as first class

// did i code a function thats impossible to execute below?

    /////function printAllContactNames(contacts) { // function //
        /////return { //returns contact list 
            /////all: function(contacts) { // all API
                /////return contacts.map(function(contact) { // creates list with full names here
                    /////return contact.nameFirst + ' ' + contact.nameLast + '\n'; // creates full names formatted as a string // add new line character here // you can also break up a code line within a text string with a single backslash:
                /////})
                /////.join(", "); // add or remove new line character here?
            /////} 
        /////};
    /////}
    
   //printAllContactNames(contacts));
    /////printAllContactNames(); // where is the best place for me to pass the funct
    //contacts.printAllContactNames(); // why is it saying that this is not a function when i remove the commenting out
        
    return {
         //we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
                contacts.push(contact);
                // Array.prototype.push.apply(contacts, Array.prototype.slice.call(arguments));
                
        },
        findContact: function(fullName) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName) {
                    return contacts[i];
                }
                else if (i > contacts.length) {
                    return undefined;
                }
            }
                
        },
        removeContact: function(contact) {
            contacts.pop(contact);
        },
        printAllContactNames: function(){
           let output = "";
           for(var i = 0; i < contacts.length; i++) {
               output += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
           }
           output = output.slice(0, -1);
           return output;
       }
   };
        }
        

/* function printAllContactNames() {
    console.log(allAPI.push()); // returns all the APIs
  //  allAPI = ? // need to group the titles of the APIs
    return full names; // returns a string formatted with all the fullnames separated by a linebreak
*/

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}