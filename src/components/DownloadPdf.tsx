'use client'

import styles from './DownloadPdf.module.css'

export default function DownloadPdfButton() {
	const handleDownload = async () => {
		const res = await fetch('/api/generate-pdf')
		const blob = await res.blob()
		const url = window.URL.createObjectURL(blob)

		const currentDate = new Date()
		const formattedDate = currentDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		})
		const filename = `Stanislav_Doronin_CV (${formattedDate}).pdf`

		const a = document.createElement('a')
		a.href = url
		a.download = filename
		a.click()
		window.URL.revokeObjectURL(url)
	}

	return (
		<button
			className={styles.linkButton}
			onClick={handleDownload}
		>
			Download PDF
		</button>
	)
}
