// Example function to render a recipe page
function renderRecipePage(recipeSlug) {
    const recipe = recipes.find(r => generateSlug(r.title) === recipeSlug);
    if (!recipe) {
        return '404 - Recipe Not Found';
    }

    // Basic example of generating recipe content
    return `
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient.name}: ${ingredient.measurement}</li>`).join('')}
        </ul>
        <h3>Steps:</h3>
        <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
}

function router() {
    let path = window.location.hash.substring(1);
    const appDiv = document.getElementById('app');

    if (path === '/') {
        appDiv.innerHTML = 'Search Page Content'; // Render a list of recipes or search bar
    } else if (path === '/add-recipe') {
        showAddRecipeForm();
    } else if (path.startsWith('/recipe/')) {
        const slug = path.replace('/recipe/', '');
        appDiv.innerHTML = renderRecipePage(slug);
    } else {
        appDiv.innerHTML = '404 - Page Not Found';
    }
}

function showAddRecipeForm() {
    const addRecipeForm = document.getElementById('addRecipeForm');
    addRecipeForm.style.display = 'block';
}

document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const ingredients = document.getElementById('ingredients').value.split(',').map(part => {
        const [name, measurement] = part.split(':').map(p => p.trim());
        return { name, measurement };
    });
    const steps = document.getElementById('steps').value.split('\n').map(s => s.trim());

    const slug = generateSlug(title);
    recipes.push({ id: slug, title, description, ingredients, steps });

    alert('Recipe added!');
    window.location.hash = '#/';
});

// Listen for click events on the Search link and Add Recipe button
document.querySelector('nav').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        const href = e.target.getAttribute('href');
        if (href === '#/') {
            // Handle Search link
            // You can update this part to render search functionality
            // For now, just redirect to the home page
            window.location.hash = '#/';
        } else if (href === '#/add-recipe') {
            // Handle Add Recipe button
            window.location.hash = '#/add-recipe';
        }
    }
});

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

