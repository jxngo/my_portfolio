import React from 'react'
import styled from "@emotion/styled";

function Experiences() {
  const ExperiencesContainer = styled.div `
    h1 {
      text-align: left;
      color: #736B1E;
      font-size: 10rem;
      font-family: Satoshi;
      padding-left: 3rem;
      margin-bottom: 3rem;
      text-shadow: 2px 2px #000000;
    }
  `
  return (
    <ExperiencesContainer>
      <h1>{'>'}Work</h1> 
    </ExperiencesContainer>
  )
}

export default Experiences