import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getEventsByDate} from '../../redux/ActionCreators'
import EventsFormComponent from './EventsFormComponent'
import EventLayout from './EventLayout'

// Component to fetch event list for a particular day and display them.
function EventsListComponent() {
	const dispatch = useDispatch();
	const dateSelected = useSelector((state) => state.dateSelected);
	const events = useSelector((state) => state.events);
	const data = localStorage.getItem('profile')
	const {_id} = JSON.parse(data).result

	useEffect(() => {
		console.log(dateSelected);
		dispatch(getEventsByDate(dateSelected, _id))
	}, [dateSelected])

	if(events.length !== 0){
		console.log(events);
		const newevents = events.filter((e) => e.userId === _id)
		console.log(newevents);
		const updatedevents = events.map(e => (<div><EventLayout event={e} /></div>))
		return(
		<>
			<div className="eventlist-container">
				{updatedevents}
			</div>
			<div>
				<EventsFormComponent />
			</div>
		</>
			)
		}
		else
		{
			return(
			<>
				<div className="no-events">
					No events found.<br/>
				</div>
				<div>
					<EventsFormComponent />
				</div>
			</>
		)
	}
}

export default EventsListComponent