let score: number | string = 33;
score = 44;
score = '55';

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let rahul: User | Admin = { name: 'rahul', id: 21 };

rahul = { username: 'ra', id: 23 };

// function getDbId(id: number | string): void {
//   // making some API calls
//   console.log(`DB id is: ${id}`);
// }

function getDbId(id: number | string): void {
  if (typeof id === 'string') id.toLowerCase();
  else {
    id + 2;
  }
}

getDbId(3);
getDbId('3');

// array
const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', ' 3'];
// const data3: string[] | number[] = ['1', 2, '3']; // it can be either all the numbers or string
const data3: (string | number | boolean) [] = ['1', 2, '3']; 

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"

export {}