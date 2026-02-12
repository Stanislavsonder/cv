import { type FC } from 'react'
import { Project as ProjectType } from '@/types'
import styles from './Project.module.css'
import NDA from '../../Nda/Nda'

interface Props {
	project: ProjectType
}

const Project: FC<Props> = ({ project }) => {
	const { name, link, ndaAlias } = project
	const label = ndaAlias ?? name

	if (ndaAlias) {
		return <NDA label={label} />
	}

	return (
		<a
			className={styles.container}
			href={link}
			target="_blank"
			rel="nofollow"
		>
			{label}
		</a>
	)
}

export default Project
