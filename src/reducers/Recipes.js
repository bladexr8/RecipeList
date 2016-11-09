import { ADD_RECIPE, SET_RECIPES } from '../constants/action-types';

const  recipesReducer = (recipes = [], action) => {
    console.info('*** Running Recipe Reducer');

    switch (action.type) {
        
        // Note that concat creates a new array containing
        // the original values and the new one
        case ADD_RECIPE:
            console.log("***ADD_RECIPE action handler...");
            // console.log(action);
            var newRecipeList = recipes.concat({ name: action.name });
            console.log(newRecipeList);
            return newRecipeList; 
            //return recipes.concat({ name: action.name })

        case SET_RECIPES:
            console.log("***SET_RECIPES action handler...");
            return action.data.recipes;
    }

    return recipes;
};

module.exports = {
    recipesReducer: recipesReducer
}
