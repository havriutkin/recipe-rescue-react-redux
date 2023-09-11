export const loadRecipes = (recipes) => {
    return {
        type: 'recipes/loadRecipes',
        payload: recipes
    };
}

const initialRecipes = [];
export const recipesReducer = (state = initialRecipes, action) => {
    switch(action.type){
        case 'recipes/loadRecipes':
            return action.payload;
        default:
            return state;
    }
}