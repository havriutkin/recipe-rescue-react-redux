import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';

// Reducers imports
import { ingredientsReducer } from '../features/ingredients/ingredientsSlice';

const reducers = {
    ingredients: ingredientsReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);