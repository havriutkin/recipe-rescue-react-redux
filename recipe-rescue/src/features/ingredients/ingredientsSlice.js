export const addIngredient = (name) => {
    return {
        type: 'ingredients/addIngredient',
        payload: name
    };
} 

export const removeIngredient = (name) => {
    return {
        type: 'ingredients/removeIngredient',
        payload: name
    };
}

export const clearIngredients = () => {
    return {
        type: 'ingredients/clearIngredients'
    };
}

const initialIngredients = [];
export const ingredientsReducer = (state = initialIngredients, action) => {
    switch (action.type){
        case 'ingredients/addIngredient':
            return state.includes(action.payload) ? state : [...state, action.payload];
        
        case 'ingredients/removeIngredient':
            return state.filter(el => el !== action.payload);

        case 'ingredients/clearIngredients':
            return [];

        default:
            return state;
    }
}