import * as ActionTypes from './ActionTypes'

const initialDate = new Date().toLocaleDateString();
export const DateSelected = (state=initialDate, action) => {
	switch(action.type)
	{
		case ActionTypes.CHANGE_DATE:
			const newDate = action.payload
			console.log(newDate);
			return newDate

		default:
			return state;
	}
}