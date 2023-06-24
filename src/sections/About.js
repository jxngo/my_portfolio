import React from 'react'
import styled from "@emotion/styled";

function About() {
  const AboutContainer = styled.div`
   
    text-align: left;
    h1 {
      margin-top: 2rem;
      color: #Ed8008;
      font-size: 10rem;
      font-family: Satoshi;
      padding-left: 3rem;
      margin-bottom: 3rem;
      text-shadow: 2px 2px #000000;
    }
    p {
      padding-left: 3rem;
      font-size: 3rem;
      font-family: Satoshi;
      color: #4b4342;
      width: 57rem;
    }
  `
  
  return (
     <AboutContainer>
      <h1>{'>'}About</h1>
      <div>
        <p>
          My name is <b>Johnny Ngo</b>, I'm a Vietnamese Software Engineer
          based in Orlando, Florida. I hold a Bachelor of Science in Computer Science 
          from the University of Central Florida.</p>
        <p>
          Throughout my academic journey, I worked on a multitude of software development projects. One notable achievement 
          was the creation of an award-winning computer science learning tool for UCF students.
          My experience spans both front-end and back-end 
          development. In addition I've also led a team of five undergraduate researchers in a concurrent algorithmic research. 
        </p>
        <p>
          In my free time, I love to play competitive badminton as a way to stay active.
          I engage in various creative pursuits such as art, fashion, and music. 
          My passion in music and technology allows me to create electronic ambient music through coding. 
          I enjoy playing my classical guitar, collecting vinyl records, and curating playlists.
        </p>
      </div>
     </AboutContainer>
    
  )
}

export default About