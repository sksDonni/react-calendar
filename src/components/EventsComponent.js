import React from 'react'
import {useState, useEffect} from 'react-redux'
import AddEventsForm from './AddEventsForm'
import EventsListComponent from './EventsListComponent'

function EventsComponent() {
	
	return (
		<div>
			<h1>Events</h1>
			<EventsListComponent />
			<AddEventsForm />
		</div>
	)
}

export default EventsComponent