// const user: (string | number)[] = [6, 'rahul'];

let user: [string, number, boolean];

// * order of the array must be similar to defined tuple
user = ['rahul', 12, false];

let rgb: [number, number, number] = [255, 155, 211];

type User = [number, string];

const newUser: User = [112, "example@google.com"]

newUser[1] = "rc.com"

newUser.push("rahul")

console.log(newUser)

export {}
