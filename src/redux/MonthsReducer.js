import * as ActionTypes from './ActionTypes'

const init_state = {
	month: 0,
}

export const Month = (state=init_state , action) => {
	switch(action.type)
	{
		case ActionTypes.NEXT_MONTH:
			return{
				...state,
				month: action.payload
			}

		case ActionTypes.PREV_MONTH:
			return{
				...state,
				month: action.payload,
			}

		default:
			return state;
	}
}