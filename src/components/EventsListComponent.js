import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

// Component to fetch event list for a particular day and display them.
function EventsListComponent() {
	const events = useSelector((state) => state.events)
	const dispatch = useDispatch();

	if(events.length !== 0){
		return(
			<div>
				{events.map((event) => (
					<div>{event.eventName}</div>
				))}
			</div>
			)
		}
		else
		{
			return(
				<div>nothing</div>
		)
	}
}

export default EventsListComponent