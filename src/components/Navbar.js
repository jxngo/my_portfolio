import React from 'react'
import {Link} from "react-router-dom";
import "../styles/Navbar.css"



function Navbar() {

  return (
    <div className="navbar">
        <div>
            <Link to="/"> About/</Link>
            <Link to="/projects"> Projects/ </Link>
            <Link to="/experiences"> Experiences/ </Link>
        </div>

    </div>
  )
}

export default Navbar