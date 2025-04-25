import phoneIcon from '../assets/phone.svg'
import envelopeIcon from '../assets/envelope.svg'
import linkedinIcon from '../assets/linkedin.svg'
import telegramIcon from '../assets/telegram.svg'
import githubIcon from '../assets/github.svg'
import type { Contact, Education, Experience, Project, Skill, WorkProject } from '@/types'

type ProjectNames = 'ST' | 'iHeart' | 'CTVNews' | 'Noovoinfo' | 'BNN' | 'TSN' | 'RDS' | 'CP24' | 'ShoppingTrends' | 'FlexmerchPBN' | 'Noovo' | 'CTV' | 'Crave'
const WORK_PROJECTS: Record<ProjectNames, WorkProject> = {
	TSN: {
		name: 'TSN',
		link: 'https://www.tsn.ca/'
	},
	CTV: {
		name: 'CTV',
		link: 'https://www.ctv.ca/'
	},
	Crave: {
		name: 'Crave',
		link: 'https://www.crave.ca/'
	},
	RDS: {
		name: 'RDS',
		link: 'https://www.rds.ca/'
	},
	Noovo: {
		name: 'Noovo',
		link: 'https://www.noovo.ca/'
	},
	ST: {
		name: 'ST Microelectronics',
		link: 'https://www.st.com'
	},
	iHeart: {
		name: 'iHeart Canada',
		link: 'https://www.iheartradio.ca/'
	},
	CTVNews: {
		name: 'CTV News',
		link: 'https://www.ctvnews.ca/'
	},
	Noovoinfo: {
		name: 'Noovo Info',
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
const DESCRIPTION =
	'Senior Frontend Engineer with a proven track record of designing scalable architectures, leading cross-functional teams, and delivering high-performance user experiences across high-traffic platforms'

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
		degree: "Bachelor's Degree in Computer Science (Web-programming, Operating Systems, algorithms and data structures, Computer graphic and Design)",
		startDate: new Date(2018, 8),
		endDate: new Date(2022, 6)
	},
	{
		name: 'Advanced Frontend UlbiTV',
		location: 'Montreal, Canada',
		degree: 'Covered complex frontend architecture, accessible UI development, performance optimization, testing strategies (unit, e2e), CI/CD pipelines, and full-stack integration best practices',
		startDate: new Date(2022, 9),
		endDate: new Date(2022, 11)
	},
	{
		name: "Timur Shemsedinov's NodeJS architecture mentoring",
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
		position: 'AEM Frontend Developer at STMicroelectronics',
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
		position: 'Senior Software Engineer at BellMedia',
		location: 'Montréal, Canada',
		startDate: new Date(2022, 7),
		endDate: undefined,
		projects: [
			WORK_PROJECTS.iHeart,
			WORK_PROJECTS.CTVNews,
			WORK_PROJECTS.ShoppingTrends,
			WORK_PROJECTS.Noovoinfo,
			WORK_PROJECTS.BNN,
			WORK_PROJECTS.CP24,
			WORK_PROJECTS.TSN,
			WORK_PROJECTS.RDS,
			WORK_PROJECTS.Noovo,
			WORK_PROJECTS.CTV,
			WORK_PROJECTS.Crave
		],
		achievementList: [
			{
				text: 'Led the design and implementation of scalable frontend architectures for high-traffic platforms, including iHeart Canada and CTV News.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends]
			},
			{
				text: 'Managed a team of four frontend developers, conducted cross-team training sessions, and mentored junior engineers—boosting productivity and technical maturity.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.ShoppingTrends]
			},
			{
				text: 'Built an advanced ad management system integrating Google Publisher Tag with AEM for client-side rendering, improving ad campaign performance by 53% and enabling granular brand-level targeting.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.ShoppingTrends]
			},
			{
				text: 'Worked closely with SEO, Editorial, DevOps, and other departments to integrate solutions seamlessly and meet project goals.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.BNN, WORK_PROJECTS.CP24]
			},
			{
				text: 'Architected a dynamic image rendering system combining AEM-generated renditions with responsive Vue components—reducing client-side load and improving page speed by up to 140%.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.Noovoinfo]
			},
			{
				text: 'Created a reusable component library with unstyled Vue components adopted across Bell projects, reducing boilerplate and accelerating development velocity.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.Noovoinfo]
			},
			{
				text: 'Developed an AEM-driven analytics management system that simplified the workflow for editors, minimizing the need for code changes and expediting the launch of new analytics campaigns ~20% faster.',
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.Noovoinfo]
			},
			{
				text: "Introduced a concept allowing the use of Vue components within AEM's Rich Text Editor. This approach drastically simplified content editing, empowering editors to visually manage Vue components directly within the editor",
				projects: [WORK_PROJECTS.iHeart, WORK_PROJECTS.CTV, WORK_PROJECTS.ShoppingTrends, WORK_PROJECTS.Noovoinfo]
			},
			{
				text: 'Orchestrated the migration of BNN Bloomberg, CP24, CTV News, RDS, TSN and additional website modules to a new CMS, while simultaneously developing new features and ensuring the stability and maintenance of existing systems.',
				projects: [WORK_PROJECTS.BNN, WORK_PROJECTS.CP24, WORK_PROJECTS.CTVNews, WORK_PROJECTS.TSN, WORK_PROJECTS.RDS]
			},
			{
				text: 'Developed multiple internal tools for data management, visualization, and analytics integration, enhancing the efficiency of the development process and improving data-driven decision-making.',
				projects: [WORK_PROJECTS.BNN, WORK_PROJECTS.CP24, WORK_PROJECTS.CTVNews, WORK_PROJECTS.TSN, WORK_PROJECTS.RDS]
			},
			{
				text: 'Spearheaded frontend development for multiple high-traffic video streaming platforms (CTV, Noovo, Crave), ensuring performance, scalability, and cross-device compatibility in production environments.',
				projects: [WORK_PROJECTS.Crave, WORK_PROJECTS.CTV, WORK_PROJECTS.Noovo]
			},
			{
				text: 'Implemented advanced video player integrations, adaptive streaming (HLS/DASH), and analytics tracking to support millions of users across web and mobile platforms.',
				projects: [WORK_PROJECTS.Crave, WORK_PROJECTS.CTV, WORK_PROJECTS.Noovo]
			}
		]
	}
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())

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
		endDate: new Date(2023, 8),
		link: 'https://stanislavsonder.github.io/fate-extended-character-sheet',
		technologies: ['Typescript', 'Vue', 'PWA', 'Obsidian'],
		achievementList: [
			'Design a simple multi-language roleplay local assistance tool for FATE game system.',
			'PWA support for offline usage. Export/import character sheets to savefiles.'
		]
	},
	{
		name: 'FATE: Core',
		startDate: new Date(2023, 12),
		endDate: undefined,
		link: 'https://play.google.com/store/apps/details?id=com.sonder.fate_core',
		technologies: ['Typescript', 'Kotlin', 'Vue', 'Ionic', 'Tailwind'],
		achievementList: [
			'Design and development of mobile application for FATE game system (iOS & Android).',
			'Module system for additional content. Multi-language support with 30+ languages available.'
		]
	}
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())

const TECH_CLOUD: Skill[] = [
	{ name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', category: 'Frontend', important: true },
	{ name: 'TypeScript', url: 'https://www.typescriptlang.org/', category: 'Frontend', important: true },
	{ name: 'Rust', url: 'https://www.rust-lang.org/', category: 'Other', important: true },
	{ name: 'Vue', url: 'https://vuejs.org/', category: 'Frontend', important: true },
	{ name: 'Redux', url: 'https://redux.js.org/', category: 'Frontend', important: false },
	{ name: 'Tailwind', url: 'https://tailwindcss.com/', category: 'Frontend', important: true },
	{ name: 'Tanstack Query', url: 'https://tanstack.com/query/latest', category: 'Frontend', important: true },
	{ name: 'Ionic', url: 'https://ionicframework.com/', category: 'Frontend', important: true },
	{ name: 'Zustand', url: 'https://zustand.docs.pmnd.rs/', category: 'Frontend', important: false },
	{ name: 'Pinia', url: 'https://pinia.vuejs.org/', category: 'Frontend', important: false },
	{ name: 'Nuxt', url: 'https://nuxt.com/', category: 'Frontend', important: true },
	{ name: 'ReactJS', url: 'https://react.dev/', category: 'Frontend', important: true },
	{ name: 'Next.JS', url: 'https://nextjs.org/', category: 'Frontend', important: true },
	{ name: 'NodeJS', url: 'https://nodejs.org/en', category: 'Backend', important: true },
	{ name: 'Bun', url: 'https://bun.sh/', category: 'Backend', important: false },
	{ name: 'GraphQL', url: 'https://graphql.org/', category: 'Backend', important: true },
	{ name: 'Websockets', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API', category: 'Backend', important: false },
	{ name: 'Socket.io', url: 'https://socket.io/', category: 'Backend', important: false },
	{ name: 'Astro', url: 'https://astro.build/', category: 'Frontend', important: false },
	{ name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', category: 'Frontend', important: true },
	{ name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', category: 'Frontend', important: true },
	{ name: 'SASS', url: 'https://sass-lang.com/', category: 'Frontend', important: true },
	{ name: 'Jest', url: 'https://jestjs.io/', category: 'Frontend', important: false },
	{ name: 'Vitest', url: 'https://vitest.dev/', category: 'Frontend', important: false },
	{ name: 'Amazon S3', url: 'https://aws.amazon.com/s3/', category: 'Other', important: false },
	{ name: 'Amazon Amplify', url: 'https://aws.amazon.com/amplify/', category: 'Other', important: false },
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
].sort((a, b) => Number(b.important) - Number(a.important))

export { NAME, ADDRESS, DESCRIPTION, TECH_CLOUD, EDUCATION, CONTACTS, EXPERIENCE, PROJECTS }
