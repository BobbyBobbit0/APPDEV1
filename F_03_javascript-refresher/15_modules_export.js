const userInfo = { name: "Alice", age: 21 };
 
function greet() {
  return "Hello from module!";
}
 
export default greet;
export { userInfo };
