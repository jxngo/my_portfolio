import React from 'react'
import styled from "@emotion/styled";

function Navbar() {
  const NavContainer = styled.div `
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
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
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
      ul {
        display: flex;
        margin-right: 2.8rem;
      }
      li {
        width: 50%;
        padding: 0rem;
      }
      text{
        font-size: 1.1rem;
        font-family: Akzidenz Grotesk, Arial, sans-serif;
      }
    
    `
    const Button1 = styled.button`
      background: #Ed8008;
      a {
        background: #Ed8008;
      }
    `
    const Button2 = styled.button`
      background: #ED3F1C;
      a {
        background: #ED3F1C;
      }
    `
    const Button3 = styled.button`
      background: #BF1B1B;
      a {
        background: #BF1B1B;
      }
    `
    const Button4 = styled.button`
      background: #736B1E;
      a {
        background: #736B1E;
      }
    `
    const Button5 = styled.button`
      background: #736356;
      a {
        background: #736356;
      }
    `


  return (
    <NavContainer>
      <NavBar>
        <ul>
          <li><Button1><a href="#about"> </a></Button1></li>
          <li><Button2><a href="#skills"> </a></Button2></li>
          <li><Button3><a href="#projects"> </a></Button3></li>
          <li><Button4><a href="#experiences"> </a></Button4></li>
          <li><Button5><a href="#contact"> </a></Button5></li>
        </ul>
        <LabelDiv>
          <ul>
            <li><text>About</text></li>
            <li><text>Skills</text></li>
            <li><text>Projects</text></li>
            <li><text>Work</text></li>
            <li><text>Contact</text></li>
          </ul>
        </LabelDiv>
      </NavBar>
    </NavContainer>
  )
}

export default Navbar