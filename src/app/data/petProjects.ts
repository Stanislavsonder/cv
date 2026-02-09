import { type PetProject } from '@/types'

const PET_PROJECTS: PetProject[] = [
	{
		name: 'Streamhata Web Application',
		startDate: new Date(2021, 9),
		endDate: undefined,
		link: 'https://streamhata.club',
		technologies: ['Typescript', 'Vue', 'Nuxt', 'NestJS', 'MongoDB', 'S3', 'GraphQL', 'Socket.IO', 'Material UI', 'Figma'],
		achievementList: [
			'Implemented complex event management platform with real-time features (WebSockets, Twitch API integration) and CI/CD for seamless updates.'
		]
	},
	{
		name: 'FATE Extended Roleplay Assistance Tool',
		startDate: new Date(2023, 4),
		endDate: new Date(2023, 8),
		link: 'https://stanislavsonder.github.io/fate-extended-character-sheet',
		technologies: ['Typescript', 'Vue', 'PWA', 'Obsidian'],
		achievementList: [
			'Design a simple multi-language roleplay local assistance tool for FATE game system with PWA support for offline usage and export/import character sheets to savefiles.'
		]
	},
	{
		name: 'FATE: Core',
		startDate: new Date(2023, 12),
		endDate: undefined,
		link: 'https://play.google.com/store/apps/details?id=com.sonder.fate_core',
		technologies: ['Typescript', 'Kotlin', 'Vue', 'Ionic', 'Tailwind'],
		achievementList: [
			'Design and development of mobile application for FATE game system (iOS & Android) with module system for additional content and multi-language support with 30+ languages available.'
		]
	}
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())

export { PET_PROJECTS }
