const score: Array<number> = [];
const nemas: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
  /* The value could be either boolean or number */
}

function identityTwo(val: any): any {
  return val;
  /* This could accept any type of value as parameter and return return any value whether it is
  number, string, boolean etc. */
}

function identityThree<Type>(val: Type): Type {
  //   return 'rahul';
  return val;
  /* This will returned value must be the type of passed argument */
}

function identityFour<T>(val: T): T {
  return val;
  // Short version of identity three
}

interface Bottle {
  brand: string;
  type: string;
}

// identityFour<Bottle>({ brand: 'one', type: 'two' });
// void {};

function searchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
  //* When you are accepting parameters as array of T types
  //* then return value should be one of value of that array
}

// How to convert above function in arrow function?
const moreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};
