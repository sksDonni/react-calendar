import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getEventsByDate} from '../redux/ActionCreators'

// Component to fetch event list for a particular day and display them.
function EventsListComponent() {
	const dispatch = useDispatch();
	const dateSelected = useSelector((state) => state.dateSelected);
	const events = useSelector((state) => state.events);
	
	useEffect(() => {
		console.log(dateSelected);
		dispatch(getEventsByDate(dateSelected))
	}, [dateSelected])

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