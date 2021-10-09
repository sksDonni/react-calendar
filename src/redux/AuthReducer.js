import * as ActionTypes from '../redux/ActionTypes'
import isEmpty from 'is-empty'

const initialState = {authData: null}

const authReducer = (state=initialState, action) => {
	switch(action.type)
	{
		case 'LOGIN':
			localStorage.setItem('profile', JSON.stringify({...action.payload}))
			return {
				...state,
				authData: action.payload,
				loading: false,
				errors: null
			}

		case 'LOGOUT':
			localStorage.clear()
			console.log('cleared');
			return{
				...state,
				authData: null,
				loading: false,
				errors: null
			}

		default:
			return state
	}
}

export default authReducer