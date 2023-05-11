class User {
  email: string;
  name: string;
  city: string = ''
  readonly prop : number = 12
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const rahul = new User('rahul@gmail.com', 'rahul')
rahul.city = "Delhi"