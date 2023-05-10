"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase()
    return num + 2;
    //   return "hello";
}
function getUpper(value) {
    return value.toUpperCase();
}
function signUpUser(name, email, password, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// addTwo("2")
addTwo(2);
// getUpper(23)
getUpper('rahul');
signUpUser('rahul', 'rahul@gmail.com', '***', false);
loginUser('rahul', 'rahul@gmail.com');
var myValue = addTwo(5);
// * Some function could return more than one type of value
// function getValue(myVal: number) : number{
//     if(myVal > 5) return true
//     return "200 OK"
// }
var getHello = function (s) {
    return '';
};
var animals = ['dog', 'cat', 'lion', 'wolf'];
animals.map(function (animal) { return ("animal is ".concat(animal)); });
