import React from 'react'
import {Link} from "react-router-dom";
import styled from "@emotion/styled";


function Navbar() {
  const NavBar = styled.div `
    margin-top: 30px;
    a {
      color: white;
      text-decoration: none;
      font-size: 40px;
      font-family: Helvetica, Arial, sans-serif;
    
    }

    a:hover {
      color:#33ff33;
    }
  `


  return (
    <NavBar className="navbar">
        <div>
            <Link to="/"> About/</Link>
            <Link to="/projects"> Projects/ </Link>
            <Link to="/experiences"> Experiences/ </Link>
        </div>
    </NavBar>
  )
}

export default Navbar