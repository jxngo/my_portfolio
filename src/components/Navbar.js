import React from 'react'
import styled from "@emotion/styled";
import speaker from '../assets/speaker.png';

function Navbar() {
  const NavContainer = styled.div `
  img {
    margin-top: 3rem;
    width: 50rem;
  }
  `
  
  const NavBar = styled.div `

    ul {
      list-style-type: none;
      display: flex;    
    }
    li {
      padding: 1rem;
    }
    button {
      border: none;
      border-radius: 50%;
      padding: 1rem;
      margin-left: 1.2rem;
    }
    a{
      color: transparent;
      display: inline-block;
      border-radius: 50%;
      padding: 3rem;
    }
  `
    const LabelDiv = styled.div`
      margin-top: 4rem;
      ul {
        margin-right: 3rem;
      }
      li {
        width: 40%;
      }
      text{
        font-size: 1.5rem;
        font-family: Akzidenz Grotesk, Arial, sans-serif;
      }
    
    `
    const Button1 = styled.button`
      background: #Ed8008;
      box-shadow: 3px -3px 5px 1px #1c1c1c;
      a {
        background: #Ed8008;
      }
    `
    const Button2 = styled.button`
      background: #ED3F1C;
      box-shadow: 3px -1px 5px 2px #1c1c1c;
      a {
        background: #ED3F1C;
      }
    `
    const Button3 = styled.button`
      background: #BF1B1B;
      box-shadow: 0px -4px 5px 2px #1c1c1c;
      a {
        background: #BF1B1B;
      }
    `
    const Button4 = styled.button`
      background: #736B1E;
      box-shadow: -3px -3px 5px 2px #1c1c1c;
      a {
        background: #736B1E;
      }
    `
    const Button5 = styled.button`
      box-shadow: -3px -3px 5px 1px #1c1c1c;
      background: #736356;
      a {
        background: #736356;
      }
    `
    const ButtonDiv = styled.div `
    
    p {
      font-size: 0.6rem;
      font-family: Akzidenz Grotesk, Arial, sans-serif;
    }
    
    button {
      box-shadow: 0px -2px 5px 2px #1c1c1c;
      margin-top: 1.5rem;
      width: 13rem;
      height: 13rem;
      border-radius: 10%;
      background-color: #AAB7BF;
      border: none;
      
    }
    span {
      height: 11rem;
      width: 11rem;
      background: linear-gradient(#99a4ab 65%, #d4dbdf);
      border-radius: 50%;
      display: inline-block;
    }
  `
  return (
    <NavContainer>
      <img src={speaker} alt="speaker"></img>
      <NavBar>
      <LabelDiv>
          <ul>
            <li><text>About</text></li>
            <li><text>Skills</text></li>
            <li><text>Projects</text></li>
            <li><text>Work</text></li>
            <li><text>Contact</text></li>
          </ul>
        </LabelDiv>
        <ul>
          <li><Button1><a href="#about"> </a></Button1></li>
          <li><Button2><a href="#skills"> </a></Button2></li>
          <li><Button3><a href="#projects"> </a></Button3></li>
          <li><Button4><a href="#experiences"> </a></Button4></li>
          <li><Button5><a href="#contact"> </a></Button5></li>
        </ul>
      </NavBar>
      <ButtonDiv>
          <p>Download CV</p>
          <a href="/resume/JNResume.pdf" download>
            <button>
              <span></span>
            </button>
          </a>
        </ButtonDiv>
    </NavContainer>
  )
}

export default Navbar