import React from 'react'
import styled from "@emotion/styled";

function Skills() {
  const SkillsContainer = styled.div`
    text-align: left;
    h1 {
        color: #ED3F1C;
        font-size: 10rem;
        font-family: Satoshi;
        padding-left: 3rem;
        margin-bottom: 3rem;
        text-shadow: 2px 2px #000000;
    }
  
  `
  const SkillsDiv = styled.div `
    body{
        padding-left: 3rem;
        font-family: Satoshi;
        color: #4b4342;
        font-size: 2rem;
        width: 55rem;
        @media screen and (min-width: 1440px) and (max-width: 2559px){
          font-size: 1.7rem;
          width: 50rem;
        }
    }
    @media screen and (min-width: 1440px) and (max-width: 2559px){
        display: flex; 
    }
    div {
      @media screen and (min-width: 1440px) and (max-width: 2559px){
         flex: 1; 
         width: 50rem;
      }
    }
    progress {
        padding-left: 3rem;
        display: block;
        padding-bottom: 3rem;
        padding-top: 2rem;
    }
    progress::-webkit-progress-bar {
        height: 0.2rem;
        width: 53rem;
        @media screen and (min-width: 1440px) and (max-width: 2559px){
          width: 45rem;
        }
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
              Languages: C | Java | JavaScript | Python | SQL | PHP
            </body>
            <div>
             <progress value="100" max="100%" ></progress>
            </div>
            <body>
              Frameworks: React | NodeJS | Express | Jest
            </body>
            <div>
            <progress value="100" max="100%" ></progress>
            </div>
          </div>
          <div>
            <body>
              Developer: Git | Jira | Postman | Tableau | Figma | MongoDB
            </body>
            <div>
            <progress value="100" max="100%" ></progress>
            </div>
            <body>
              Cloud Infrastructure: AWS (Lambda, EC2, SNS) | Terraform
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