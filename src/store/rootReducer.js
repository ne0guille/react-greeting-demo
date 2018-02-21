import { combineReducers } from 'redux';

import { reducer as registrations } from '../scenes/register/data/reducer';

const rootReducer = combineReducers({
    registrations,
});

export default rootReducer;
