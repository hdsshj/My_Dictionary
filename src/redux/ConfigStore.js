import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import cardlist from './modules/cardlist';

const middlewares = [thunk];

const rootReducer = combineReducers({cardlist});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);
export default store;