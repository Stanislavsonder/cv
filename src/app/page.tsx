import clsx from 'clsx'
import { ADDRESS, CONTACTS, DESCRIPTION, EDUCATION, EXPERIENCE, NAME, PET_PROJECTS, TECH_CLOUD, LANGUAGES } from './data'
import styles from './page.module.css'
import ThemeSwitcher from '../components/ThemeSwitcher'
import DownloadPdfButton from '@/components/DownloadPdf'

import PetProject from './components/PetProject/PetProject'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Language from './components/Language/Language'
import Skill from './components/Skill/Skill'
import Contact from './components/Contact/Contact'

export default async function Home() {
	return (
		<main
			className={styles.main}
			id="cv"
		>
			<div className={clsx('hideOnPrint', 'textRight', styles.tools)}>
				<ThemeSwitcher />
				<DownloadPdfButton />
			</div>
			<section>
				<h1 className="textCenter">{NAME}</h1>
				<address>
					<p className="textCenter">{ADDRESS}</p>
				</address>
				<p className={clsx('textCenter', styles.description)}>{DESCRIPTION}</p>
				<ul className={styles.contacts}>
					{CONTACTS.map(contact => (
						<li key={contact.type}>
							<Contact contact={contact} />
						</li>
					))}
				</ul>
			</section>
			<section>
				<h2>Languages</h2>
				<hr />
				<ul className={styles.languagesList}>
					{LANGUAGES.map(language => (
						<li key={language.name}>
							<Language language={language} />
						</li>
					))}
				</ul>
			</section>
			<section>
				<h2>Experience</h2>
				<hr />
				<ul className={styles.experienceList}>
					{EXPERIENCE.map(experience => (
						<li key={experience.company + experience.position}>
							<Experience experience={experience} />
						</li>
					))}
				</ul>
			</section>
			<section>
				<h2>Education</h2>
				<hr />
				<ul>
					{EDUCATION.map(education => (
						<li key={education.name}>
							<Education education={education} />
						</li>
					))}
				</ul>
			</section>
			<section>
				<h2>Non-commercial projects</h2>
				<hr />
				<ul>
					{PET_PROJECTS.map(project => (
						<li key={project.name}>
							<PetProject project={project} />
						</li>
					))}
				</ul>
			</section>
			<section>
				<h2>Technical Skills</h2>
				<hr />
				<ul className={clsx(styles.techCloud, styles.techCloudList)}>
					{TECH_CLOUD.map(skill => (
						<li key={skill.name}>
							<Skill skill={skill} />
						</li>
					))}
				</ul>
			</section>
		</main>
	)
}
