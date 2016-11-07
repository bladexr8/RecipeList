import { combineReducers } from 'redux';

import sample from './Sample';
import other from './Other';

const reducer = combineReducers({
    sample: sample,
    other: other
});

export default reducer;