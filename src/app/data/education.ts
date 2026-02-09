import { type Education } from '@/types'

const EDUCATION: Education[] = [
	{
		name: 'Belarusian State University',
		location: 'Minsk, Belarus',
		degree: "Bachelor's Degree in Computer Science (Web-programming, Operating Systems, algorithms and data structures, Computer graphic and Design)",
		startDate: new Date(2018, 8),
		endDate: new Date(2022, 6)
	},
	{
		name: 'Online Advanced Frontend Course by UlbiTV',
		degree: 'Covered complex frontend architecture, accessible UI development, performance optimization, testing strategies (unit, e2e), CI/CD pipelines, and full-stack integration best practices',
		startDate: new Date(2022, 9),
		endDate: new Date(2022, 11)
	},
	{
		name: 'Personal mentorship in Node.js architecture under industry expert Timur Shemsedinov',
		location: 'Montreal, Canada',
		degree: 'Asynchronous-, parallel- contract-, multi-paradigm- and meta- programming, and design patterns (OOP, GRASP, SOLID, GoF).',
		startDate: new Date(2023, 1),
		endDate: new Date(2023, 5)
	}
]

export { EDUCATION }