import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginUser} from '../redux/ActionCreators'
import {useHistory} from 'react-router-dom'


function Login() {

	const initialState = ''
	const [email, setStateEmail] = useState(initialState)
	const [password, setStatePassword] = useState(initialState)
	const dispatch = useDispatch()
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()
		const state = {email, password}
		console.log(state);
		dispatch(loginUser(state, history))
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="text" id="email" onChange={(e) => setStateEmail(e.target.value)}/>
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="text" id="password" onChange={(e) => setStatePassword(e.target.value)}/>
				</div>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default Login