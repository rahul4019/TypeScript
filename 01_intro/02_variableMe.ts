let greetings: string = 'Hello Rahul';

let myNum = 6;

// myNum.toUpperCase(); => not allowed because myNum is a number

greetings.toLowerCase();

console.log(greetings);

// Number

let userId: number = 334455;

// Boolean
let isLoggedIn: boolean = false;

console.log(isLoggedIn.valueOf());

// any
let animal: string;

function getExample() {
//   return true;  => will show an error because it is returning boolean
  return "Dog";
}

animal = getExample();

export {};
