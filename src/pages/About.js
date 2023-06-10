import React from 'react'
import styled from "@emotion/styled";
import Socialbar from '../components/Socialbar';


function About() {
  
  const H1 = styled.h1 `
    padding-left: 7rem;
    color: #33ff33;
    font-size: 11rem;
    margin-bottom: 5rem;
    font-family: Helvetica, Arial, sans-serif;
    width: 2rem;

    @media (min-width: 1180px) {
      font-size: 8.125rem;
    }
  `
  const H2 = styled.h2 `
    width: 30rem;
    padding-left: 0rem;
    color: #33ff33;
    font-size: 5rem;
    font-family: Helvetica, Arial, sans-serif;
  `

  const Prompt = styled.p `
    padding-left: 7rem;
    width: 60rem;
    text-align: left;
    font-size: 3rem;
    font-family: Helvetica, Arial, sans-serif;
    color: white;

    @media (min-width: 1180px) {
      width: 90rem;
      font-size: 1.875rem;
    }
  `

  const SkillDiv = styled.div `
    body{
      margin-left: 7rem;
      font-family: Helvetica, Arial, sans-serif;
      color: white;
      font-size: 1.9rem;
    }
    
    text-align: left;
    @media (min-width: 1180px) {
      display: fixed;
    }

    progress {
      padding-left: 7rem;
      display: block;
      padding-bottom: 3rem;
      padding-top: 2rem;
    }
    progress::-webkit-progress-bar {
      height: 0.2rem;
      width: 50rem;
    }
    progress::-webkit-progress-value {
      background-color: white;
      border-radius: 3px; 
    }
  `
  return (
    <div>
      <H1>{'>'}About</H1> 
        <Prompt className='prompt'>
          My name is <b>Johnny Ngo</b>. I'm a Vietnamese Software Engineer
          currently based in Orlando, Florida. I graduated with a Bachelor of Science in Computer Science 
          from the University of Central Florida.  
        </Prompt>
        
        <Prompt>
          Throughout my academic years, I have worked on a multitude of software development projects. One notable achievement 
          was the creation of an award-winning computer science learning tool specifically designed for students studying Computer Science
          at the University of Central Florida. I have worked on different projects involving front-end and back-end 
          development. In addition, I led a team of five undergraduate researchers in a Computer Science
          research project focused on concurrent algorithmic study. 
        </Prompt>

        <Prompt>
          In my free time, I love to play competitive badminton as a way to stay active. I engage in various creative pursuits such as art, fashion, and music. 
          My passion in music and technology allows me to create electronic ambient music through coding. 
          I enjoy playing my classical guitar, collecting vinyl records, and curating playlists! 
        </Prompt>
        <H2>{'>'}Skills</H2>
        <SkillDiv>
          
          <div>
            <body>
              Languages: Java | JavaScript
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
        </SkillDiv>
        

        <Socialbar></Socialbar>
    </div>
    
  )
}

export default About