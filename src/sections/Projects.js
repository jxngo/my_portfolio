import React from 'react';
import styled from '@emotion/styled';
import Slider from '../components/Slider';



function Projects() {
  const ProjectsContainer = styled.div`
    h1 {
      text-align: left;
      color: #BF1B1B;
      font-size: 10em;
      font-family: Satoshi;
      padding-left: 3rem;
      margin-bottom: 3rem;
      text-shadow: 2px 2px #000000;
    }

    h2 {
      font-size: 4rem;
      font-family: Satoshi;
      color:#4b4342;
      width: 46rem;
      margin-left: 7rem;
      a {
        text-decoration: none;
      }
      a:visited { text-decoration: none; color:#4b4342; }
      a:hover { color:#BF1B1B; }
      
      
      @media screen and (min-width: 1440px) and (max-width: 2559px){
        font-size: 6rem;
        margin-left: 16rem;
        width: 70rem;
      }
    }
    p {
      padding-left: 5rem;
      text-align: center;
      font-size: 2rem;
      font-family: Satoshi;
      color: #4b4342;
      width: 45rem;
      @media screen and (min-width: 1440px) and (max-width: 2559px){
          width: 70rem;
          padding-left: 17rem;
      }
  `

 

  return (
    <ProjectsContainer>
      <h1>{'>'}Projects</h1>
          <Slider></Slider>
    </ProjectsContainer>
  )
}

export default Projects