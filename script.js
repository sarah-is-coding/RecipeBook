function generateSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
}

function renderRecipePage(slug) {
    const recipe = recipes.find(r => r.id === slug);
    if (!recipe) return '404 - Recipe Not Found';

    return `
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
        <h3>Ingredients:</h3>
        <ul>${recipe.ingredients.map(i => `<li>${i.name}: ${i.measurement}</li>`).join('')}</ul>
        <h3>Steps:</h3>
        <ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    `;
}

function router() {
    let path = window.location.hash.substring(1);
    const appDiv = document.getElementById('app');

    if (path === '/') {
        appDiv.innerHTML = 'Search Page Content'; // Potentially render a list of recipes
    } else if (path === '/add-recipe') {
        document.getElementById('addRecipeForm').style.display = 'block';
    } else if (path.startsWith('/recipe/')) {
        const slug = path.replace('/recipe/', '');
        appDiv.innerHTML = renderRecipePage(slug);
    } else {
        appDiv.innerHTML = '404 - Page Not Found';
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

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
