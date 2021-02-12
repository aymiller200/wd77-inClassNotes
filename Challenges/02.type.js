// Create an Object that contains a string, number, boolean, and object.
// Console.log the type of one of the values in the object.

let blancheCat = {
    name: "Blanche",
    age: 2,
    mean: true,
    pets: ['Suge','Neil','Blanche','Dad'],
    objTwo: {
        one: 'string'
    }
}

console.log(typeof blancheCat.age);


/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let typeValue = typeof blancheCat.age;
console.log('value:', typeValue);

 if(typeValue === 'string') {
    console.log('This value is a string');
} else if (typeValue ==='number') {
    console.log('This value is a number');
} else if (typeValue === 'boolean') {
    console.log('This value is a boolean');
} else if (typeValue === 'object'){
    console.log('This value is an object');            
} else {
    console.log('What are you?');
}


