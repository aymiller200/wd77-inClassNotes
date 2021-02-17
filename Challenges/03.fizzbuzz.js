/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

var FB = 10;

if (FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz');
} else if (FB % 5 === 0){
    console.log('Buzz');
} else if (FB % 3 === 0){
    console.log('Fizz Buzz');
} else {
    console.log('This is not divisible by five or three');
}


switch (true) {
    case (FB % 3 == 0 && FB % 5 == 0) :
        console.log('Fizz');
        break;
    case (FB % 5 == 0) :
        console.log('Buzz');
        break;
    case (FB % 3 == 0) :
        console.log('Fizz Buzz');
    default: 
        console.log('This is not divisible by five or three')
}

FB % 3 == 0 && FB % 5 == 0 ? console.log('Fizz Buzz') :
FB % 3 == 0 ? console.log('Fizz') : 
FB % 5 == 0 ? console.log('Buzz') :
console.log('This is not divisible by five or three'); 


