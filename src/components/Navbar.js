import React from 'react'
import {Link} from "react-router-dom";
import styled from "@emotion/styled";


function Navbar() {
  const NavBar = styled.div `
    position: absolute;
    left: 50rem;
    padding-right: 2rem;
    
    a {
      color: white;
      text-decoration: none;
      font-size: 3.5rem;
      font-family: Helvetica, Arial, sans-serif;
      display: flex;
    }
    a:hover {
      color:#33ff33;
    }

    @media (min-width: 1180px) {
      left: 80rem;
      a {
        font-size: 2.5rem;
      }
    }

  `
  return (
    <NavBar>
        <div>
            <Link to="/"> About/</Link>
            <Link to="/projects"> Projects/ </Link>
            <Link to="/experiences"> Experiences/ </Link>
        </div>
    </NavBar>
  )
}

export default Navbar