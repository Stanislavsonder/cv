'use client'

import { getDatesRange, getExperienceDuration } from '@/utils'

interface Props {
	startDate: Date | string
	endDate?: Date | string
}

export default function Tenure({ startDate, endDate }: Props) {
	const start = new Date(startDate)
	const end = endDate ? new Date(endDate) : undefined

	return (
		<h4
			className="textRight"
			suppressHydrationWarning
		>
			{getExperienceDuration(start, end)} | {getDatesRange(start, end)}
		</h4>
	)
}
