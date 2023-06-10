import React from 'react'
import styled from '@emotion/styled';

function ProjectItem({image, name, description, technology}) {
  const ProjectItem = styled.div `
    border-radius: 1.25rem;
    width: 35rem;
    height: 25rem;
    padding-bottom: 10rem;
    margin-bottom: 10rem;
    
    
    h1 {
      font-size: 3rem;
      font-family: Helvetica, Arial, sans-serif;
    }

    .bgImage { 
        width: 35rem;
        height: 25rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
  `
  const InfoDiv = styled.div `
    padding-top: 0rem;
    h3 {
      font-size: 1.8rem;
      font-family: Helvetica, Arial, sans-serif;
    }
    body {
      padding-bottom: 2rem;
      font-size: 1.5rem;
      font-family: Helvetica, Arial, sans-serif;
    }
  
  `
  return (
    <ProjectItem className='projectItem'>
        <h1>{name}</h1>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"></div>
        <InfoDiv>
          <h3>{technology}</h3>
          <body>{description}</body>
          
        </InfoDiv>
    </ProjectItem>
  )
}

export default ProjectItem