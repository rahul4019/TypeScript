"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'rahul',
    email: 'rahul@gmail.com',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// * function createUser({ name: string, isPaid: boolean, email:"abc@gmail.com"}) {} => not applicable
var newUser = { name: 'rahul', isPaid: false, email: 'abc@gmail.com' };
createUser(newUser); // * weired behaviour of JavaScript
function createCourse() {
    return { name: 'Next.js', price: 999 };
}
