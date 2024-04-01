'use client'

import Image from 'next/image'
import darkModeIcon from '../assets/darkmode.svg'
import styles from './ThemeSwitcher.module.css'

export default function ThemeSwitcher() {
	const toggleDarkMode = () => {
		document.body.classList.toggle('dark')
	}

	return (
		<>
			<button
				className={styles.button}
				onClick={toggleDarkMode}
				title="Toggle Dark Mode"
			>
				<Image
					className={styles.icon}
					src={darkModeIcon}
					alt="Toggle Dark Mode"
					aria-hidden
					width="16"
				/>
				Toggle Dark Mode
			</button>
		</>
	)
}
