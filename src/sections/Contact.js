import React from 'react'
import styled from '@emotion/styled';
import Github_logo from '../assets/github.svg';
import Linkedin_logo from '../assets/linkedin.svg';
import Instagram_logo from '../assets/instagram.svg';
import Spotify_logo from '../assets/spotify.svg';


function Contact() {
   const ContactContainer = styled.div `
    text-align: left;
    h1 {
        font-size: 10rem;
        font-family: Helvetica, Arial, sans-serif;
        padding-left: 3rem;
        margin-bottom: 3rem;
        color: #736356;
    }

    h2 {
        color:#4b4342;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 4rem;
        width: 50rem;
        margin-left: 3rem;
        
    }
      strong {
         color: #4b4342;
         font-size: 3rem;
         font-family: Helvetica, Arial, sans-serif;
         padding-left: 1rem;
         
         text-decoration: none;
      }
      a {
        
        padding-left: 2rem;
      }
      img {
        width: 4.1rem;
      }
   `
  return (
    <ContactContainer>
        <h1>{'>'}Contact</h1>
        <h2>Email/
            <strong>johnnyhoangngo@gmail.com</strong>
        </h2>
        <h2>Social Media/
        <a href="https://github.com/jxngo" target="_blank" rel="noopener noreferrer"><img src={Github_logo} alt='github'></img></a>
        <a href="https://www.linkedin.com/in/johnnyhngo/" target="_blank" rel="noopener noreferrer"><img src={Linkedin_logo} alt='linkedin'></img></a>
        <a href="https://www.instagram.com/jzngo/" target="_blank" rel="noopener noreferrer"><img src={Instagram_logo} alt='instagram'></img></a>
        <a href="https://open.spotify.com/user/jzngo?si=b23d3566f7184ced" target="_blank" rel="noopener noreferrer"><img src={Spotify_logo} alt='spotify'></img></a>
        </h2>
        
    </ContactContainer>
  )
}

export default Contact