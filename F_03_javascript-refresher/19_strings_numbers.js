const raw = "  Bogart Bobbito  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase()); // "BOGART"
console.log(clean.includes("Rivera")); // true
console.log(clean.slice(0, 5)); // "Bogart"
console.log(`Full name: ${first} ${last}`);

console.log(parseInt("42px"));   // 42
console.log((19.9999).toFixed(2)); // "20.00"
 
const result = "abc" / 2;
console.log(result);          // NaN
console.log(Number.isNaN(result)); // true
