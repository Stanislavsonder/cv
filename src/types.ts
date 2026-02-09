export type Education = {
	name: string
	location?: string
	degree: string
	startDate: Date
	endDate?: Date
}

export type Experience = {
	logo: string
	client?: string
	ndaClientAlias?: string
	company: string
	position: string
	location: string
	startDate: Date
	endDate?: Date
	achievementList: Achievement[]
	projects?: Project[]
}

export type Achievement = {
	text: string
	projects?: Project[]
}

export type Project = {
	name: string
	link?: string
	ndaAlias?: string
}

export type PetProject = Project & {
	startDate: Date
	endDate?: Date
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
