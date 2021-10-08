import React from 'react'

function DayComponent({day}) {
	//console.log(day);
	const present = day.isCurrentDay ? 'today' : ''; 
	//console.log(day);
	return (
		<div className={present}>
			{day.value}
		</div>
	)
}

export default DayComponent