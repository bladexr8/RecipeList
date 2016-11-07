import { ADD_RECIPE } from '../constants/action-types';

export function addRecipe(name) {
    return {
        type: ADD_RECIPE,
        name: name
    }
}