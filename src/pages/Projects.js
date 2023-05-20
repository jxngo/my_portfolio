import React from 'react';
import styled from '@emotion/styled';
import ProjectItem from '../components/ProjectItem';
import {ProjectList} from '../helpers/ProjectList';

// import image_name from '../assets/image_name.jpg'

function Projects() {
  
  const H1 = styled.h1 `
    color: #33ff33;
    font-size: 130px;
    padding-right: 43%;
    font-family: Helvetica, Arial, sans-serif;
  `
  const FlexContainer = styled.div `
    display:flex;
  `
  const FlexChild = styled.div `
    flex: 1;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
  `
  const Header = styled.h2 `
    font-size: 50px;
    text-decoration: underline;
  `
  const ProjectContainer = styled.div `
    padding-left: 150px;

  `

  return (
    <div>
      <H1>{'>'}Projects</H1>
      <FlexContainer>
        <FlexChild>
          <Header>Web Development</Header>
          <ProjectContainer>
            {ProjectList.map((project) => {
              return <ProjectItem name={project.name} image={project.image}/>;
            })}
          </ProjectContainer>
        </FlexChild>

        <FlexChild>
          <Header>Audio Development</Header>
          <ProjectContainer>
            <ProjectItem name=".."></ProjectItem>
            <ProjectItem name=".."></ProjectItem>
          </ProjectContainer>
        </FlexChild>
      </FlexContainer>
    </div>
  )
}

export default Projects