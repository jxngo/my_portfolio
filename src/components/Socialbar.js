import React from 'react'
import {Link} from "react-router-dom";
import styled from '@emotion/styled';
import "../styles/Socialbar.css"

function Socialbar() {
  
    const Socialbar = styled.div `
        font-size: 30px;
        font-family: Helvetica, Arial, sans-serif;
        display: flex;
        width: 50%;
        padding-left: 28%;
        justify-content: space-between;
     `

  return (
    <div className="socialbar">
       <div>
        <Link to="https://github.com/jxngo" target="_blank">{'>'}github</Link>
        <Link to="https://www.linkedin.com/in/johnnyhngo/" target="_blank">{'>'}linkedin</Link>
        <Link to="https://www.instagram.com/jzngo/" target="_blank">{'>'}instagram</Link>
       </div>
    </div>
  )
}

export default Socialbar