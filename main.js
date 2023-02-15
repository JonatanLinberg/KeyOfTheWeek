
// get week number 1-52 mon-sun
function getweek(date) {
	daylen = 86400000
	if (date.getFullYear() % 4 == 0 && date.getMonth() >= 2) {
		date.setDate(date.getDate() + 1) // leap year (works until 2100...)
	}
	var year_start = new Date(date.getFullYear(), 0, 1)
	var day = Math.floor((date - year_start) / daylen)
	return Math.ceil(day / 7)
}

function getCurrentKey() {
	const keys = ['F#', 'B', 'Bb', 'Db', 'C', 'Eb', 'F', 'G', 'D', 'Ab', 'E', 'A']

	i = getweek(new Date()) % keys.length
	return keys[i]
}
