import React, {FC} from 'react'

const Skills:FC = () => {

    const skills = [
        {
            skill: 'JavaScript',
            imageSrc: './images/JavaScript.png',
            imageTitle: 'JavaScript language, ES6+',
            stars: 5
        },
        {
            skill: 'HTML5',
            imageSrc: './images/HTML5.png',
            imageTitle: 'HTML5, CSS and etc.',
            stars: 4
        },
        {
            skill: 'TypeScript',
            imageSrc: './images/TypeScript.svg',
            imageTitle: 'TypeScript language',
            stars: 4
        },
        {
            skill: 'ReactJS',
            imageSrc: './images/React.svg',
            imageTitle: 'ReactJS',
            stars: 3
        },
        {
            skill: 'Figma',
            imageSrc: './images/Figma.svg',
            imageTitle: 'Figma',
            stars: 4
        },
        {
            skill: 'Adobe CC',
            imageSrc: './images/Adobe%20CC.svg',
            imageTitle: 'Adobe Creative Cloud (Photoshop, Illustrator, etc.',
            stars: 4
        },
        {
            skill: 'MongoDB',
            imageSrc: './images/MongoDB.svg',
            imageTitle: 'MongoDB, document-oriented databases',
            stars: 3
        },
        {
            skill: 'Git',
            imageSrc: './images/Git.png',
            imageTitle: 'Git technologies. GitHub, Bitbucket and etc.',
            stars: 3
        },
        {
            skill: 'Other languages',
            imageSrc: './images/Languages.png',
            imageTitle: 'Other languages: C++, C#/.Net, Java, PHP and others',
            stars: 2
        },

    ]


    return (
        <div className="my-skills">
            <h2>My skills</h2>
            <ul className="my-skills-list">
                { skills.map((skill, i) => {
                    let stars = new Array(5).fill('')
                    stars= stars.map((e, index) => {
                        if (index >= skill.stars) return (<span className="empty-dot" key={skill.skill + '-dot-' + i + '-'+ index}></span>)
                        return (<span key={skill.skill + '-dot-' + i + '-'+ index}></span>)
                    })
                    return (
                    <li key={skill.skill + '-skill'}>
                        <div><img src={skill.imageSrc} alt={skill.skill + ' logo'} title={skill.imageTitle} width="64"
                                  height="64"/></div>
                        <div className="skill-dotes">{stars}</div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Skills