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
  `
  const SpeakerDiv = styled.div`
    img {
      margin-top: 5rem;
      width: 50rem;
    }
  `
  const NavBar = styled.div `
    ul {
      list-style-type: none;
      display: flex; 
    }
    li {
      padding: 1rem;
    }
    button {
      border: none;
      border-radius: 50%;
      padding: 1rem;
      margin-left: 1.2rem;
    }
    a{
      color: transparent;
      display: inline-block;
      border-radius: 50%;
      padding: 3rem;
    }
  `
  const LabelDiv = styled.div`
    margin-top: 4rem; 
    ul {
      margin-left: 2.4rem;
      display: inline;
    }
    li {
      padding-right: 4.8rem;
      display: inline;
    }
    text{
      font-size: 1.9rem;
      font-family: Satoshi;
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
  const FlexContainer = styled.div `
      display: flex;
  `
  const ButtonDiv = styled.div`
      flex: 1;
      p {
        font-size: 1.8rem;
        font-family: Satoshi;
      }
      button {
        box-shadow: 0px -1px 5px 2px #1c1c1c;
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
        background: linear-gradient(#99a4ab 65%, #d4dbdf);
        border-radius: 50%;
        display: inline-block;
      }
    `
  const SocialDiv = styled.div`
      flex: 1;
      margin-top: 3rem;
      div {
        margin-top: 2.5rem;
        margin-left: 5rem;
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
        background-color: #315B7B;
        border: 1px solid #888;
      }
      span {
        height: 6rem;
        width: 6rem;
        background: linear-gradient(#2c516e 65%, #5a7b95);
        border-radius: 50%;
        display: inline-block;
      }
      a {
        background-color: #315B7B;
      }
      img {
        width: 4rem;
        border-radius: 50%;
      }
      ul {
        display: inline;
        margin-right: 1.8rem;
      }
      li {
        display: inline;
        padding-left: 4rem;
      }
    `
  return (
    <NavContainer>
      <SpeakerDiv>
        <img src={speaker} alt="speaker"></img>
      </SpeakerDiv>
      <NavBar>
        <LabelDiv>
          <ul>
            <li><text>About</text></li>
            <li><text>Skills</text></li>
            <li><text>Projects</text></li>
            <li><text>Work</text></li>
            <li><text>Contact</text></li>
          </ul>
        </LabelDiv>
        <div>
          <ul>
            <li><Button1><a href="#about"> </a></Button1></li>
            <li><Button2><a href="#skills"> </a></Button2></li>
            <li><Button3><a href="#projects"> </a></Button3></li>
            <li><Button4><a href="#experiences"> </a></Button4></li>
            <li><Button5><a href="#contact"> </a></Button5></li>
          </ul>
        </div>
      </NavBar>
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
            <p>Download CV</p>
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