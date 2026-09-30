let favoriteFoods = ["Humba", "Kinilaw", "Laing"];
favoriteFoods.push("Sisig");
favoriteFoods.shift();
 
for (const food of favoriteFoods) {
  console.log(food);
}
 
const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);