import { type Experience, type Project } from '@/types'
import flexmerchLogo from '../../assets/logos/flexmerch.svg'
import axamitLogo from '../../assets/logos/axamit.svg'
import stripeLogo from '../../assets/logos/stripe.svg'

const WORK_PROJECTS: Record<string, Project> = {
	ComplianceHub: {
		name: 'Compliance Hub',
		link: 'https://stripe.com/',
		ndaAlias: 'Compliance Project'
	},
	Orry: {
		name: 'Orry',
		link: 'https://stripe.com/',
		ndaAlias: 'AI Project'
	},
	TSN: {
		name: 'TSN',
		link: 'https://www.tsn.ca/',
		ndaAlias: 'Largest Sports News Portal in Canada'
	},
	CTV: {
		name: 'CTV',
		link: 'https://www.ctv.ca/',
		ndaAlias: 'Canadian TV-Streaming Platform'
	},
	Crave: {
		name: 'Crave',
		link: 'https://www.crave.ca/',
		ndaAlias: 'Number one Canadian Video Streaming Platform'
	},
	RDS: {
		name: 'RDS',
		link: 'https://www.rds.ca/',
		ndaAlias: 'Largest French-Language Sports News Portal in Canada'
	},
	Noovo: {
		name: 'Noovo',
		link: 'https://www.noovo.ca/',
		ndaAlias: 'Canadian French TV-Streaming Platform'
	},
	ST: {
		name: 'ST Microelectronics',
		link: 'https://www.st.com'
	},
	iHeart: {
		name: 'iHeart Canada',
		link: 'https://www.iheartradio.ca/',
		ndaAlias: 'Canadian branch of the most popular radio network in the USA'
	},
	CTVNews: {
		name: 'CTV News',
		link: 'https://www.ctvnews.ca/',
		ndaAlias: 'PopularCanadian News Portal'
	},
	Noovoinfo: {
		name: 'Noovo Info',
		link: 'https://www.noovo.info/',
		ndaAlias: 'Canadian French News Portal'
	},
	BNN: {
		name: 'BBN Bloomberg',
		link: 'https://www.bnnbloomberg.ca/',
		ndaAlias: 'Financial Giant News Portal'
	},
	CP24: {
		name: 'CP24',
		link: 'https://www.cp24.com/',
		ndaAlias: 'Toronto Media Portal'
	},
	ShoppingTrends: {
		name: 'CTV Shopping Trends',
		link: 'https://www.ctvnews.ca/shopping.html',
		ndaAlias: 'Marketplace Project'
	},
	FlexmerchPBN: {
		name: 'Flexmerch PBN',
		link: 'https://www.flexmerch.com/'
	}
} as const

const EXPERIENCE: Experience[] = [
	{
		company: 'Flexmerch Corp',
		logo: flexmerchLogo,
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
		logo: axamitLogo,
		client: 'STMicroelectronics',
		position: 'AEM Frontend Developer',
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
		logo: axamitLogo,
		client: 'BellMedia',
		ndaClientAlias: 'Biggest Canadian Media Company',
		position: 'Senior Software Engineer',
		location: 'Montréal, Canada',
		startDate: new Date(2022, 7),
		endDate: new Date(2025, 8),
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
				text: 'Led the design and implementation of scalable frontend architectures for high-traffic platforms.',
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
				text: "Created reusable component library with unstyled Vue components adopted across client's projects, reducing boilerplate and accelerating development velocity.",
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
				text: 'Orchestrated the migration of multiple projects and modules to a new CMS, while simultaneously developing new features and ensuring the stability and maintenance of existing systems.',
				projects: [WORK_PROJECTS.BNN, WORK_PROJECTS.CP24, WORK_PROJECTS.CTVNews, WORK_PROJECTS.TSN, WORK_PROJECTS.RDS]
			},
			{
				text: 'Developed multiple internal tools for data management, visualization, and analytics integration, enhancing the efficiency of the development process and improving data-driven decision-making.',
				projects: [WORK_PROJECTS.BNN, WORK_PROJECTS.CP24, WORK_PROJECTS.CTVNews, WORK_PROJECTS.TSN, WORK_PROJECTS.RDS]
			},
			{
				text: 'Spearheaded frontend development for multiple high-traffic video streaming platforms, ensuring performance, scalability, and cross-device compatibility in production environments.',
				projects: [WORK_PROJECTS.Crave, WORK_PROJECTS.CTV, WORK_PROJECTS.Noovo]
			},
			{
				text: 'Implemented advanced video player integrations, adaptive streaming (HLS/DASH), and analytics tracking to support millions of users across web and mobile platforms.',
				projects: [WORK_PROJECTS.Crave, WORK_PROJECTS.CTV, WORK_PROJECTS.Noovo]
			}
		]
	},
	{
		company: 'Stripe',
		logo: stripeLogo,
		position: 'Senior Software Engineer',
		location: 'Dublin, Ireland',
		startDate: new Date(2025, 9),
		endDate: undefined,
		projects: [WORK_PROJECTS.ComplianceHub, WORK_PROJECTS.Orry],
		achievementList: [
			{
				text: 'TBD after release 🚀',
				projects: [WORK_PROJECTS.ComplianceHub, WORK_PROJECTS.Orry]
			}
		]
	}
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())

export { EXPERIENCE }
