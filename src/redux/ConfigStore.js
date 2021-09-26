import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import cardlist from './modules/cardlist';

const rootReducer = combineReducers({cardlist});

const store = createStore(rootReducer);
export default store;