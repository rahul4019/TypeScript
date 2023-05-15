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
  private readonly prop: number = 12;
  constructor(
    public email: string,
    public name: string,
    // private userId: string
  ) {}
}

const rahul = new User('rahul@gmail.com', 'rahul');
// rahul.city = 'Delhi';
// rahul.prop
