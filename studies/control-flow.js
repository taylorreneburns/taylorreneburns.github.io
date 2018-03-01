/*If
Else-if
Else
Switch

conditional statements allow us to manipulate the order of operations of our application 
or control its flow rather

our applicatipn will decide what to do based on true and false evaluations of these conditions

there are three ways to do this, with if-else statements, with their chains, if-elseif-else, and  with switch-statements

// if, else-if, and else Statements
one starts a conditional block of code using an if statement
then followed by a chosen number of chained together any number of else-if statements (one, none, or more statements)
and you can append a default else to the end of the chain

The template of conditional statements is 
if keyword, condition in (), {code block}, else keyword {code bloc}
*/

var condition = true;

if (condition) { 
    // block of code executed if the condition is true 
} else { 
    // block of code executed if the condition is false 
}

// completed example

var raining = true;

if (raining === true) {
  console.log('it is raining');
} else {
    console.log('nice weather');
}

var happy = false;

if (!happy) {
  console.log('high vibrations');
} else if (1) { 
    console.log('huh');
} else {
    console.log('low vibrations');
}

/* switch statements operate very similar to else if statements except they can be more organized visually 
and use case and breaks to control the flow for our application 

The switch statement takes an expression in () to be evaluated
and if that expression’s value matches a case clause
it will execute the respective statements
*/

var sad = true;
var happier = false;

switch (sad) {
    case happier:
    case 'purple':
        console.log('high vibrations');
        break;
        
    case 1:
        console.log('huh');
        break;
        
    default:
    console.log('low vibrations');
}

// using switch statements we must include a break statement to avoid creating an infinite loop