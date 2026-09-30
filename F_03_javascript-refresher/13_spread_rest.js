const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

const user = { name: "Bogart", age: 28 };
const newUser = { ...user, email: "bogart@example.com" };
console.log(newUser);

function sum(...args) {
    return args.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4));