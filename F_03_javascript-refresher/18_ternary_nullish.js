const score = 72;
const result = score >= 70 ? "Pass" : "Fail";
console.log(result); // "Pass"
 
const num = 7;
console.log(num % 2 === 0 ? "even" : "odd"); // "odd"

const user = { name: "Bogart" }; // no address property

console.log(user.address?.city); // undefined, no crash

const age = 0;
console.log(age || 18); // 18 -- wrong! 0 is falsy, so || overrides it
console.log(age ?? 18); // 0  -- right, ?? only replaces null/undefined