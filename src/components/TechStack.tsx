import React, {FC} from 'react'
type TechStackProps = {
    technologies: string[]
}

const TechStack:FC<TechStackProps> = ({ technologies }) => (
    <div className="tech-stack">
        <h2>Tech stack</h2>
        <p>{technologies.map(element => <span key={element+'-stack'}>{element}</span>)}</p>
    </div>
)
export default TechStack