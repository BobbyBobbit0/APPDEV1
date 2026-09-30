const students = [
  { name: "Bogart", grade: 88 },
  { name: "Bobby", grade: 95 },
  { name: "Ben", grade: 42 },
];
 
const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name)); // ["Bogart", "Bobby"]
 
const bobby = students.find(s => s.name === "Bobby");
console.log(bobby); // { name: "Bobby", grade: 95 }
 
console.log(students.some(s => s.grade < 60)); // true
console.log(students.every(s => s.grade >= 60)); // false
 
const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name)); // ["Bobby", "Bogart", "Ben"]
