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

identityFour<Bottle>({ brand: 'one', type: 'two' });
void {};
