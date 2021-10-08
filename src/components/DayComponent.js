import React from 'react'
import {useDispatch} from 'react-redux'
import * as ActionTypes from '../redux/ActionTypes'

function DayComponent({day}) {
	//console.log(day);
	const present = day.isCurrentDay ? 'today' : ''; 
	//console.log(day);
	const dayValue = day.date
	const dispatch = useDispatch();
	return (
		<div className={present} onClick={() => {dispatch({type:ActionTypes.CHANGE_DATE, payload: dayValue})}}>
			{day.value}
		</div>
	)
}

export default DayComponent