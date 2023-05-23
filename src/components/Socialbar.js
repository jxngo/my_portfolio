import React from 'react'
import {Link} from "react-router-dom";
import styled from '@emotion/styled';
import Email from './Email';

function Socialbar() {
  
   const Socialbar = styled.div `
      margin-top: -30px;

      h1 {
         color: white;
         font-family: Helvetica, Arial, sans-serif;
         font-size: 50px;
         padding-left: 60px;
      }
     
      a {
         color: white;
         font-size: 30px;
         font-family: Helvetica, Arial, sans-serif;
         padding-left: 60px;
         padding-bottom: 50px;
         text-decoration: none;
      }
      a:hover {
         color:#33ff33;
      }  
   `

  return (
    <Socialbar className="socialbar">
       <div>
        <h1>Email</h1>
        <Email label="johnnyhoangngo@gmail.com" mailto="mailto:johnnyhoangngo@gmail.com"></Email>
        <h1>Social Media</h1>
        <Link to="https://github.com/jxngo" target="_blank">{'>'}github</Link>
        <Link to="https://www.linkedin.com/in/johnnyhngo/" target="_blank">{'>'}linkedin</Link>
        <Link to="https://www.instagram.com/jzngo/" target="_blank">{'>'}instagram</Link>
       </div>
    </Socialbar>
  )
}

export default Socialbar