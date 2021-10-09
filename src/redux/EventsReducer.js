import * as ActionTypes from './ActionTypes'

export const Events = (state=[], action) => {
	switch(action.type)
	{
		case ActionTypes.GET_EVENTS:
			const {data} = action.payload;
			console.log('reached event reducer to fetch');
			console.log(data);
			return data

		case ActionTypes.ADD_EVENT:
			return state.concat(action.payload);

		default:
			return state;
	}
}