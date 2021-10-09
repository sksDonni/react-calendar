import * as ActionTypes from './ActionTypes'
import * as api from '../api'

export const addNewEvent = (event, date) => async (dispatch) => {
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

export const getEventsByDate = (date, userId) => async (dispatch) => {
	try{
		const {data} = await api.getEventsByDate(date, userId);
		dispatch({type: ActionTypes.GET_EVENTS, payload: data});
	}
	catch(err)
	{
		console.log(err);
	}
}

export const registerUser = (state, router) => async (dispatch) =>
{
	try
	{
		const {data} = await api.registerUser(state)
		console.log(data);
		dispatch({type: ActionTypes.REGISTER, payload: data})
		router.push('/auth/login')
	}catch(err)
	{
		console.log(err.message);
	}
}


export const loginUser = (state, router) => async (dispatch) => 
{
	try
	{
		const {data} = await api.loginUser(state)
		console.log(data)
		dispatch({type:ActionTypes.LOGIN, payload: data})
		//router.push('/posts')
	}catch(err)
	{
		console.log(err.message);
	}
}
