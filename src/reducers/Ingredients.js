import {ADD_INGREDIENT} from '../constants/action-types';

const ingredientsReducer = (ingredients = [], action) => { 
    console.info('*** Running Ingredient Reducer');
    return ingredients;    
 }

 module.exports = {
    ingredientsReducer: ingredientsReducer
}