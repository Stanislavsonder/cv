export type Education = {
	name: string
	location?: string
	degree: string
	startDate: Date
	endDate?: Date
}

export type Experience = {
	company: string
	position: string
	location: string
	startDate: Date
	endDate?: Date
	achievementList: Achievement[]
	projects?: WorkProject[]
}

export type Achievement = {
	text: string
	projects?: WorkProject[]
}

export type WorkProject = {
	name: string
	link?: string
}

export type Project = {
	name: string
	startDate: Date
	endDate?: Date
	link?: string
	technologies: string[]
	achievementList: string[]
}

export type Contact = {
	type: string
	text: string
	icon: string
	link: string
}

export type Skill = {
	name: string
	url?: string
	category: string
	important: boolean
}

export type Language = {
	name: string
	level: string
}
