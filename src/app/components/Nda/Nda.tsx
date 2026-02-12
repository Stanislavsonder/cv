import { type FC } from 'react'
import styles from './Nda.module.css'

const Nda: FC<{ label?: string }> = ({ label }) => {
	return <span className={styles.nda}>{label}</span>
}

export default Nda
