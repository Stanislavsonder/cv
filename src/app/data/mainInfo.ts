import { type Contact } from '@/types'
import phoneIcon from '../../assets/phone.svg'
import envelopeIcon from '../../assets/envelope.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import telegramIcon from '../../assets/telegram.svg'
import githubIcon from '../../assets/github.svg'

const NAME = 'Stanislav Sonder'
const ADDRESS = 'Dublin, Ireland'
const DESCRIPTION =
	'Senior Software Engineer with a proven track record of designing scalable architectures, leading cross-functional teams, and delivering high-performance user experiences across high-traffic platforms. Currently driving Stripe Inc to new heights.'

const CONTACTS: Contact[] = [
	{
		type: 'Phone number',
		text: '+353894780750',
		icon: phoneIcon,
		link: 'tel:+353894780750'
	},
	{
		type: 'Email address',
		text: 'stanislavsonder@gmail.com',
		icon: envelopeIcon,
		link: 'mailto:stanislavsonder@gmail.com'
	},
	{
		type: 'LinkedIn profile',
		text: 'linkedin.com/in/stanislavsonder',
		icon: linkedinIcon,
		link: 'https://www.linkedin.com/in/stanislavsonder/'
	},
	{
		type: 'Telegram profile',
		text: '@stanislavsonder',
		icon: telegramIcon,
		link: 'https://t.me/stanislavsonder'
	},
	{
		type: 'GitHub profile',
		text: 'github.com/stanislavsonder',
		icon: githubIcon,
		link: 'https://github.com/Stanislavsonder'
	}
]

const LANGUAGES = [
	{
		name: 'English',
		level: 'Fluent'
	},
	{
		name: 'Russian',
		level: 'Native'
	},
	{
		name: 'Belarusian',
		level: 'Native'
	},
	{
		name: 'French',
		level: 'Beginner'
	}
]

export { NAME, ADDRESS, DESCRIPTION, CONTACTS, LANGUAGES }
