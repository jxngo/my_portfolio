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
          In my free time, I engage in various creative pursuits such as art, fashion, and music. 
          My passion in music and technology allows me to create electronic ambient music through coding. 
          I enjoy playing my classical guitar, collecting vinyl records, and making playlists! 
        </Prompt>
       
        <Socialbar></Socialbar>
    </div>
    
  )
}

export default About