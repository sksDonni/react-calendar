import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as ActionTypes from '../redux/ActionTypes'
import {nextMonthCal} from '../redux/ActionCreators'

function HeaderComponent({currDay, dateDisplay}) {
	
	const date = new Date();
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const offset = useSelector((state) => state.month.month);
	const dispatch = useDispatch(); 
	const today = date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    const nextMonthCal = (offset) => ({
    	type: ActionTypes.NEXT_MONTH, payload: offset+1
    })

    const prevMonthCal = (offset) => ({
    	type: ActionTypes.PREV_MONTH, payload: offset-1
    })
    
	return (
		<div className="header">
			<h1>Calendar</h1>
			<h4>{today.split(' ')[0]} <br/>{today.split(' ')[1]} </h4>

			<div>
				<button onClick={() => dispatch(prevMonthCal(offset))}>
					Prev
				</button>
				<button onClick={() => dispatch(nextMonthCal(offset))}>
					Next
				</button>
			</div>

			<div>
				{dateDisplay}
			</div>
		</div>
	)
}

export default HeaderComponent