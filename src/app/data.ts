import phoneIcon from '../assets/phone.svg'
import envelopeIcon from '../assets/envelope.svg'
import linkedinIcon from '../assets/linkedin.svg'
import telegramIcon from '../assets/telegram.svg'
import githubIcon from '../assets/github.svg'
import type { Contact, Education, Experience, Project, Skill, WorkProject } from '../types'

type ProjectNames =  'ST' | 'iHeart' | 'CTV' | 'Noovoinfo' | 'BNN' | 'CP24' | 'ShoppingTrends' | 'FlexmerchPBN'
const WORK_PROJECTS: Record<ProjectNames, WorkProject> = {
	ST: {
		name: 'ST Microelectronics',
		link: 'https://www.st.com'
	},
	iHeart: {
		name: 'iHeart Canada',
		link: 'https://www.iheartradio.ca/'
	},
	CTV: {
		name: 'CTV News',
		link: 'https://www.ctvnews.ca/'
	},
	Noovoinfo: {
		name: 'Noovo info',
		link: 'https://www.noovo.info/'
	},
	BNN: {
		name: 'BBN Bloomberg',
		link: 'https://www.bnnbloomberg.ca/'
	},
	CP24: {
		name: 'CP24',
		link: 'https://www.cp24.com/'
	},
	ShoppingTrends: {
		name: 'CTV Shopping Trends',
		link: 'https://www.ctvnews.ca/shopping.html'
	},
	FlexmerchPBN: {
		name: 'Flexmerch PBN',
		link: 'https://www.flexmerch.com/'
	}
} as const


const NAME = 'Stanislav Doronin'
const ADDRESS = 'Montreal, Quebec, Canada'
const DESCRIPTION = 'Senior Front End Engineer with a strong track record in building scalable architectures, leading teams, and enhancing user experiences through advanced frontend solutions for high-traffic platforms'

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
		degree: 'Bachelor\'s Degree in Computer Science (Web-programming, Operating Systems, algorithms and data structures, Computer graphic and Design)',
		startDate: new Date(2018, 8),
		endDate: new Date(2022, 6)
	},
	{
		name: 'Vue Mastery / Pinia Mastery',
		location: 'Montreal, Canada',
		degree: 'Vue 3 and Pinia advanced courses',
		startDate: new Date(2022, 9),
		endDate: new Date(2022, 11)
	},
	{
		name: 'Advanced Frontend UlbiTV',
		location: 'Montreal, Canada',
		degree: 'Configuring complex frontend projects, building accessible UI components, architecting scalable applications, optimizing performance, implementing comprehensive testing strategies, managing CI/CD pipelines, and deploying high-quality code, all while ensuring best practices in both frontend and backend integrations',
		startDate: new Date(2022, 9),
		endDate: new Date(2022, 11)
	},
	{
		name: 'Timur Shemsedinov\'s NodeJS architecture mentoring',
		location: 'Montreal, Canada',
		degree: 'Asynchronous-, parallel- contract-, multi-paradigm- and meta- programming, and design patterns (OOP, GRASP, SOLID, GoF).',
		startDate: new Date(2023, 1),
		endDate: new Date(2023, 5)
	},
	{
		name: 'AI and Machine Learning courses',
		location: 'Montreal, Canada',
		degree: 'Programming of neural networks, machine learning, and artificial intelligence. Data analysis and visualization. Usage of AI-powered tools for performance optimization. Promoting AI-driven solutions for business.',
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 7)
	}

]

const EXPERIENCE: Experience[] = [
	{
		company: 'Moonglimpse Interactive',
		position: 'Game designer, C# Junior Software Engineer (Unity)',
		location: 'Minsk, Belarus',
		startDate: new Date(2017, 7),
		endDate: new Date(2018, 5),
		achievementList: [{
			text: 'Game development for the HandlessWizard game and some prototypes.',
		}]
	},
	{
		company: 'Flexmerch Corp',
		position: 'JavaScript / ExtendScript Developer',
		location: 'Minsk, Belarus',
		startDate: new Date(2019, 0),
		endDate: new Date(2020, 3),
		projects: [WORK_PROJECTS.FlexmerchPBN],
		achievementList: [
			{
				text: 'Created Adobe Illustrator, Photoshop scripts / extensions for computer advanced graphic processing.',
				projects: [WORK_PROJECTS.FlexmerchPBN]
			},
			{
				text: 'Optimized business expenses by analyzing data and making strategy predictions that saved ~60% of consumable materials expenses.',
				projects: [WORK_PROJECTS.FlexmerchPBN]
			}
		]
	},
	{
		company: 'Axamit',
		position: 'AEM Front End Developer at STMicroelectronics',
		location: 'Minsk, Belarus',
		startDate: new Date(2020, 4),
		endDate: new Date(2022, 6),
		projects: [WORK_PROJECTS.ST],
		achievementList: [
			{
				text: 'Design and creation of reusable AEM components and templates to streamline content management and enhance site flexibility',
				projects: [WORK_PROJECTS.ST]
			},
			{
				text: 'Successfully transitioned legacy AngularJS projects to a contemporary React-based architecture, while simultaneously implementing new features for an advanced B2B communication platform.',
				projects: [WORK_PROJECTS.ST]
			},
			{
				text: 'Led initiatives to optimize Core Web Vitals and Accessibility standards across the primary website and its subdomains, improving user experience and site performance up to 40%.',
				projects: [WORK_PROJECTS.ST]
			},
			{
				text: 'Implemented OneTrust integration for GDPR compliance, while concurrently enhancing analytics and SEO strategies to boost search engine visibility and data security.',
				projects: [WORK_PROJECTS.ST]
			}
		]
	},
	{
		company: 'Axamit',
		position: 'Senior Front End Engineer at BellMedia',
		location: 'Montréal, Canada',
		startDate: new Date(2022, 7),
		endDate: undefined,
		projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.Noovoinfo, WORK_PROJECTS.BNN, WORK_PROJECTS.CP24],
		achievementList: [
			{
				text: 'Led the design and implementation of scalable frontend architectures for high-traffic platforms, including iHeart Canada and CTV News.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends]
			},
			{
				text: 'Led a team of four frontend developers, conducted cross-team training, and mentored junior developers, enhancing team productivity and technical expertise.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.ShoppingTrends]
			},
			{
				text: 'Developed an advanced ad management system that integrates Google Publisher Tag with AEM, enabling client-side rendering. This solution enhanced ad campaign performance by 53%, offering flexible targeting configurations for individual brands and pages.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.ShoppingTrends]
			},{
				text: 'Worked closely with SEO, Editorial, DevOps, and other departments to integrate solutions seamlessly and meet project goals.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.BNN, WORK_PROJECTS.CP24]
			},{
				text: 'Architected a dynamic image rendering system where AEM generates a set of images, and a Vue component selects the appropriate size based on context. This innovation reduced client-side load and improved page load times by 140%, significantly enhancing user experience.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.Noovoinfo]
			},{
				text: 'Created a component distribution library featuring unstyled components utilized across multiple Bell projects. This toolkit streamlined code unification and reduced development time, boosting team efficiency',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.Noovoinfo]
			},{
				text: 'Developed an AEM-driven analytics management system that simplified the workflow for editors, minimizing the need for code changes and expediting the launch of new analytics campaigns ~20% faster.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.Noovoinfo]
			},
			{
				text: 'Introduced a concept allowing the use of Vue components within AEM\'s Rich Text Editor. This approach drastically simplified content editing, empowering editors to visually manage Vue components directly within the editor',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.Noovoinfo]
			},
			{
				text: 'Orchestrated the migration of BNN Bloomberg, CP24, and additional website modules to a new CMS, while simultaneously developing new features and ensuring the stability and maintenance of existing systems.',
				projects: [WORK_PROJECTS.BNN, WORK_PROJECTS.CP24]
			}]
	}
].sort((a,b) => b.startDate.getTime() - a.startDate.getTime())

const PROJECTS: Project[] = [
	{
		name: 'Streamhata Web Application',
		startDate: new Date(2021, 9),
		endDate: undefined,
		link: 'https://streamhata.club',
		technologies: ['Typescript', 'Vue', 'Nuxt', 'NestJS', 'MongoDB', 'GraphQL', 'Socket.IO', 'Material UI', 'Figma'],
		achievementList: [
			'Design and development of complex application for managing StreamHata event and Users-for-users content policy.',
			'Twitch integration to show overlay for additional information. Websocket sessions for multiplayer / devices support.',
			'Server configuration and CI/CD pipeline for continuous integration and deployment.'
		]
	},
	{
		name: 'FATE Extended Roleplay Assistance Tool',
		startDate: new Date(2023, 4),
		endDate: undefined,
		link: 'https://stanislavsonder.github.io/fate-extended-character-sheet',
		technologies: ['Typescript', 'Vue', 'PWA', 'Obsidian'],
		achievementList: [
			'Design a simple multi-language roleplay local assistance tool for FATE game system.',
			'PWA support for offline usage. Export/import character sheets to savefiles.'
		]
	}
].sort((a,b) => b.startDate.getTime() - a.startDate.getTime())

const TECH_CLOUD: Skill[] = [
	{ name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', category: 'Frontend', important: true },
	{ name: 'TypeScript', url: 'https://www.typescriptlang.org/', category: 'Frontend', important: true },
	{ name: 'Vue', url: 'https://vuejs.org/', category: 'Frontend', important: true },
	{ name: 'MobX', url: 'https://mobx.js.org/README.html', category: 'Frontend', important: true },
	{ name: 'Redux', url: 'https://redux.js.org/', category: 'Frontend', important: true },
	{ name: 'Vuex', url: 'https://vuex.vuejs.org/', category: 'Frontend', important: true },
	{ name: 'Pinia', url: 'https://pinia.vuejs.org/', category: 'Frontend', important: true },
	{ name: 'Nuxt', url: 'https://nuxt.com/', category: 'Frontend', important: true },
	{ name: 'ReactJS', url: 'https://react.dev/', category: 'Frontend', important: true },
	{ name: 'Next.JS', url: 'https://nextjs.org/', category: 'Frontend', important: true },
	{ name: 'NodeJS', url: 'https://nodejs.org/en', category: 'Backend', important: false },
	{ name: 'Nest.js', url: 'https://nestjs.com/', category: 'Backend', important: false },
	{ name: 'Bun', url: 'https://bun.sh/', category: 'Backend', important: false },
	{ name: 'GraphQL', url: 'https://graphql.org/', category: 'Backend', important: false },
	{ name: 'Websockets', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API', category: 'Backend', important: false },
	{ name: 'Socket.io', url: 'https://socket.io/', category: 'Backend', important: false },
	{ name: 'Astro', url: 'https://astro.build/', category: 'Frontend', important: false },
	{ name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', category: 'Frontend', important: true },
	{ name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', category: 'Frontend', important: true },
	{ name: 'SASS', url: 'https://sass-lang.com/', category: 'Frontend', important: true },
	{ name: 'Jest', url: 'https://jestjs.io/', category: 'Frontend', important: false },
	{ name: 'Vitest', url: 'https://vitest.dev/', category: 'Frontend', important: false },
	{ name: 'Accessibility Expertize', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility', category: 'Frontend', important: false },
	{ name: 'Web Vitals', url: 'https://support.google.com/webmasters/answer/9205520?hl=en', category: 'Frontend', important: false },
	{ name: 'ExtendScript', url: 'https://extendscript.docsforadobe.dev/introduction/extendscript-overview.html', category: 'Other', important: false },
	{ name: 'ArcXP', url: 'https://www.arcxp.com/', category: 'Other', important: false },
	{ name: 'AEM', url: 'https://www.aem.live/', category: 'Other', important: false },
	{ name: 'Material UI', url: 'https://mui.com/material-ui/', category: 'Frontend', important: false },
	{ name: 'Webpack', url: 'https://webpack.js.org/', category: 'Frontend', important: false },
	{ name: 'Vite', url: 'https://vitejs.dev/', category: 'Frontend', important: false },
	{ name: 'ESBuild', url: 'https://esbuild.github.io/', category: 'Frontend', important: false },
	{ name: 'Express', url: 'https://expressjs.com/', category: 'Backend', important: false },
	{ name: 'MongoDB', url: 'https://www.mongodb.com/', category: 'Backend', important: false },
	{ name: 'Mongoose', url: 'https://mongoosejs.com/', category: 'Backend', important: false },
	{ name: 'OOP', url: 'https://mongoosejs.com/', category: 'Other', important: false },
	{ name: 'SOLID', url: 'https://en.wikipedia.org/wiki/SOLID', category: 'Other', important: false },
	{ name: 'GRASP', url: 'https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)', category: 'Other', important: false },
	{ name: 'GoF', url: 'https://en.wikipedia.org/wiki/Design_Patterns', category: 'Other', important: false },
	{ name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL', category: 'Backend', important: false },
	{ name: 'Agile', url: 'https://en.wikipedia.org/wiki/Agile_software_development', category: 'Other', important: false },
	{ name: 'Scrum', url: 'https://www.scrum.org/resources/what-scrum-module', category: 'Other', important: false },
	{ name: 'Kanban', url: 'https://en.wikipedia.org/wiki/Kanban_(development)', category: 'Other', important: false },
	{ name: 'Git', url: 'https://git-scm.com/', category: 'DevOps', important: false },
	{ name: 'Docker', url: 'https://www.docker.com/', category: 'DevOps', important: false },
	{ name: 'Portanier', url: 'https://www.portainer.io/', category: 'DevOps', important: false },
	{ name: 'Design Tokens', url: 'https://m3.material.io/foundations/design-tokens/overview', category: 'Frontend', important: false },
	{ name: 'Nginx Proxy Manager', url: 'https://nginxproxymanager.com/', category: 'DevOps', important: false }
].sort((a,b) => Number(b.important) - Number(a.important))

export { NAME, ADDRESS, DESCRIPTION, TECH_CLOUD, EDUCATION, CONTACTS, EXPERIENCE, PROJECTS }

