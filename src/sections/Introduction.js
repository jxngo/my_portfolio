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
        padding-left: 3rem;
    }
    h3 {
        color: #372E2D;
        font-size: 1rem;
        font-family: Helvetica, Arial, sans-serif;
        padding-left: 3rem;
      }
    p {
      margin-top: 2rem;
      font-size: 0.4rem;
      font-family: Akzidenz Grotesk, Arial, sans-serif;
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
    button {
      margin-top: 3rem;
      width: 15rem;
      height: 15rem;
      border-radius: 10%;
      background-color: #AAB7BF;
      border: none;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
  `
  const IntroDiv = styled.div `
    text-align: left;
  `
  const ButtonDiv = styled.div `
    text-align: center;
  `

  return (
     <IntroContainer>
       <img src={speaker} alt="speaker"></img>
       <IntroDiv>
        <h1>Hi! I'm Johnny Ngo</h1>
        <h3>Software Engineer | Audio & Visual</h3>
        <ButtonDiv>
          <a href="/resume/JNResume.pdf" download>
            <button>
            </button>
          </a>
        </ButtonDiv>
        
       </IntroDiv>
       <p>Download CV</p>
     
     </IntroContainer>
    
  )
}

export default Introduction