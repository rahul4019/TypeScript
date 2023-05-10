function addTwo(num: number): number {
  // num.toUpperCase()
  return num + 2;
  //   return "hello";
}

function getUpper(value: string) {
  return value.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// addTwo("2")
addTwo(2);

// getUpper(23)
getUpper('rahul');

signUpUser('rahul', 'rahul@gmail.com', '***', false);

loginUser('rahul', 'rahul@gmail.com');

let myValue = addTwo(5);

// * Some function could return more than one type of value
// function getValue(myVal: number) : number{
//     if(myVal > 5) return true

//     return "200 OK"
// }

const getHello = (s: string): string => {
  return '';
};

const animals = ['dog', 'cat', 'lion', 'wolf'];
// const animals = [1, 2, 3, 4];

animals.map((animal): string => `animal is ${animal}`);

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

/* The never type represents values which are never observed.
 In a return type, this means that the function throws 
 an exception or terminates execution of the program. */
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
