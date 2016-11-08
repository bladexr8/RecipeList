// middleware logging

// innermost function has access to the dispatch()
// and getState() methods from store, the current
// action being processed, and next method which
// allows call to next middleware in line

/*const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
    console.log(`Action: ${action.type}`);
    next(action);
};

export default logMiddleware;*/

const logger = function({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

module.exports = {
    logger: logger
}