import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Events} from './EventsReducer'
import {Month} from './MonthsReducer'
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			events: Events,
			month: Month
		}),
    	applyMiddleware(thunk, logger));

	return store;
}
