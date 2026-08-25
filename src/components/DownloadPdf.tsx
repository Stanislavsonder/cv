'use client'

import styles from './DownloadPdf.module.css'

export default function DownloadPdfButton() {
	return (
		<button
			type="button"
			className={styles.linkButton}
			onClick={() => window.print()}
		>
			Download PDF
		</button>
	)
}
