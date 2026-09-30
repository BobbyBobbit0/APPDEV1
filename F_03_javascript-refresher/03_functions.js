function greet(name) {
  return "Hello, " + name;
}
 
const square = (num) => {
  return num * num;
};
 
function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("bogart"));
console.log(square(8));
console.log(calculator(2, 9));
