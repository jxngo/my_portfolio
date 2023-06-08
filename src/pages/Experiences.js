import React from 'react'
import styled from "@emotion/styled";

function Experiences() {
  const H1 = styled.h1 `
    color: #33ff33;
    font-size: 6rem;
    padding-left: 8rem;
    padding-top: 3rem;
    font-family: Helvetica, Arial, sans-serif;
    @media (min-width: 1180px) {
      font-size: 8rem;
      padding-right: 30rem;
      padding-top: 1rem;
      padding-left: 7rem;
    }
`



  return (
    <H1>{'>'}Experiences</H1>
  )
}

export default Experiences