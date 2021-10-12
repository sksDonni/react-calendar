import React, {useState, useEffect} from 'react'
import {NavLink, useHistory, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode'
import PrimaryComponent from './PrimaryComponent'
import SecondaryComponent from './SecondaryComponent'

function MainComponent() {
	const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()
	const logout = () => {
		dispatch({type: 'LOGOUT'})
		history.push('/auth')
		setUser(null)
	}

	useEffect(() => {
		const token = User?.token
		if(token){
			const decodedToken = decode(token)
		}
		setUser(JSON.parse(localStorage.getItem('profile')))
	}, [location])


	return (
		<div className="main-container">
			{User? <PrimaryComponent /> : history.push('/auth/login')}
		</div>
	)
}

export default MainComponent