import React from 'react'
import styled from "@emotion/styled";

function Navbar() {



  const NavContainer = styled.div `
    
  `
  
  const NavBar = styled.div `
    padding-left: 1.5rem;
    ul {
      list-style-type: none;
      display: flex;
      
    }
    li {
      padding: 2rem;
    }
    
    button {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
      border: none;
      border-radius: 50%;
      padding: 0;
      margin: 4px 2px;
    }

    a{
      color: transparent;
      display: inline-block;
      
      border-radius: 50%;
      padding: 3rem;
      
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
          <li><Button1><a href="#about">A</a></Button1></li>
          <li><Button2><a href="#skills">A</a></Button2></li>
          <li><Button3><a href="#projects">A</a></Button3></li>
          <li><Button4><a href="#experiences">A</a></Button4></li>
          <li><Button5><a href="#contact">A</a></Button5></li>
        </ul>
      </NavBar>
    </NavContainer>
  )
}

export default Navbar