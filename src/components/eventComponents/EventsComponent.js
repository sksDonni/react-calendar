import React from 'react'
import {useState, useEffect} from 'react-redux'
import AddEventsForm from './AddEventsForm'
import EventsListComponent from './EventsListComponent'
import SelectedDayComponent from './SelectedDayComponent'
import './events.css'

function EventsComponent() {
	
	return (
		<div className='events-container'>
			<SelectedDayComponent />
			<EventsListComponent />
			<AddEventsForm />
		</div>
	)
}

export default EventsComponent