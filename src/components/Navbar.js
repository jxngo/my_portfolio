import React from 'react'
import styled from "@emotion/styled";
import speaker from '../assets/speaker.png';
import Github_logo from '../assets/social-icons/github.svg';
import Linkedin_logo from '../assets/social-icons/linkedin.svg';
import Instagram_logo from '../assets/social-icons/instagram.svg';
import Spotify_logo from '../assets/social-icons/spotify.svg';

function Navbar() {
  const NavContainer = styled.div `
    margin-top: 3rem;
    font-family: Satoshi;
    width: 58rem;
  `
  const SpeakerDiv = styled.div`
    img {
      margin-top: 5rem;
      width: 50rem;
      
    }
  `
  const FlexContainer = styled.div `
      display: flex;
      
  `
  const ButtonDiv = styled.div`
      margin-top: 2rem;
      margin-left: 3rem;
      flex: 1;
      text {
        font-size: 1.8rem;
        font-family: Satoshi;
      }
      button {
        box-shadow: 0px -2px 5px 2px #1c1c1c;
        margin-top: 1.5rem;
        width: 13rem; 
        height: 13rem;
        border-radius: 10%;
        background-color: #AAB7BF;
        border: none;
      }
      span {
        height: 11rem;
        width: 11rem;
        background: rgb(170,183,191);
        background: linear-gradient(180deg, rgba(170,183,191,1) 0%, rgba(153,164,171,1) 68%, rgba(212,219,223,1) 100%);
        border-radius: 50%;
        display: inline-block;
        border: 0.01rem solid #bbc5cb;
      }
    `
  const SocialDiv = styled.div`
      flex: 1;
      margin-top: 3rem;
      div {
        margin-top: 2rem;
        margin-left: 4rem;
        width: 32.8rem;
        height: 8.1rem;
        border: 0.1rem solid #1c1c1c;
        border-radius: 1rem;
        position: relative;
        box-shadow: 0px -2px 2px 1px #1c1c1c;
        background-color: #454545;
      }
      button {
        margin: 0rem 0.1rem;
        width: 8rem;
        height: 8rem;
        border-radius: 10%;
        background-color: #5a7b95;
        border: 1px solid #888;
      }
      span {
        height: 6rem;
        width: 6rem;
        background: rgb(81,110,134);
        background: linear-gradient(180deg, rgba(81,110,134,1) 0%, rgba(139,162,180,1) 68%, rgba(193,205,215,1) 100%);
        border-radius: 50%;
        display: inline-block;
        border: 0.01rem solid #98adbd;
        
      }
      a {
        background-color: #5a7b95;
        
      }
      img {
        
        width: 4rem;
        border-radius: 50%;
      }
      ul {
        display: flex;
        justify-content: space-between;
        margin-right: 2rem;
      }
      li {
        display: inline;
        padding-left: 4rem;
      }
    `

    const ButtonsDiv = styled.div `
      margin-top: 5rem;
      display: flex;
      justify-content: space-evenly;
      width: 55rem;
      margin-left: 2rem;
      text{
        font-size: 1.8rem;
        font-family: Satoshi;
        @media (min-width: 425px) {
          font-size: 2.5rem; 
        }
      }
      button {
        margin-top: 2rem;  
        border: none;
        border-radius: 50%;
        padding: 1rem;
      }
      a{
        color: transparent;
        display: inline-block;
        border-radius: 50%;
        padding: 3rem;
      }
    `
    const Button1 = styled.button`
    background: #Ed8008;
    box-shadow: 3px -3px 5px 1px #1c1c1c;
    a {
      background: #Ed8008;
    }
  `
  const Button2 = styled.button`
    background: #ED3F1C;
      box-shadow: 3px -1px 5px 2px #1c1c1c;
      a {
        background: #ED3F1C;
      }
    `
  const Button3 = styled.button`
      background: #BF1B1B;
      box-shadow: 0px -4px 5px 2px #1c1c1c;
      a {
        background: #BF1B1B;
      }
    `
  const Button4 = styled.button`
      background: #736B1E;
      box-shadow: -3px -3px 5px 2px #1c1c1c;
      a {
        background: #736B1E;
      }
    `
  const Button5 = styled.button`
      box-shadow: -3px -3px 5px 1px #1c1c1c;
      background: #736356;
      a {
        background: #736356;
      }
    `

  return (
    <NavContainer>
      <SpeakerDiv>
        <img src={speaker} alt="speaker"></img>
      </SpeakerDiv>
      <ButtonsDiv>
        <div>
          <text>ABOUT</text>
          <Button1><a href="#about"> </a></Button1>
        </div>
        <div>
          <text>SKILLS</text>
          <Button2><a href="#skills"> </a></Button2>
        </div>
        <div>
          <text>PROJECTS</text>
          <Button3><a href="#projects"> </a></Button3>
        </div>
        <div>
          <text>WORK</text>
          <Button4><a href="#experiences"> </a></Button4>
        </div>
        <div>
        <text>CONTACT</text>
        <Button5><a href="#contact"> </a></Button5>
        </div>
      </ButtonsDiv>
      
      <FlexContainer>
        <SocialDiv>
          <ul>
            <li> <img src={Github_logo} alt='github'></img></li>
            <li> <img src={Linkedin_logo} alt='linkedin'></img></li>
            <li> <img src={Instagram_logo} alt='instagram'></img></li>
            <li> <img src={Spotify_logo} alt='spotify'></img></li>
          </ul>
          <div>

            <button>
              <a href="https://github.com/jxngo" target="_blank" rel="noopener noreferrer"><span></span></a>
            </button>
            <button>
              <a href="https://www.linkedin.com/in/johnnyhngo/" target="_blank" rel="noopener noreferrer"><span></span></a>
            </button>
            <button>
              <a href="https://www.instagram.com/jzngo/" target="_blank" rel="noopener noreferrer"><span></span></a>
            </button>
            <button>
              <a href="https://open.spotify.com/user/jzngo?si=b23d3566f7184ced" target="_blank" rel="noopener noreferrer"><span></span></a>
            </button>
          </div>

        </SocialDiv>
        <ButtonDiv>
          <div>
            <text>DL CV</text>
            <a href="/resume/JNResume.pdf" download>
              <button>
                <span></span>
              </button>
            </a>
          </div>
        </ButtonDiv>
      </FlexContainer>
    </NavContainer>
  )
}

export default Navbar