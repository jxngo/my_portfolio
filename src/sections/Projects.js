import React from 'react';
import styled from '@emotion/styled';


// import image_name from '../assets/image_name.jpg'

function Projects() {
  const ProjectsContainer = styled.div`
    
    h1 {
      text-align: left;
      color: #BF1B1B;
      font-size: 10em;
      font-family: Helvetica, Arial, sans-serif;
      padding-left: 3rem;
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 5rem;
      color:#4b4342;
      width: 46rem;
      margin-left: 7rem;
    }
  `

  const FlexContainer = styled.div `
    @media (min-width: 1180px) {
      display:flex;
    }
  `
  const FlexChild = styled.div `
    @media (min-width: 1180px) {
      flex: 1;
    } 
    color: white;
    font-family: Helvetica, Arial, sans-serif;
  `
  const ProjectContainer = styled.div `
  
  ` 

  return (
    <ProjectsContainer>
      <h1>{'>'}Projects</h1>
      <FlexContainer>
        <FlexChild>
          <h2>Web</h2>
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