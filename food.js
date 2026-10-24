console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Asado", "Steak", "Pasta", "Salmon", "Chicken", "Noodles"];
console.log("Favorite Foods: " + favoriteFoods);



// 2. Loop through the list and print: "One of my favorite foods is ______."
 for (let food of favoriteFoods) {
  console.log("One of my favorite foods is " + food);
}





// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
console.log("My #1 favorite food is " + favoriteFoods[0]);
console.log("My #2 favorite food is " + favoriteFoods[1]);
console.log("My #3 favorite food is " + favoriteFoods[2]);
console.log("My #4 favorite food is " + favoriteFoods[3]);
console.log("My #5 favorite food is " + favoriteFoods[4]);
console.log("My #6 favorite food is " + favoriteFoods[5]);  





// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."

function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me — " + foodName + " is delicious.");
}

// 4b. Call the function at least 3 times
printFoodRecommendation("Asado");
printFoodRecommendation("Sushi");
printFoodRecommendation("Pasta");


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Separate foods with and without an "a" in the name.
let foodsWithA = [];
let foodsWithoutA = [];
let longFoodNames = [];
let shortFoodNames = [];

for (let food of friendFavorites) {
  let hasA = false;

  for (let letter of food) {
    if (letter === "a" || letter === "A") {
      hasA = true;
    }
  }

  if (hasA === true) {
    foodsWithA.push(food);
  } else {
    foodsWithoutA.push(food);
  }

  if (food.length > 6) {
    longFoodNames.push(food);
  } else {
    shortFoodNames.push(food);
  }
}

console.log("Foods with an a: " + foodsWithA);
console.log("Foods without an a: " + foodsWithoutA);


// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
console.log("Long food names (more than 6 letters): " + longFoodNames);


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
console.log("Short food names (6 letters or fewer): " + shortFoodNames);


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
  console.log("There are more short-named foods.");
} else {
  console.log("There are the same number of long- and short-named foods.");
}

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
let longestFoodName = friendFavorites[0];
for (let food of friendFavorites) {
  if (food.length > longestFoodName.length) {
    longestFoodName = food;
  }
}
console.log("The longest food name in the list is " + longestFoodName + " with " + longestFoodName.length + " characters.");