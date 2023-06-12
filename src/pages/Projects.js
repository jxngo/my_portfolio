import React from 'react';
import styled from '@emotion/styled';
import ProjectItem from '../components/ProjectItem';
import {ProjectList} from '../helpers/ProjectList';

// import image_name from '../assets/image_name.jpg'

function Projects() {
  
  const H1 = styled.h1 `
    color: #33ff33;
    font-size: 9.1rem;
    padding-left: 7rem;
    margin-bottom: 5rem;
    padding-top: 2rem;
    width: 2rem;
    font-family: Helvetica, Arial, sans-serif;
    @media (min-width: 1180px) {
      font-size: 8.125rem;
      padding-top: 0rem;
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
  const Header = styled.h2 `
    font-size: 4rem;
    padding-left: 23rem;
    width: 30rem;
    @media (min-width: 1180px) {
      padding-left: 11rem;
    }
  `
  const ProjectContainer = styled.div `
    padding-left: 15rem;
    @media (min-width: 1180px) {
      padding-left: 11rem;
    }
  `
  return (
    <div>
      <H1>{'>'}Projects</H1>
      <FlexContainer>
        <FlexChild>
          <Header>Web</Header>
          <ProjectContainer>
            {ProjectList.map((project) => {
              return <ProjectItem name={project.name} image={project.image} description={project.description} technology={project.technology}/>;
            })}
          </ProjectContainer>
        </FlexChild>

        <FlexChild>
          <Header>Audio & Visual</Header>
          <ProjectContainer>
            <ProjectItem name="Sine Wave Visualization" description={"TBA"} technology={"sclang | web audio API | webGL API | supercollider"}></ProjectItem>
          </ProjectContainer>
        </FlexChild>
      </FlexContainer>
    </div>
  )
}

export default Projects