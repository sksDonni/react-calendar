import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as ActionTypes from '../../redux/ActionTypes'
import {nextMonthCal} from '../../redux/ActionCreators'
import {GrNext, GrPrevious} from 'react-icons/gr'
import "./layoutStyles.css"

function HeaderComponent({currDay, dateDisplay}) {
	
	const date = new Date();
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const offset = useSelector((state) => state.month.month);
	const dispatch = useDispatch();
	const month = new Date().toLocaleDateString('en-us', {month: 'long'})
	const year = new Date().getFullYear()
	const style = { color: "blue", fontSize: "2.5em" }
    const nextMonthCal = (offset) => ({
    	type: ActionTypes.NEXT_MONTH, payload: offset+1
    })

    const prevMonthCal = (offset) => ({
    	type: ActionTypes.PREV_MONTH, payload: offset-1
    })
    
	return (
			<div className="header">
					<button className="nav-link" onClick={() => dispatch(prevMonthCal(offset))}>
						<GrPrevious style={style} />
					</button>
					<h4 className="title">{dateDisplay} </h4>
					<button className="nav-link" onClick={() => dispatch(nextMonthCal(offset))}>
						<GrNext style={style}/>
					</button>
			</div>
	)
}

export default HeaderComponent