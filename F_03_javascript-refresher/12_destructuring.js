const person = { name: "Bogart", age: 22 };
const { name, age } = person;
console.log(name, age);

const hobbies = ["cycling", "running", "cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

function printName({ name }) {
    console.log(name);
}

printName(person);