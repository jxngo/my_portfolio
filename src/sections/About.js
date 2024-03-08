import React from 'react'
import styled from "@emotion/styled";

function About() {
  const AboutContainer = styled.div`
    margin-top: 10rem;
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
      width: 54rem;
      @media screen and (min-width: 1440px) and (max-width: 2559px){
          width: 100rem;
      }
    }
  `
  
  return (
     <AboutContainer>
      <h1>{'>'}About</h1>
      <div>
        <p>
          My name is <b>Johnny Ngo</b>, I'm a Vietnamese Software Engineer
          based in Orlando, Florida. I hold a Bachelor of Science in Computer Science 
          from University of Central Florida.</p>
        <p>
          Throughout my academic journey, I worked on a multitude of software development projects. One notable achievement 
          was the creation of an award-winning computer science learning tool for UCF students.
          My experience spans both front-end and back-end 
          development. In addition I've also led a team of five undergraduate researchers in a concurrent algorithmic research. 
        </p>
        <p>
          In my free time, I love to play competitive badminton as a way to keep myself stay active and energized.
          Exploring various creative outlets such as art, fashion, and music brings me content. 
          I enjoy sewing, DJing, playing classical guitar, collecting vinyl records, and curating playlists.
        </p>
        <p>
          I am a big advocate in the value of continuous learning. Each new day I strive to learn even if it's small or little.
          My beliefs in learning extends my curiosity in exploring new technologies.
          Recently I've dabbled in data analysis such as learning fundamentals of showing a story behind data by utilizing Tableau. Currently, I am learning about cloud computing and Infrastructure as Code (IaC). 
        </p>
        <p>
        My passion for music and technology led to my most recent and viral personal project, Pokify. Pokify uses SpotifyAPI to grab user's top 6 artists and pair them with corresponding pokemon types with use of AI tools.
        </p>
      </div>
     </AboutContainer>
    
  )
}

export default About