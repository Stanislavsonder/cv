import type { Metadata } from 'next'
import type React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { NAME } from '@/app/data'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: NAME + ' | CV',
	description: 'CV of Senior Software Engineer ' + NAME
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
