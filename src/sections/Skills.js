import React from 'react'
import styled from "@emotion/styled";

function Skills() {
  const SkillsContainer = styled.div`
    text-align: left;
    h1 {
        color: #ED3F1C;
        font-size: 10rem;
        font-family: Helvetica, Arial, sans-serif;
        padding-left: 3rem;
        margin-bottom: 3rem;
    }
  
  `
  const SkillsDiv = styled.div `
    body{
        padding-left: 3rem;
        font-family: Helvetica, Arial, sans-serif;
        color: #4b4342;
        font-size: 2rem;
    }
    
    @media (min-width: 1180px) {
        display: fixed;
    }

    progress {
        padding-left: 3rem;
        display: block;
        padding-bottom: 3rem;
        padding-top: 2rem;
    }
    progress::-webkit-progress-bar {
        height: 0.2rem;
        width: 56rem;
    }
    progress::-webkit-progress-value {
        background-color: #372E2D;
        border-radius: 3px; 
    }
`
  
  
  return (
    <SkillsContainer>
        <h1>{'>'}Skills</h1>
        <SkillsDiv>
        <div>
            <body>
              Languages: C | Java | JavaScript
            </body>
            <div>
             <progress value="100" max="100%" ></progress>
            </div>
            <body>
              Front-End: React | D3 | HTML | CSS
            </body>
            <div>
            <progress value="100" max="100%" ></progress>
            </div>
          </div>
          <div>
            <body>
              Databases: SQL | MongoDB
            </body>
            <div>
            <progress value="100" max="100%" ></progress>
            </div>
            <body>
              Backend: Express | Node | Git | Rest API
            </body>
            <div>
            <progress value="100" max="100%" ></progress>
            </div>
          </div>
          <div>
          </div>
        </SkillsDiv>
    </SkillsContainer>
  )
}

export default Skills