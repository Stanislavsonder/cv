import { type FC } from 'react'
import { Language as LanguageType } from '@/types'
import styles from './Language.module.css'

interface Props {
	language: LanguageType
}

const Language: FC<Props> = ({ language }) => {
	const { name, level } = language
	return (
		<div className={styles.container}>
			<span className={styles.name}>{name}</span>
			<span className={styles.level}>{level}</span>
		</div>
	)
}

export default Language