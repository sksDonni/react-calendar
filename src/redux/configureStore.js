import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Events} from './EventsReducer'
import {Month} from './MonthsReducer'
import thunk from "redux-thunk";
import logger from "redux-logger";
import {DateSelected} from './DateSelected'
import Auth from './AuthReducer'

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			events: Events,
			month: Month,
			dateSelected: DateSelected,
			auth: Auth,
		}),
    	applyMiddleware(thunk, logger));

	return store;
}
