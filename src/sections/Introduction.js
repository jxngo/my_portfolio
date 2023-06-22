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
        padding-left: 7rem;
    }
    h3 {
        color: #372E2D;
        font-size: 1rem;
        font-family: Helvetica, Arial, sans-serif;
        padding-left: 5rem;
      }
    p {
      margin-top: 2rem;
      font-size: 0.7rem;
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
      box-shadow: 0px -2px 1px 2px #1c1c1c;
      margin-top: 3rem;
      width: 15rem;
      height: 15rem;
      border-radius: 10%;
      background-color: #AAB7BF;
      border: none;
      
    }
    span {
      height: 13rem;
      width: 13rem;
      background: linear-gradient(#99a4ab 65%, #d4dbdf);
      border-radius: 50%;
      display: inline-block;
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
              <span></span>
            </button>
          </a>
        </ButtonDiv>
       </IntroDiv>
       <p>Download CV</p>
     
     </IntroContainer>
    
  )
}

export default Introduction