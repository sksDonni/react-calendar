import * as ActionTypes from './ActionTypes'

const initialDate = new Date();
const day = initialDate.getDate()
const month = initialDate.getMonth()
const year = initialDate.getFullYear()
const today = `${day}-${month}-${year}`;
export const DateSelected = (state=today, action) => {
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