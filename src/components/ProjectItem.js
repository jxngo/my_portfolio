import React from 'react'
import styled from '@emotion/styled';

function ProjectItem({image, name, description, technology}) {
  const ProjectItem = styled.div `
    width: 45rem;
    height: 25rem;
    padding-bottom: 12rem;
    margin-bottom: 10rem;
    
    h1 {
      font-size: 2rem;
      padding-left: 1rem;
      font-family: Helvetica, Arial, sans-serif;
    }

    .bgImage { 
        padding-right: 1rem;
        width: 45rem;
        height: 30rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media (min-width: 1180px) {
      margin-left: -7rem;
    }
  `
  const InfoDiv = styled.div `
    padding-top: 1rem;
    h3 {
      font-size: 1.3rem;
      font-family: Helvetica, Arial, sans-serif;
    }
    body {
      padding-bottom: 1rem;
      font-size: 1.3rem;
      font-family: Helvetica, Arial, sans-serif;
    }
  
  `
  return (
    <ProjectItem className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"></div>
        <InfoDiv>
          <h1>{name}</h1>
          <h3>{technology}</h3>
          <body>{description}</body>
        </InfoDiv>
    </ProjectItem>
  )
}

export default ProjectItem