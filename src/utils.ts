
export function getDatesRange(startDate: Date, endDate?: Date) {
	if (endDate?.getFullYear() === startDate.getFullYear()) {
		return `${startDate.getFullYear()}`
	}
	return `${startDate.getFullYear()} - ${endDate?.getFullYear() || 'Present'}`
}

export function getExperienceDuration(startDate: Date, endDate?: Date) {
	const diff = (endDate?.getTime() || Date.now()) - startDate.getTime()
	const year = 1000 * 60 * 60 * 24 * 365
	const month = 1000 * 60 * 60 * 24 * 30
	const years = Math.floor(diff / year)
	const months = Math.floor((diff % year) / month)
	if (years < 1) {
		return '< 1 year'
	}
	return [years ? `${years} year(s)` : '', months ? `${months} months` : ''].filter(Boolean).join(', ')
}