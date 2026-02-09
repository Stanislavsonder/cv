import { type Skill } from '@/types'

const TECH_CLOUD: Skill[] = [
	// Core Frontend Languages - Most Important
	{ name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', category: 'Frontend', important: true },
	{ name: 'TypeScript', url: 'https://www.typescriptlang.org/', category: 'Frontend', important: true },
	{ name: 'Ruby', url: 'https://www.ruby-lang.org/', category: 'Backend', important: true },
	{ name: 'Sorbet', url: 'https://sorbet.org/', category: 'Backend', important: true },
	{ name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', category: 'Frontend', important: true },
	{ name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', category: 'Frontend', important: true },

	// Frontend Frameworks - Critical
	{ name: 'React', url: 'https://react.dev/', category: 'Frontend', important: true },
	{ name: 'Vue', url: 'https://vuejs.org/', category: 'Frontend', important: true },
	{ name: 'Next.js', url: 'https://nextjs.org/', category: 'Frontend', important: true },
	{ name: 'Nuxt', url: 'https://nuxt.com/', category: 'Frontend', important: true },

	// Styling & UI - High Priority
	{ name: 'Tailwind', url: 'https://tailwindcss.com/', category: 'Frontend', important: true },
	{ name: 'SASS', url: 'https://sass-lang.com/', category: 'Frontend', important: true },

	// State Management & Data Fetching - High Priority
	{ name: 'Tanstack Query', url: 'https://tanstack.com/query/latest', category: 'Frontend', important: true },
	{ name: 'Redux', url: 'https://redux.js.org/', category: 'Frontend', important: true },

	// Performance & Optimization - High Priority
	{ name: 'Web Vitals', url: 'https://support.google.com/webmasters/answer/9205520?hl=en', category: 'Frontend', important: true },
	{ name: 'Accessibility Expertize', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility', category: 'Frontend', important: true },

	// Build Tools & Development - Important
	{ name: 'Vite', url: 'https://vitejs.dev/', category: 'Frontend', important: true },
	{ name: 'Webpack', url: 'https://webpack.js.org/', category: 'Frontend', important: true },

	// Backend Knowledge for Full-Stack - Important
	{ name: 'NodeJS', url: 'https://nodejs.org/en', category: 'Backend', important: true },
	{ name: 'GraphQL', url: 'https://graphql.org/', category: 'Backend', important: true },

	// Mobile Development
	{ name: 'Ionic', url: 'https://ionicframework.com/', category: 'Frontend', important: false },

	// Additional State Management
	{ name: 'Pinia', url: 'https://pinia.vuejs.org/', category: 'Frontend', important: false },
	{ name: 'Zustand', url: 'https://zustand.docs.pmnd.rs/', category: 'Frontend', important: false },

	// Testing
	{ name: 'Jest', url: 'https://jestjs.io/', category: 'Frontend', important: false },
	{ name: 'Vitest', url: 'https://vitest.dev/', category: 'Frontend', important: false },

	// UI Libraries
	{ name: 'Material UI', url: 'https://mui.com/material-ui/', category: 'Frontend', important: false },
	{ name: 'Design Tokens', url: 'https://m3.material.io/foundations/design-tokens/overview', category: 'Frontend', important: false },

	// Additional Frameworks
	{ name: 'Astro', url: 'https://astro.build/', category: 'Frontend', important: false },

	// Build Tools
	{ name: 'ESBuild', url: 'https://esbuild.github.io/', category: 'Frontend', important: false },

	// Backend Technologies
	{ name: 'Express', url: 'https://expressjs.com/', category: 'Backend', important: false },
	{ name: 'MongoDB', url: 'https://www.mongodb.com/', category: 'Backend', important: false },
	{ name: 'Mongoose', url: 'https://mongoosejs.com/', category: 'Backend', important: false },
	{ name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL', category: 'Backend', important: false },
	{ name: 'Bun', url: 'https://bun.sh/', category: 'Backend', important: false },
	{ name: 'Websockets', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API', category: 'Backend', important: false },
	{ name: 'Socket.io', url: 'https://socket.io/', category: 'Backend', important: false },

	// DevOps & Tools
	{ name: 'Git', url: 'https://git-scm.com/', category: 'DevOps', important: false },
	{ name: 'Docker', url: 'https://www.docker.com/', category: 'DevOps', important: false },
	{ name: 'Portainer', url: 'https://www.portainer.io/', category: 'DevOps', important: false },
	{ name: 'Nginx Proxy Manager', url: 'https://nginxproxymanager.com/', category: 'DevOps', important: false },

	// Cloud & Services
	{ name: 'Amazon S3', url: 'https://aws.amazon.com/s3/', category: 'Other', important: false },
	{ name: 'Amazon Amplify', url: 'https://aws.amazon.com/amplify/', category: 'Other', important: false },

	// CMS & Specialized Tools
	{ name: 'AEM', url: 'https://www.aem.live/', category: 'Other', important: false },
	{ name: 'ArcXP', url: 'https://www.arcxp.com/', category: 'Other', important: false },
	{ name: 'ExtendScript', url: 'https://extendscript.docsforadobe.dev/introduction/extendscript-overview.html', category: 'Other', important: false },

	// Programming Paradigms & Methodologies
	{ name: 'OOP', url: 'https://mongoosejs.com/', category: 'Other', important: false },
	{ name: 'SOLID', url: 'https://en.wikipedia.org/wiki/SOLID', category: 'Other', important: false },
	{ name: 'GRASP', url: 'https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)', category: 'Other', important: false },
	{ name: 'GoF', url: 'https://en.wikipedia.org/wiki/Design_Patterns', category: 'Other', important: false },

	// Project Management
	{ name: 'Agile', url: 'https://en.wikipedia.org/wiki/Agile_software_development', category: 'Other', important: false },
	{ name: 'Scrum', url: 'https://www.scrum.org/resources/what-scrum-module', category: 'Other', important: false },
	{ name: 'Kanban', url: 'https://en.wikipedia.org/wiki/Kanban_(development)', category: 'Other', important: false },

	// Other Languages
	{ name: 'Rust', url: 'https://www.rust-lang.org/', category: 'Other', important: false }
].sort((a, b) => Number(b.important) - Number(a.important))

export { TECH_CLOUD }
