import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getEventsByDate} from '../../redux/ActionCreators'

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
		const events = events.filter((e) => e.userId === _id)
		console.log(events);
		events = events.map(e => (<div>{e.eventName}</div>))
		return(
			<div>
				{events}
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