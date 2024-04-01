export type Education = {
	name: string
	location: string
	degree: string
	startDate: string
	endDate: string
}

export type Experience = {
	company: string
	position: string
	location: string
	startDate: string
	endDate: string
	achievementList: string[]
}

export type Project = {
	name: string
	date: string
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
