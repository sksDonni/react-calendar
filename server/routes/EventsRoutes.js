import express from 'express'
import {getEventsByDate, addEvent, getEventById, deleteEvent} from "../controller/EventsController.js"
import auth from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/:userId/:date', auth, getEventsByDate)
router.post('/:date', auth, addEvent);
router.delete('/:id', deleteEvent);
export default router