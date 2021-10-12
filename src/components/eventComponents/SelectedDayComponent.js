import React, {useState} from 'react'
import {useSelector} from 'react-redux'

function SelectedDayComponent() {
	const day = useSelector((state) => state.dateSelected)
	return (
		<div className="selected-day-container">
			{day.slice(0, 2)}
		</div>
	)
}

export default SelectedDayComponent