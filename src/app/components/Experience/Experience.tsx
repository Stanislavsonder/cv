import { FC } from 'react'
import Image from 'next/image'
import { Experience as ExperienceType } from '@/types'
import { getDatesRange, getExperienceDuration } from '@/utils'
import styles from './Experience.module.css'
import Project from './Project/Project'
import clsx from 'clsx'
import NDA from '../NDA/NDA'

interface Props {
	experience: ExperienceType
}

const Experience: FC<Props> = ({ experience }) => {
	const { company, logo, position, client, ndaClientAlias, startDate, endDate, projects, achievementList, location } = experience
	const datesRange = getDatesRange(startDate, endDate)
	const duration = getExperienceDuration(startDate, endDate)

	const Position = () => {
		const clientLabel = ndaClientAlias ? <NDA label={ndaClientAlias} /> : client
		const hasClient = Boolean(clientLabel)

		return (
			<p>
				{position}
				{hasClient && (
					<>
						{' at '}
						{clientLabel}
					</>
				)}
			</p>
		)
	}

	return (
		<div>
			<div className={styles.header}>
				<h3 className={styles.title}>
					<Image
						className={clsx(styles.logo, 'companyLogo')}
						src={logo}
						alt={company}
						width="20"
						height="20"
					/>
					{company}
				</h3>
				<h4 className="textRight">
					{duration} | {datesRange}
				</h4>
				<Position />
				<address className="textRight">{location}</address>
			</div>
			<div className={styles.projectsList}>
				<span>Projects:</span>
				{projects?.map(project => {
					return (
						<Project
							key={project.name}
							project={project}
						/>
					)
				})}
			</div>
			<ul className={styles.achievementsList}>
				{achievementList.map(achievement => (
					<li key={achievement.text}>{achievement.text}</li>
				))}
			</ul>
		</div>
	)
}

export default Experience
