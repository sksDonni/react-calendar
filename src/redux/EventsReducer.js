import * as ActionTypes from './ActionTypes'

export const Events = (state=[], action) => {
	switch(action.type)
	{

		case ActionTypes.ADD_EVENT:
			return state.concat(action.payload);

		default:
			return state;
	}
}