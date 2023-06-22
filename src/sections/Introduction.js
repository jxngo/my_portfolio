import React from 'react'
import styled from "@emotion/styled";

function Introduction() {
  const IntroContainer = styled.div`
    padding-top: 5rem;
    h1 {
        color: #372E2D;
        font-size: 4rem;
        font-family: Helvetica, Arial, sans-serif;
        margin-bottom: 0;
        padding-left: 5rem;
    }
    h3 {
        color: #372E2D;
        font-size: 0.7rem;
        font-family: Helvetica, Arial, sans-serif;
        padding-left: 5rem;
      }
  `
  const IntroDiv = styled.div `
    text-align: left;
  `

  return (
     <IntroContainer>
       <IntroDiv>
       </IntroDiv>
       
     </IntroContainer>
    
  )
}

export default Introduction