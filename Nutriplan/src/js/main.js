/**
 * NutriPlan - Main Entry Point
 * 
 * This is the main entry point for the application.
 * Import your modules and initialize the app here.
 */


//Get Gategory

const categoryApi = "https://nutriplan-api.vercel.app/api/meals/categories";


async function getCategories() {
  const response = await fetch(categoryApi);
  const data = await response.json();
  const categories = data.results;
  console.log(categories);


  categories.forEach(category => {
    const categoryGrid = document.getElementById('categories-grid');
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('category-card');

    categoryCard.addEventListener('click', () => {
        filterMealsByCategory(category.name);

       
    });
    categoryCard.innerHTML = `<div
              class="category-card bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-200 hover:border-emerald-400 hover:shadow-md cursor-pointer transition-all group"
              data-category="Beef"
            >
              <div class="flex items-center gap-2.5">
                <div
                  class="text-white w-9 h-9 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm"
                >
                  <i class="fa-solid fa-drumstick-bite"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-gray-900">${category.name}s</h3>
                </div>
              </div>
            </div>
    `;
    categoryGrid.appendChild(categoryCard);

  });
}



getCategories();



//Get Cuisine

const allcuisineApi = "https://nutriplan-api.vercel.app/api/meals/areas ";



async function getCuisine() {
  const response = await fetch(allcuisineApi);
  const data = await response.json();
  const cuisine = data.results;
  console.log(cuisine);

    cuisine.forEach(cuisine => {
       const cuisineGrid = document.getElementById('all-cuisines');

        const cuisineButton = document.createElement('button');
        cuisineButton.classList.add('px-4', 'py-2', 'bg-gray-100', 'text-gray-700', 'rounded-full', 'font-medium', 'text-sm', 'whitespace-nowrap', 'hover:bg-gray-200', 'transition-all');
        cuisineButton.textContent = cuisine.name;
        cuisineGrid.appendChild(cuisineButton);
    });
      
}


getCuisine();




//Get All Meals

const allmealsApi = "https://nutriplan-api.vercel.app/api/meals/search?q=chicken";

async function getAllMeals() {
    const response = await fetch(allmealsApi);
    const data = await response.json();
    const meals = data.results;
    console.log(meals);
    bindMeals(meals);

}

getAllMeals();

function bindMeals(meals){
    const mealsGrid = document.getElementById('recipes-grid');
    mealsGrid.innerHTML = '';
    
     meals.forEach(meal => {
        const mealCard = document.createElement('div');
        mealCard.classList.add('recipe-card', 'bg-white', 'rounded-xl', 'overflow-hidden', 'shadow-sm', 'hover:shadow-lg', 'transition-all', 'cursor-pointer', 'group');
        mealCard.setAttribute('data-meal-id', meal.idMeal);

        mealCard.addEventListener('click', () => {
            getMealDetails(meal.id);
            navigateToSection('meal-details');
            console.log(`Meal ID: ${meal.id}`);
        });

        mealCard.innerHTML = `
         <div
              class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              data-meal-id="52772"
            >
              <div class="relative h-48 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="${meal.thumbnail}"
                  alt="${meal.name}"
                  loading="lazy"
                />
                <div class="absolute bottom-3 left-3 flex gap-2">
                  <span
                    class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
                  >
                    ${meal.category}
                  </span>
                  <span
                    class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white"
                  >
                    ${meal.area}
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h3
                  class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
                >
                  ${meal.name}
                </h3>
                <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                  Delicious recipe to try!
                </p>
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-gray-900">
                    <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                    ${meal.category}
                  </span>
                  <span class="font-semibold text-gray-500">
                    <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                    ${meal.area}
                  </span>
                </div>
              </div>
            </div>
        `;
        mealsGrid.appendChild(mealCard);
    });
}






// Navigation Function

navigateToSection('search-filters-section');

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionLink = link.getAttribute('data-sectionId');     
    
      console.log(sectionLink);
      navigateToSection(sectionLink);
    });
  });





function navigateToSection(sectionId) {
    const sections = document.querySelectorAll('section');
    console.log(sections);
    sections.forEach(section => {
      section.style.display = 'none';
    });
  //search-filters-section, meal-categories-section,all-recipes-section

  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = 'block';


  const mainHeader = document.querySelector('#main-section-header h1');
   const description = document.querySelector('#main-section-header p');

  if(sectionId === 'search-filters-section') {
    const mealCategoriesSection = document.getElementById('meal-categories-section');
    const allRecipesSection = document.getElementById('all-recipes-section');
    mealCategoriesSection.style.display = 'block';
    allRecipesSection.style.display = 'block';

    
    mainHeader.textContent = 'Meals & Recipes';
    description.textContent = 'Discover delicious and nutritious recipes tailored for you';
  }


  
  else if(sectionId === 'products-section') {
    mainHeader.textContent = 'Product Scanner';
    description.textContent = 'Search packaged foods by name or barcode';  
  }

  else if(sectionId === 'foodlog-section') {
    mainHeader.textContent = 'Food Log';
    description.textContent = 'Track your daily nutrition and food intake';  
  }



  const navLink = document.querySelectorAll('.nav-link');
    navLink.forEach(link => {
        link.classList.remove('bg-emerald-50', 'text-emerald-700','hover:bg-gray-50');
        if(link.getAttribute('data-sectionId') === sectionId) {
            link.classList.add('bg-emerald-50', 'text-emerald-700');
        }else{
            link.classList.add('text-gray-600', 'hover:bg-gray-50');
        }
        
    })

  
  

 
  }

  


  //Get Details of a Meal

  const mealDetailsApi = "https://nutriplan-api.vercel.app/api/meals";

  async function getMealDetails(mealId) {
    

    const response = await fetch(`${mealDetailsApi}/${mealId}`);
    const data = await response.json();
    const meal = data.result;
    console.log(meal);

    const heroImage = document.getElementById('hero-image');
    heroImage.src = meal.thumbnail;
    heroImage.alt = meal.name;  


    const heroTags = document.getElementById('hero-tags');
    meal.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.classList.add('px-3', 'py-1', 'bg-emerald-500', 'text-white', 'text-sm', 'font-semibold', 'rounded-full');
        tagSpan.textContent = tag;
        heroTags.appendChild(tagSpan);
    });

    const heroTitle = document.getElementById('hero-title');
    heroTitle.textContent = meal.name;



    const heroIngridients = document.getElementById('ingredients');
    meal.ingredients.forEach(ingredient => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.classList.add('flex', 'items-center', 'gap-2', 'mb-2');
        ingredientDiv.innerHTML = `
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900">${ingredient.measure}</span>
                      ${ingredient.ingredient}
                    </span>
                
        `;
        heroIngridients.appendChild(ingredientDiv);
        
    });


    const heroInstructions = document.getElementById('instructions');
    meal.instructions.forEach(instruction => {
        const instructionDiv = document.createElement('div');
        instructionDiv.classList.add('flex', 'gap-2', 'mb-4');
        instructionDiv.innerHTML = `
          <div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
                    >
                     ${meal.instructions.indexOf(instruction) + 1}
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2">
                     ${instruction}
                    </p>
                  </div>
            
        `;
        heroInstructions.appendChild(instructionDiv);
    });


    const heroVideo = document.getElementById('video-tutorial-iframe');
    heroVideo.src = meal.youtube;
    

  }
  




// Search Function for recipes

const searchInput = document.getElementById('search-input');



searchInput.addEventListener('input', async () => {
  const query = searchInput.value;
  const response = await fetch(`https://nutriplan-api.vercel.app/api/meals/search?q=${query}`);
  const data = await response.json();
  const recipes = data.results;
  console.log(recipes);

  bindMeals(recipes);


  
}); 



// Filter Function for recipes

const filterApi = "https://nutriplan-api.vercel.app/api/meals/filter?limit=25"


function filterMealsByCategory(category) {
  fetch(`${filterApi}&category=${category}`)
    .then(response => response.json())
    .then(data => {
      const meals = data.results;
      console.log(meals);
      bindMeals(meals);
    })
    .catch(error => console.error('Error fetching meals by category:', error));
}