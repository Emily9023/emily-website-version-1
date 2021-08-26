let name ='John'; //string literal
let age = 30; //Number Literal
let lovesCats = true //Boolean literal
let color = null; //Null
let list; //Undefined

console.log(age);

//Array Literals

const numbers = new Array(1,2,3,4,5,6);

const color = ['red', 'blue', 'green', 'yellow'];

colors[4] = 'black';

colors.push('white'); //adds to last

let lastColor = colors.pop(); //removes from array but assigns the value to the variable

colors.shift(); //removes first
colors.indexOf('yellow'); //index of the value

console.log(numbers[2]); //3

//Object Literals ---------------
const person = {

    firstName: "John",
    lastName: "Smith",
    age: 30
    pets: ['dogs', 'cats'],
    address: {
        street: '123 STreet',
        city: 'houston',
        state: 'Texas'
    }

}

//dot notation
person.firstName
person.pets[0];

//bracet notation
console.log(person[key]);

const { firstName, lastName} = person; //pulls from object

