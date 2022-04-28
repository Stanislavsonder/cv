import React, {FC} from 'react'
import Experience from "./Experience";
import Education from "./Education";

export type ExperienceType = {
    startDate: number
    endDate: number | string
    position: string
    company: string
    description: string
}



const Timeline:FC = () => {
    const works: ExperienceType[] = [
        {
            startDate: 2013,
            endDate: 2014,
            position: 'QUEST SCRIPT DESIGNER',
            company: 'Soulmasters Team',
            description: 'Creation quests for TES V: Skyrim modifications. Scripting events and working with the dialogue system on Creation Engine.'
        },
        {
            startDate: 2016,
            endDate: 2018,
            position: 'GAMEDESIGN, C# SOFTWARE ENGINEER',
            company: 'Moonglimpse interactive',
            description: 'Design of several games, work on game code, level design. Game mechanics balance.'
        },
        {
            startDate: 2019,
            endDate: 2019,
            position: 'JAVASCRIPT/EXTENDSCRIPT DEVELOPER',
            company: 'EComerce Group, PBN France',
            description: 'Creating of Adobe Illustrator, Photoshop scripts, graphic design, product automation.'
        },
        {
            startDate: 2019,
            endDate: 2020,
            position: 'Front-end/Full-Stack Developer',
            company: '(Course Project)',
            description: 'Developing of Full-stack web-application for gaming events, based on Streamhata and SGG events.'
        },
        {
            startDate: 2020,
            endDate: 'Present time',
            position: 'AEM Front-end Developer',
            company: 'Axamit',
            description: 'AEM components and templates development for large online catalog. React/Vue.js front-end developing.'
        },
    ]
    const education: ExperienceType[] = [
        {
            startDate: 2014,
            endDate: 2015,
            position: 'BIO- AND NANOMECHANICS',
            company: 'Belarus, BSU, Mechanics and Mathematics Faculty',
            description: 'Leave after 2 courses due to a complex mathematical base and lack of programming.'
        },
        {
            startDate: 2018,
            endDate: 2022,
            position: 'WEB-PROGRAMMING AND COMPUTER DESIGN',
            company: 'BSU, Faculty of Social and Cultural Communication',
            description: 'Last year of education student at the time of 2022.'
        }
    ]



    return (



        <div className="experience-education">
            <Experience works={works} key='works'/>
            <Education educations={education} key='educations'/>
        </div>
    )
}

export default Timeline
