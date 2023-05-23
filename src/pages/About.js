import React from 'react'
import styled from "@emotion/styled";
import Socialbar from '../components/Socialbar';
import Resume from '../components/Resume';



function About() {
  const H1 = styled.h1 `
    color: #33ff33;
    font-size: 130px;
    padding-right: 51.5%;
    margin-bottom: 35px;
    font-family: Helvetica, Arial, sans-serif;
  `
  

  const Prompt = styled.p `
    width: 80%;
    margin-left: 180px;
    text-align: justify;
    font-size: 30px;
    font-family: Helvetica, Arial, sans-serif;
    color: white;
  `

  const FlexContainer = styled.div `
    display: flex;

    h2 {
    color: #33ff33;
    font-size: 80px;
    font-family: Helvetica, Arial, sans-serif;
    }
  `
  const FlexChild = styled.div `
    flex: 1;
  `


  return (
    <div>
      <H1>{'>'}About</H1> 
        <Prompt className='prompt'>
          <b>Johnny Ngo</b>, a Vietnamese Software Engineer, was born in Garden City, 
          KS and based in Orlando, FL. He holds a Bachelor’s degree in Computer Science 
          from University of Central Florida.  
        </Prompt>
        
        <Prompt>
        Throughout his academic years, Johnny Ngo has worked on multitude of software development projects. One notable achievement 
        was the creation of an award-winning computer science learning tool specifically designed for students studying Computer Science
        at University of Central Florida. In addition, Johnny has worked on different projects involving front-end and back-end 
        development. Furthermore, he showcased his leadership abilities by leading a team of five undergraduate researchers in a Computer Science
        research project focused on concurrent algorithmic study. 
        </Prompt>

        <Prompt>
        During his leisure time, Johnny engages in creative pursuits such as art, fashion, and music. 
        His passion in music and technology allows him to enjoy playing his classical guitar, 
        collect vinyls records, and creating electronic ambient music through coding.</Prompt>

        <FlexContainer>
          <FlexChild>
            <Resume/>
          </FlexChild>

          <FlexChild>
            <h2>{'>'}Contact</h2>
            <Socialbar></Socialbar>
          </FlexChild>
        </FlexContainer>
            
       
    </div>
    
  )
}

export default About