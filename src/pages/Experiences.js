import React from 'react'
import styled from "@emotion/styled";

function Experiences() {
  const H1 = styled.h1 `
    color: #33ff33;
    font-size: 6.2rem;
    padding-left: 7rem;
    padding-top: 5rem;
    padding-right: 45rem;
    font-family: Helvetica, Arial, sans-serif;
    
    @media (min-width: 1180px) {
      font-size: 8.125rem;
     
      padding-top: 0rem;
      padding-left: 7rem;
    }
`



  return (
    <H1>{'>'}Experiences</H1>
  )
}

export default Experiences