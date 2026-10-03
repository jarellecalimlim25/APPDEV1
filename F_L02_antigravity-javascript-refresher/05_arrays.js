let favoriteFoods = ["Pork Adobo", "Sisig", "Caldereta"];

favoriteFoods.push("Pork Steak");
favoriteFoods.shift();

for (const food of favoriteFoods) {
    console.log(food);
}

const liked = favoriteFoods.map(food => "I love " + food);
console.log(liked);