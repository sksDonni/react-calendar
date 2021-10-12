import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as ActionTypes from '../../redux/ActionTypes'
import {addNewEvent} from '../../redux/ActionCreators'
import './events.css'

function AddEventsForm(props) {
	const [eventName, setEventName] = useState(props.eventName?props.eventName:'')
	const [eventTime, setEventTime] = useState(props.eventTime?props.eventTime:'')
	const dateSelected = useSelector((state) => state.dateSelected);
	const userId = JSON.parse(localStorage.getItem('profile')).result._id
	const dispatch = useDispatch();
	const [modalOpen, setModalOpen] = useState(true)
	const handleSubmit = (e) => {
		e.preventDefault();
		const values = {
			eventName,
			dateSelected,
			userId
		}
		console.log(values, dateSelected);
		dispatch(addNewEvent(values, dateSelected));
		props.handleClose()
	}

	const handleClose = (e) => {
		console.log('clicked');
		props.handleClose()
	}
	return (
	<div>
		<form onSubmit={handleSubmit}>
			<div className="auth-container">
				<h4>Add Event</h4>
				<button className="buttonClose" onClick={handleClose}>X</button>
				<div className="input-field">
					<input type="text" name="event-name" value={eventName} placeholder='enter event' id="event-name" onChange={(e) => setEventName(e.target.value)}/>
				</div>
				<div className="input-field">
					<input type="text" name="event-time" value={eventTime} placeholder='enter event start time' id="event-name" onChange={(e) => setEventTime(e.target.value)}/>
				</div>
			<button type="submit">Submit</button></div>
			<div className=""></div>
		</form>
	</div>
	)
}

export default AddEventsForm