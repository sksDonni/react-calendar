import React from 'react'
import CalendarComponent from './calendarComponents/CalendarComponent'
import EventsComponent from './eventComponents/EventsComponent'

function PrimaryComponent() {
	return(
		<div className="primary-container">
			<CalendarComponent />
			<EventsComponent />
		</div>
	)
}

export default PrimaryComponent