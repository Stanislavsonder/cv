import { type FC } from 'react'
import clsx from 'clsx'
import { Skill as SkillType } from '@/types'
import styles from './Skill.module.css'

interface Props {
	skill: SkillType
}

const Skill: FC<Props> = ({ skill }) => {
	const { name, url, important } = skill
	const className = clsx(styles.skill, important && styles.important)

	return (
		<span className={className}>
			{url && (
				<a
					href={url}
					target="_blank"
					rel="nofollow"
				>
					{name}
				</a>
			)}
			{!url && name}
		</span>
	)
}

export default Skill
