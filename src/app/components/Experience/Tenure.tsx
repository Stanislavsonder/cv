'use client'

import { useEffect, useState } from 'react'
import { getExperienceDuration } from '@/utils'

interface Props {
	startDate: Date
	endDate?: Date
	datesRange: string
	buildTime: number
}

export default function Tenure({ startDate, endDate, datesRange, buildTime }: Props) {
	// The first render must match the static HTML, otherwise React keeps the stale build-time text.
	const [now, setNow] = useState(buildTime)

	useEffect(() => setNow(Date.now()), [])

	return (
		<h4 className="textRight">
			{getExperienceDuration(startDate, endDate ?? new Date(now))} | {datesRange}
		</h4>
	)
}
