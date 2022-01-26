import React, {FC} from 'react'
import {ExperienceType} from "./Timeline";

type EducationProps = {
    educations: ExperienceType[]
}
const Education:FC<EducationProps> = ({ educations }) => {

    return (
        <section className="experience">
            <h2>Education</h2>
            {educations.map(element =>
                <section key={element.company}>
                    <div className="experience-education-date">
                        <p>{element.startDate}</p>
                        <p>{element.endDate}</p>
                    </div>
                    <div className="experience-education-info">
                        <h4>{element.position}</h4>
                        <h5>in {element.company}</h5>
                        <p>{element.description}</p>
                    </div>
                </section>
            )}
        </section>
    )
}

export default Education