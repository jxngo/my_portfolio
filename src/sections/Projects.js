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
      
      font-size: 5rem;
      color:#4b4342;
      width: 46rem;
      margin-left: 7rem;
      @media screen and (min-width: 1440px) and (max-width: 2559px){
       font-size: 6rem;
       margin-left: 16rem;
        width: 70rem;
      }
    }
  `

  const FlexContainer = styled.div `
    @media screen and (min-width: 1440px) and (max-width: 2559px){
      
    }
  `
  const FlexChild = styled.div `
    @media screen and (min-width: 1440px) and (max-width: 2559px){
        
    }
    color: white;
    font-family: Satoshi;
  `
  const ProjectContainer = styled.div `
  
  ` 

  return (
    <ProjectsContainer>
      <h1>{'>'}Projects</h1>
      <FlexContainer>
        <FlexChild>
          <h2>Web</h2>
          <Slider></Slider>
          <ProjectContainer>
          </ProjectContainer>
        </FlexChild>
        <FlexChild>
          <h2>Audio & Visual</h2>
        </FlexChild>
      </FlexContainer>
    </ProjectsContainer>
  )
}

export default Projects