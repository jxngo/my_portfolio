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
    width: 2rem;
    font-family: Helvetica, Arial, sans-serif;
    @media (min-width: 1180px) {
      font-size: 8.125rem;
    }
  `
  const FlexContainer = styled.div `
    @media (min-width: 1180px) {
      display:flex;
    }

    p {
      text-align: left;
      padding-left: 24rem;
      width: 35rem;
      font-size: 1.2rem;
      @media (min-width: 1180px) {
        padding-left: 14rem;
      }
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
    font-size: 3.125rem;
    padding-left: 22rem;
    width: 30rem;
    @media (min-width: 1180px) {
      padding-left: 13rem;
    }
  `
  const ProjectContainer = styled.div `
    padding-left: 21rem;
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
          <p>Languages: Java, JavaScript, HTML/CSS, SQL</p>
          <p>Frameworks & Libraries: React.js, Node.js, Express.js, D3.js, Jest.js, Fork/Join(JUC), Recursive Action</p>
          <p>Tools: Git, MongoDB, Jira, Visual Studio Code</p>
          <ProjectContainer>
            {ProjectList.map((project) => {
              return <ProjectItem name={project.name} image={project.image}/>;
            })}
          </ProjectContainer>
        </FlexChild>

        <FlexChild>
          <Header>Audio & Visual</Header>
          <p>Languages: sclang</p>
          <p>API: Web Audio, WebGL</p>
          <p>Tools: SuperCollider(scsynth, scide) </p>
          
          <ProjectContainer>
            <ProjectItem name=".."></ProjectItem>
          </ProjectContainer>
        </FlexChild>
      </FlexContainer>
    </div>
  )
}

export default Projects