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
  private _courseCount = 1;

  private readonly prop: number = 12;
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  // * Private method (not accessible outside the class)
  private deleteToken(){
    console.log(`Token deleted`)
  }

  // * Getter
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // * Setter   => TypeScript doesn't allow a return type for Setters
  set courseCount(courseNum) {
    if (courseNum <= 1) throw new Error('Course count should be more than 1 ');

    this._courseCount = courseNum;
  }
}

const rahul = new User('rahul@gmail.com', 'rahul');
// rahul.city = 'Delhi';
// rahul.prop


// rahul.deleteToken