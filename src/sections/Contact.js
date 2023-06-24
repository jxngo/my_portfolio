import React from 'react'
import styled from '@emotion/styled';



function Contact() {
   const ContactContainer = styled.div `
    text-align: left;
    h1 {
        font-size: 10rem;
        font-family: Satoshi;
        padding-left: 3rem;
        margin-bottom: 3rem;
        color: #736356;
        text-shadow: 2px 2px #000000;
    }
    h2 {
        color:#4b4342;
        font-family: Satoshi;
        font-size: 3rem;
        width: 20rem;
        margin-left: 3rem;
    }
      strong {
         color: #4b4342;
         font-size: 3rem;
         font-family: Satoshi;
         padding-left: 1rem;
         text-decoration: none;
      }  
   `
  return (
    <ContactContainer>
        <h1>{'>'}Contact</h1>
        <h2>Email/
            <strong>johnnyhoangngo@gmail.com</strong>
        </h2>    
    </ContactContainer>
  )
}

export default Contact