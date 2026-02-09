import { type FC } from 'react'
import { Education as EducationType } from '@/types'
import { getDatesRange } from '@/utils'
import styles from './Education.module.css'

interface Props {
	education: EducationType
}

const Education: FC<Props> = ({ education }) => {
	const { name, startDate, endDate, degree, location } = education
	const datesRange = getDatesRange(startDate, endDate)

	return (
		<div className={styles.container}>
			<h3>{name}</h3>
			<h4 className="textRight">{datesRange}</h4>
			<p>{degree}</p>
			{location && <address className="textRight">{location}</address>}
		</div>
	)
}

export default Education
