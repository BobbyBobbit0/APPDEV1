const hobbies = ["cycling", "gaming", "coding"];
hobbies.map(hobby => console.log(hobby));
 
const student = { name: "Bofart", age: 22 };
const { name, age } = student;
console.log(name, age);
 
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
