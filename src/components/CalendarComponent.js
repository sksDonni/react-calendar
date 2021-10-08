import React from 'react'
import {GetMonthChar} from './GetDateComponent'
import DayComponent from './DayComponent'
import WeekdaysComponent from './WeekdaysComponent'
import HeaderComponent from './HeaderComponent'

function CalendarComponent() {

	const {days, dateDisplay} = GetMonthChar();

	if(days.length != 0){	
		console.log(days);
		const currentDay = days.filter((day) => day.isCurrentDay === true)[0]
		console.log(currentDay);
		return (
			<>
				<HeaderComponent currDay={currentDay} dateDisplay={dateDisplay} />
				<div className='calendar-container'>
					<WeekdaysComponent />
					{days.map((day, index) => (
						<DayComponent day={day} key={index} />
					))}
				</div>
				<div>

				</div>
			</>
		)
	}else
	{
		return (
			<div>
				<WeekdaysComponent />
			</div>
		)
	}
}

export default CalendarComponent