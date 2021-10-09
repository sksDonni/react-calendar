import * as ActionTypes from './ActionTypes'
import * as api from '../api'

export const addNewEvent = (event) => async (dispatch) => {
	try{
		const {data} = await api.addEvent(event)
		console.log(data);
		dispatch({type: ActionTypes.ADD_EVENT, payload: data});
	}
	catch(err)
	{
		console.log(err);
	}
}

export const getEventsByDate = (date) => async (dispatch) => {
	try{
		const {data} = await api.getEventsByDate(date);
		console.log(data);
		dispatch({type: ActionTypes.GET_EVENTS, payload: data});
	}
	catch(err)
	{
		console.log(err);
	}
}



