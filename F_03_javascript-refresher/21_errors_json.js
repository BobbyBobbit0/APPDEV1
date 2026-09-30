function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
 
try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Something went wrong:", error.message);
}

const user = { name: "Bogart", age: 22, isStudent: true };
 
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Bogart","age":22,...}'
 
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Bogart"
console.log(typeof jsonString, typeof parsedUser); // string object
