import React from 'react'
import {Link} from "react-router-dom";
import styled from '@emotion/styled';
function Socialbar() {
  
   const Socialbar = styled.div `
        
     
      a {
         color: white;
         font-size: 30px;
         font-family: Helvetica, Arial, sans-serif;
         padding-left: 50px;
      }
      a:hover {
         color:#33ff33;
      }  
   `

  return (
    <Socialbar className="socialbar">
       <div>
        <Link to="https://github.com/jxngo" target="_blank">{'>'}github</Link>
        <Link to="https://www.linkedin.com/in/johnnyhngo/" target="_blank">{'>'}linkedin</Link>
        <Link to="https://www.instagram.com/jzngo/" target="_blank">{'>'}instagram</Link>
       </div>
    </Socialbar>
  )
}

export default Socialbar