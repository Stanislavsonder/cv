import React, {FC} from 'react'
import {ExperienceType} from "./Timeline";

type EducationProps = {
    works: ExperienceType[]
}
const Experience:FC<EducationProps> = ({ works }) => {

    return (
        <section className="experience">
            <h2>Commercial Experience</h2>
            {works.map(element =>
                <section key={element.position}>
                    <div className="experience-education-date">
                        <p>{element.startDate}</p>
                        <p>{element.endDate}</p>
                    </div>
                    <div className="experience-education-info">
                        <h4>{element.position}</h4>
                        <h5>at {element.company}</h5>
                        <p>{element.description}</p>
                    </div>
                </section>
            )}
        </section>
    )
}

export default Experience