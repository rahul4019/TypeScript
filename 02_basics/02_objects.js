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
function createStudent(student) {
    return { name: '', email: '', isActive: false };
}
createStudent({ name: '', email: '', isActive: false });
var myCustomer = {
    _id: '12345',
    name: 'r',
    email: 'abc@gmail.com',
    isActive: false,
};
myCustomer.email = 'a@gmail.com';
