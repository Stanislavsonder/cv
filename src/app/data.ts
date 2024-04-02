import phoneIcon from '../assets/phone.svg'
import envelopeIcon from '../assets/envelope.svg'
import linkedinIcon from '../assets/linkedin.svg'
import telegramIcon from '../assets/telegram.svg'
import githubIcon from '../assets/github.svg'
import type { Contact, Education, Experience, Project } from '../types'

const NAME = 'Stanislav Doronin'
const ADDRESS = '235 Sherbrooke St W, Montreal, QC H2X 1X8'

const CONTACTS: Contact[] = [
	{
		type: 'Phone number',
		text: '+14385272569',
		icon: phoneIcon,
		link: 'tel:+14385272569'
	},
	{
		type: 'Email address',
		text: 'stanislavsonder@gmail.com',
		icon: envelopeIcon,
		link: 'mailto:stanislavsonder@gmail.com'
	},
	{
		type: 'LinkedIn profile',
		text: 'linkedin.com/in/stanislavsonder',
		icon: linkedinIcon,
		link: 'https://www.linkedin.com/in/stanislavsonder/'
	},
	{
		type: 'Telegram profile',
		text: '@Stanislavsonder',
		icon: telegramIcon,
		link: 'https://t.me/stanislavsonder'
	},
	{
		type: 'GitHub profile',
		text: 'github.com/stanislavsonder',
		icon: githubIcon,
		link: 'https://github.com/Stanislavsonder'
	}
]

const EDUCATION: Education[] = [
	{
		name: 'Belarusian State University',
		location: 'Minsk, Belarus',
		degree: 'Bachelor of Engineering (Web-programming, Computer graphic and Design)',
		startDate: '2018',
		endDate: '2022'
	}
]

const EXPERIENCE: Experience[] = [
	// {
	// 	company: 'Soulmasters Team',
	// 	position: 'Quest Script Designer / Sound designer',
	// 	location: 'Minsk, Belarus',
	// 	startDate: '2013',
	// 	endDate: '2014',
	// 	achievementList: ['Creation modifications for TES V: Skyrim. Scripting events, FX, voiceover and dialogue system on Creation Engine.']
	// },
	{
		company: 'Moonglimpse Interactive',
		position: 'Game designer, C# Junior Software Engineer (Unity)',
		location: 'Minsk, Belarus',
		startDate: '2017',
		endDate: '2018',
		achievementList: ['Game development for the HandlessWizard game and some prototypes.']
	},
	{
		company: 'Flexmerch Corp',
		position: 'JavaScript / ExtendScript Developer',
		location: 'Minsk, Belarus',
		startDate: '2019',
		endDate: '2019',
		achievementList: [
			'Creating of Adobe Illustrator, Photoshop scripts / extensions. Optimizing business expenses by analyzing data and making strategy predictions.'
		]
	},
	{
		company: 'Axamit',
		position: 'AEM Front End Developer at STMicroelectronics',
		location: 'Minsk, Belarus',
		startDate: '2020',
		endDate: '2022',
		achievementList: [
			'AEM components and templates design for STMicroelectronics company.',
			'Migration from legacy to modern code using React. Developing new features for BTB communication system.'
		]
	},
	{
		company: 'Axamit',
		position: 'Senior Front End Engineer at BellMedia',
		location: 'Montréal, Canada',
		startDate: '2022',
		endDate: 'Present',
		achievementList: [
			'Full cycle of development for iHeart Canada project with 90+ stations and 10+ web sites. Architecture design and development for CTV News shopping module.',
			'Leading position of the frontend team. Cross-team collaboration with BellMedia, CGI and iHeart companies.',
			'Design and maintenance of internal library, that used by different frontend teams. Teams mentoring and lecturing for experience exchange.'
		]
	}
]

const PROJECTS: Project[] = [
	{
		name: 'Streamhata Web Application',
		date: '2021 - Present',
		link: 'https://streamhata.club',
		technologies: ['Typescript', 'Vue', 'Nuxt', 'NestJS', 'MongoDB', 'GraphQL', 'Socket.IO', 'Material UI', 'Figma'],
		achievementList: [
			// 'Design and development of complex application for managing StreamHata event and Users-for-users content policy.',
			// 'Twitch integration to show overlay for additional information. Websocket sessions for multiplayer / devices support.',
			// 'Server configuration and CI/CD pipeline for continuous integration and deployment.'
		]
	},
	{
		name: 'FATE Extended Roleplay Assistance Tool',
		date: '2023 - Present',
		link: 'https://stanislavsonder.github.io/fate-extended-character-sheet',
		technologies: ['Typescript', 'Vue', 'PWA', 'Obsidian'],
		achievementList: [
			// 'Design a simple multi-language roleplay local assistance tool for FATE game system.'
		]
	}
]

const TECH_CLOUD = [
	'JavaScript',
	'TypeScript',
	'Vue',
	'MobX',
	'Redux',
	'Vuex',
	'Pinia',
	'Nuxt',
	'ReactJS',
	'Next.JS',
	'NodeJS',
	'Nest.js',
	'GraphQL',
	'Websockets',
	'Socket.io',
	'Astro',
	'Server-side Rendering',
	'HTML5',
	'CSS3',
	'SASS',
	'Jest',
	'Vitest',
	'Accessibility Expertize',
	'Web Vitals',
	'ExtendScript',
	'AEM',
	'Material UI',
	'Webpack',
	'Vite',
	'ESBuild',
	'Express',
	'MongoDB',
	'Mongoose',
	'SQL',
	'Agile',
	'Scrum',
	'Kanban',
	'Git',
	'Docker',
	'Portanier',
	'Nginx Proxy Manager'
]

export { NAME, ADDRESS, TECH_CLOUD, EDUCATION, CONTACTS, EXPERIENCE, PROJECTS }
