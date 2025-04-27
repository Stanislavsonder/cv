import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer'

export async function GET() {
	const browser = await puppeteer.launch({
		headless: true,
		executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
		args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
	})

	const page = await browser.newPage()

	// Use environment-based URL
	const baseUrl = process.env.NODE_ENV === 'production' ? 'https://cv.stanislavsonder.com' : 'http://localhost:3000'

	await page.goto(baseUrl, {
		waitUntil: 'networkidle0'
	})

	const pdf = await page.pdf({
		format: 'Letter',
		printBackground: true,
		scale: 0.9,
		margin: {
			top: '10mm',
			right: '15mm',
			bottom: '10mm',
			left: '15mm'
		}
	})

	await browser.close()

	// Use a consistent date format between server and client
	const cvDownloadDate = new Date()
	const filename = `Stanislav_Doronin_CV_${cvDownloadDate
		.toLocaleDateString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		})
		.replace(/\//g, '-')}.pdf`

	return new NextResponse(pdf, {
		status: 200,
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `attachment; filename="${filename}"`
		}
	})
}
