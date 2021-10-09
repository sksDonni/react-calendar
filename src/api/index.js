import axios from 'axios'

const eventsURL = 'http://localhost:5000/events'
const baseURL = 'httlp://localhost:5000'
const authURL = 'http://localhost:5000/auth'

const API = axios.create({baseURL})

API.interceptors.request.use((req) => {

	if(localStorage.getItem('profile')){
		req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
	}
	return req
})

export const addEvent = (event, date) => API.post(`${eventsURL}/${date}`, event)
export const getEventsByDate = (date, userId) => API.get(`${eventsURL}/${date}`, userId);


export const registerUser = (data) => API.post(`${authURL}/register`, data)
export const loginUser = (data) => API.post(`${authURL}/login`, data)