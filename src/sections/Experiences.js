import React from 'react'
import styled from "@emotion/styled";

function Experiences() {
  const ExperiencesContainer = styled.div `
    h1 {
      text-align: left;
      color: #736B1E;
      font-size: 8.5rem;
      font-family: Helvetica, Arial, sans-serif;
      padding-left: 3rem;
      margin-bottom: 3rem;
    }
    strong {
      font-size: 10rem;
    }
  
  `
    

  return (
    <ExperiencesContainer>
      <h1><strong>{'>'}</strong>Experiences</h1> 
    </ExperiencesContainer>
    
  )
}

export default Experiences