import { type FC } from 'react'
import Image from 'next/image'
import { Contact as ContactType } from '@/types'
import styles from './Contact.module.css'

interface Props {
	contact: ContactType
}

const Contact: FC<Props> = ({ contact }) => {
	const { type, link, icon, text } = contact

	return (
		<a
			href={link}
			className={styles.container}
			target="_blank"
			rel="nofollow"
		>
			<Image
				className={styles.icon}
				src={icon}
				alt={type}
				width="16"
			/>
			<span>{text}</span>
		</a>
	)
}

export default Contact
