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