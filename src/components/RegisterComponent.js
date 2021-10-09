import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {registerUser} from '../redux/ActionCreators'
import {useHistory} from 'react-router-dom'


function Register() {

	const initialState = ''
	const [name, setStateName] = useState(initialState)
	const [email, setStateEmail] = useState(initialState)
	const [password, setStatePassword] = useState(initialState)
	const [password2, setStatePassword2] = useState(initialState)
	const history = useHistory()
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const state = {name, email, password, password2}
		console.log(state);
		dispatch(registerUser(state, history))
	}

	return (
		<div>
			<form onSubmit={handleSubmit} >
				<div className="input-field">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" onChange={(e) => setStateName(e.target.value)}/>
				</div>

				<div className='input-field'>
					<label htmlFor="email">Email</label>
					<input type="text" id="email" onChange={(e) => setStateEmail(e.target.value)}/>
				</div>

				<div className='input-field'>
					<label htmlFor="password">Password</label>
					<input type="text" id="password" onChange={(e) => setStatePassword(e.target.value)}/>
				</div>

				<div className='input-field'>
					<label htmlFor="password2">Confirm Password</label>
					<input type="text" id="password2" onChange={(e) => setStatePassword2(e.target.value)}/>
				</div>
				<div className='input-field'>
					<button>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Register