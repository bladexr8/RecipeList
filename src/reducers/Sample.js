// Simple redux reducer
// Reducers take in 2 things (the state and the action) and reduce them
// down to 1 thing (the new state)

function sample(state = [], action) {
    console.log('Sample Reducer');
    console.log(state);
    console.log(action);
    return state;
}

export default sample;