import React from 'react'
import {Link} from "react-router-dom";
import styled from '@emotion/styled';


function Socialbar() {
  
   const Socialbar = styled.div `
      h1 {
         width: 34rem;
         padding-left: 1rem;
         margin-right: 25rem;
         color: #33ff33;
         font-size: 5rem;
         font-family: Helvetica, Arial, sans-serif;
      }

      h2 {
         color: white;
         font-family: Helvetica, Arial, sans-serif;
         font-size: 2.5rem;
         padding-left: 7rem;
         width: 50rem;
         text-align: left;
         display: absolute;
      }
     
      a {
         color: white;
         font-size: 2rem;
         font-family: Helvetica, Arial, sans-serif;
         padding-left: 2rem;
         padding-bottom: 3.125rem;
         text-decoration: none;
         
      }
      a:hover {
         color:#33ff33;
      }  
   `
  return (
    <Socialbar>
        <h1>{'>'}Contact</h1>
        <h2>Email/
            <a>johnnyhoangngo@gmail.com</a>
        </h2>
        <h2>Social Media/
            <Link to="https://github.com/jxngo" target="_blank">github</Link>
            <Link to="https://www.linkedin.com/in/johnnyhngo/" target="_blank">linkedin</Link>
            <Link to="https://www.instagram.com/jzngo/" target="_blank">instagram</Link>
            <Link to="https://open.spotify.com/user/jzngo?si=b23d3566f7184ced" target="_blank">spotify</Link>
        </h2>
    </Socialbar>
  )
}

export default Socialbar