import express from 'express'
import {getEventsByDate, addEvent, getEventById} from "../controller/EventsController.js"
import auth from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/:date', auth, getEventsByDate)
router.post('/:date', auth, addEvent);

export default router