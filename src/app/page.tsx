import Image from 'next/image'
import { ADDRESS, CONTACTS, EDUCATION, EXPERIENCE, NAME, PROJECTS, TECH_CLOUD } from '@/app/data'
import styles from './page.module.css'
import { Contact, Education, Experience, Project } from '@/types'
import ThemeSwitcher from '@/components/ThemeSwitcher'

function contactToHTML(contact: Contact) {
	return (
		<li key={contact.type}>
			<a
				href={contact.link}
				className={styles.contacts__item}
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
			<h4 className={styles.textRight}>
				{education.startDate} - {education.endDate}
			</h4>
			<p>{education.degree}</p>
			<address className={styles.textRight}>{education.location}</address>
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
				<h3>{exp.company}</h3>
				<h4 className={styles.textRight}>
					{exp.startDate} - {exp.endDate}
				</h4>
				<p>{exp.position}</p>
				<address className={styles.textRight}>{exp.location}</address>
			</div>
			<ul className={styles.experience__achievements}>
				{exp.achievementList.map(achievement => (
					<li key={achievement}>{achievement}</li>
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
				<h5 className={styles.textRight}>{proj.date}</h5>
			</div>
			<p className={styles.project__technologies}>{proj.technologies.join(', ')}</p>
			<p>
				<a href={proj.link}>{proj.link}</a>
			</p>
			<ul className={styles.project__achievements}>
				{proj.achievementList.map(achievement => (
					<li key={achievement}>{achievement}</li>
				))}
			</ul>
		</li>
	)
}

function stringToHTML(string: string) {
	return (
		<li
			key={string}
			className={styles.techCloud__item}
		>
			{string}
		</li>
	)
}

export default async function Home() {
	return (
		<main className={styles.main}>
			<div className={[styles.hideOnPrint, styles.textRight, styles.tools].join(' ')}>
				<ThemeSwitcher />
				<a
					href="/Stanislav_Doronin_CV.pdf"
					download
				>
					Download PDF
				</a>
			</div>
			<section>
				<h1 className={styles.textCenter}>{NAME}</h1>
				<address>
					<p className={styles.textCenter}>{ADDRESS}</p>
					<ul className={styles.contacts}>{CONTACTS.map(contactToHTML)}</ul>
				</address>
			</section>
			<section>
				<h2>Education</h2>
				<hr />
				<ul>{EDUCATION.map(educationToHTML)}</ul>
			</section>
			<section>
				<h2>Experience</h2>
				<hr />
				<ul>{EXPERIENCE.map(experienceToHTML)}</ul>
			</section>
			<section>
				<h2>Non-commercial projects</h2>
				<hr />
				<ul>{PROJECTS.map(projectToHTML)}</ul>
			</section>
			<section>
				<h2>Technical Skills (Cloud)</h2>
				<hr />
				<ul className={[styles['techCloud'], styles['techCloud--list']].join(' ')}>{TECH_CLOUD.map(stringToHTML)}</ul>
				<p className={styles.techCloud}>{TECH_CLOUD.join(', ')}</p>
			</section>
		</main>
	)
}
