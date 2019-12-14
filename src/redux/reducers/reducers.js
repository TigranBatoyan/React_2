import {combineReducers} from 'redux';
import {todosReducer, eventsReducer} from './todosReducer';

export default combineReducers({todos:todosReducer, events:eventsReducer})