import React from 'react'
import LoginComponent from './authComponents/LoginComponent'
import RegisterComponent from  './authComponents/RegisterComponent'

function SecondaryComponent() {
	return (
		<div>
			<LoginComponent />
			<RegisterComponent />
		</div>
	)
}

export default SecondaryComponent