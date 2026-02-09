import { FC } from "react"
import { PetProject as PetProjectType } from "@/types"
import { getDatesRange } from "@/utils"
import styles from './PetProject.module.css'

interface Props {
    project: PetProjectType
}

const PetProject: FC<Props> = ({ project }) => {
	const title = project.ndaAlias ?? project.name
    const datesRange = getDatesRange(project.startDate, project.endDate)
	const technologies = project.technologies.join(', ')

	return (
		<div
			className={styles.container}
		>
			<div className={styles.header}>
				<h3>{title}</h3>
				<h5 className="textRight">{datesRange}</h5>
			</div>
			<p className={styles.technologies}>{technologies}</p>
			{!project.ndaAlias && project.link && (
				<p>
					<a
						href={project.link}
						target="_blank"
						rel="nofollow"
					>
						{project.link}
					</a>
				</p>
			)}
			<ul className={styles.achievementsList}>
				{project.achievementList.map(achievement => (
					<li key={achievement}>{achievement}</li>
				))}
			</ul>
		</div>
	)
}

export default PetProject