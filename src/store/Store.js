// Redux Store to hold application state
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers/Reducer';
import { logger } from '../mw/Logger';
import { apiMiddleware } from '../mw/api';

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

/*function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}*/

// const store = createStore(reducer, initialState, applyMiddleware(logger, apiMiddleware));
const store = createStore(reducer, applyMiddleware(logger, apiMiddleware));

export default store;