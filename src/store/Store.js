// Redux Store to hold application state
import { createStore, compose } from 'redux';
import reducer from '../reducers/Reducer';

const initialState = {
    recipes: [
        {
            name: 'Omelette'
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

const store = createStore(reducer, initialState);

export default store;