import React from 'react'
import styled from "@emotion/styled";
import speaker from '../assets/speaker.png';

function Introduction() {
  const IntroContainer = styled.div`
    padding-top: 5rem;
    h1 {
        color: #372E2D;
        font-size: 5rem;
        font-family: Helvetica, Arial, sans-serif;
        margin-bottom: 0;
    }
    h3 {
        color: #372E2D;
        font-size: 1.5rem;
        font-family: Helvetica, Arial, sans-serif;
      }
    
    img {
      border-radius: 50%;
      animation: rotation 10s infinite linear;
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }

  `
  const IntroDiv = styled.div `
    text-align: left;
    h1 {
      padding-left: 3rem;
    }
    h3 {
      padding-left: 3rem;
    }
    
  `


  return (
     <IntroContainer>
       <img src={speaker} alt="speaker"></img>
       <IntroDiv>
        <h1>Hi! I'm Johnny</h1>
        <h3>Software Engineer | Audio & Visual</h3>
       </IntroDiv>
     
     </IntroContainer>
    
  )
}

export default Introduction