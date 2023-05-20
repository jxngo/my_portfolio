import React from 'react'
import styled from '@emotion/styled';

function ProjectItem({image, name}) {
  const ProjectItem = styled.div `
    border-radius: 20px;
    width: 450px;
    height: 400px;
    margin: 40px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    
    h1 {
      font-size: 25px;
      font-family: Helvetica, Arial, sans-serif;
    }

    .bgImage { 
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    &:hover {
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
      transition: 0.3s ease-in;
      cursor: pointer;
    }
  `
  return (
    <ProjectItem className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage">
            <h1>{name}</h1>
        </div>
    </ProjectItem>
  )
}

export default ProjectItem