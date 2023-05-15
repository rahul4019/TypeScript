"use strict";
// class User {
//   public email: string;
//   private name: string;
//   city: string = ''
//   private readonly prop : number = 12
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.prop = 12;
    }
}
const rahul = new User('rahul@gmail.com', 'rahul');
// rahul.city = 'Delhi';
// rahul.prop
