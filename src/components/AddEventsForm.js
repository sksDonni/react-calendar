import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as ActionTypes from '../redux/ActionTypes'

function AddEventsForm() {
	const [eventName, setEventName] = useState('')
	const dateSelected = useSelector((state) => state.dateSelected);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const values = {
			eventName,
			dateSelected,
		}
		dispatch({type: ActionTypes.ADD_EVENT, payload: values})
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="event-name">Event Name</label>
			<input type="text" name="event-name" id="event-name" onChange={(e) => setEventName(e.target.value)}/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default AddEventsForm