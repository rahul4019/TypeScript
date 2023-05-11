"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = '55';
var rahul = { name: 'rahul', id: 21 };
rahul = { username: 'ra', id: 23 };
// function getDbId(id: number | string): void {
//   // making some API calls
//   console.log(`DB id is: ${id}`);
// }
function getDbId(id) {
    if (typeof id === 'string')
        id.toLowerCase();
    else {
        id + 2;
    }
}
getDbId(3);
getDbId('3');
// array
var data = [1, 2, 3];
var data2 = ['1', '2', ' 3'];
// const data3: string[] | number[] = ['1', 2, '3']; // it can be either all the numbers or string
var data3 = ['1', 2, '3'];
var seatAllotment;
seatAllotment = "aisle";
