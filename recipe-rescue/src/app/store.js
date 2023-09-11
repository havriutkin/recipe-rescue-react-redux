import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';

// Reducers imports
import { ingredientsReducer } from '../features/ingredients/ingredientsSlice';
import { recipesReducer } from '../features/recipes/recipesSlice';

const reducers = {
    ingredients: ingredientsReducer,
    recipes: recipesReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);