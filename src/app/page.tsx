import Image from 'next/image'
import { ADDRESS, CONTACTS, DESCRIPTION, EDUCATION, EXPERIENCE, NAME, PROJECTS, TECH_CLOUD, LANGUAGES } from './data'
import styles from './page.module.css'
import { Contact, Education, Experience, Project, Skill, Language } from '@/types'
import ThemeSwitcher from '../components/ThemeSwitcher'
import DownloadPdfButton from '@/components/DownloadPdf'

function getDatesRange(startDate: Date, endDate?: Date) {
	if (endDate?.getFullYear() === startDate.getFullYear()) {
		return `${startDate.getFullYear()}`
	}
	return `${startDate.getFullYear()} - ${endDate?.getFullYear() || 'Present'}`
}

function getExperienceDuration(startDate: Date, endDate?: Date) {
	const diff = (endDate?.getTime() || Date.now()) - startDate.getTime()
	const year = 1000 * 60 * 60 * 24 * 365
	const month = 1000 * 60 * 60 * 24 * 30
	const years = Math.floor(diff / year)
	const months = Math.floor((diff % year) / month)
	if (years < 1) {
		return '< 1 year'
	}
	return [years ? `${years} year(s)` : '', months ? `${months} months` : ''].filter(Boolean).join(', ')
}

function contactToHTML(contact: Contact) {
	return (
		<li key={contact.type}>
			<a
				href={contact.link}
				className={styles.contacts__item}
				target="_blank"
				rel="nofollow"
			>
				<Image
					className={styles.contacts__icon}
					src={contact.icon}
					alt={contact.type}
					width="16"
				/>
				<span>{contact.text}</span>
			</a>
		</li>
	)
}

function educationToHTML(education: Education) {
	return (
		<li
			key={education.name}
			className={styles.education}
		>
			<h3>{education.name}</h3>
			<h4 className="textRight">{getDatesRange(education.startDate, education.endDate)}</h4>
			<p>{education.degree}</p>
			{education.location && <address className="textRight">{education.location}</address>}
		</li>
	)
}

function experienceToHTML(exp: Experience) {
	return (
		<li
			key={exp.company + exp.position}
			className={styles.experience}
		>
			<div className={styles.experience__header}>
				<h3 className={styles.experience__title}>{exp.company}</h3>
				<h4 className={'textRight ' + styles.experience__dates}>
					{getDatesRange(exp.startDate, exp.endDate)}
					<span>{getExperienceDuration(exp.startDate, exp.endDate)}</span>
				</h4>
				<p>{exp.position}</p>
				<address className="textRight">{exp.location}</address>
			</div>
			Projects:{' '}
			<span className={styles.experience__projects}>
				{exp.projects?.map(e => (
					<a
						className={styles.experience__project}
						key={e.name}
						href={e.link}
						target="_blank"
						rel="nofollow"
					>
						{e.name}
					</a>
				))}
			</span>
			<ul className={styles.experience__achievements}>
				{exp.achievementList.map(achievement => (
					<li key={achievement.text}>{achievement.text}</li>
				))}
			</ul>
		</li>
	)
}

function projectToHTML(proj: Project) {
	return (
		<li
			key={proj.name}
			className={styles.project}
		>
			<div className={styles.project__header}>
				<h3>{proj.name}</h3>
				<h5 className="textRight">{getDatesRange(proj.startDate, proj.endDate)}</h5>
			</div>
			<p className={styles.project__technologies}>{proj.technologies.join(', ')}</p>
			<p>
				<a
					href={proj.link}
					target="_blank"
					rel="nofollow"
				>
					{proj.link}
				</a>
			</p>
			<ul className={styles.project__achievements}>
				{proj.achievementList.map(achievement => (
					<li key={achievement}>{achievement}</li>
				))}
			</ul>
		</li>
	)
}

function skillToHTML(skill: Skill) {
	const className = [styles.techCloud__item, skill.important && styles['techCloud__item--important']].join(' ')
	return (
		<li
			key={skill.name}
			className={className}
		>
			{skill.url && (
				<a
					href={skill.url}
					target="_blank"
					rel="nofollow"
				>
					{skill.name}
				</a>
			)}
			{!skill.url && skill.name}
		</li>
	)
}

function languageToHTML(language: Language) {
	return (
		<li
			key={language.name}
			className={styles.language}
		>
			<span className={styles.language__name}>{language.name}</span>
			<span className={styles.language__level}>{language.level}</span>
		</li>
	)
}

export default async function Home() {
	return (
		<main
			className={styles.main}
			id="cv"
		>
			<div className={[styles.hideOnPrint, styles.textRight, styles.tools].join(' ')}>
				<ThemeSwitcher />
				<DownloadPdfButton />
			</div>
			<section>
				<h1 className="textCenter">{NAME}</h1>
				<address>
					<p className="textCenter">{ADDRESS}</p>
				</address>
				<p className={['textCenter', styles.description].join(' ')}>{DESCRIPTION}</p>
				<ul className={styles.contacts}>{CONTACTS.map(contactToHTML)}</ul>
			</section>
			<section>
				<h2>Languages</h2>
				<hr />
				<ul className={styles.languages__list}>{LANGUAGES.map(languageToHTML)}</ul>
			</section>
			<section>
				<h2>Experience</h2>
				<hr />
				<ul>{EXPERIENCE.map(experienceToHTML)}</ul>
			</section>
			<section>
				<h2>Education</h2>
				<hr />
				<ul>{EDUCATION.map(educationToHTML)}</ul>
			</section>
			<section>
				<h2>Non-commercial projects</h2>
				<hr />
				<ul>{PROJECTS.map(projectToHTML)}</ul>
			</section>
			<section>
				<h2>Technical Skills</h2>
				<hr />
				<ul className={[styles['techCloud'], styles['techCloud--list']].join(' ')}>{TECH_CLOUD.map(skillToHTML)}</ul>
			</section>
		</main>
	)
}
