import React, {useState} from 'react'
import {useSelector} from 'react-redux'

function SelectedDayComponent() {
	const day = useSelector((state) => state.dateSelected)
	console.log(day);
	const date = new Date(day).getDate()
	return (
		<div className="selected-day-container">
			{date}
		</div>
	)
}

export default SelectedDayComponent