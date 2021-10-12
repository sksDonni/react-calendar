import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteEvent} from '../../redux/ActionCreators'

function EventLayout({event}) {
	const eventLink = `/${event._id}`
	const dispatch = useDispatch()
	const deleteEvent = () => {
		dispatch(deleteEvent(event._id))
	}

	return (
		<div className="eventLayout">
				<Link to={eventLink}>
					<h3 className="event-link">{event.eventName}</h3>
					<small>{event.eventTime}</small>
				</Link>
		</div>
	)
}

export default EventLayout