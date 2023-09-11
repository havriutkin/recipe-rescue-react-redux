export const formatInput = (text) => {
    let result = "";

    for(let i = 0; i < text.length; i++)
        i === 0 ? result += text[i].toUpperCase() : result += text[i].toLowerCase();

    return result;
}

export const fetchRecipes = async (ingredients) => {
    const ingredientsString = ingredients.join(', ');
    const params = new URLSearchParams({
        apiKey: '256806ae90944f2589964913b500eb99',
        ingredients: ingredientsString,
        ranking: 2
    })

    const apiURL = `https://api.spoonacular.com/recipes/findByIngredients?${params}`;
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
