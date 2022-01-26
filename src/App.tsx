import React from 'react'
import './index.sass'
import TechStack from "./components/TechStack";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";

function App() {
  const techs = ['JavaScript', 'TypeScript', 'ReactJS', 'NodeJS', 'HTML5', 'CSS3', 'SASS', 'SCSS', 'ExtendScript', 'MERN', 'Webpack', 'Express', 'MongoDB', 'Mongoose', 'SQL', 'Git']

  return (
    <div className="App">
      <main>
        <div className="main-left">
          <header className="header">
            <div className="header__photo">
              <img src="./Me.png" alt="Stanislav Doronin" width="230" height="230"/>
            </div>
            <div className="squares">
              <div className="squares_blue"></div>
              <div className="squares_white">
                <h1>Stanislav Doronin</h1>
                <h2>JavaScript software engineer</h2>
                <p>Front-end, Back-end, Scripting JavaScript/TypeScript developer, with 2 years commercial experience of
                  ExtendScript production and some React experience.</p>
              </div>
            </div>
          </header>
          <div className="contacts">
            <ul>
              <li>
                <img src="./images/Birthday%20cake.svg" alt="Birthday cake" width="30" height="30"/>
                <h5>Date of Birth:</h5>
                <p>05/07/1997</p>
              </li>
              <li>
                <img src="./images/Languages.svg" alt="Birthday cake" width="30" height="30"/>
                <h5>Languages:</h5>
                <div>
                  <p>Russian native </p>
                  <p>Belarusian native </p>
                  <p>English B1-B2 </p>
                </div>
              </li>
              <li>
                <img src="./images/Location.png" alt="Location icon" width="30" height="30"/>
                <h5>Location:</h5>
                <p>Belarus, Minsk</p>
              </li>
              <li>
                <img src="./images/Mail.svg" alt="Email icon" width="30" height="30"/>
                <h5>Email:</h5>
                <p><a href="mailto:stanislavsonder@gmail.com" target="_blank" rel="noreferrer">stanislavsonder@gmail.com</a></p>
              </li>
              <li>
                <img src="./images/Telegram.svg" alt="Telegram icon" width="30" height="30"/>
                <h5>Telegram:</h5>
                <p><a href="https://t.me/stanisalvsonder" target="_blank"  rel="noreferrer">@Stanislavsonder</a></p>
              </li>
              <li>
                <img src="./images/Github.svg" alt="Github icon" width="30" height="30"/>
                <h5>Github:</h5>
                <p><a href="https://github.com/Stanislavsonder" target="_blank"  rel="noreferrer">Stanislavsonder</a></p>
              </li>
              <li>
                <img src="./images/Skype.png" alt="Skype icon" width="30" height="30"/>
                <h5>Skype:</h5>
                <p><a href="https://join.skype.com/invite/CDQw58rxb2P2" target="_blank"  rel="noreferrer">Stanislav Doronin</a></p>
              </li>
              <li>
                <img src="./images/Codewars.svg" alt="Codewars icon" width="30" height="30"/>
                <h5>Codewars:</h5>
                <p><a href="https://www.codewars.com/users/Stanislavsonder" target="_blank"  rel="noreferrer">Stanislavsonder</a></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-right">
          <Timeline key='timeline'/>
        </div>
      </main>
      <div className="skills-code">
        <Skills key='skills'/>
        <TechStack key='techstack' technologies={techs}/>
      </div>




     <footer>
        <div className="copy">Updated in January, 2022  <a href="https://github.com/Stanislavsonder"><img src="./images/Github.svg" alt="GitHub icon" width="50" height="50"/></a></div>
      </footer>

    </div>
  )
}

export default App
