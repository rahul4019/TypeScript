const User = {
  name: 'rahul',
  email: 'rahul@gmail.com',
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
// * function createUser({ name: string, isPaid: boolean, email:"abc@gmail.com"}) {} => not applicable

let newUser = { name: 'rahul', isPaid: false, email: 'abc@gmail.com' };

createUser(newUser); // * weired behaviour of JavaScript

function createCourse(): { name: string; price: number } {
  return { name: 'Next.js', price: 999 };
}

// * Type Aliases

type Student = {
  name: string;
  email: string;
  isActive: boolean;
};

function createStudent(student: Student): Student {
  return { name: '', email: '', isActive: false };
}

createStudent({ name: '', email: '', isActive: false });

// type myString  = string

export {};
