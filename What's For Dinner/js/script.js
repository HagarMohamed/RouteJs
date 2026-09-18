
const recipes = [
  {
    "recipe_id": "rec_78945612",
    "title": "Chicken Stir-Fry",
    "description": "Quick and healthy stir-fry with colorful vegetables",
    "image_url": "img/photo-1603133872878-684f208fb84b.jpg",
    "rating": {
      "average_stars": 4.5,
      "total_reviews": 324
    },
    "metadata": {
      "difficulty": "Easy",
      "cuisine": "Asian",
      "is_bookmarked": true
    },
    "times": {
      "prep_time_min": 15,
      "cook_time_min": 15,
      "total_time_min": 30
    },
    "servings": {
      "count": 4,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "500g", "name": "chicken breast, sliced" },
      { "id": 2, "quantity": "2", "name": "bell peppers, sliced" },
      { "id": 3, "quantity": "1 head", "name": "broccoli, florets" },
      { "id": 4, "quantity": "2", "name": "carrots, julienned" },
      { "id": 5, "quantity": "3 tbsp", "name": "soy sauce" },
      { "id": 6, "quantity": "2 tbsp", "name": "oyster sauce" },
      { "id": 7, "quantity": "1 tbsp", "name": "sesame oil" },
      { "id": 8, "quantity": "2 cloves", "name": "garlic, minced" },
      { "id": 9, "quantity": "1 tbsp", "name": "fresh ginger, grated" }
    ],
    "instructions": [
      { "step": 1, "text": "Heat sesame oil in a large skillet or wok over medium-high heat." },
      { "step": 2, "text": "Add minced garlic and grated ginger, sauté for 1 minute until fragrant." },
      { "step": 3, "text": "Add sliced chicken breast and cook until browned and cooked through." },
      { "step": 4, "text": "Toss in the sliced bell peppers, broccoli florets, and carrots. Stir-fry for 5-7 minutes." },
      { "step": 5, "text": "Pour in soy sauce and oyster sauce. Toss everything together to coat evenly and serve hot." }
    ],
    "nutrition": {
      "calories": 345,
      "protein_g": 35,
      "carbs_g": 14,
      "fat_g": 12,
      "fiber_g": 3,
      "sodium": 700
    },
    "chef_tips": [
      "Ensure your wok or skillet is very hot before adding ingredients to get that authentic stir-fry texture.",
      "Cut all your vegetables to a similar size so they cook evenly."
    ]
  },
  {
    "recipe_id": "rec_78945613",
    "title": "Creamy Garlic Pasta",
    "description": "Creamy pasta with garlic, parmesan, and fresh herbs",
    "image_url": "https://unsplash.com",
    "rating": {
      "average_stars": 4.7,
      "total_reviews": 512
    },
    "metadata": {
      "difficulty": "Easy",
      "cuisine": "Italian",
      "is_bookmarked": false
    },
    "times": {
      "prep_time_min": 10,
      "cook_time_min": 20,
      "total_time_min": 30
    },
    "servings": {
      "count": 4,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "400g", "name": "spaghetti" },
      { "id": 2, "quantity": "3 cloves", "name": "garlic, minced" },
      { "id": 3, "quantity": "200ml", "name": "heavy cream" },
      { "id": 4, "quantity": "80g", "name": "parmesan cheese, grated" },
      { "id": 5, "quantity": "2 tbsp", "name": "butter" },
      { "id": 6, "quantity": "2 tbsp", "name": "fresh parsley, chopped" }
    ],
    "instructions": [
      { "step": 1, "text": "Cook pasta according to package directions until al dente." },
      { "step": 2, "text": "Melt butter in a large skillet and sauté garlic until fragrant." },
      { "step": 3, "text": "Add heavy cream and simmer gently for 3-4 minutes." },
      { "step": 4, "text": "Stir in parmesan until the sauce becomes smooth and creamy." },
      { "step": 5, "text": "Add pasta, toss well, garnish with parsley, and serve." }
    ],
    "nutrition": {
      "calories": 520,
      "protein_g": 18,
      "carbs_g": 62,
      "fat_g": 22,
      "fiber_g": 3,
      "sodium": 700
    },
    "chef_tips": [
      "Reserve some pasta water to loosen the sauce if needed.",
      "Add parmesan gradually to prevent clumping."
    ]
  },
  {
    "recipe_id": "rec_78945614",
    "title": "Grilled Salmon Bowl",
    "description": "Nutritious salmon bowl with rice, avocado, and fresh vegetables",
    "image_url": "https://unsplash.com",
    "rating": {
      "average_stars": 4.8,
      "total_reviews": 287
    },
    "metadata": {
      "difficulty": "Medium",
      "cuisine": "American",
      "is_bookmarked": true
    },
    "times": {
      "prep_time_min": 15,
      "cook_time_min": 15,
      "total_time_min": 30
    },
    "servings": {
      "count": 2,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "300g", "name": "salmon fillets" },
      { "id": 2, "quantity": "2 cups", "name": "cooked rice" },
      { "id": 3, "quantity": "1", "name": "avocado, sliced" },
      { "id": 4, "quantity": "1", "name": "cucumber, sliced" },
      { "id": 5, "quantity": "1 tbsp", "name": "olive oil" },
      { "id": 6, "quantity": "1 tbsp", "name": "lemon juice" }
    ],
    "instructions": [
      { "step": 1, "text": "Season salmon with olive oil, lemon juice, salt, and pepper." },
      { "step": 2, "text": "Grill salmon over medium-high heat for 5-7 minutes per side." },
      { "step": 3, "text": "Prepare cooked rice and divide between bowls." },
      { "step": 4, "text": "Top with salmon, avocado, and cucumber." },
      { "step": 5, "text": "Drizzle with lemon juice and serve immediately." }
    ],
    "nutrition": {
      "calories": 480,
      "protein_g": 34,
      "carbs_g": 42,
      "fat_g": 20,
      "fiber_g": 6,
      "sodium": 220
    },
    "chef_tips": [
      "Do not overcook the salmon.",
      "Add fresh herbs for extra flavor."
    ]
  },
  {
    "recipe_id": "rec_78945615",
    "title": "Beef Tacos",
    "description": "Flavorful beef tacos with fresh salsa and creamy avocado",
    "image_url": "https://unsplash.com",
    "rating": {
      "average_stars": 4.6,
      "total_reviews": 438
    },
    "metadata": {
      "difficulty": "Easy",
      "cuisine": "Mexican",
      "is_bookmarked": false
    },
    "times": {
      "prep_time_min": 15,
      "cook_time_min": 15,
      "total_time_min": 30
    },
    "servings": {
      "count": 4,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "500g", "name": "ground beef" },
      { "id": 2, "quantity": "8", "name": "small tortillas" },
      { "id": 3, "quantity": "1", "name": "tomato, diced" },
      { "id": 4, "quantity": "1", "name": "avocado, diced" },
      { "id": 5, "quantity": "1 tsp", "name": "chili powder" },
      { "id": 6, "quantity": "1 tsp", "name": "cumin" },
      { "id": 7, "quantity": "1/2", "name": "onion, diced" }
    ],
    "instructions": [
      { "step": 1, "text": "Heat a skillet over medium-high heat and brown the ground beef." },
      { "step": 2, "text": "Add onion, chili powder, and cumin and cook for 3-4 minutes." },
      { "step": 3, "text": "Warm the tortillas in a dry skillet." },
      { "step": 4, "text": "Fill tortillas with seasoned beef, tomato, and avocado." },
      { "step": 5, "text": "Serve immediately with your favorite salsa." }
    ],
    "nutrition": {
      "calories": 430,
      "protein_g": 28,
      "carbs_g": 35,
      "fat_g": 21,
      "fiber_g": 5,
      "sodium": 400
    },
    "chef_tips": [
      "Toast tortillas briefly for better texture.",
      "Use freshly ground spices for stronger flavor."
    ]
  },
  {
    "recipe_id": "rec_78945616",
    "title": "Vegetable Curry",
    "description": "Comforting vegetable curry cooked in a fragrant coconut sauce",
    "image_url": "https://unsplash.com",
    "rating": {
      "average_stars": 4.5,
      "total_reviews": 356
    },
    "metadata": {
      "difficulty": "Easy",
      "cuisine": "Indian",
      "is_bookmarked": true
    },
    "times": {
      "prep_time_min": 15,
      "cook_time_min": 25,
      "total_time_min": 40
    },
    "servings": {
      "count": 4,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "1", "name": "onion, chopped" },
      { "id": 2, "quantity": "2 cloves", "name": "garlic, minced" },
      { "id": 3, "quantity": "1 tbsp", "name": "ginger, grated" },
      { "id": 4, "quantity": "2 cups", "name": "mixed vegetables" },
      { "id": 5, "quantity": "400ml", "name": "coconut milk" },
      { "id": 6, "quantity": "2 tbsp", "name": "curry powder" }
    ],
    "instructions": [
      { "step": 1, "text": "Sauté onion, garlic, and ginger until softened." },
      { "step": 2, "text": "Add curry powder and cook for 1 minute." },
      { "step": 3, "text": "Add mixed vegetables and stir well." },
      { "step": 4, "text": "Pour in coconut milk and simmer for 15-20 minutes." },
      { "step": 5, "text": "Season to taste and serve with rice." }
    ],
    "nutrition": {
      "calories": 310,
      "protein_g": 7,
      "carbs_g": 28,
      "fat_g": 20,
      "fiber_g": 7,
      "sodium": 400
    },
    "chef_tips": [
      "Toast curry powder briefly to release its aroma.",
      "Add vegetables according to how long they take to cook."
    ]
  },
  {
    "recipe_id": "rec_78945617",
    "title": "Chicken Caesar Salad",
    "description": "Crisp romaine salad topped with grilled chicken and creamy dressing",
    "image_url": "https://unsplash.com",
    "rating": {
      "average_stars": 4.4,
      "total_reviews": 291
    },
    "metadata": {
      "difficulty": "Easy",
      "cuisine": "American",
      "is_bookmarked": false
    },
    "times": {
      "prep_time_min": 10,
      "cook_time_min": 15,
      "total_time_min": 25
    },
    "servings": {
      "count": 2,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "300g", "name": "chicken breast" },
      { "id": 2, "quantity": "1 large head", "name": "romaine lettuce" },
      { "id": 3, "quantity": "50g", "name": "parmesan cheese" },
      { "id": 4, "quantity": "1 cup", "name": "croutons" },
      { "id": 5, "quantity": "4 tbsp", "name": "Caesar dressing" }
    ],
    "instructions": [
      { "step": 1, "text": "Season chicken and grill until fully cooked." },
      { "step": 2, "text": "Chop romaine lettuce and place in a large bowl." },
      { "step": 3, "text": "Slice grilled chicken into strips." },
      { "step": 4, "text": "Add chicken, parmesan, and croutons to the lettuce." },
      { "step": 5, "text": "Toss with Caesar dressing and serve." }
    ],
    "nutrition": {
      "calories": 390,
      "protein_g": 38,
      "carbs_g": 18,
      "fat_g": 20,
      "fiber_g": 4,
      "sodium": 400
    },
    "chef_tips": [
      "Let the chicken rest before slicing.",
      "Add dressing just before serving to keep the lettuce crisp."
    ]
  },
  {
    "recipe_id": "rec_78945618",
    "title": "Margherita Pizza",
    "description": "Classic Italian pizza with tomato, mozzarella, and fresh basil",
    "image_url": "https://unsplash.com",
    "rating": {
      "average_stars": 4.9,
      "total_reviews": 672
    },
    "metadata": {
      "difficulty": "Medium",
      "cuisine": "Italian",
      "is_bookmarked": true
    },
    "times": {
      "prep_time_min": 20,
      "cook_time_min": 15,
      "total_time_min": 35
    },
    "servings": {
      "count": 2,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "300g", "name": "pizza dough" },
      { "id": 2, "quantity": "150g", "name": "tomato sauce" },
      { "id": 3, "quantity": "200g", "name": "mozzarella" },
      { "id": 4, "quantity": "10 leaves", "name": "fresh basil" },
      { "id": 5, "quantity": "1 tbsp", "name": "olive oil" }
    ],
    "instructions": [
      { "step": 1, "text": "Preheat oven to its highest temperature." },
      { "step": 2, "text": "Stretch pizza dough into a thin round." },
      { "step": 3, "text": "Spread tomato sauce evenly over the dough." },
      { "step": 4, "text": "Add mozzarella and drizzle with olive oil." },
      { "step": 5, "text": "Bake until the crust is golden and cheese is bubbling. Top with basil." }
    ],
    "nutrition": {
      "calories": 510,
      "protein_g": 22,
      "carbs_g": 58,
      "fat_g": 21,
      "fiber_g": 3,
      "sodium": 400
    },
    "chef_tips": [
      "Use a very hot oven for a crisp crust.",
      "Add basil after baking to preserve its fresh flavor."
    ]
  },
  {
    "recipe_id": "rec_78945619",
    "title": "Teriyaki Chicken Rice",
    "description": "Tender chicken glazed with homemade teriyaki sauce over steamed rice",
    "image_url": "https://unsplash.com",
    "rating": {
      "average_stars": 4.6,
      "total_reviews": 401
    },
    "metadata": {
      "difficulty": "Easy",
      "cuisine": "Japanese",
      "is_bookmarked": false
    },
    "times": {
      "prep_time_min": 10,
      "cook_time_min": 20,
      "total_time_min": 30
    },
    "servings": {
      "count": 4,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "500g", "name": "chicken thighs" },
      { "id": 2, "quantity": "4 cups", "name": "cooked rice" },
      { "id": 3, "quantity": "4 tbsp", "name": "soy sauce" },
      { "id": 4, "quantity": "2 tbsp", "name": "honey" },
      { "id": 5, "quantity": "1 tbsp", "name": "sesame oil" },
      { "id": 6, "quantity": "2 cloves", "name": "garlic, minced" }
    ],
    "instructions": [
      { "step": 1, "text": "Mix soy sauce, honey, sesame oil, and garlic." },
      { "step": 2, "text": "Cook chicken thighs in a hot skillet until browned." },
      { "step": 3, "text": "Pour teriyaki sauce over the chicken." },
      { "step": 4, "text": "Simmer until the sauce thickens and chicken is cooked through." },
      { "step": 5, "text": "Slice chicken and serve over steamed rice." }
    ],
    "nutrition": {
      "calories": 495,
      "protein_g": 32,
      "carbs_g": 55,
      "fat_g": 15,
      "fiber_g": 2,
      "sodium": 400
    },
    "chef_tips": [
      "Allow the sauce to reduce until it coats the chicken.",
      "Garnish with sesame seeds and spring onions."
    ]
  },
  {
    "recipe_id": "rec_78945620",
    "title": "Mediterranean Chickpea Bowl",
    "description": "Fresh chickpea bowl with vegetables, feta, and lemon dressing",
    "image_url": "https://unsplash.com",
    "rating": {
      "average_stars": 4.7,
      "total_reviews": 245
    },
    "metadata": {
      "difficulty": "Easy",
      "cuisine": "Mediterranean",
      "is_bookmarked": true
    },
    "times": {
      "prep_time_min": 15,
      "cook_time_min": 5,
      "total_time_min": 20
    },
    "servings": {
      "count": 2,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "400g", "name": "chickpeas, drained" },
      { "id": 2, "quantity": "1", "name": "cucumber, diced" },
      { "id": 3, "quantity": "2", "name": "tomatoes, diced" },
      { "id": 4, "quantity": "100g", "name": "feta cheese" },
      { "id": 5, "quantity": "2 tbsp", "name": "olive oil" },
      { "id": 6, "quantity": "1 tbsp", "name": "lemon juice" }
    ],
    "instructions": [
      { "step": 1, "text": "Combine chickpeas, cucumber, and tomatoes in a bowl." },
      { "step": 2, "text": "Whisk olive oil and lemon juice together." },
      { "step": 3, "text": "Pour dressing over the vegetables and chickpeas." },
      { "step": 4, "text": "Crumble feta cheese over the top." },
      { "step": 5, "text": "Toss gently and serve chilled or at room temperature." }
    ],
    "nutrition": {
      "calories": 360,
      "protein_g": 15,
      "carbs_g": 38,
      "fat_g": 18,
      "fiber_g": 9,
      "sodium": 400
    },
    "chef_tips": [
      "Rinse chickpeas thoroughly before using.",
      "Let the bowl rest for 10 minutes so the flavors combine."
    ]
  },
  {
    "recipe_id": "rec_78945621",
    "title": "Beef and Broccoli",
    "description": "Tender beef and crisp broccoli in a savory garlic soy sauce",
    "image_url": "https://unsplash.com",
    "rating": {
      "average_stars": 4.5,
      "total_reviews": 378
    },
    "metadata": {
      "difficulty": "Easy",
      "cuisine": "Chinese",
      "is_bookmarked": false
    },
    "times": {
      "prep_time_min": 15,
      "cook_time_min": 15,
      "total_time_min": 30
    },
    "servings": {
      "count": 4,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "500g", "name": "beef strips" },
      { "id": 2, "quantity": "1 head", "name": "broccoli, florets" },
      { "id": 3, "quantity": "3 tbsp", "name": "soy sauce" },
      { "id": 4, "quantity": "1 tbsp", "name": "honey" },
      { "id": 5, "quantity": "2 cloves", "name": "garlic, minced" },
      { "id": 6, "quantity": "1 tsp", "name": "fresh ginger, grated" }
    ],
    "instructions": [
      { "step": 1, "text": "Heat a wok or skillet over high heat." },
      { "step": 2, "text": "Sear beef strips until browned." },
      { "step": 3, "text": "Add broccoli and stir-fry for 4-5 minutes." },
      { "step": 4, "text": "Add soy sauce, honey, garlic, and ginger." },
      { "step": 5, "text": "Toss everything together and serve over rice." }
    ],
    "nutrition": {
      "calories": 410,
      "protein_g": 36,
      "carbs_g": 20,
      "fat_g": 22,
      "fiber_g": 4,
      "sodium": 600
    },
    "chef_tips": [
      "Slice beef thinly against the grain for tenderness.",
      "Keep the heat high for better browning."
    ]
  },
  {
    "recipe_id": "rec_78945622",
    "title": "Vegetable Fried Rice",
    "description": "Quick fried rice loaded with vegetables and aromatic seasonings",
    "image_url": "https://unsplash.com",
    "rating": {
      "average_stars": 4.4,
      "total_reviews": 318
    },
    "metadata": {
      "difficulty": "Easy",
      "cuisine": "Asian",
      "is_bookmarked": true
    },
    "times": {
      "prep_time_min": 10,
      "cook_time_min": 15,
      "total_time_min": 25
    },
    "servings": {
      "count": 4,
      "unit": "people"
    },
    "ingredients": [
      { "id": 1, "quantity": "4 cups", "name": "cooked rice" },
      { "id": 2, "quantity": "2", "name": "eggs" },
      { "id": 3, "quantity": "1 cup", "name": "mixed vegetables" },
      { "id": 4, "quantity": "3 tbsp", "name": "soy sauce" },
      { "id": 5, "quantity": "2 cloves", "name": "garlic, minced" },
      { "id": 6, "quantity": "2 tbsp", "name": "vegetable oil" }
    ],
    "instructions": [
      { "step": 1, "text": "Heat oil in a large wok over high heat." },
      { "step": 2, "text": "Scramble the eggs and set them aside." },
      { "step": 3, "text": "Stir-fry garlic and mixed vegetables for 3-4 minutes." },
      { "step": 4, "text": "Add cooked rice and soy sauce and toss thoroughly." },
      { "step": 5, "text": "Return eggs to the wok, mix well, and serve hot." }
    ],
    "nutrition": {
      "calories": 330,
      "protein_g": 10,
      "carbs_g": 52,
      "fat_g": 10,
      "fiber_g": 4,
      "sodium": 600
    },
    "chef_tips": [
      "Use cold, day-old rice for the best texture.",
      "Avoid overcrowding the wok."
    ]
  }
]









let recipe = recipes[0];
let title = recipe.title;
let description = recipe.description;
let rating = recipe.rating.average_stars;
let tatalReviews = recipe.rating.total_reviews;
let imgCard = recipe.image_url;
let metadatadifficulty = recipe.metadata.difficulty;
let metadatacuisine = recipe.metadata.cuisine;

console.log(title);
console.log(description);
console.log(rating);
console.log(tatalReviews);
console.log(imgCard);
console.log(metadatadifficulty);


document.querySelector(".recipe-title").textContent = title;
document.querySelector(".recipe-description").textContent = description;
document.querySelector("#recipe-rating").textContent = rating;
document.querySelector("#recipe-reviews").textContent = "(" + tatalReviews + " reviews)";
document.querySelector(".recipe-image").src = imgCard;
document.querySelector(".badge-easy").textContent = metadatadifficulty;
document.querySelector(".badge-asian").textContent = metadatacuisine;




for(let i = 0; i < recipe.ingredients.length; i++){
    
   var quantity = recipe.ingredients[i].quantity;
    var ingredientName = recipe.ingredients[i].name;

    console.log(quantity + " " + ingredientName);

    // const li = document.querySelectorAll(".ingredients-list li")[i];
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.textContent = [i + 1];

    document.querySelector(".ingredients-list").appendChild(li);
    li.appendChild(span);
    

    li.innerHTML += ` ${quantity} ${ingredientName}`;
}




for(let i = 0; i < recipe.instructions.length; i++){
    
    var text = recipe.instructions[i].text;

    console.log( text);

    // const p = document.querySelectorAll(".instructions-list p")[i];
    const p = document.createElement("p");
    const span = document.createElement("span");
    span.textContent = [i + 1];

    document.querySelector(".instructions-list").appendChild(p);
    p.appendChild(span);
    p.innerHTML += ` ${text}`;
}



let nutrition = recipe.nutrition;
let calories = nutrition.calories;
let protein = nutrition.protein_g;
let carbs = nutrition.carbs_g;
let fat = nutrition.fat_g;
let fiber = nutrition.fiber_g;
let sodium = nutrition.sodium;

console.log(calories);
console.log(protein);
console.log(carbs);
console.log(fat);
console.log(fiber);


document.querySelector("#recipe-calories").innerHTML =
    `<i class="fa-solid fa-fire"></i> Calories: ${calories}`;

document.querySelector("#recipe-carbs").innerHTML =
    `<i class="fa-solid fa-wheat-awn"></i> Carbohydrates: ${carbs}`;

document.querySelector("#recipe-fiber").innerHTML =
    `<i class="fa-solid fa-leaf"></i> Fiber: ${fiber}`;

document.querySelector("#recipe-fat").innerHTML =
    `<i class="fa-solid fa-droplet"></i> Fat: ${fat}`;

document.querySelector("#recipe-protein").innerHTML =
    `<i class="fa-solid fa-dumbbell"></i> Protein: ${protein}`;

document.querySelector("#recipe-sodium").innerHTML =
    `<i class="fa-solid fa-bowl-food"></i> Sodium: ${recipe.nutrition.sodium}`;
document.querySelector("#recipe-sodium").innerHTML =
    `<i class="fa-solid fa-bowl-food"></i> Sodium: ${sodium}`;









 let chefTips = recipe.chef_tips;

for(let i = 0; i < chefTips.length; i++){
    
    var text = chefTips[i];
    console.log( text);
    
    const li = document.createElement("li");
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-check";

    document.querySelector(".chefTips-box").appendChild(li);
    li.appendChild(icon);
    li.innerHTML += ` ${text}`;
    
}

