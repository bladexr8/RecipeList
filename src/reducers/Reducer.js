import { combineReducers } from 'redux';

// import sample from './Sample';
// import other from './Other';
import {recipesReducer}  from './Recipes';
import {ingredientsReducer}  from './Ingredients';

const reducer = combineReducers({
    // sample: sample,
    // other: other,
    recipes: recipesReducer,
    ingredients: ingredientsReducer
});

export default reducer;