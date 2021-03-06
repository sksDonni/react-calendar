import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

export const GetMonthChar = () => {

	const [currDate, setCurrDate] = useState('');
	const [days, setDays] = useState([]);
	const [month, setMonth] = useState('');
	const [dateDisplay, setDateDisplay] = useState('')
	const offset = useSelector((state) => state.month.month);
	useEffect(() => {

		const date = new Date();

		if(offset != 0)
		{
			date.setMonth( date.getMonth() + offset);
			setMonth(date.getMonth() + offset)
		}

		const day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();

		console.log(month);
		const firstDay = new Date(year, month, 1);
		const monthSize = new Date(year, month+1, 0).getDate();
		const numberOfEmptyDays = firstDay.getDay();
		setDateDisplay(`${date.toLocaleDateString('en-us', { month: 'short' })} ${year}`)

		let daysToBeSet = [];
		for(var i=1; i <= numberOfEmptyDays + monthSize; i++)
		{
			if(i > numberOfEmptyDays)
			{
				const dayString = `${year}-${month+1}-${i-numberOfEmptyDays}`;
				//console.log(dayString);
				console.log(dayString);
				daysToBeSet.push({
					value: i - numberOfEmptyDays,
			        isCurrentDay: (i - numberOfEmptyDays === day) && (offset === 0),
			        date: dayString,
				})
			}
			else
			{
				daysToBeSet.push({
					value: '',
					isCurrentDay: false,
					date: ''
				})
			}
		}

		setDays(daysToBeSet);
	}, [offset])

	return {
		days,
		dateDisplay
	}
}