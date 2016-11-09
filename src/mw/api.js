import { FETCH_RECIPES } from '../constants/action-types';
import { setRecipes } from '../actions/RecipeActions';
import $ from 'jquery';

const URL = 'https://s3.amazonaws.com/500tech-shared/db.json';

const initialState = {
    recipes: [
        {
            name: 'Omelette'
        },
        {
            name: 'Prawn Curry'
        }
    ],
    ingredients: [
        {
            recipe: 'Omelette',
            name: 'Egg',
            quantity: 2
        }
    ]
};

function fetchData(url, callback) {
    // usually this would be a call to a database or API
    console.log("***[fetchData] - returning initial State...",initialState);
    callback(initialState);
    /* DOESN'T WORK ON LOCALHOST... 
    $.ajax({
        type: 'GET',
        url: url,
        contentType: 'application/json; charset=utf-8',
        async: true,
        dataType: 'jsonp',
        success: function(data, textStatus, jqXHR) {
            console.log('Successfully retrieved recipe data');
            console.log(data);
            callback(data);
        }.bind(this),
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There was an error getting the recipe data");
            console.log(errorThrown);
        }.bind(this)
    });*/
}

const apiMiddleware = ({ dispatch }) => next => action => {
    if (action.type === FETCH_RECIPES) {
        fetchData(URL, data => dispatch(setRecipes(data)));
    }
    next(action);
};

module.exports = {
    apiMiddleware: apiMiddleware
}