import axios from 'axios'

const eventsURL = 'http://localhost:5000/events'
const baseURL = 'httlp://localhost:5000'

const API = axios.create({baseURL})

export const addEvent = (event, date) => API.post(`${eventsURL}/${date}`, event)
export const getEventsByDate = (date) => API.get(`${eventsURL}/${date}`);


