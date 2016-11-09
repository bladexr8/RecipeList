import { ADD_RECIPE, SET_RECIPES, FETCH_RECIPES } from '../constants/action-types';

export function addRecipe(name) {
    return {
        type: ADD_RECIPE,
        name: name
    }
}

export function setRecipes(data) {
    return {
        type: SET_RECIPES,
        data: data
    }
}

export function fetchRecipes(data) {
    return {
        type: FETCH_RECIPES,
        data: data
    }
}