import React, {useState, useEffect} from 'react'
import AddEventsForm from './AddEventsForm'

function EventsFormComponent() {
	const [modalOpen, setModalOpen] = useState(false)
	const openClass = modalOpen?'display-block modal':'display-none modal'

	useEffect(() => {

	}, [modalOpen])

	const handleClose = (e) => {
		const prev = modalOpen;
		setModalOpen(false);
	}

	return (
		<div>
			<div onClick={(e) => setModalOpen(!(modalOpen))}>
				<button>Add Events here <span> + </span></button>
			</div>
			<div className={openClass}>
				<h1>Add Event</h1>
				<AddEventsForm handleClose={handleClose}/>
			</div>
		</div>
	)
}

export default EventsFormComponent